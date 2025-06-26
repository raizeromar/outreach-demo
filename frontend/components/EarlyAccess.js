export function EarlyAccess() {
  return `
    <div class="min-h-screen bg-base-200">
      <div class="container mx-auto px-1 sm:px-6 py-8">
        <div class="mb-8">
          <a href="#landing" class="btn btn-ghost gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
        
        <div class="w-full max-w-4xl mx-auto flex flex-col justify-center">
          <!-- Welcome Screen -->
          <div id="welcome-screen" class="bg-base-100 rounded-xl shadow-lg p-6 md:p-10 flex flex-col items-center justify-center text-center">
            <div class="mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-base-content mb-4">Get Exclusive Early Access</h1>
            <p class="text-lg md:text-xl text-base-content/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              Join our VIP list to be among the first to <span class="font-semibold text-primary">10x your outbound pipeline</span> with AI-powered, personalized cold emails — no manual work required.
            </p>
            <div class="space-y-4 w-full max-w-xs">
              <button id="start-form" class="btn btn-primary btn-lg w-full text-lg transform transition-transform hover:scale-[1.02] active:scale-95">
                Apply Now
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
              <p class="text-sm text-base-content/60">Takes just 2 minutes</p>
            </div>
            <div class="mt-8 flex items-center space-x-4">
              <div class="flex -space-x-2">
                <div class="h-8 w-8 rounded-full bg-primary/20 border-2 border-base-100"></div>
                <div class="h-8 w-8 rounded-full bg-primary/30 border-2 border-base-100"></div>
                <div class="h-8 w-8 rounded-full bg-primary/40 border-2 border-base-100"></div>
              </div>
              <p class="text-sm text-base-content/60">Join VibeReach early adopters</p>
            </div>
          </div>

          <!-- Multi-step Form -->
          <div id="form-container" class="bg-base-100 rounded-xl shadow-lg hidden">
            <!-- Progress Bar -->
            <div class="px-6 pt-6 sticky top-0 bg-base-100 z-10 border-b border-base-200">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-base-content/70">Step  <span id="progress-text">1</span> of 13</span>
                <span id="progress-percent" class="text-sm font-medium text-primary">8%</span>
              </div>
              <div class="w-full bg-base-200 rounded-full h-2.5 mb-4">
                <div id="progress-bar" class="bg-primary h-2.5 rounded-full transition-all duration-300" style="width: 7.7%"></div>
              </div>
            </div>

            <div class="px-6 pb-8">
              <form id="early-access-form" class="flex flex-col">
                <!-- Step 1: Name -->
                <div class="form-step active" data-step="1">
                  <div class="py-8 md:py-12 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-3">What's your name?</h2>
                    <p class="text-base-content/60 max-w-md mx-auto">We'll use this to personalize your experience</p>
                  </div>
                  <div class="max-w-md mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text text-base-content/70">First Name</span>
                        </label>
                        <div class="relative">
                          <input type="text" name="firstName" class="input input-bordered w-full text-lg pl-10" placeholder="John" required>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-3.5 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text text-base-content/70">Last Name</span>
                        </label>
                        <input type="text" name="lastName" class="input input-bordered w-full text-lg" placeholder="Doe" required>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 2: Business Email -->
                <div class="form-step" data-step="2">
                  <div class="py-8 md:py-12 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-3">What's your business email?</h2>
                    <p class="text-base-content/60 max-w-md mx-auto">We'll send your early access invite here</p>
                  </div>
                  <div class="max-w-md mx-auto">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text text-base-content/70">Email Address</span>
                      </label>
                      <div class="relative">
                        <input type="email" name="email" class="input input-bordered w-full text-lg pl-10" placeholder="john@company.com" required>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-3.5 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <label class="label">
                        <span class="label-text-alt text-base-content/50">Please use your business email address</span>
                      </label>
                    </div>
                  </div>
                </div>

                <!-- Step 3: Position -->
                <div class="form-step" data-step="3">
                  <div class="py-8 md:py-12 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-3">What's your position?</h2>
                    <p class="text-base-content/60 max-w-md mx-auto">Helps us tailor the experience to your role</p>
                  </div>
                  <div class="max-w-md mx-auto">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text text-base-content/70">Your Role</span>
                      </label>
                      <div class="relative">
                        <input type="text" name="position" class="input input-bordered w-full text-lg pl-10" placeholder="e.g., Sales Director, Marketing Manager" required>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-3.5 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 4: LinkedIn -->
                <div class="form-step" data-step="4">
                  <div class="py-8 md:py-12 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-3">What's your LinkedIn profile?</h2>
                    <p class="text-base-content/60 max-w-md mx-auto">Helps us verify you're a real professional</p>
                  </div>
                  <div class="max-w-md mx-auto">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text text-base-content/70">LinkedIn URL</span>
                      </label>
                      <div class="relative">
                        <input type="url" name="linkedin" class="input input-bordered w-full text-lg pl-10" placeholder="https://linkedin.com/in/your-profile" required>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-3.5 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 5: Company Name -->
                <div class="form-step" data-step="5">
                  <div class="py-8 md:py-12 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-3">What company do you work for?</h2>
                    <p class="text-base-content/60 max-w-md mx-auto">Helps us understand your needs better</p>
                  </div>
                  <div class="max-w-md mx-auto">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text text-base-content/70">Company Name</span>
                      </label>
                      <div class="relative">
                        <input type="text" name="company" class="input input-bordered w-full text-lg pl-10" placeholder="Acme Inc." required>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-3.5 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 6: Company Website -->
                <div class="form-step" data-step="6">
                  <div class="py-8 md:py-12 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-3">What's your company website?</h2>
                    <p class="text-base-content/60 max-w-md mx-auto">We'll research your company to personalize your demo</p>
                  </div>
                  <div class="max-w-md mx-auto">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text text-base-content/70">Website URL</span>
                      </label>
                      <div class="relative">
                        <input type="url" name="website" class="input input-bordered w-full text-lg pl-10" placeholder="https://yourcompany.com" required>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-3.5 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 7: Cold Outreach -->
                <div class="form-step" data-step="7">
                  <div class="py-8 md:py-12 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-3">Do you currently run cold outreach campaigns?</h2>
                    <p class="text-base-content/60 max-w-md mx-auto">Helps us understand your current workflow</p>
                  </div>
                  <div class="max-w-md mx-auto space-y-3">
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
                  <div class="py-8 md:py-12 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-3">Is your current cold outreach process automated?</h2>
                    <p class="text-base-content/60 max-w-md mx-auto">Helps us understand your current tech stack</p>
                  </div>
                  <div class="max-w-md mx-auto space-y-3">
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
                  <div class="py-8 md:py-12 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-3">What automation tools are you currently using for outreach?</h2>
                    <p class="text-base-content/60 max-w-md mx-auto">Helps us integrate with your existing workflow</p>
                  </div>
                  <div class="max-w-md mx-auto">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text text-base-content/70">Tools (if any)</span>
                      </label>
                      <div class="relative">
                        <input type="text" name="tools" class="input input-bordered w-full text-lg pl-10" placeholder="e.g., Outreach, SalesLoft, Apollo, or None" required>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-3.5 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 10: Challenge -->
                <div class="form-step" data-step="10">
                  <div class="py-8 md:py-12 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-3">What's your biggest challenge with your current outreach workflow?</h2>
                    <p class="text-base-content/60 max-w-md mx-auto">We'll focus on solving this first for you</p>
                  </div>
                  <div class="max-w-md mx-auto">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text text-base-content/70">Your Challenge</span>
                      </label>
                      <div class="relative">
                       <textarea 
                          name="challenge" 
                          class="textarea textarea-bordered w-full text-lg pl-10 min-h-[100px]" 
                          placeholder="Manual cold outreach is time-consuming, lack of personalization, doesn't scale" 
                          required
                        ></textarea>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-3.5 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 11: Volume -->
                <div class="form-step" data-step="11">
                  <div class="py-8 md:py-12 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-3">How many leads do you typically reach out to per month?</h2>
                    <p class="text-base-content/60 max-w-md mx-auto">Helps us understand your scale needs</p>
                  </div>
                  <div class="max-w-md mx-auto space-y-3">
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="volume" value="<100" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content">Less than 100</span>
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
                        <span class="label-text text-lg text-base-content">More than 2,000</span>
                      </label>
                    </div>
                  </div>
                </div>

                <!-- Step 12: CRM -->
                <div class="form-step" data-step="12">
                  <div class="py-8 md:py-12 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-3">What CRM software do you use?</h2>
                    <p class="text-base-content/60 max-w-md mx-auto">We'll prioritize integrations with your CRM</p>
                  </div>
                  <div class="max-w-md mx-auto">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text text-base-content/70">CRM Name</span>
                      </label>
                      <div class="relative">
                        <input type="text" name="crm" class="input input-bordered w-full text-lg pl-10" placeholder="e.g., Salesforce, HubSpot, Pipedrive, or None" required>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-3.5 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 13: Chat -->
                <div class="form-step" data-step="13">
                  <div class="py-8 md:py-12 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-3">Want priority access?</h2>
                    <p class="text-base-content/60 max-w-md mx-auto">A quick 15-min chat jumps you to the front of the line</p>
                  </div>
                  <div class="max-w-md mx-auto space-y-3">
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="chat" value="yes" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content">Yes, book me for a quick chat</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer justify-start gap-4 p-4 hover:bg-base-200 rounded-lg transition-colors">
                        <input type="radio" name="chat" value="no" class="radio radio-primary" required>
                        <span class="label-text text-lg text-base-content">No thanks, just add me to the waitlist</span>
                      </label>
                    </div>
                  </div>
                </div>

                <!-- Navigation Buttons -->
                <div class="flex justify-between items-center mt-12 max-w-md mx-auto w-full">
                  <button type="button" id="prev-btn" class="btn btn-ghost text-primary hover:bg-primary/10 gap-2" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Previous
                  </button>
                  <div class="flex items-center gap-2 text-sm text-base-content/50">
                    <span id="current-step">1</span>
                    <span>/</span>
                    <span>13</span>
                  </div>
                  <button type="button" id="next-btn" class="btn btn-primary gap-2">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <button type="submit" id="submit-btn" class="btn btn-primary gap-2 hidden">
                    Submit Application
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <!-- Thank You Screen -->
          <div id="thank-you-screen" class="bg-base-100 rounded-xl shadow-lg p-8 md:p-12 hidden">
            <div class="text-center max-w-2xl mx-auto">
              <div class="mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 class="text-3xl md:text-4xl font-bold text-base-content mb-4">You're on the list!</h1>
              <p class="text-lg text-base-content/80 leading-relaxed mb-8">
                Thanks for applying for early access to VibeOutreach. We'll review your application and get back to you soon with your exclusive invite.
              </p>
              <div class="space-y-4">
                <div id="chat-option" class="hidden">
                  <p class="text-base-content/70 mb-4">Want to skip the line?</p>
                  <a href="https://gataraai.zohobookings.com/#/ceo-call" class="btn btn-secondary btn-lg w-full max-w-xs">
                    Book a quick 15-min chat
                  </a>
                </div>
                <div class="pt-8">
                  <p class="text-sm text-base-content/60">In the meantime, follow us on <a href="https://linkedin.com/company/omar-gatara" class="link link-primary">LinkedIn</a> for updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}