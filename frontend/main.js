import './style.css'
import './fonts.css';
import { LandingPage } from './components/LandingPage.js'
import { HeadlineGenerator } from './components/HeadlineGenerator.js'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

class App {
  constructor() {
    this.currentPage = 'landing'
    this.appElement = document.querySelector('#app')
    this.init()
  }

  init() {
    this.setupRouter()
    this.render()
  }

  setupRouter() {
    window.addEventListener('hashchange', () => {
      this.handleRouteChange()
    })
    
    // Handle initial route
    this.handleRouteChange()
  }

  handleRouteChange() {
    const hash = window.location.hash.slice(1) || 'landing'
    this.currentPage = hash
    this.render()
  }

  render() {
    switch (this.currentPage) {
      case 'landing':
        this.appElement.innerHTML = LandingPage()
        break
      case 'hormozi-style-headline-generator':
        this.appElement.innerHTML = HeadlineGenerator()
        this.setupHeadlineGeneratorEvents()
        break
      default:
        this.appElement.innerHTML = LandingPage()
    }
  }

  setupHeadlineGeneratorEvents() {
    const userForm = document.getElementById('user-form')
    const aiForm = document.getElementById('ai-form')

    if (userForm) {
      userForm.addEventListener('submit', this.handleUserSubmit.bind(this))
    }

    if (aiForm) {
      aiForm.addEventListener('submit', this.handleAISubmit.bind(this))
    }
  }

  validateLinkedInURL(url) {
    const linkedinPattern = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/
    return linkedinPattern.test(url)
  }

  validateBusinessEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValidFormat = emailPattern.test(email)
    const isGmail = email.toLowerCase().includes('@gmail.com')
    return isValidFormat && !isGmail
  }

  showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId)
    const errorDiv = document.getElementById(`${fieldId}-error`)
    const errorSpan = errorDiv.querySelector('.label-text-alt')
    
    field.classList.add('input-error')
    errorSpan.textContent = message
    errorDiv.classList.remove('hidden')
  }

  clearFieldError(fieldId) {
    const field = document.getElementById(fieldId)
    const errorDiv = document.getElementById(`${fieldId}-error`)
    
    field.classList.remove('input-error')
    errorDiv.classList.add('hidden')
  }

  clearAllErrors() {
    ['name', 'linkedin', 'email'].forEach(fieldId => {
      this.clearFieldError(fieldId)
    })
  }

  validateUserForm(formData) {
    this.clearAllErrors()
    let isValid = true

    const name = formData.get('name')
    const linkedin = formData.get('linkedin')
    const email = formData.get('email')

    if (!name || name.trim().length < 2) {
      this.showFieldError('name', 'Please enter a valid full name')
      isValid = false
    }

    if (!linkedin || !this.validateLinkedInURL(linkedin)) {
      this.showFieldError('linkedin', 'Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/your-profile)')
      isValid = false
    }

    if (!email || !this.validateBusinessEmail(email)) {
      if (email && email.toLowerCase().includes('@gmail.com')) {
        this.showFieldError('email', 'Gmail addresses are not accepted. Please use your business email.')
      } else {
        this.showFieldError('email', 'Please enter a valid business email address')
      }
      isValid = false
    }

    return isValid
  }

  async handleUserSubmit(e) {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    
    if (!this.validateUserForm(formData)) {
      return
    }

    const data = {
      full_name: formData.get('name'),
      email: formData.get('email'),
      linkedin: formData.get('linkedin')
    }

    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]')
    const originalText = submitBtn.innerHTML
    submitBtn.innerHTML = `
      <span class="loading loading-spinner loading-sm"></span>
      Submitting...
    `
    submitBtn.disabled = true

    try {
      const response = await fetch('https://outreach.gatara.org/api/submit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()
      
      if (result.success) {
        this.showAIForm()
      } else {
        this.showError('Submission failed. Please try again.')
      }
    } catch (error) {
      this.showError('Network error. Please check your connection and try again.')
    } finally {
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
    }
  }

  async handleAISubmit(e) {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const data = {
      email_content: formData.get('email_content'),
      target_audience: formData.get('target_audience'),
      tone_of_voice: formData.get('tone_of_voice'),
      main_pain: formData.get('main_pain'),
      outcome: formData.get('outcome')
    }

    this.showLoader()

    try {
      const response = await fetch('https://outreach.gatara.org/api/ai-response/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()
      this.showResult(result.result)

    } catch (error) {
      this.showError('AI processing failed. Please try again.')
    }
  }

  showAIForm() {
    const userSection = document.getElementById('user-section')
    const aiSection = document.getElementById('ai-section')
    
    userSection.classList.add('hidden')
    aiSection.classList.remove('hidden')
    aiSection.classList.add('fade-in')
    
    // Scroll to top of AI section
    aiSection.scrollIntoView({ behavior: 'smooth' })
  }

  showLoader() {
    const aiSection = document.getElementById('ai-section')
    const loaderSection = document.getElementById('loader-section')
    
    aiSection.classList.add('hidden')
    loaderSection.classList.remove('hidden')
    loaderSection.classList.add('fade-in')
    
    // Scroll to loader
    loaderSection.scrollIntoView({ behavior: 'smooth' })
  }

  showResult(result) {
    const loaderSection = document.getElementById('loader-section')
    const resultSection = document.getElementById('result-section')

    loaderSection.classList.add('hidden')

    // Guard: if result is object, try to extract string
    const originalMarkdown = typeof result === 'string' ? result : result?.result || '⚠️ Invalid response format'

    // Transform the markdown to add newlines and bullet points
    const transformedMarkdown = originalMarkdown.replace(/(Pair \d+) (Subject: )?(.*?) (Headline: )?(.*?)(\n|$)/g, 
        "$1\n- Subject:\n$3\n- Headline:\n$5\n")

    const safeHTML = DOMPurify.sanitize(marked.parse(transformedMarkdown))

    resultSection.innerHTML = `
      <div class="card bg-base-100 shadow-2xl">
        <div class="card-body p-8">
          <div class="text-center mb-8">
            <h2 class="text-4xl font-bold text-base-content mb-4">Your Hormozi-Style Headlines & Subjects</h2>
            <div class="badge badge-success badge-lg">Generated Successfully!</div>
          </div>
          <div class="bg-base-200 rounded-lg p-6 mb-8 text-lg leading-relaxed whitespace-pre-line [&>p]:my-4">
            ${safeHTML}
          </div>
          <div class="text-center">
            <button onclick="window.location.href = '/'" class="btn btn-primary btn-lg gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Go Back Home ;)
            </button>
          </div>
        </div>
      </div>
    `
    resultSection.classList.remove('hidden')
    resultSection.classList.add('fade-in')
    
    // Scroll to results
    resultSection.scrollIntoView({ behavior: 'smooth' })
  }

  showError(message) {
    // Create toast notification
    const toast = document.createElement('div')
    toast.className = 'toast toast-top toast-end z-50'
    toast.innerHTML = `
      <div class="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>${message}</span>
      </div>
    `
    
    document.body.appendChild(toast)
    
    setTimeout(() => {
      toast.remove()
    }, 5000)
  }
}

new App()