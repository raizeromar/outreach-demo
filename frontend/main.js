import './style.css'
import './fonts.css';
import { LandingPage } from './components/LandingPage.js'
import { HeadlineGenerator } from './components/HeadlineGenerator.js'
import { EarlyAccess } from './components/EarlyAccess.js'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

class App {
  constructor() {
    this.currentPage = 'landing'
    this.appElement = document.querySelector('#app')
    this.currentStep = 1
    this.totalSteps = 13
    this.setupEarlyAccessEvents()
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
      case 'early-access':
        this.appElement.innerHTML = EarlyAccess()
        this.setupEarlyAccessEvents()
        break  
      default:
        this.appElement.innerHTML = LandingPage()
    }
  }




  setupEarlyAccessEvents() {
    const startFormBtn = document.getElementById('start-form')
    const nextBtn = document.getElementById('next-btn')
    const prevBtn = document.getElementById('prev-btn')
    const submitBtn = document.getElementById('submit-btn')
    const form = document.getElementById('early-access-form')

    if (startFormBtn) {
      startFormBtn.addEventListener('click', this.showForm.bind(this))
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', this.nextStep.bind(this))
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', this.prevStep.bind(this))
    }

    if (form) {
      form.addEventListener('submit', this.handleFormSubmit.bind(this))
    }
  }

  showForm() {
    const welcomeScreen = document.getElementById('welcome-screen')
    const formContainer = document.getElementById('form-container')
    
    welcomeScreen.classList.add('hidden')
    formContainer.classList.remove('hidden')
    formContainer.classList.add('fade-in')
  }

  nextStep() {
    if (!this.validateCurrentStep()) {
      return
    }

    if (this.currentStep < this.totalSteps) {
      this.hideCurrentStep()
      this.currentStep++
      this.showCurrentStep()
      this.updateProgress()
      this.updateButtons()
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.hideCurrentStep()
      this.currentStep--
      this.showCurrentStep()
      this.updateProgress()
      this.updateButtons()
    }
  }

  validateCurrentStep() {
    const currentStepElement = document.querySelector(`.form-step[data-step="${this.currentStep}"]`)
    const inputs = currentStepElement.querySelectorAll('input[required]')
    
    for (let input of inputs) {
      if (!input.value.trim()) {
        input.focus()
        this.showError('Please fill in all required fields')
        return false
      }
      
      if (input.type === 'email' && !this.validateEmail(input.value)) {
        input.focus()
        this.showError('Please enter a valid email address')
        return false
      }
      
      if (input.type === 'url' && !this.validateURL(input.value)) {
        input.focus()
        this.showError('Please enter a valid URL')
        return false
      }
    }

 
    // Check radio buttons
    const radioGroups = currentStepElement.querySelectorAll('input[type="radio"][required]')
    const radioNames = [...new Set([...radioGroups].map(radio => radio.name))]
    
    for (let name of radioNames) {
      const checked = currentStepElement.querySelector(`input[name="${name}"]:checked`)
      if (!checked) {
        this.showError('Please select an option')
        return false
      }
    }
    
    return true
  }

  validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidFormat = emailPattern.test(email);
    
    if (!isValidFormat) return false;
    
    // List of personal email domains to exclude
    const personalDomains = [
        'gmail.com',
        'outlook.com',
        'hotmail.com',
        'yahoo.com',
        'ymail.com',
        'protonmail.com',
        'icloud.com',
        'mail.com',
        'example.com',
        'aol.com',
        'duck.com'
    ];
    
    const domain = email.split('@')[1].toLowerCase();
    return !personalDomains.includes(domain);
  }

  validateURL(url) {
    try {
      // Add https:// if no protocol is present
      if (!url.match(/^https?:\/\//i)) {
        url = 'https://' + url;
      }
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  hideCurrentStep() {
    const currentStepElement = document.querySelector(`.form-step[data-step="${this.currentStep}"]`)
    if (currentStepElement) {
      currentStepElement.classList.remove('active')
      currentStepElement.style.opacity = '0'
      setTimeout(() => {
        currentStepElement.style.display = 'none'
      }, 300)
    }
  }

  showCurrentStep() {
    const currentStepElement = document.querySelector(`.form-step[data-step="${this.currentStep}"]`)
    if (currentStepElement) {
      currentStepElement.style.display = 'block'
      setTimeout(() => {
        currentStepElement.style.opacity = '1'
        currentStepElement.classList.add('active')
      }, 50)
    }
  }

  updateProgress() {
    const progressBar = document.getElementById('progress-bar')
    const progressPercent = (this.currentStep / this.totalSteps) * 100
    const progressPercentDispaly = document.getElementById('progress-percent')
    const progressText = document.getElementById('progress-text')
    const currentStepDisplay = document.getElementById('current-step')

     if (progressText && currentStepDisplay) {
      currentStepDisplay.textContent = this.currentStep
      progressText.textContent = `${this.currentStep}`

    }

    if (progressPercentDispaly) {
      progressPercentDispaly.textContent = `${Math.round(progressPercent)}%`
    }

    if (progressBar) {
      progressBar.style.width = `${progressPercent}%`
    }

    // Update step indicators
    const steps = document.querySelectorAll('.step')
    steps.forEach((step, index) => {
      if (index < this.currentStep) {
        step.classList.add('step-primary')
      } else {
        step.classList.remove('step-primary')
      }
    })
  }

  updateButtons() {
    const nextBtn = document.getElementById('next-btn')
    const prevBtn = document.getElementById('prev-btn')
    const submitBtn = document.getElementById('submit-btn')

    if (prevBtn) {
      prevBtn.disabled = this.currentStep === 1
    }

    if (this.currentStep === this.totalSteps) {
      if (nextBtn) nextBtn.classList.add('hidden')
      if (submitBtn) submitBtn.classList.remove('hidden')
    } else {
      if (nextBtn) nextBtn.classList.remove('hidden')
      if (submitBtn) submitBtn.classList.add('hidden')
    }
  }
  
  async handleFormSubmit(e) {
    e.preventDefault();
    
    // Validate current step
    if (!this.validateCurrentStep()) return;

    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Add UTM parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    ['utm_id', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref'].forEach(param => {
      if (urlParams.has(param)) data[param] = urlParams.get(param);
    });

    // Add timestamp
    data.timestamp = new Date().toISOString();

    // Show loading state
    const submitBtn = document.getElementById('submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <span class="loading loading-spinner loading-sm"></span>
      Submitting...
    `;
    submitBtn.disabled = true;

    try {
      const url = new URL('https://script.google.com/macros/s/AKfycbzgO2EG_gIkLvHgeZu3N0uTcd_16ZUrnwUwO29T_FJrtg883JK8tVqTW2sjc0xt_iYf9g/exec');
      url.search = new URLSearchParams(data).toString();

      const response = await fetch(url, { method: 'GET', redirect: 'follow' });
      
      if (!response.ok) throw new Error('Submission failed');
      this.showThankYou();
      
    } catch (error) {
      console.error('Submission error:', error);
      this.showError('Submission failed. Please try again.');
      
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  }


  showThankYou() {
    const formContainer = document.getElementById('form-container')
    const thankYouScreen = document.getElementById('thank-you-screen')
    
    formContainer.classList.add('hidden')
    thankYouScreen.classList.remove('hidden')
    thankYouScreen.classList.add('fade-in')
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
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidFormat = emailPattern.test(email);
    
    if (!isValidFormat) return false;
    
    // List of personal email domains to exclude
    const personalDomains = [
        'gmail.com',
        'outlook.com',
        'hotmail.com',
        'yahoo.com',
        'ymail.com',
        'protonmail.com',
        'icloud.com',
        'mail.com',
        'example.com',
        'aol.com',
        'duck.com'
    ];
    
    const domain = email.split('@')[1].toLowerCase();
    return !personalDomains.includes(domain);
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
      if (email) {
          const domain = email.split('@')[1]?.toLowerCase();
          const personalDomains = [
            'gmail.com',
            'outlook.com',
            'hotmail.com',
            'yahoo.com',
            'ymail.com',
            'protonmail.com',
            'icloud.com',
            'mail.com',
            'example.com',
            'aol.com',
            'duck.com'
          ];
          
          if (domain && personalDomains.includes(domain)) {
              this.showFieldError('email', `Email addresses from ${domain} are not accepted. Please use your business email.`);
          } else {
              this.showFieldError('email', 'Please enter a valid business email address');
          }
      } else {
          this.showFieldError('email', 'Please enter a valid business email address');
      }
      isValid = false;
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