export function LandingPage() {
  return `
    <div class="min-h-screen bg-gradient-to-br from-base-200 to-base-300">
      <div class="container mx-auto px-6 py-20">
        <div class="hero min-h-[80vh]">
          <div class="hero-content flex-col lg:flex-row-reverse gap-16">
            <div class="flex-1 flex justify-center">
              <div class="card bg-base-100 shadow-2xl hover-lift">
                <div class="card-body p-8">
                  <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
                    <rect width="400" height="250" fill="#f1f5f9" rx="12"/>
                    <path d="M50 100 L150 70 L250 120 L350 90" stroke="#3b82f6" stroke-width="4" fill="none"/>
                    <circle cx="50" cy="100" r="8" fill="#3b82f6"/>
                    <circle cx="150" cy="70" r="8" fill="#3b82f6"/>
                    <circle cx="250" cy="120" r="8" fill="#3b82f6"/>
                    <circle cx="350" cy="90" r="8" fill="#3b82f6"/>
                    <text x="200" y="180" text-anchor="middle" fill="#64748b" font-family="Inter" font-size="16" font-weight="500">Outreach Performance Diagram</text>
                    <text x="200" y="200" text-anchor="middle" fill="#94a3b8" font-family="Inter" font-size="12">Response Rate Optimization</text>
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <h1 class="text-6xl font-bold gradient-text mb-6">B2B Cold Outreach</h1>
              <p class="text-xl text-base-content/70 mb-8 leading-relaxed">
                🔹 Engage potential leads through personalized, AI-powered cold outreach across email. 
                Capture attention with relevant messaging tailored to each prospect's industry and needs.
              </p>
              <div class="space-y-4">
                <a href="#hormozi-style-headline-generator" class="btn btn-primary btn-lg gap-2 hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Generate Hormozi-Style Headlines
                </a>
                <p class="text-sm text-base-content/60">Transform your cold outreach with AI-powered headline generation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}