export function LandingPage() {
  return `
    <div class="min-h-screen bg-gradient-to-br from-base-200 to-base-300">
      <!-- Modified Navbar -->
      <div class="navbar bg-base-100/80 backdrop-blur-sm rounded-box mx-auto mt-4 max-w-6xl shadow-lg">
        <div class="navbar-start">
          <div class="dropdown">
            <!-- Mobile menu button -->
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <!-- Mobile menu dropdown -->
            <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl">
              <li><a href="#how-it-works" class="text-lg">How it works</a></li>
              <li>
                <a class="text-lg">Parent</a>
                <ul class="p-2">
                  <li><a class="text-base">Submenu1</a></li>
                  <li><a class="text-base">Submenu2</a></li>
                </ul>
              </li>
              <li><a class="text-lg">Item 3</a></li>
            </ul>
          </div>
          <!-- Logo/Brand - larger text -->
          <a class="btn btn-ghost text-2xl font-bold">VibeReach</a>
        </div>
        
        <!-- Centered desktop menu -->
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal gap-2 px-1">
            <li><a href="#how-it-works" class="text-lg font-medium hover:bg-base-200 rounded-btn">How it works</a></li>
            <li>
              <details>
                <summary class="text-lg font-medium hover:bg-base-200 rounded-btn">Parent</summary>
                <ul class="p-2 bg-base-100 rounded-box shadow-lg">
                  <li><a class="text-base">Submenu 1</a></li>
                  <li><a class="text-base">Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a class="text-lg font-medium hover:bg-base-200 rounded-btn">Item 3</a></li>
          </ul>
        </div>
        
        <!-- Navbar end - larger button -->
        <div class="navbar-end">
          <a href="https://gatara.org/early-adopters-program/" class="btn btn-primary text-lg px-6">Get Early Access</a>
        </div>
      </div>

      <br>
      <div class="container mx-auto px-6 py-20">
        <div class="hero min-h-[80vh]">
          <div class="hero-content flex-col lg:flex-row-reverse gap-16">
            <div class="flex-1 flex justify-center">
              <img src="/hero.webp">
            </div>
            <div class="flex-1">
              <h1 class="text-6xl font-bold gradient-text mb-6">B2B Cold Outreach</h1>
              <p class="text-xl text-base-content/70 mb-8 leading-relaxed">
                🔹 Engage potential leads through personalized, AI-powered cold outreach across email. 
                Capture attention with relevant messaging tailored to each prospect's industry and needs.
              </p>

              <div class="space-y-4">
                <a href="https://gatara.org/early-adopters-program/" class="btn btn-primary btn-lg gap-2 hover:scale-105 transition-transform">
                  Get Early Access
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H4" />
                  </svg>
                </a>
              </div>
              
              <br>

              <div class="space-y-4">
                <a href="#hormozi-style-headline-generator" class="btn btn-primary btn-lg gap-2 hover:scale-105 transition-transform">
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

      <!-- DaisyUI Card Version -->
      <div class="flex justify-center p-4">
        <div class="card w-full max-w-5xl bg-neutral rounded-3xl border border-gray-600/60 p-8 transition-all duration-400 ease-in-out hover:shadow-2xl">
          <div class="card-body p-0">
            <!-- Card Header -->
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-2xl font-medium text-white">
                <i id="how-it-works" class="fas fa-bullhorn text-primary mr-2"></i>How it works?
              </h3>
            </div>
            
            <!-- Workflow Content -->
            <div class="space-y-6 text-white">
              <!-- Workflow Row -->
              <div class="flex flex-col lg:flex-row items-center gap-5">
                <!-- Step 1 -->
                <div class="flex-1 bg-white/10 rounded-xl p-6 text-center transition-all hover:-translate-y-2 hover:shadow-lg flex flex-col items-center">
                  <i class="fas fa-list-alt text-primary text-3xl mb-4"></i>
                  <h4 class="text-primary text-xl font-medium mb-3">1. Lead List Input</h4>
                  <p class="text-white/80">Basic Info, Emails, Website Links, LinkedIn Profiles</p>
                </div>
                
                <!-- Arrow (hidden on mobile) -->
                <div class="hidden lg:flex items-center justify-center text-white/50 text-2xl">
                  <i class="fas fa-arrow-right"></i>
                </div>
                
                <!-- Sources Column -->
                <div class="flex-2 w-full lg:w-auto">
                  <!-- Input Sources -->
                  <div class="flex flex-col lg:flex-row gap-4 mb-3">
                    <div class="flex-1 bg-white/8 rounded-lg p-4 text-center transition-all hover:-translate-y-1 flex flex-col items-center">
                      <i class="fas fa-user-edit text-primary text-xl mb-2"></i>
                      <p class="text-sm">Email Template</p>
                    </div>
                    
                    <div class="flex-1 bg-white/8 rounded-lg p-4 text-center transition-all hover:-translate-y-1 flex flex-col items-center">
                      <i class="fas fa-database text-primary text-xl mb-2"></i>
                      <p class="text-sm">Lead Info</p>
                    </div>
                    
                    <div class="flex-1 bg-white/8 rounded-lg p-4 text-center transition-all hover:-translate-y-1 flex flex-col items-center">
                      <i class="fas fa-palette text-primary text-xl mb-2"></i>
                      <p class="text-sm">Business Tone & Style</p>
                    </div>
                  </div>
                  
                  <!-- Converging Arrows -->
                  <div class="my-4 h-10 flex justify-center">
                    <svg viewBox="0 0 300 40" class="w-full h-full">
                      <line x1="50" y1="0" x2="150" y2="40" stroke="#d97757" stroke-width="2"/>
                      <line x1="150" y1="0" x2="150" y2="40" stroke="#d97757" stroke-width="2"/>
                      <line x1="250" y1="0" x2="150" y2="40" stroke="#d97757" stroke-width="2"/>
                    </svg>
                  </div>
                  
                  <!-- AI Processor -->
                  <div class="bg-primary/15 rounded-xl p-5 text-center mb-3">
                    <i class="fas fa-robot text-primary text-3xl mb-3"></i>
                    <h4 class="text-primary text-xl font-medium mb-2">2. AI Processing</h4>
                    <p class="text-white/80">Generates custom, personalized message</p>
                  </div>
                </div>
                
                <!-- Arrow (hidden on mobile) -->
                <div class="hidden lg:flex items-center justify-center text-white/50 text-2xl">
                  <i class="fas fa-arrow-right"></i>
                </div>
                
                <!-- Step 3 -->
                <div class="flex-1 bg-white/10 rounded-xl p-6 text-center transition-all hover:-translate-y-2 hover:shadow-lg flex flex-col items-center">
                  <i class="fas fa-paper-plane text-primary text-3xl mb-4"></i>
                  <h4 class="text-primary text-xl font-medium mb-3">3. Send Email</h4>
                  <p class="text-white/80">Deliver relevant outreach to prospect with your business tone & style</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <!-- =============================================== -->
      <!-- START: NEW AI PERSONALIZATION FEATURES SECTION -->
      <!-- =============================================== -->
      <div class="container mx-auto px-6 py-20">
        <div class="hero">
          <div class="hero-content flex-col lg:flex-row items-center gap-12 lg:gap-20">

            <!-- Visual Side: Before & After -->
            <div class="flex-1 w-full lg:order-last">
              <div class="bg-base-200/60 p-6 rounded-2xl shadow-lg">
                <div class="flex flex-col items-center gap-4">
                  <!-- Before -->
                  <div class="w-full">
                    <p class="text-sm font-semibold text-base-content/60 mb-2 text-center">Generic Template</p>
                    <div class="mockup-code bg-neutral text-neutral-content text-sm">
                      <pre data-prefix="$"><code>Hi {first_name},</code></pre> 
                      <pre data-prefix=">" class="text-warning"><code>I saw your company {company_name}...</code></pre> 
                      <pre data-prefix=">" class="text-warning"><code>I think we can help.</code></pre>
                    </div>
                  </div>

                  <!-- AI Processing Icon -->
                  <div class="flex flex-col items-center my-2">
                      <i class="fas fa-robot text-4xl text-primary mb-2"></i>
                      <i class="fas fa-arrow-down text-2xl text-base-content/40"></i>
                  </div>

                  <!-- After -->
                  <div class="w-full">
                    <p class="text-sm font-semibold text-secondary mb-2 text-center">AI-Personalized & Stylized</p>
                    <div class="mockup-code bg-neutral text-neutral-content text-sm">
                      <pre data-prefix="$"><code>Hi Alex,</code></pre>
                      <pre data-prefix=">" class="text-success"><code>Noticed GT-Reach's launch on <span class="badge badge-secondary font-bold">Product Hunt</span>.</code></pre>
                      <pre data-prefix=">" class="text-success"><code>The way you're tackling B2B outreach is impressive.</code></pre>
                      <pre data-prefix=">" class="text-success"><code>I saw you mentioned <span class="badge badge-secondary font-bold">scaling challenges</span> in your</code></pre>
                      <pre data-prefix=">" class="text-success"><code>latest <span class="badge badge-secondary font-bold">LinkedIn</span> post...</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Text Side: Features & Benefits -->
            <div class="flex-1 text-center lg:text-left">
              <div class="badge badge-primary badge-outline text-lg p-3 mb-4 font-semibold">
                HYPER-PERSONALIZATION
              </div>
              <h2 class="text-4xl lg:text-5xl font-bold mb-4">Go Beyond <code class="text-primary">{first_name}</code></h2>
              <p class="text-lg text-base-content/80 mb-6 leading-relaxed">
                Our AI engine acts as your research assistant. It analyzes your lead's information and your company's unique voice to craft emails that are impossible to ignore.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start justify-center lg:justify-start gap-3">
                  <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                  <span>Analyzes LinkedIn profiles and company websites for relevant insights.</span>
                </li>
                <li class="flex items-start justify-center lg:justify-start gap-3">
                  <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                  <span>Adapts to your business tone and style for authentic communication.</span>
                </li>
                <li class="flex items-start justify-center lg:justify-start gap-3">
                  <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                  <span>Generates unique, compelling opening lines that build instant rapport.</span>
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
      <div class="container mx-auto px-6 py-20">
        <div class="hero">
          <div class="hero-content flex-col lg:flex-row items-center gap-12 lg:gap-20">

            <!-- Visual Side: Link Tracking Process -->
            <div class="flex-1 w-full">
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
                        <p>...thought you'd find this useful:</p>
                        <a href="#" class="link link-primary">yourwebsite.com/case-study</a>
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
                        <h4 class="card-title text-base text-neutral-content">Report for: Alex Johnson</h4>
                        
                        <!-- CORRECTED STATS COMPONENT -->
                        <div class="stats stats-vertical sm:stats-horizontal shadow bg-base-100 my-2">
                          <div class="stat p-3">
                            <div class="stat-title">Total Clicks</div>
                            <div class="stat-value text-base-content text-2xl">7</div>
                          </div>
                          <div class="stat p-3">
                            <div class="stat-title">Lead Status</div>
                            <div class="stat-value text-error text-2xl">Hot</div>
                          </div>
                        </div>
                        
                        <div class="mt-2">
                          <!-- CORRECTED TEXT COLOR -->
                          <p class="text-sm font-semibold text-neutral-content mb-2">Click Details:</p>
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
            <div class="flex-1 text-center lg:text-left">
              <div class="badge badge-primary badge-outline text-lg p-3 mb-4 font-semibold">
                PRECISION ANALYTICS
              </div>
              <h2 class="text-4xl lg:text-5xl font-bold mb-4">Track Every Click, Uncover Intent</h2>
              <p class="text-lg text-base-content/80 mb-6 leading-relaxed">
                Stop guessing. Our system automatically converts every link into a unique, trackable URL for each prospect. See exactly who is engaging and what they're interested in to prioritize your follow-ups.
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
                  <span>Get real-time insights to identify "hot leads" who are actively exploring your solution.</span>
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
      <div class="container mx-auto px-6 py-20">
        <div class="hero">
          <div class="hero-content flex-col lg:flex-row items-center gap-12 lg:gap-20">

            <!-- Visual Side: Tone & Style Comparison -->
            <div class="flex-1 w-full lg:order-last">
              <div class="bg-base-200/60 p-4 sm:p-6 rounded-2xl shadow-lg">
                <div class="flex flex-col items-center gap-4">

                  <!-- Step 1: User provides their style -->
                  <div class="w-full">
                    <p class="text-sm font-semibold text-base-content/60 mb-2 text-center">1. Provide Your Style Examples</p>
                    <div class="mockup-window border bg-neutral">
                      <div class="p-4 bg-neutral-focus text-neutral-content font-mono text-xs leading-relaxed">
                        <p class="whitespace-pre-wrap">"Hey team, quick update on the Q3 numbers..."</p>
                        <p class="whitespace-pre-wrap mt-2">"To whom it may concern, this letter serves as formal notification..."</p>
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
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <!-- Casual Output -->
                      <div class="border bg-neutral rounded-lg p-3">
                        <p class="font-bold text-sm text-center text-neutral-content mb-2">Casual Tone Output</p>
                        <p class="text-xs text-neutral-content/80">Hey Alex, just saw you launched on PH. Killer stuff! Let's connect?</p>
                      </div>
                      <!-- Formal Output -->
                      <div class="border bg-neutral rounded-lg p-3">
                        <p class="font-bold text-sm text-center text-neutral-content mb-2">Formal Tone Output</p>
                        <p class="text-xs text-neutral-content/80">Dear Mr. Johnson, Congratulations on the successful launch. I propose a brief call to discuss potential synergies.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Text Side: Features & Benefits -->
            <div class="flex-1 text-center lg:text-left">
              <div class="badge badge-primary badge-outline text-lg p-3 mb-4 font-semibold">
                AUTHENTIC MESSAGING
              </div>
              <h2 class="text-4xl lg:text-5xl font-bold mb-4">Your Voice, Amplified by AI</h2>
              <p class="text-lg text-base-content/80 mb-6 leading-relaxed">
                Generic outreach doesn't work. Feed our AI examples of your writing—from formal reports to casual DMs—and it learns to communicate with your unique tone, vocabulary, and style. The result is outreach that is authentically *yours*.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start justify-center lg:justify-start gap-3">
                  <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                  <span>Maintains your personal or company brand consistency across all outreach.</span>
                </li>
                <li class="flex items-start justify-center lg:justify-start gap-3">
                  <i class="fas fa-check-circle text-secondary mt-1.5"></i>
                  <span>Builds genuine rapport by sounding like a human, not a generic template.</span>
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
        <div class="container mx-auto px-6 py-20">
          <div class="hero">
            <div class="hero-content flex-col lg:flex-row items-center gap-12 lg:gap-20">

              <!-- Visual Side: The ROI Dashboard -->
              <div class="flex-1 w-full">
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
              <div class="flex-1 text-center lg:text-left">
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


          <!-- =============================================== -->
        <!-- START: FINAL CALL TO ACTION (CTA) SECTION      -->
        <!-- =============================================== -->
        <div class="bg-base-200/60">
          <div class="container mx-auto px-6 py-20 text-center">
            <h2 class="text-4xl md:text-5xl font-bold text-base-content">
              Ready to Stop Guessing and Start Converting?
            </h2>
            <p class="text-lg text-base-content/70 mt-4 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your cold outreach from a numbers game into a science. Leverage AI to build real connections and see measurable results.
            </p>
            <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://gatara.org/early-adopters-program/" class="btn btn-primary btn-lg gap-2 shadow-lg hover:scale-105 transition-transform">
                Get Early Access Now
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H4" /></svg>
              </a>
              <a href="#how-it-works" class="btn btn-ghost btn-lg">
                See How It Works
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
       
       <footer class="w-full px-6 py-6 flex flex-col items-center gap-4 text-base text-gray-600">
  <!-- Social Icons -->
  <div class="flex items-center justify-center gap-6">
    <a href="https://gatara.org" target="_blank" class="hover:text-primary text-xl">
      <i class="fas fa-globe"></i>
    </a>
    <a href="https://www.linkedin.com/company/gataraai" target="_blank" class="hover:text-primary text-xl">
      <i class="fab fa-linkedin"></i>
    </a>
  </div>

  <!-- Footer Text -->
  <div class="text-center text-base text-lg">
    © 2025 <span class="font-semibold">GataraAI</span>, All rights reserved.
    <a href="/contact" class="ml-2 font-medium text-orange-500 hover:underline">Contact us</a>
  </div>
</footer>



        <!-- =============================================== -->
        <!-- END: FOOTER SECTION                            -->
        <!-- =============================================== -->














        <!-- Hero Section -->
    <div class="container mx-auto px-6 py-16">
        <div class="hero min-h-[85vh]">
            <div class="hero-content flex-col lg:flex-row-reverse gap-16 max-w-7xl">
                <!-- Hero Image/Visual -->
                <div class="flex-1 flex justify-center">
                    <div class="relative">
                        <div class="mockup-window border-2 border-primary/20 bg-base-100 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                            <div class="flex justify-center px-4 py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
                                <div class="text-center">
                                    <div class="stats stats-vertical shadow-lg bg-base-100">
                                        <div class="stat">
                                            <div class="stat-figure text-primary">
                                                <i class="fas fa-chart-line text-2xl"></i>
                                            </div>
                                            <div class="stat-title">Response Rate</div>
                                            <div class="stat-value text-primary">47%</div>
                                            <div class="stat-desc">↗︎ 340% increase</div>
                                        </div>
                                        <div class="stat">
                                            <div class="stat-figure text-secondary">
                                                <i class="fas fa-envelope-open text-2xl"></i>
                                            </div>
                                            <div class="stat-title">Emails Sent</div>
                                            <div class="stat-value text-secondary">2.1K</div>
                                            <div class="stat-desc">This month</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Floating elements -->
                        <div class="absolute -top-4 -right-4 badge badge-success gap-2 p-4 pulse-slow">
                            <i class="fas fa-check"></i>
                            AI-Powered
                        </div>
                    </div>
                </div>

                <!-- Hero Text -->
                <div class="flex-1">
                    <div class="badge badge-primary badge-outline text-base p-3 mb-4">
                        🚀 OUTREACH REVOLUTION
                    </div>
                    <h1 class="text-5xl lg:text-7xl font-bold gradient-text mb-6 leading-tight">
                        Turn Cold Emails Into 
                        <span class="text-primary">Hot Leads</span>
                    </h1>
                    <p class="text-xl text-base-content/80 mb-8 leading-relaxed max-w-2xl">
                        Stop sending generic emails that get ignored. Our AI analyzes your prospects' LinkedIn profiles, company websites, and recent activity to craft personalized messages that actually get responses.
                    </p>

                    <!-- Key Benefits -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <i class="fas fa-brain text-primary"></i>
                            </div>
                            <span class="font-medium">AI-Powered Personalization</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                                <i class="fas fa-chart-line text-secondary"></i>
                            </div>
                            <span class="font-medium">3x Higher Response Rates</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                                <i class="fas fa-clock text-accent"></i>
                            </div>
                            <span class="font-medium">Save 10+ Hours Weekly</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-info/10 rounded-full flex items-center justify-center">
                                <i class="fas fa-target text-info"></i>
                            </div>
                            <span class="font-medium">Precision Targeting</span>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="https://gatara.org/early-adopters-program/" class="btn btn-primary btn-lg gap-2 hover:scale-105 transition-transform shadow-lg">
                            <i class="fas fa-rocket"></i>
                            Start Free Trial
                        </a>
                        <a href="#demo" class="btn btn-outline btn-lg gap-2">
                            <i class="fas fa-play"></i>
                            Watch Demo
                        </a>
                    </div>
                    
                    <!-- Social Proof -->
                    <div class="mt-8 pt-6 border-t border-base-300">
                        <p class="text-sm text-base-content/60 mb-3">Trusted by 500+ sales teams</p>
                        <div class="flex items-center gap-6 opacity-60">
                            <div class="badge badge-outline">Startup Inc.</div>
                            <div class="badge badge-outline">TechCorp</div>
                            <div class="badge badge-outline">SalesForce Pro</div>
                            <div class="badge badge-outline">+497 more</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



     <!-- How It Works Section -->
    <div id="how-it-works" class="bg-base-100 py-20">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <div class="badge badge-primary badge-outline text-lg p-3 mb-4">
                    HOW IT WORKS
                </div>
                <h2 class="text-4xl lg:text-5xl font-bold mb-6">From Lead List to Closed Deals</h2>
                <p class="text-xl text-base-content/70 max-w-3xl mx-auto">
                    Our AI-powered platform transforms your cold outreach process in three simple steps
                </p>
            </div>

            <!-- Process Flow -->
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Step 1 -->
                    <div class="relative">
                        <div class="card bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div class="card-body text-center p-8">
                                <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i class="fas fa-upload text-2xl text-primary-content"></i>
                                </div>
                                <h3 class="text-2xl font-bold mb-4">1. Upload Your Leads</h3>
                                <p class="text-base-content/70 mb-6">
                                    Import your lead list with basic info, LinkedIn profiles, and company websites. Our AI does the rest.
                                </p>
                                <div class="mockup-code bg-base-200 text-left">
                                    <pre class="text-sm"><code>📋 Lead List
Name: Sarah Johnson
Company: TechStart Inc.
LinkedIn: /in/sarah-johnson-ceo
Website: techstart.com</code></pre>
                                </div>
                            </div>
                        </div>
                        {/* Arrow */}
                        <div class="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary text-2xl">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="relative">
                        <div class="card bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div class="card-body text-center p-8">
                                <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i class="fas fa-robot text-2xl text-secondary-content"></i>
                                </div>
                                <h3 class="text-2xl font-bold mb-4">2. AI Analyzes & Personalizes</h3>
                                <p class="text-base-content/70 mb-6">
                                    Our AI researches each prospect and creates personalized messages that match your tone and style.
                                </p>
                                <div class="bg-base-200 rounded-lg p-4 text-left">
                                    <div class="flex items-center gap-2 mb-2">
                                        <div class="loading loading-spinner loading-sm text-secondary"></div>
                                        <span class="text-sm">Analyzing LinkedIn profile...</span>
                                    </div>
                                    <div class="flex items-center gap-2 mb-2">
                                        <i class="fas fa-check text-success text-sm"></i>
                                        <span class="text-sm">Company research complete</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fas fa-check text-success text-sm"></i>
                                        <span class="text-sm">Personalized message ready</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-secondary text-2xl">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="relative">
                        <div class="card bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div class="card-body text-center p-8">
                                <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i class="fas fa-paper-plane text-2xl text-accent-content"></i>
                                </div>
                                <h3 class="text-2xl font-bold mb-4">3. Send & Track Results</h3>
                                <p class="text-base-content/70 mb-6">
                                    Send personalized emails and track every interaction with detailed analytics and follow-up suggestions.
                                </p>
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
        </div>
    </div>




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
                                <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs">JS</div>
                                <div>
                                    <div class="font-semibold">john@gtreach.com</div>
                                    <div class="text-sm text-base-content/60">to: sarah@techstart.com</div>
                                </div>
                            </div>
                            <div class="text-lg font-semibold">Congrats on the TechStart Series A! 🚀</div>
                        </div>
                        
                        <div class="space-y-3 text-sm">
                            <p>Hi Sarah,</p>
                            <p>Just saw the news about TechStart's $5M Series A on TechCrunch - huge congratulations! The AI-powered customer service platform sounds like it's solving a real pain point.</p>
                            <p>I noticed from your LinkedIn post that you're scaling the sales team rapidly. At GT-Reach, we've helped companies like yours increase their outbound response rates by 300% during growth phases.</p>
                            <p>Given TechStart's focus on AI, I thought you might find our approach interesting - we use AI to personalize cold outreach at scale, which might be perfect as you're building your enterprise sales motion.</p>
                            <p>Would you be open to a brief conversation about how we've helped similar AI startups accelerate their sales pipeline?</p>
                            <p>Best,<br>John</p>
                            <p class="text-xs text-base-content/60">P.S. - Love the company's mission of "making customer service human again" 👏</p>
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
                            Learns your writing style and adapts messages to match your authentic voice and brand personality.
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
                            Track opens, clicks, replies, and conversions with detailed insights to optimize your campaigns.
                        </p>
                    </div>
                </div>

                <!-- Feature 4 -->
                <div class="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300">
                    <div class="card-body p-8">
                        <div class="w-16 h-16 bg-info/10 rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-sync text-info text-3xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Smart Follow-ups</h3>
                        <p class="text-base-content/70">
                            Automatically schedules and personalizes follow-up emails based on prospect behavior and engagement.
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
                            Built-in compliance checks and deliverability optimization to ensure your emails reach the inbox.
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
                            Seamlessly integrates with popular CRMs like Salesforce, HubSpot, and Pipedrive.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>



























    </div>


    
  `
}