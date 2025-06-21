export function HeadlineGenerator() {
  return `
    <div class="min-h-screen bg-base-200">
      <div class="container mx-auto px-6 py-8">
        <div class="mb-8">
          <a href="#landing" class="btn btn-ghost gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
        
        <div id="user-section" class="max-w-2xl mx-auto">
          <div class="card bg-base-100 shadow-2xl">
            <div class="card-body p-8">
              <div class="text-center mb-8">
                <h1 class="text-4xl font-bold text-base-content mb-1">Get Started</h1>
                <h1 class="text-xl text-base-content mb-2 hormozi-gradient-text">Generate Hormozi-Style Headlines & Email Subjects for Free! ;)</h1>
                <p class="text-lg text-base-content/70">First, we need some basic information about you</p>
              </div>
              
              <form id="user-form" class="space-y-6">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-semibold">Full Name</span>
                  </label>
                  <input type="text" id="name" name="name" class="input input-bordered input-lg" placeholder="Your Full Name" required>
                  <div id="name-error" class="label hidden">
                    <span class="label-text-alt text-error"></span>
                  </div>
                </div>
                
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-semibold">LinkedIn Profile Link</span>
                  </label>
                  <input type="url" id="linkedin" name="linkedin" class="input input-bordered input-lg" placeholder="https://linkedin.com/in/your-profile" required>
                  <div id="linkedin-error" class="label hidden">
                    <span class="label-text-alt text-error"></span>
                  </div>
                </div>
                
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-semibold">Business Email</span>
                  </label>
                  <input type="email" id="email" name="email" class="input input-bordered input-lg"  placeholder="Your Business Email" required>
                  <div id="email-error" class="label hidden">
                    <span class="label-text-alt text-error"></span>
                  </div>
                  <div class="label">
                    <span class="label-text-alt text-base-content/60">Gmail/Outlook addresses are not accepted for business use</span>
                  </div>
                </div>
                
                <button type="submit" class="btn btn-primary btn-lg w-full">
                  Continue
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div id="ai-section" class="max-w-3xl mx-auto hidden">
          <div class="card bg-base-100 shadow-2xl">
            <div class="card-body p-8">
              <div class="text-center mb-8">
                <h1 class="text-4xl font-bold text-base-content mb-4">Generate Hormozi-style headlines and subjects for your cold outreach!</h1>
                <div class="alert alert-warning">
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span class="font-semibold">⚠️ You only got one shot, use it wisely!</span>
                </div>
              </div>
              
              <form id="ai-form" class="space-y-6">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-semibold">Email Content</span>
                  </label>
                  <textarea id="email_content" name="email_content" class="textarea textarea-bordered textarea-lg h-32" placeholder="INSERT EMAIL BODY HERE" required></textarea>
                </div>
                
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-semibold">Target Audience</span>
                  </label>
                  <input type="text" id="target_audience" name="target_audience" class="input input-bordered input-lg" placeholder="e.g., B2B SaaS founders, 51–200 employees" required>
                </div>
                
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-semibold">Tone of Voice</span>
                  </label>
                  <input type="text" id="tone_of_voice" name="tone_of_voice" class="input input-bordered input-lg" placeholder="e.g., like Hormozi meets cold email pro" required>
                </div>
                
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-semibold">Main Pain Point</span>
                  </label>
                  <textarea id="main_pain" name="main_pain" class="textarea textarea-bordered textarea-lg h-24" placeholder="Manual cold outreach is time-consuming, lack of personalization, doesn't scale" required></textarea>
                </div>
                
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-semibold">Outcome We Promise</span>
                  </label>
                  <input type="text" id="outcome" name="outcome" class="input input-bordered input-lg" placeholder="Get more replies and convert more." required>
                </div>
                
                <button type="submit" class="btn btn-primary btn-lg w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Generate Headlines
                </button>
              </form>
            </div>
          </div>
        </div>

        <div id="loader-section" class="max-w-2xl mx-auto hidden">
          <div class="card bg-base-100 shadow-2xl">
            <div class="card-body p-12 text-center">
              <!-- loder -->
              <div class="flex-col gap-4 w-full flex items-center justify-center pb-4">
                <div
                  class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
                >
                  <div
                    class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                  ></div>
                </div>
              </div>

              <h2 class="text-3xl font-bold text-base-content mb-4">Bear with me for a minute...</h2>
              <p class="text-lg text-base-content/70 leading-relaxed">I'm not a normal AI, and I focus on results and it will be valuable for you, so I will take time to think ;)</p>
            </div>
          </div>
        </div>

        <div id="result-section" class="max-w-4xl mx-auto hidden">
          <!-- Results will be populated here -->
        </div>
      </div>
    </div>
  `
}