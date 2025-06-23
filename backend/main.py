from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from service import generate_headline_subject_response
from ratelimiter import can_proceed
import requests, json, os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://outreach.gatara.org"],  # Set your frontend domain here in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

USED_USERS_FILE = "used_users.json"

def load_used_data():
    if not os.path.exists(USED_USERS_FILE):
        return {"emails": [], "names": [], "linkedins": []}
    with open(USED_USERS_FILE, "r") as f:
        return json.load(f)

def save_used_data(data):
    with open(USED_USERS_FILE, "w") as f:
        json.dump(data, f)

def is_user_used(full_name: str, email: str, linkedin: str) -> bool:
    used = load_used_data()
    return (
        email in used["emails"] or
        full_name in used["names"] or
        linkedin in used["linkedins"]
    )

def mark_user_used(full_name: str, email: str, linkedin: str):
    used = load_used_data()
    used["emails"].append(email)
    used["names"].append(full_name)
    used["linkedins"].append(linkedin)
    save_used_data(used)

@app.post("/submit/")
async def submit_lead(request: Request):
    data = await request.json()
    full_name = data.get("full_name")
    email = data.get("email")
    linkedin = data.get("linkedin")

    if not full_name or not email or not linkedin:
        raise HTTPException(status_code=400, detail="Missing required fields.")

    if is_user_used(full_name, email, linkedin):
        raise HTTPException(status_code=403, detail="❌ Sorry, you only have one shot.")

    # Mark user as used
    mark_user_used(full_name, email, linkedin)

    # Send to Google Sheet
    sheet_url = "https://script.google.com/macros/s/AKfycbzGpVnwbzr9cigy7BQeTeY9X7MInGMHtj7G_glQ-1SXGxLxhQHAFPkVNJUZ2FhdsU22/exec"
    try:
        response = requests.get(sheet_url, params={
            "full_name": full_name,
            "email": email,
            "linkedin": linkedin
        }, allow_redirects=True)
        if not response.ok:
            raise Exception("Sheet failed")
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error Submiting Data")

    return {"success": True}


@app.post("/ai-response/")
async def ai_response(request: Request):
    # Rate limit LLM requests# Rate limit LLM requests
    if not can_proceed():
        raise HTTPException(status_code=429, detail="⏳ Please wait a moment.")
    
    data = await request.json()
    email_content = data.get("email_content")
    target_audience = data.get("target_audience")
    tone_of_voice = data.get("tone_of_voice")
    main_pain = data.get("main_pain")    
    outcome = data.get("outcome")


    # Generate using LLM
    result = generate_headline_subject_response(email_content, target_audience, tone_of_voice, main_pain, outcome)

    return {"success": True, "result": result}