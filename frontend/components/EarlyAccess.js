export function EarlyAccess() {
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
        
        <div class="w-[70vw] h-[70vh] mx-auto flex flex-col justify-center">
          <!-- Welcome Screen -->
          <div id="welcome-screen" class="bg-base-100 rounded-lg shadow-sm h-full">
            <div class="p-12 text-center">
              <h1 class="text-5xl font-bold text-base-content mb-6">Get Early Access</h1>
              <p class="text-xl text-base-content/70 leading-relaxed mb-8 max-w-3xl mx-auto">Be among the first to use AI to 10x your outbound pipeline with smart, personalized cold emails — without the manual work.</p>
              <button id="start-form" class="btn btn-primary btn-lg text-lg px-8">
                Start Application
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Multi-step Form -->
          <div id="form-container" class="bg-base-100 rounded-lg shadow-sm h-full hidden">
            <!-- Progress Bar -->
            <div class="px-12 pt-8">
              <div class="w-full bg-base-200 rounded-full h-2 mb-8">
                <div id="progress-bar" class="bg-primary h-2 rounded-full transition-all duration-300" style="width: 7.7%"></div>
              </div>
            </div>

            <div class="px-12 pb-12">
              <form id="early-access-form" class="h-full flex flex-col justify-evenly">
                <!-- Step 1: Name -->
                <div class="form-step active" data-step="1">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-base-content mb-4">Name</h2>
                  </div>
                  <div class="max-w-3xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div class="form-control">
                        <div class="relative">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute left-0 top-4 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <input type="text" name="firstName" class="input-underline w-full text-lg py-4 pl-8 bg-transparent border-0 border-b-2 border-base-content/20 focus:border-primary focus:outline-none" placeholder="First Name" required>
                        </div>
                      </div>
                      <div class="form-control">
                        <div class="relative">
                          <input type="text" name="lastName" class="input-underline w-full text-lg py-4 bg-transparent border-0 border-b-2 border-base-content/20 focus:border-primary focus:outline-none" placeholder="Last Name" required>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 2: Business Email -->
                <div class="form-step" data-step="2">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-base-content mb-4">Business Email</h2>
                  </div>
                  <div class="max-w-2xl mx-auto">
                    <div class="form-control">
                      <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute left-0 top-4 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <input type="email" name="email" class="input-underline w-full text-lg py-4 pl-8 bg-transparent border-0 border-b-2 border-base-content/20 focus:border-primary focus:outline-none" placeholder="Email Address" required>
                      </div>
                      <div class="mt-2 text-sm text-base-content/60">
                        Please use your business email address
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 3: Position -->
                <div class="form-step" data-step="3">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-base-content mb-4">Your Position</h2>
                  </div>
                  <div class="max-w-2xl mx-auto">
                    <div class="form-control">
                      <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute left-0 top-4 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                        </svg>
                        <input type="text" name="position" class="input-underline w-full text-lg py-4 pl-8 bg-transparent border-0 border-b-2 border-base-content/20 focus:border-primary focus:outline-none" placeholder="e.g., Sales Director, Marketing Manager" required>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 4: LinkedIn -->
                <div class="form-step" data-step="4">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-base-content mb-4">LinkedIn Profile</h2>
                  </div>
                  <div class="max-w-2xl mx-auto">
                    <div class="form-control">
                      <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute left-0 top-4 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        <input type="url" name="linkedin" class="input-underline w-full text-lg py-4 pl-8 bg-transparent border-0 border-b-2 border-base-content/20 focus:border-primary focus:outline-none" placeholder="https://linkedin.com/in/your-profile" required>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 5: Company Name -->
                <div class="form-step" data-step="5">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-base-content mb-4">Company Name</h2>
                  </div>
                  <div class="max-w-2xl mx-auto">
                    <div class="form-control">
                      <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute left-0 top-4 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <input type="text" name="company" class="input-underline w-full text-lg py-4 pl-8 bg-transparent border-0 border-b-2 border-base-content/20 focus:border-primary focus:outline-none" placeholder="Company Name" required>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 6: Company Website -->
                <div class="form-step" data-step="6">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-base-content mb-4">Company Website *</h2>
                  </div>
                  <div class="max-w-2xl mx-auto">
                    <div class="form-control">
                      <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute left-0 top-4 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                        </svg>
                        <input type="url" name="website" class="input-underline w-full text-lg py-4 pl-8 bg-transparent border-0 border-b-2 border-base-content/20 focus:border-primary focus:outline-none" placeholder="https://yourcompany.com" required>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 7: Cold Outreach -->
                <div class="form-step" data-step="7">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-base-content mb-4">Do you currently run cold outreach campaigns?</h2>
                  </div>
                  <div class="max-w-2xl mx-auto space-y-6">
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="outreach" value="active" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content">Yes – we're actively doing cold outreach</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="outreach" value="soon" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content">No – we want to start soon</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="outreach" value="exploring" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content">No – just exploring options</span>
                      </label>
                    </div>
                  </div>
                </div>

                <!-- Step 8: Automation -->
                <div class="form-step" data-step="8">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-base-content mb-4">Is your current cold outreach process automated?</h2>
                  </div>
                  <div class="max-w-2xl mx-auto space-y-6">
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="automation" value="fully" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content">Fully automated</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="automation" value="partially" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content">Partially automated</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="automation" value="manual" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content">Completely manual</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="automation" value="none" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content">Not doing outreach yet</span>
                      </label>
                    </div>
                  </div>
                </div>

                <!-- Step 9: Tools -->
                <div class="form-step" data-step="9">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-base-content mb-4">What automation tools are you currently using for outreach?</h2>
                  </div>
                  <div class="max-w-2xl mx-auto">
                    <div class="form-control">
                      <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute left-0 top-4 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <input type="text" name="tools" class="input-underline w-full text-lg py-4 pl-8 bg-transparent border-0 border-b-2 border-base-content/20 focus:border-primary focus:outline-none" placeholder="e.g., Outreach, SalesLoft, Apollo, or None" required>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 10: Challenge -->
                <div class="form-step" data-step="10">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-base-content mb-4">What's your biggest challenge with your current outreach workflow?</h2>
                  </div>
                  <div class="max-w-2xl mx-auto">
                    <div class="form-control">
                      <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute left-0 top-4 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <input type="text" name="challenge" class="input-underline w-full text-lg py-4 pl-8 bg-transparent border-0 border-b-2 border-base-content/20 focus:border-primary focus:outline-none" placeholder="Manual cold outreach is time-consuming, lack of personalization, doesn't scale" required>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 11: Volume -->
                <div class="form-step" data-step="11">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-base-content mb-4">How many leads do you typically reach out to per month?</h2>
                  </div>
                  <div class="max-w-2xl mx-auto space-y-6">
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="volume" value="<100" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content"><100</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="volume" value="100-500" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content">100–500</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="volume" value="500-2000" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content">500–2,000</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="volume" value="2000+" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content">2,000+</span>
                      </label>
                    </div>
                  </div>
                </div>

                <!-- Step 12: CRM -->
                <div class="form-step" data-step="12">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-base-content mb-4">What CRM software do you use?</h2>
                  </div>
                  <div class="max-w-2xl mx-auto">
                    <div class="form-control">
                      <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute left-0 top-4 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <input type="text" name="crm" class="input-underline w-full text-lg py-4 pl-8 bg-transparent border-0 border-b-2 border-base-content/20 focus:border-primary focus:outline-none" placeholder="e.g., Salesforce, HubSpot, Pipedrive, or None" required>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 13: Chat -->
                <div class="form-step" data-step="13">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-base-content mb-4">Would you be open to a 15-min chat for priority access?</h2>
                  </div>
                  <div class="max-w-2xl mx-auto space-y-6">
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="chat" value="yes" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content">Yes</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="chat" value="no" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content">No</span>
                      </label>
                    </div>
                  </div>
                </div>

                <!-- Navigation Buttons -->
                <div class="flex justify-center gap-8 items-center mt-16 max-w-2xl mx-auto">
                  <button type="button" id="prev-btn" class="text-primary text-lg font-medium hover:text-primary-focus transition-colors disabled:text-base-content/30 disabled:cursor-not-allowed flex items-center gap-2" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Prev
                  </button>
                  <button type="button" id="next-btn" class="text-primary text-lg font-medium hover:text-primary-focus transition-colors flex items-center gap-2">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <button type="submit" id="submit-btn" class="text-primary text-lg font-medium hover:text-primary-focus transition-colors hidden">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>

          <!-- Thank You Screen -->
          <div id="thank-you-screen" class="bg-base-100 rounded-lg shadow-sm h-full hidden">
            <div class="p-12 text-center">
              <h1 class="text-5xl font-bold text-base-content mb-6">Thanks for signing up for early access!</h1>
              <p class="text-xl text-base-content/70 leading-relaxed mb-8 max-w-3xl mx-auto">We'll reach out soon with your invite to try VibeOutreach before anyone else.</p>
              <div class="space-y-4">
                <a href="#" class="btn btn-secondary btn-lg text-lg px-8">
                  Want to skip the line? Book a quick chat.
                </a>
                <br>
                <button onclick="location.reload()" class="btn btn-primary btn-lg text-lg px-8">
                  Start Over
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}