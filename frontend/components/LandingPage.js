export function LandingPage() {
  return `
    <div class="min-h-screen bg-gradient-to-br from-base-200 to-base-300">
      <!-- Responsive Sticky Navbar -->
      <div class="navbar bg-base-100/90 backdrop-blur-md rounded-box ml-0 mr-2 sm:mx-4 lg:mx-auto mt-2 max-w-6xl shadow-lg fixed top-0 left-0 right-0 z-50">
          <!-- Logo/Brand - Left side -->
          <div class="navbar-start">
              <a class="text-xl sm:text-2xl lg:text-3xl font-semibold poppins gradient-text tracking-tight">
                  &nbsp;Vibe<span class="font-bold">Reach</span>
              </a>
          </div>
          
          <!-- Desktop menu - Center -->
          <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal gap-2 px-1">
                  <li><a href="#how-it-works" class="text-lg font-medium hover:bg-base-200 rounded-btn transition-colors">How it works</a></li>
                  <li><a href="#features" class="text-lg font-medium hover:bg-base-200 rounded-btn transition-colors">Features</a></li>
                  <li><a class="text-lg font-medium hover:bg-base-200 rounded-btn transition-colors">All About the Beta</a></li>
              </ul>
          </div>
          
          <!-- Right side - CTA Button + Mobile Menu -->
          <div class="navbar-end">
              <!-- CTA Button - hidden on very small screens, visible on sm and up -->
              <a href="#early-access" class="btn btn-primary text-lg px-6 hidden md:inline-flex">Get Early Access</a>
          
              <!-- Mobile hamburger menu -->
              <div class="dropdown dropdown-end lg:hidden">
                  <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                      </svg>
                  </div>
                  <!-- Mobile menu dropdown -->
                  <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl border border-base-300">
                      <li><a href="#how-it-works" class="text-base font-medium py-3">How it works</a></li>
                      <li><a href="#features" class="text-base font-medium py-3">Features</a></li>
                      <li><a class="text-base font-medium py-3">All About the Beta</a></li>
                      <li class="mt-2 pt-2 border-t border-base-300">
                          <a href="#early-access" class="btn btn-primary btn-sm w-full">Get Early Access</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    

      <!-- Hero Section -->
      <div class="container mx-auto px-6 py-16">
          <div class="hero min-h-[85vh]">
              <!-- Only change flex direction on small screens -->
              <div class="hero-content flex-col lg:flex-row-reverse gap-16 max-w-7xl pt-14 lg:pt-0">
                  <!-- Hero Image/Visual - now comes first in DOM for mobile -->
                  <div class="flex-1 flex justify-center order-1 lg:order-none">
                      <img src="/hero.webp" class="w-full max-w-md lg:max-w-none">
                  </div>

                  <!-- Hero Text -->
                  <div class="flex-1 text-center lg:text-left">
                      <div class="badge badge-primary badge-outline text-base p-3 mb-4 hidden md:inline-flex">
                          🚀 B2B OUTREACH REVOLUTION
                      </div>
                      <h1 class="text-5xl lg:text-7xl font-bold gradient-text mb-6 leading-tight">
                          Turn Cold Emails Into 
                          <span class="text-primary">Hot Leads</span>
                      </h1>
                      <p class="text-xl text-base-content/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                          Engage potential leads through personalized, AI-powered cold outreach across email. Capture attention with relevant messaging tailored to each prospect's industry and needs.
                      </p>

                      <!-- Key Benefits -->
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                          <div class="flex items-center gap-3 hidden md:inline-flex">
                              <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                  <i class="fas fa-brain text-primary"></i>
                              </div>
                              <span class="font-medium">AI-Powered Personalization</span>
                          </div>
                          <div class="flex items-center gap-3 justify-center lg:justify-start">
                              <div class="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                                  <i class="fas fa-chart-line text-secondary"></i>
                              </div>
                              <span class="font-medium">3x Higher Response Rates</span>
                          </div>
                          <div class="flex items-center gap-3 justify-center lg:justify-start">
                              <div class="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                                  <i class="fas fa-clock text-accent"></i>
                              </div>
                              <span class="font-medium">Save 10+ Hours Weekly</span>
                          </div>
                          <div class="flex items-center gap-3 hidden md:inline-flex">
                              <div class="w-10 h-10 bg-info/10 rounded-full flex items-center justify-center">
                                  <i class="fas fa-bullseye text-info"></i>
                              </div>
                              <span class="font-medium">Precision Targeting</span>
                          </div>
                      </div>

                      <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                          <a href="#early-access" class="btn btn-primary btn-lg gap-2 hover:scale-105 transition-transform shadow-lg">
                              <i class="fas fa-rocket"></i>
                              Join Waitlist
                          </a>
                          <a href="https://gataraai.zohobookings.com/#/ceo-call" class="btn btn-outline btn-lg gap-2 hidden md:inline-flex">
                              <i class="fas fa-play"></i>
                              Book Demoo
                          </a>
                      </div>

                      <br>

                      <div class="space-y-4 flex justify-center lg:justify-start">
                          <a href="#hormozi-style-headline-generator" class="btn btn-primary text-lg py-4 px-6 h-auto min-h-[3.5rem] sm:min-h-0 gap-2 hover:scale-105 transition-transform third-hero-btn">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              Generate Hormozi-Style Headlines
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      
      <!-- How It Works Section -->
      <div id="how-it-works" class="bg-base-100 px-0 sm:px-6 py-20">
          <div class="container mx-auto px-0 sm:px-6">
              <div class="text-center mb-16 px-5 sm:px-0">
                  <div class="badge badge-primary badge-outline text-lg p-3 mb-4">
                      HOW IT WORKS
                  </div>
                  <h2 class="text-4xl lg:text-5xl font-bold mb-6">From Lead List to Closed Deals</h2>
                  <p class="text-xl text-base-content/70 max-w-3xl mx-auto">
                      Our AI-powered platform transforms your cold outreach process in three simple steps
                  </p>
              </div>

              <!-- Process Flow -->
            <div class="max-w-6xl mx-auto mb-[10vh] px-5 sm:px-0">
            <div class="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Step 1 -->
                <div class="flex flex-col h-full">
                    <div class="card bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                        <div class="card-body text-center p-8 flex flex-col justify-between">
                            <div>
                                <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <i class="fas fa-upload text-2xl text-primary-content"></i>
                                </div>
                                <h3 class="text-2xl font-bold mb-6">1. Upload Your Leads</h3>
                            </div>
                            <div>
                              <p class="text-base-content/70 mb-6">
                                  Import your lead list with their info, LinkedIn profiles, and company websites. Our AI does the rest.
                              </p>
                            </div>
                            <div class="mockup-code bg-base-200 text-left !pt-0">
                                <div class="overflow-x-auto text-primary -mt-4">
                                    <table class="table table-xs">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Headline</th>
                                                <th>About</th>
                                                <th>Position</th>
                                                <th>Company</th>
                                                <th>Company About</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>1</th>
                                                <td>Sarah Johnson</td>
                                                <td>Sarah's Headline</td>
                                                <td>Sarah's About</td>
                                                <td>Sarah's Position</td>
                                                <td>Sarah's Company</td>
                                                <td>Company About</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Arrow 1 - Positioned between cards -->
                <div class="hidden lg:block absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-2xl z-10">
                    <i class="fas fa-arrow-right"></i>
                </div>

                <!-- Step 2 -->
                <div class="flex flex-col h-full">
                    <div class="card bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                        <div class="card-body text-center p-8 flex flex-col justify-between">
                            <div>
                                <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <i class="fas fa-robot text-2xl text-secondary-content"></i>
                                </div>
                                <h3 class="text-2xl font-bold mb-6">2. AI Analyzes & Personalizes</h3>
                            </div>
                            <div
                              <p class="text-base-content/70 mb-6">
                                    Our AI Get the lead's data, creates personalized messages using your own business tone and style.
                              </p>
                            </div>
                            <div class="bg-base-200 rounded-lg p-4 text-left">
                                <div class="flex items-center gap-2 mb-2">
                                    <div class="loading loading-spinner loading-2xs text-secondary" style="width: 1.2rem; height: 1.2rem;"></div>
                                    <span class="text-sm">Analyzing Prospect's Data...</span>
                                </div>
                                <div class="flex items-center gap-2 mb-2">
                                    <i class="fas fa-check text-success text-sm"></i>
                                    <span class="text-sm">Applying your Business Tone and Style</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fas fa-check text-success text-sm"></i>
                                    <span class="text-sm">Personalized message ready</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Arrow 2 - Positioned between cards -->
                <div class="hidden lg:block absolute left-2/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-secondary text-2xl z-10">
                    <i class="fas fa-arrow-right"></i>
                </div>

                <!-- Step 3 -->
                <div class="flex flex-col h-full">
                    <div class="card bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                        <div class="card-body text-center p-8 flex flex-col justify-between">
                            <div>
                                <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i class="fas fa-paper-plane text-2xl text-accent-content"></i>
                                </div>
                                <h3 class="text-2xl font-bold mb-4">3. Send & Track Results</h3>
                            </div>
                            <div>
                               <p class="text-base-content/70 mb-6">
                                  Send personalized emails and track every interaction with detailed analytics.
                               </p>
                            </div>
                            <div class="stats stats-vertical shadow bg-base-100">
                                <div class="stat py-3">
                                    <div class="stat-title text-xs">Delivered</div>
                                    <div class="stat-value text-success text-lg">98%</div>
                                </div>
                                <div class="stat py-3">
                                    <div class="stat-title text-xs">Opened</div>
                                    <div class="stat-value text-primary text-lg">72%</div>
                                </div>
                                <div class="stat py-3">
                                    <div class="stat-title text-xs">Replied</div>
                                    <div class="stat-value text-accent text-lg">34%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    


      <!-- =============================================== -->
      <!-- START: NEW AI PERSONALIZATION FEATURES SECTION -->
      <!-- =============================================== -->
      <div class="container mx-auto px-0 sm:px-6 py-20">
        <div class="hero">
          <div class="hero-content flex-col lg:flex-row items-center gap-12 lg:gap-20">

            <!-- Visual Side: Tone & Style Comparison -->
            <div class="flex-1 w-full lg:order-last order-1">
              <div class="bg-base-200/60 p-4 sm:p-6 rounded-2xl shadow-lg">
                <div class="flex flex-col items-center gap-4">

                  <!-- Step 1: User provides their style -->
                  <div class="w-full">
                    <p class="text-sm font-semibold text-base-content/60 mb-2 text-center">Generic Template</p>
                    <div class="mockup-window border bg-neutral">
                      <div class="p-4 bg-neutral-focus text-neutral-content font-mono text-xs leading-relaxed">
                        <p class="whitespace-pre-wrap">Hi {first_name},</p>
                        <p class="whitespace-pre-wrap mt-2 text-warning">I saw your company {company_name}...</p>
                        <p class="whitespace-pre-wrap mt-2 text-warning">I think we can help.</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Processing Icon -->
                  <div class="flex flex-col items-center my-2">
                      <i class="fas fa-robot text-4xl text-primary mb-2"></i>
                      <i class="fas fa-arrow-down text-2xl text-base-content/40 mt-2"></i>
                  </div>

                  <!-- Step 2: AI generates in that style -->
                  <div class="w-full">
                    <p class="text-sm font-semibold text-secondary mb-2 text-center">AI-Personalized & Stylized</p>
                    <div class="mockup-window border bg-neutral">
                      <div class="p-4 bg-neutral-focus text-neutral-content font-mono text-xs leading-relaxed">
                        <p class="whitespace-pre-wrap">Hi Alex,</p>
                        <p class="whitespace-pre-wrap mt-2 text-success">Curious — how are you currently handling cold outreach <span class="badge badge-secondary font-bold">MediaAI</span>?</p>
                        <p class="whitespace-pre-wrap mt-2 text-success">What would it look like if every prospect you emailed felt like the message was written <span class="badge badge-secondary font-bold">just</span> for them?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <!-- Text Side: Features & Benefits -->
            <div class="flex-1 text-center lg:text-left px-1 order-0">
              <div class="badge badge-primary badge-outline text-lg p-3 mb-4 font-semibold">
                PERSONALIZATION
              </div>
              <h2 class="text-4xl lg:text-5xl font-bold mb-4">Go Beyond <code class="text-primary">{first_name}</code></h2>
              <p class="text-lg text-base-content/80 mb-6 leading-relaxed">
                Our AI analyzes your lead's information and your company's unique voice to craft emails that are personlized to get you the result.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start justify-center lg:justify-start gap-3">
                  <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                  <span>Analyzes lead's data, experince, and their company for relevant insights.</span>
                </li>
                <li class="flex items-start justify-center lg:justify-start gap-3">
                  <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                  <span>Adapts to your business tone and style for branded communication.</span>
                </li>
                <li class="flex items-start justify-center lg:justify-start gap-3">
                  <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                  <span>Generates personlized opening lines that build trust.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <!-- =============================================== -->
      <!-- END: NEW AI PERSONALIZATION FEATURES SECTION   -->
      <!-- =============================================== -->





      <!-- =============================================== -->
      <!-- START: NEW LINK TRACKING FEATURES SECTION (Corrected Contrast) -->
      <!-- =============================================== -->
      <div class="container mx-auto px-0 sm:px-6 py-20 bg-base-200">
        <div class="hero">
          <div class="hero-content flex-col lg:flex-row items-center gap-12 lg:gap-20">

            <!-- Visual Side: Link Tracking Process -->
            <div class="flex-1 w-full order-1 lg:order-last">
              <div class="bg-base-200/60 p-4 sm:p-6 rounded-2xl shadow-lg">
                <div class="flex flex-col items-center gap-4">

                  <!-- Step 1: Email with a standard link -->
                  <div class="w-full">
                    <p class="text-sm font-semibold text-base-content/60 mb-2 text-center">Your Original Email</p>
                    <!-- Email Window -->
                    <div class="bg-neutral rounded-lg shadow-md">
                      <div class="flex items-center gap-2 p-3 bg-neutral-focus/30 rounded-t-lg">
                        <div class="w-3 h-3 rounded-full bg-base-content/20"></div>
                        <div class="w-3 h-3 rounded-full bg-base-content/20"></div>
                        <div class="w-3 h-3 rounded-full bg-base-content/20"></div>
                      </div>
                      <div class="p-4 font-mono text-sm leading-relaxed text-neutral-content">
                        <p>...P.S. Here’s a quick look at the product I mentioned:</p>
                        <a href="#" class="link link-primary">outreach.gatara.org</a>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Processing Icon -->
                  <div class="flex flex-col items-center my-2">
                      <i class="fas fa-chart-line text-4xl text-primary"></i>
                      <i class="fas fa-arrow-down text-2xl text-base-content/40 mt-2"></i>
                  </div>

                  <!-- Step 2: The Analytics Result -->
                  <div class="w-full">
                    <p class="text-sm font-semibold text-secondary mb-2 text-center">Actionable Engagement Report</p>
                    <div class="card bg-neutral text-neutral-content shadow-md">
                      <div class="card-body p-5">
                        <h4 class="card-title text-base text-neutral-content">Report for: Alex Johnson - Email #3/Campaign #1</h4>
                        
                        <!-- CORRECTED STATS COMPONENT -->
                        <div class="stats stats-vertical sm:stats-horizontal shadow bg-base-100 my-2">
                          <div class="stat p-3">
                            <div class="stat-title">Total Clicks</div>
                            <div class="stat-value text-base-content text-2xl">2</div>
                          </div>
                          <div class="stat p-3">
                            <div class="stat-title">Lead Status</div>
                            <div class="stat-value text-error text-2xl">Interested</div>
                          </div>
                        </div>
                        
                        <div class="mt-2">
                          <!-- CORRECTED TEXT COLOR -->
                          <p class="text-sm font-semibold text-neutral-content mb-0">Click Details:</p>
                          <p class="text-sm  text-neutral-content mb-2">{this can be discovered via UTM sources on your website}</p>
                          <ul class="text-xs font-mono space-y-1 text-neutral-content">
                            <li>- <span class="font-bold">/case-study</span> (4 times)</li>
                            <li>- <span class="font-bold">/pricing</span> (2 times)</li>
                            <li>- <span class="font-bold">/about-us</span> (1 time)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Text Side: Features & Benefits (Unchanged) -->
            <div class="flex-1 text-center lg:text-left px-1 order-0">
              <div class="badge badge-primary badge-outline text-lg p-3 mb-4 font-semibold">
                PRECISION ANALYTICS
              </div>
              <h2 class="text-4xl lg:text-5xl font-bold mb-4">Track Every Click, Uncover Intent</h2>
              <p class="text-lg text-base-content/80 mb-6 leading-relaxed">
                Stop guessing. Our system automatically converts every link into a unique, trackable URL for each prospect. See exactly who is engaging <span class="text-primary">{by VibeReach}</span> and what they're interested in to prioritize your follow-ups <span class="text-accent">{by tracking UTM sources on your website}</span>.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start justify-center lg:justify-start gap-3">
                  <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                  <span>Unique tracking links are generated for each prospect and each email.</span>
                </li>
                <li class="flex items-start justify-center lg:justify-start gap-3">
                  <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                  <span>Identify which links get clicked to understand what content resonates most.</span>
                </li>
                <li class="flex items-start justify-center lg:justify-start gap-3">
                  <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                  <span>Get insights to identify "interested leads" who are actively exploring your solution.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <!-- =============================================== -->
      <!-- END: NEW LINK TRACKING FEATURES SECTION        -->
      <!-- =============================================== -->


      <!-- =============================================== -->
      <!-- START: NEW AUTHENTIC TONE FEATURES SECTION      -->
      <!-- =============================================== -->
      <div class="container mx-auto px-0 sm:px-6 py-20">
        <div class="hero">
          <div class="hero-content flex-col lg:flex-row items-center gap-12 lg:gap-20">

            <!-- Visual Side: Tone & Style Comparison -->
            <div class="flex-1 w-full lg:order-last order-1">
              <div class="bg-base-200/60 p-4 sm:p-6 rounded-2xl shadow-lg">
                <div class="flex flex-col items-center gap-4">

                  <!-- Step 1: User provides their style -->
                  <div class="w-full">
                    <p class="text-sm font-semibold text-base-content/60 mb-2 text-center">1. Provide Your Style Examples</p>
                    <div class="mockup-window border bg-neutral">
                      <div class="p-4 bg-neutral-focus text-neutral-content font-mono text-xs leading-relaxed">
                        <p class="whitespace-pre-wrap">Hey {{first_name}}, how do you do cold outreach at {{company_name}}?</p>
                        <p class="whitespace-pre-wrap mt-2">A lot of SaaS teams either send the same templated stuff that gets ignored, or they have something great to offer but it gets buried.</p>
                        <p class="whitespace-pre-wrap mt-2">What if every email felt like it was written just for that one lead?</p>
                        <p class="whitespace-pre-wrap mt-2">...</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Processing Icon -->
                  <div class="flex flex-col items-center my-2">
                      <i class="fas fa-palette text-4xl text-primary"></i>
                      <i class="fas fa-arrow-down text-2xl text-base-content/40 mt-2"></i>
                  </div>

                  <!-- Step 2: AI generates in that style -->
                  <div class="w-full">
                    <p class="text-sm font-semibold text-secondary mb-2 text-center">2. AI Generates In Your Voice</p>
                    <div class="mockup-window border bg-neutral">
                      <div class="p-4 bg-neutral-focus text-neutral-content font-mono text-xs leading-relaxed">
                        <p class="whitespace-pre-wrap">Hi {{FirstName}},</p>
                        <p class="whitespace-pre-wrap mt-2">Curious — how are you currently handling cold outreach at {{CompanyName}}?</p>
                        <p class="whitespace-pre-wrap mt-2">Most software teams I speak with either:</p>
                        <ol>
                          <li class="whitespace-pre-wrap mt-2">1. Send the same templated stuff that gets ignored</li>
                          <li class="whitespace-pre-wrap mt-2">2. Have something great to offer but it gets buried</li>
                        </ol>
                        <p class="whitespace-pre-wrap mt-2">What would it look like if every prospect you emailed felt like the message was written *just* for them?</p>
                        <p class="whitespace-pre-wrap mt-2">...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Text Side: Features & Benefits -->
            <div class="flex-1 text-center lg:text-left px-1 order-0">
              <div class="badge badge-primary badge-outline text-lg p-3 mb-4 font-semibold">
                AUTHENTIC MESSAGING
              </div>
              <h2 class="text-4xl lg:text-5xl font-bold mb-4">Your Voice,<br>Amplified by AI</h2>
              <p class="text-lg text-base-content/80 mb-6 leading-relaxed">
                Generic outreach doesn't work. Feed our AI examples of your writing—your own buisness tone and style—and it communicate with your unique tone, vocabulary, and style. The result is outreach that is authentically *yours*.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start justify-center lg:justify-start gap-3">
                  <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                  <span>Maintains your brand consistency across all outreach.</span>
                </li>
                <li class="flex items-start justify-center lg:justify-start gap-3">
                  <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                  <span>Builds genuine transperancy & trust by sounding like a human, not a generic template, or AI ;)</span>
                </li>
                <li class="flex items-start justify-center lg:justify-start gap-3">
                  <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                  <span>Eliminates the need to constantly edit and rewrite AI-generated text.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <!-- =============================================== -->
      <!-- END: NEW AUTHENTIC TONE FEATURES SECTION       -->
      <!-- =============================================== -->


        <!-- =============================================== -->
        <!-- START: NEW ROI ANALYTICS FEATURES SECTION (Corrected for Readability) -->
        <!-- =============================================== -->
        <div class="container mx-auto px-0 sm:px-6 py-20 bg-base-200">
          <div class="hero">
            <div class="hero-content flex-col lg:flex-row items-center gap-12 lg:gap-20">

              <!-- Visual Side: The ROI Dashboard -->
              <div class="flex-1 w-full order-1 lg:order-last">
                <div class="bg-base-200/60 p-4 sm:p-6 rounded-2xl shadow-lg">
                  <div class="card bg-neutral text-neutral-content shadow-xl">
                    <div class="card-body p-6">
                      <h3 class="card-title text-neutral-content mb-4">Campaign Performance: Q3</h3>
                      
                      <!-- Key Metrics with a LIGHT background for contrast -->
                      <div class="stats stats-vertical sm:stats-horizontal shadow bg-base-100 text-base-content rounded-lg">
                        <div class="stat p-4">
                          <div class="stat-figure text-secondary">
                            <i class="fas fa-user-plus text-3xl"></i>
                          </div>
                          <div class="stat-title">New Customers</div>
                          <div class="stat-value text-base-content">32</div>
                          <div class="stat-desc">22% increase</div>
                        </div>
                        
                        <div class="stat p-4">
                          <div class="stat-figure text-success">
                            <i class="fas fa-dollar-sign text-3xl"></i>
                          </div>
                          <div class="stat-title">New Revenue</div>
                          <div class="stat-value text-success">$41,800</div>
                          <div class="stat-desc">From this campaign</div>
                        </div>
                      </div>

                      <!-- Chart Area -->
                      <div class="mt-6">
                        <!-- CORRECTED: Text is now bright and readable -->
                        <p class="font-bold text-neutral-content mb-2">Lead Engagement & Conversion</p>
                        
                        <!-- Mock SVG Chart on the dark card background -->
                        <div class="w-full rounded-lg">
                            <svg class="w-full h-32" viewBox="0 0 200 100" preserveAspectRatio="none">
                                <!-- Grid Lines -->
                                <line x1="0" y1="25" x2="200" y2="25" stroke-width="0.5" class="stroke-current text-neutral-content/20"/>
                                <line x1="0" y1="50" x2="200" y2="50" stroke-width="0.5" class="stroke-current text-neutral-content/20"/>
                                <line x1="0" y1="75" x2="200" y2="75" stroke-width="0.5" class="stroke-current text-neutral-content/20"/>
                                <!-- Data Lines -->
                                <path d="M 0 80 L 40 70 L 80 50 L 120 55 L 160 30 L 200 20" fill="none" stroke-width="2.5" class="stroke-current text-secondary"/>
                                <path d="M 0 90 L 40 85 L 80 75 L 120 65 L 160 55 L 200 50" fill="none" stroke-width="2.5" class="stroke-current text-primary"/>
                            </svg>
                        </div>
                        <!-- CORRECTED: Legend text is now bright and readable -->
                        <div class="flex justify-center gap-6 mt-2 text-xs text-neutral-content">
                              <div class="flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-secondary"></span>Engagement</div>
                              <div class="flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-primary"></span>Conversions</div>
                          </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <!-- Text Side: Features & Benefits (Unchanged) -->
              <div class="flex-1 text-center lg:text-left px-1 order-0">
                <div class="badge badge-primary badge-outline text-lg p-3 mb-4 font-semibold">
                  MEASURABLE RESULTS
                </div>
                <h2 class="text-4xl lg:text-5xl font-bold mb-4">Connect Outreach to Revenue</h2>
                <p class="text-lg text-base-content/80 mb-6 leading-relaxed">
                  Don't just measure opens and clicks. Our comprehensive dashboard connects your outreach efforts directly to bottom-line results, so you can see the true ROI of every campaign and make intelligent, data-driven decisions.
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start justify-center lg:justify-start gap-3">
                    <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                    <span>Attribute new customers and revenue directly to specific outreach campaigns.</span>
                  </li>
                  <li class="flex items-start justify-center lg:justify-start gap-3">
                    <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                    <span>Visualize engagement trends to understand what drives conversions over time.</span>
                  </li>
                  <li class="flex items-start justify-center lg:justify-start gap-3">
                    <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                    <span>Confidently report on performance and justify your marketing spend with hard data.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <!-- =============================================== -->
        <!-- END: NEW ROI ANALYTICS FEATURES SECTION        -->
        <!-- =============================================== -->



        <!-- Email Comparison Section -->
        <div class="container mx-auto px-6 py-20">
            <div class="text-center mb-16">
                <div class="badge badge-primary badge-outline text-lg p-3 mb-4">
                    BEFORE VS AFTER
                </div>
                <h2 class="text-4xl lg:text-5xl font-bold mb-6">See the Difference AI Makes</h2>
                <p class="text-xl text-base-content/70 max-w-3xl mx-auto">
                    Compare generic templates with our AI-powered personalized emails
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <!-- Generic Email -->
                <div class="space-y-4">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center">
                            <i class="fas fa-times text-error"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-error">Generic Template</h3>
                    </div>
                    
                    <div class="mockup-browser border border-error/20 bg-base-100">
                        <div class="mockup-browser-toolbar">
                            <div class="input border border-base-300">Email Client</div>
                        </div>
                        <div class="p-6 border-t border-base-300 email-mockup">
                            <div class="border-b border-base-300 pb-4 mb-4">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="w-8 h-8 bg-base-300 rounded-full"></div>
                                    <div>
                                        <div class="font-semibold">sales@yourcompany.com</div>
                                        <div class="text-sm text-base-content/60">to: prospect@company.com</div>
                                    </div>
                                </div>
                                <div class="text-lg font-semibold">Partnership Opportunity</div>
                            </div>
                            
                            <div class="space-y-3 text-sm">
                                <p>Hi [First Name],</p>
                                <p>I hope this email finds you well. I wanted to reach out regarding a potential partnership opportunity with [Company Name].</p>
                                <p>Our company specializes in helping businesses like yours increase their revenue. I think we can help you too.</p>
                                <p>Would you be interested in a quick 15-minute call to discuss this further?</p>
                                <p>Best regards,<br>John Smith</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="alert alert-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        <span><strong>Problems:</strong> Generic, impersonal, no research, low response rate</span>
                    </div>
                </div>

                <!-- AI-Powered Email -->
                <div class="space-y-4">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                            <i class="fas fa-check text-success"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-success">AI-Powered Email</h3>
                    </div>
                    
                    <div class="mockup-browser border border-success/20 bg-base-100">
                        <div class="mockup-browser-toolbar">
                            <div class="input border border-base-300">Email Client</div>
                        </div>
                        <div class="p-6 border-t border-base-300 email-mockup">
                            <div class="border-b border-base-300 pb-4 mb-4">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs">AH</div>
                                    <div>
                                        <div class="font-semibold">ahmad@vibereach.com</div>
                                        <div class="text-sm text-base-content/60">to: sarah@techstart.com</div>
                                    </div>
                                </div>
                                <div class="text-lg font-semibold">Congrats on the TechStart Series A! 🚀</div>
                            </div>
                            
                            <div class="space-y-3 text-sm">
                                <p>Hi Sarah,</p>
                                <p>Just saw the news about TechStart's $5M Series A on TechCrunch - huge congratulations! The AI-powered customer service platform sounds like it's solving a real pain point.</p>
                                <p>I noticed from your LinkedIn post that you're scaling the sales team rapidly. At VibeReach, we've helped companies like yours increase their outbound response rates by 300% during growth phases.</p>
                                <p>Given TechStart's focus on AI, I thought you might find our approach interesting - we use AI to personalize cold outreach at scale, which might be perfect as you're building your enterprise sales motion.</p>
                                <p>Would you be open to a brief conversation about how we've helped similar AI startups accelerate their sales pipeline?</p>
                                <p>Best,<br>Ahmad</p>
                                <p class="text-xs text-base-content/60">P.S. - Love the company's mission of "making customer service human again"</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="alert alert-success">
                        <i class="fas fa-check-circle"></i>
                        <span><strong>Results:</strong> Personal, researched, relevant, 3x higher response rate</span>
                    </div>
                </div>
            </div>
        </div>




    <!-- Features Section -->
    <div id="features" class="bg-base-200/60 py-20">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <div class="badge badge-primary badge-outline text-lg p-3 mb-4">
                    FEATURES
                </div>
                <h2 class="text-4xl lg:text-5xl font-bold mb-6">Everything You Need to Scale Outreach</h2>
                <p class="text-xl text-base-content/70 max-w-3xl mx-auto">
                    Powerful features designed to maximize your outreach ROI
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <!-- Feature 1 -->
                <div class="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300">
                    <div class="card-body p-8">
                        <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-brain text-primary text-3xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">AI Research Assistant</h3>
                        <p class="text-base-content/70">
                            Automatically analyzes LinkedIn profiles, company websites, and recent news to find personalization opportunities.
                        </p>
                    </div>
                </div>

                <!-- Feature 2 -->
                <div class="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300">
                    <div class="card-body p-8">
                        <div class="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-palette text-secondary text-3xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Voice & Tone Matching</h3>
                        <p class="text-base-content/70">
                            Your buisness tone and style, the result outreach that is authentically *yours*.
                        </p>
                    </div>
                </div>

                <!-- Feature 3 -->
                <div class="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300">
                    <div class="card-body p-8">
                        <div class="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-chart-line text-accent text-3xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Advanced Analytics</h3>
                        <p class="text-base-content/70">
                            Track opens, clicks, replies, and conversions with relevant insights to operate based on math, not guess work.
                        </p>
                    </div>
                </div>

                <!-- Feature 4 -->
                <div class="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300">
                    <div class="card-body p-8">
                        <div class="w-16 h-16 bg-info/10 rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-sync text-info text-3xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Email Sequence</h3>
                        <p class="text-base-content/70">
                            Schedules emails based on the Campaign email sequence you make.
                        </p>
                    </div>
                </div>

                <!-- Feature 5 -->
                <div class="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300">
                    <div class="card-body p-8">
                        <div class="w-16 h-16 bg-warning/10 rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-shield-alt text-warning text-3xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Compliance & Deliverability</h3>
                        <p class="text-base-content/70">
                            Using your Mail Client SMTP to ensure your emails reach the inbox.
                        </p>
                    </div>
                </div>

                <!-- Feature 6 -->
                <div class="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300">
                    <div class="card-body p-8">
                        <div class="w-16 h-16 bg-error/10 rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-plug text-error text-3xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">CRM Integration</h3>
                        <p class="text-base-content/70">
                            Seamlessly integrates with popular CRMs like Salesforce, HubSpot, and Zoho.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>







      <!-- =============================================== -->
        <!-- START: FINAL CALL TO ACTION (CTA) SECTION      -->
        <!-- =============================================== -->
        <div class="px-4 py-10 md:py-28 bg-base-100 relative overflow-hidden">
          <!-- Left Side Graphics -->
          <div class="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-30 hidden lg:block">
            <div class="flex flex-col items-center space-y-8 pl-8">
              <!-- AI Brain Icon -->
              <div class="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <svg class="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <!-- Email Icon -->
              <div class="w-16 h-16 rounded-lg bg-secondary/20 flex items-center justify-center rotate-12">
                <svg class="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <!-- Target Icon -->
              <div class="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center -rotate-12">
                <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 22 12 18.27 5.82 22 7 13.87 2 9l6.91-.74L12 2z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Right Side Graphics -->
          <div class="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-40 hidden lg:block">
            <div class="flex flex-col items-center space-y-8 pr-8">
              <!-- Analytics Chart Icon -->
              <div class="w-18 h-18 rounded-lg bg-info/20 flex items-center justify-center -rotate-6">
                <svg class="w-10 h-10 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <!-- Lightning/Speed Icon -->
              <div class="w-16 h-16 rounded-full bg-warning/20 flex items-center justify-center rotate-12">
                <svg class="w-10 h-10 text-warning" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                </svg>
              </div>
              <!-- Connection/Network Icon -->
              <div class="w-14 h-14 rounded-lg bg-success/20 flex items-center justify-center">
                <svg class="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
            </div>
          </div>

          <div class="container mx-auto px-6 py-20 text-center relative z-10">
            <h2 class="text-4xl md:text-5xl font-bold text-base-content">
              Ready to Stop Guessing and Start Converting?
            </h2>
            <p class="text-lg text-base-content/70 mt-4 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your cold outreach from a numbers game into a science. Leverage AI to build real connections and see measurable results.
            </p>
            <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#early-access" class="btn btn-primary btn-lg gap-2 shadow-lg hover:scale-105 transition-transform">
                Get Early Access Now
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H4" /></svg>
              </a>
              <a href="https://gataraai.zohobookings.com/#/ceo-call" class="btn btn-outline btn-lg gap-2">
                <i class="fas fa-play"></i>
                Book Demo
              </a>
            </div>
            <p class="text-sm text-base-content/50 mt-4">Join the program & shape the future of outreach.</p>
          </div>
        </div>
        <!-- =============================================== -->
        <!-- END: FINAL CALL TO ACTION (CTA) SECTION        -->
        <!-- =============================================== -->



    



        <!-- =============================================== -->
        <!-- START: FOOTER SECTION                          -->
        <!-- =============================================== -->
       
       <footer class="w-full px-[25px] sm:px-4 py-6 pt-[5vh] flex flex-col items-center gap-4 text-base text-gray-600 bg-base-100 pb-0 sm:pb-6">
        <!-- Social Icons -->
        <div class="flex items-center justify-center gap-6">
          <a href="https://gatara.org" target="_blank" class="hover:text-primary text-xl">
            <i class="fas fa-globe"></i>
          </a>
          <a href="https://www.linkedin.com/company/gatara-ai" target="_blank" class="hover:text-primary text-xl">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>

        <!-- Footer Text -->
        <div class="text-center text-base text-lg">
          © 2025 <span class="font-semibold">GataraAI</span>, All rights reserved.
          <a href="mailto:info@gatara.org" class="ml-2 font-medium text-orange-500 hover:underline">Contact us</a>
        </div>
      </footer>

        <!-- =============================================== -->
        <!-- END: FOOTER SECTION                            -->
        <!-- =============================================== -->



























    </div>


    
  `
}