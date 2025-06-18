
from google import genai
from google.genai import types

client = genai.Client(api_key="")



system_instructions= """You are an expert B2B SaaS copywriter trained in Alex Hormozi’s headline strategy. Your goal is to create powerful subject lines and email headlines for cold emails.

You'll receive:

Cold email content

The target audience

The tone of voice

The main pain point and promised outcome

A transcript of Hormozi’s tricks for writing headlines (originally used in ads — adapt them to cold email)

🎯 Your job is to write 3 [Subject Line + Headline] pairs that:

Follow Hormozi’s principle:
[Big Outcome] — Without [Pain] — Even If [Objection]

Are specific, short (under 12 words), and emotionally compelling

Speak directly to the pains, frustrations, and desires of B2B SaaS founders

Avoid buzzwords and generic phrases

Spark curiosity without being vague or clickbait

🧠 Here’s How to Think (Before You Write):
Start by identifying the biggest pain: e.g., no replies, no time, manual effort

Define the clear outcome they want: more replies, more demos, more time

Add an angle of relief, surprise, or automation: e.g., without writing, without SDRs, without getting flagged

Make it sound like a conversation, not a slogan

polish the rhythm and replace vague phrase with sharper, visual, or emotional cues.

✅ GOOD EXAMPLES (for B2B cold outreach SaaS):
Subject: 3X Replies — No Manual Work
Headline: Get 3X More Replies – Without Writing a Single Email

Subject: Your Top SDR — Powered by AI
Headline: Book More Demos — No More Generic Emails

Subject: More Demos from Cold Leads — At Scale
Headline: Turn Cold Leads Into Meetings — With Zero Writing

Subject: No Replies? Try This
Headline: We Booked 9 Calls in 5 Days – Without Any Follow-Ups

Subject: They Thought It Was Human
Headline: Personalized Emails That Don’t Sound Like AI — Even at Scale

❌ BAD EXAMPLES (Too vague, boring, or generic):
“Revolutionize your outreach” → buzzword soup

“Boost your open rates now” → not unique, no tension

“AI-powered email system for you” → product-focused, not outcome-focused

“Meet your new sales tool” → too soft, too vague

“Emails that convert” → overused, nothing stands out

📌 Output Format:
Provide 3 headline pairs in the following format:

Pair 1
Subject: [text]
Headline: [text]

Pair 2
Subject: [text]
Headline: [text]

Pair 3
Subject: [text]
Headline: [text]


after you output the headline, you will think about it, refine it to meet the instructions above and then you will output it again.
"""

# content="""
#  **Transcript of Hormozi’s headline tricks:**
# I've been in business for 14 years. We spend tens of millions of dollars per year in paid advertising. And in this video, I'm going to share something I've never shared before, which is that I have 12 internal hacks that we use whenever we write any piece of advertising or copy that goes out to sell stuff. And I'm going to give you all of them. So, let's start with number one. Headlines come first for a reason. And the reason I have it as the first one is that it is the first and most important. So, to quote David Ogilvy, uh, once you've written your headline, you've spent 80 cents of your advertising dollar, right? And so that means that the vast majority of people will only see the headlines in whatever it is that you make. And it almost feels unfair that a headline is just a phrase or one word or one question. But it is also the thing that is ultimately going to get the most people to or have the biggest lever on whether your advertisements do well. So, think about it like this, because it's the law of small numbers, which is, if you go from, let's say, a 1% click-through rate to a 3% click-through rate, you triple the amount of of people who are ultimately going to see everything else that you have. And so, there's very little things that happen in the rest of the entire funnel that have the ability to triple. Sometimes you get 20% lifts, 50% lifts, that'd be a monster split test. But a banger or killer headline can absolutely outperform the control by two, three, sometimes 5x, right? That is why it's so important. And it feels unfair because it's so short. But the thing is, is the best advertisers, the more they've been doing it, the more they obsess on the hook. They obsess on the headline, because they know that's where the money's at. Right? Like if you have a winning hook for your ad campaigns, you keep using it to death and you try and beat it. And so, here's the here's some of the things that I write down, which is, curiosity is king, different is ideal, and sexy works, and never run an ad without a headline, because the thing is, is all ads have headlines. There's just bad ones and good ones, because if you don't write a headline, you do have a headline, it's just not very good. And so, fundamentally, the headline serves to give us a different wrapping paper for the same offers. And you want this headline to be so powerful, and I like this visual, it grabs the reader by the throat, right? And so, bonus points is, how can I know that something is going to work ahead of time? One of the best ways to test headlines and hooks is to look at your organic content or other people's organic content, or other people's ads. Look at the first three seconds, visually and verbally, what are they saying and what's happening in the background? And those are the first places that I'm going to look in order to model what headlines apply to me. Now, the the really sexy hack around this is, can I take, can I steal like an artist from a different industry? Can I look at ads that are working well in the travel space and use them in business? Can I look at ads in the weight loss space and use them in business or whatever space you're in? And so, some thoughts I have are curiosity, quotes, questions, are there kind of emotional outcomes or experiences that I'm describing? One of my favorite headlines of all time is, How to Yay without Boo, even if you Biggest Insecurity. Right? I'll say that again. How to Yay, good thing, without Boo, bad thing, even if your Biggest Fear. How to speak confidently in front of strangers, without ever practicing, even if you're deathly afraid of speaking in public. FYI, there are entire books written on each of these 12 pieces that I'm going to talk about. I'm trying to give you the 80/20, because at the end of the day, when you're writing ads, you're not going to read 12 books before you write the ad. You're going to have a little mental checklist that you go over, and that's the checklist that I'm giving you. Yeah, and so each of these bullets are kind of like the best kind of, like best converting nuggets that I have on each of these kind of mini topics. And so, this is like my little cheat sheet. So, whenever I get stuck, right into new idea, or for a new image, or a video, or copy, this is what I use to kind of remind myself.
    
