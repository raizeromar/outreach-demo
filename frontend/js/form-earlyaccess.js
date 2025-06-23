import './form.css';
import Navigo from 'navigo';

const router = new Navigo('/');

// Extract UTM and campaign parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Store them in JS variables
const trackingParams = {
  utm_id: urlParams.get('utm_id') || '',
  utm_source: urlParams.get('utm_source') || '',
  utm_medium: urlParams.get('utm_medium') || '',
  utm_campaign: urlParams.get('utm_campaign') || '',
  utm_term: urlParams.get('utm_term') || '',
  utm_content: urlParams.get('utm_content') || '',
  ref: urlParams.get('ref') || '',
};

// Function to handle form navigation
function setupFormNavigation() {
  const formSteps = document.querySelectorAll('.form-step');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  const progressPercent = document.getElementById('progress-percent');
  const currentStepDisplay = document.getElementById('current-step');
  
  let currentStep = 1;
  const totalSteps = formSteps.length;

  function updateProgress() {
    const progress = (currentStep / totalSteps) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Step ${currentStep} of ${totalSteps}`;
    progressPercent.textContent = `${Math.round(progress)}%`;
    currentStepDisplay.textContent = currentStep;
    
    // Update button visibility
    prevBtn.disabled = currentStep === 1;
    nextBtn.classList.toggle('hidden', currentStep === totalSteps);
    submitBtn.classList.toggle('hidden', currentStep !== totalSteps);
  }

  function showStep(step) {
    formSteps.forEach((formStep, index) => {
      formStep.classList.toggle('active', index + 1 === step);
      formStep.classList.toggle('hidden', index + 1 !== step);
    });
    currentStep = step;
    updateProgress();
  }

  prevBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      showStep(currentStep - 1);
    }
  });

  nextBtn.addEventListener('click', () => {
    // Validate current step before proceeding
    const currentFormStep = document.querySelector(`.form-step[data-step="${currentStep}"]`);
    const requiredFields = currentFormStep.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('input-error');
        const errorMsg = field.closest('.form-control').querySelector('.error-message');
        if (errorMsg) {
          errorMsg.style.display = 'block';
        }
      } else {
        field.classList.remove('input-error');
        const errorMsg = field.closest('.form-control').querySelector('.error-message');
        if (errorMsg) {
          errorMsg.style.display = 'none';
        }
      }
    });

    if (isValid && currentStep < totalSteps) {
      showStep(currentStep + 1);
    }
  });

  // Initialize
  showStep(1);
}

// Function to handle form submission
async function handleFormSubmission(e) {
  e.preventDefault();
  
  // Create and show the popup with the loader
  const popup = createPopup(`
    <div class="banter-loader">
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
      <div class="banter-loader__box"></div>
    </div>
  `);

  const formData = {
    // Personal Information
    firstName: e.target.querySelector('[name="firstName"]').value,
    lastName: e.target.querySelector('[name="lastName"]').value,
    email: e.target.querySelector('[name="email"]').value,
    position: e.target.querySelector('[name="position"]').value,
    linkedin: e.target.querySelector('[name="linkedin"]').value,
    
    // Company Information
    company: e.target.querySelector('[name="company"]').value,
    website: e.target.querySelector('[name="website"]').value,
    
    // Outreach Information
    outreach: e.target.querySelector('[name="outreach"]:checked')?.value,
    automation: e.target.querySelector('[name="automation"]:checked')?.value,
    tools: e.target.querySelector('[name="tools"]').value,
    challenge: e.target.querySelector('[name="challenge"]').value,
    volume: e.target.querySelector('[name="volume"]:checked')?.value,
    crm: e.target.querySelector('[name="crm"]').value,
    chat: e.target.querySelector('[name="chat"]:checked')?.value,
    
    // Add timestamp
    timestamp: new Date().toISOString(),

    // Tracking parameters
    utm_id: trackingParams.utm_id,
    utm_source: trackingParams.utm_source,
    utm_medium: trackingParams.utm_medium, 
    utm_campaign: trackingParams.utm_campaign,
    utm_term: trackingParams.utm_term,
    utm_content: trackingParams.utm_content,
    ref: trackingParams.ref
  };

  try {
    // Construct the URL with query parameters
    const url = new URL('https://script.google.com/macros/s/AKfycbzgO2EG_gIkLvHgeZu3N0uTcd_16ZUrnwUwO29T_FJrtg883JK8tVqTW2sjc0xt_iYf9g/exec');
    url.search = new URLSearchParams(formData).toString();

    // Send a GET request
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow'
    });

    if (response.ok) {
      // Hide form and show thank you screen
      document.getElementById('form-container').classList.add('hidden');
      document.getElementById('thank-you-screen').classList.remove('hidden');
      
      // Show chat option if they selected "yes"
      if (formData.chat === 'yes') {
        document.getElementById('chat-option').classList.remove('hidden');
      }
      
      // Close the popup
      closePopup(popup);
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error:', error);
    popup.querySelector('.card-image').innerHTML = `
      <div class="error-message">
        Failed to submit the form.<br>Please check your connection and try again.
      </div>
    `;
    setTimeout(() => {
      closePopup(popup);
    }, 3000);
  }
}

// Function to create a popup (same as your existing one)
function createPopup(content) {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
    <div class="card">
      <div class="card-content">
        <div class="card-top">
        </div>
        <div class="card-bottom">
        </div>
      </div>
      <div class="card-image">
        ${content} <!-- Loader or message will go here -->
      </div>
    </div>
  `;
  document.body.appendChild(popup);
  return popup;
}

// Function to close the popup (same as your existing one)
function closePopup(popup) {
  document.body.removeChild(popup);
}

// Function to attach event listeners
function attachEventListeners() {
  // Form navigation
  setupFormNavigation();
  
  // Form submission
  document.getElementById('early-access-form')?.addEventListener('submit', handleFormSubmission);
  
  // Start form button
  document.getElementById('start-form')?.addEventListener('click', () => {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('form-container').classList.remove('hidden');
  });
}

// Router setup
router
  .on('/', () => {
    // You can render your initial page here if needed
    attachEventListeners();
  })
  .resolve();

export function initializeFormHandlers() {
  attachEventListeners();
}

// Call it when the module loads
document.addEventListener('DOMContentLoaded', initializeFormHandlers);