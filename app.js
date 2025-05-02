// Initialize Map
const map = L.map('map').setView([20.5937, 78.9629], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Onboarding Tour
const onboardingTour = document.getElementById('onboardingTour');
const tourSteps = document.querySelectorAll('.tour-step');
const tourPrev = document.querySelector('.tour-prev');
const tourNext = document.querySelector('.tour-next');
const tourSkip = document.querySelector('.tour-skip');

let currentStep = 0;

function showStep(step) {
    tourSteps.forEach((s, i) => {
        s.classList.toggle('active', i === step);
    });
}

function nextStep() {
    if (currentStep < tourSteps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

tourNext.addEventListener('click', nextStep);
tourPrev.addEventListener('click', prevStep);
tourSkip.addEventListener('click', () => {
    onboardingTour.style.display = 'none';
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.innerHTML = document.body.classList.contains('dark-theme') 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// Language Selector
const languageSelector = document.getElementById('languageSelector');
languageSelector.addEventListener('change', (e) => {
    // Implement language change logic here
    console.log('Language changed to:', e.target.value);
});

// Map Controls
const locateMe = document.getElementById('locateMe');
locateMe.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            map.setView([position.coords.latitude, position.coords.longitude], 15);
        }, (error) => {
            console.error('Error getting location:', error);
        });
    }
});

// Layer Controls
const layerButtons = document.querySelectorAll('.layer-button');
layerButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        // Implement layer toggle logic here
    });
});

// Help Chat
const chatToggle = document.querySelector('.chat-toggle');
const chatWindow = document.querySelector('.chat-window');
const closeChat = document.querySelector('.close-chat');

chatToggle.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
});

closeChat.addEventListener('click', () => {
    chatWindow.classList.remove('active');
});

// Volunteer Form
const volunteerForm = document.getElementById('volunteerForm');
if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('volunteerName').value,
            email: document.getElementById('volunteerEmail').value,
            phone: document.getElementById('volunteerPhone').value,
            skills: Array.from(document.getElementById('volunteerSkills').selectedOptions)
                .map(option => option.value)
        };

        // Here you would typically send the data to your backend
        console.log('Volunteer registration:', formData);
        
        // Show success message
        alert('Thank you for registering as a volunteer!');
        volunteerForm.reset();
    });
}

// Suggestion Form
const suggestionForm = document.getElementById('suggestionForm');
const suggestionThankYou = document.querySelector('.suggestion-thank-you');
const submitAnotherBtn = document.querySelector('.submit-another-btn');

if (suggestionForm) {
    suggestionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('suggestionName').value,
            email: document.getElementById('suggestionEmail').value,
            type: document.getElementById('suggestionType').value,
            text: document.getElementById('suggestionText').value,
            location: document.getElementById('suggestionLocation').value,
            timestamp: new Date().toISOString()
        };

        // Here you would typically send the data to your backend
        console.log('Suggestion submitted:', formData);

        // Show thank you message
        suggestionForm.style.display = 'none';
        suggestionThankYou.style.display = 'block';
    });
}

if (submitAnotherBtn) {
    submitAnotherBtn.addEventListener('click', () => {
        suggestionForm.reset();
        suggestionForm.style.display = 'block';
        suggestionThankYou.style.display = 'none';
    });
}

// Loading Spinner
function showSpinner() {
    document.getElementById('loadingSpinner').style.display = 'block';
}

function hideSpinner() {
    document.getElementById('loadingSpinner').style.display = 'none';
}

// Example usage of spinner
document.getElementById('reportFlood').addEventListener('click', () => {
    showSpinner();
    // Simulate some async operation
    setTimeout(() => {
        hideSpinner();
        // Show flood report form
    }, 1000);
});

// Update Statistics
function updateStatistics() {
    // Example data - replace with real data from your backend
    const stats = {
        totalFloodZones: 15,
        availableShelters: 8,
        activeHospitals: 5
    };

    document.getElementById('totalFloodZones').textContent = stats.totalFloodZones;
    document.getElementById('availableShelters').textContent = stats.availableShelters;
    document.getElementById('activeHospitals').textContent = stats.activeHospitals;
}

// Initialize statistics
updateStatistics();

// Add some example flood zones
const floodZones = [
    { lat: 20.5937, lng: 78.9629, severity: 'high' },
    { lat: 19.0760, lng: 72.8777, severity: 'medium' },
    { lat: 28.7041, lng: 77.1025, severity: 'low' }
];

floodZones.forEach(zone => {
    const marker = L.circleMarker([zone.lat, zone.lng], {
        radius: 10,
        color: zone.severity === 'high' ? 'red' : zone.severity === 'medium' ? 'orange' : 'yellow',
        fillOpacity: 0.5
    }).addTo(map);

    marker.bindPopup(`Flood Zone<br>Severity: ${zone.severity}`);
});

// Add some example shelters
const shelters = [
    { lat: 20.5937, lng: 78.9629, name: 'Central Shelter', capacity: 100 },
    { lat: 19.0760, lng: 72.8777, name: 'West Shelter', capacity: 50 }
];

shelters.forEach(shelter => {
    const marker = L.marker([shelter.lat, shelter.lng], {
        icon: L.divIcon({
            className: 'shelter-marker',
            html: '<i class="fas fa-home"></i>',
            iconSize: [30, 30]
        })
    }).addTo(map);

    marker.bindPopup(`Shelter: ${shelter.name}<br>Capacity: ${shelter.capacity}`);
});

// Add some example hospitals
const hospitals = [
    { lat: 28.7041, lng: 77.1025, name: 'City Hospital', beds: 200 },
    { lat: 19.0760, lng: 72.8777, name: 'West Hospital', beds: 150 }
];

hospitals.forEach(hospital => {
    const marker = L.marker([hospital.lat, hospital.lng], {
        icon: L.divIcon({
            className: 'hospital-marker',
            html: '<i class="fas fa-hospital"></i>',
            iconSize: [30, 30]
        })
    }).addTo(map);

    marker.bindPopup(`Hospital: ${hospital.name}<br>Available Beds: ${hospital.beds}`);
}); 