#  **Cold email content:**
#  What would it look like if every prospect you emailed felt like the message was written *just* for them?

# At Gatara AI, we build AI agents that automate B2B marketing and sales. One of our tools generates personalized cold emails (using real-time lead info and your business tone) — so your outreach doesn’t sound like everyone else’s.
# Would it make sense to explore what this could do for your team?

#  **The Tone of voice:**
#  like Hormozi meets cold email pro

#  **The target audience:**
#  B2B SaaS founders, 51-200 employees

#  **Main pain we solve:**
#  Manual cold outreach is time-consuming, lack of personlization, doesnot scale

#  **Outcome we promise:**
#  Get more replies and convert more. 
#  """

def generate_headline_subject_response(email_content, target_audience, tone_of_voice, main_pain, outcome):
    content = f"""
     **Transcript of Hormozi’s headline tricks:**
    I've been in business for 14 years. We spend tens of millions of dollars per year in paid advertising. And in this video, I'm going to share something I've never shared before, which is that I have 12 internal hacks that we use whenever we write any piece of advertising or copy that goes out to sell stuff. And I'm going to give you all of them. So, let's start with number one. Headlines come first for a reason. And the reason I have it as the first one is that it is the first and most important. So, to quote David Ogilvy, uh, once you've written your headline, you've spent 80 cents of your advertising dollar, right? And so that means that the vast majority of people will only see the headlines in whatever it is that you make. And it almost feels unfair that a headline is just a phrase or one word or one question. But it is also the thing that is ultimately going to get the most people to or have the biggest lever on whether your advertisements do well. So, think about it like this, because it's the law of small numbers, which is, if you go from, let's say, a 1% click-through rate to a 3% click-through rate, you triple the amount of of people who are ultimately going to see everything else that you have. And so, there's very little things that happen in the rest of the entire funnel that have the ability to triple. Sometimes you get 20% lifts, 50% lifts, that'd be a monster split test. But a banger or killer headline can absolutely outperform the control by two, three, sometimes 5x, right? That is why it's so important. And it feels unfair because it's so short. But the thing is, is the best advertisers, the more they've been doing it, the more they obsess on the hook. They obsess on the headline, because they know that's where the money's at. Right? Like if you have a winning hook for your ad campaigns, you keep using it to death and you try and beat it. And so, here's the here's some of the things that I write down, which is, curiosity is king, different is ideal, and sexy works, and never run an ad without a headline, because the thing is, is all ads have headlines. There's just bad ones and good ones, because if you don't write a headline, you do have a headline, it's just not very good. And so, fundamentally, the headline serves to give us a different wrapping paper for the same offers. And you want this headline to be so powerful, and I like this visual, it grabs the reader by the throat, right? And so, bonus points is, how can I know that something is going to work ahead of time? One of the best ways to test headlines and hooks is to look at your organic content or other people's organic content, or other people's ads. Look at the first three seconds, visually and verbally, what are they saying and what's happening in the background? And those are the first places that I'm going to look in order to model what headlines apply to me. Now, the the really sexy hack around this is, can I take, can I steal like an artist from a different industry? Can I look at ads that are working well in the travel space and use them in business? Can I look at ads in the weight loss space and use them in business or whatever space you're in? And so, some thoughts I have are curiosity, quotes, questions, are there kind of emotional outcomes or experiences that I'm describing? One of my favorite headlines of all time is, How to Yay without Boo, even if you Biggest Insecurity. Right? I'll say that again. How to Yay, good thing, without Boo, bad thing, even if your Biggest Fear. How to speak confidently in front of strangers, without ever practicing, even if you're deathly afraid of speaking in public. FYI, there are entire books written on each of these 12 pieces that I'm going to talk about. I'm trying to give you the 80/20, because at the end of the day, when you're writing ads, you're not going to read 12 books before you write the ad. You're going to have a little mental checklist that you go over, and that's the checklist that I'm giving you. Yeah, and so each of these bullets are kind of like the best kind of, like best converting nuggets that I have on each of these kind of mini topics. And so, this is like my little cheat sheet. So, whenever I get stuck, right into new idea, or for a new image, or a video, or copy, this is what I use to kind of remind myself.
    
    **Cold email content:**
    {email_content}

    **The target audience:**
    {target_audience}

    **The tone of voice:**
    {tone_of_voice}

    **Main pain we solve:**
    {main_pain}

    **Outcome we promise:**
    {outcome}
    """
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        config=types.GenerateContentConfig(
            # temperature=0.4,
            # thinking_config=types.ThinkingConfig(thinking_budget=-1),
            system_instruction=system_instructions
        ),
        contents=content
    )

    return response.text