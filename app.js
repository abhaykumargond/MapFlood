// Initialize Map
const map = L.map('map').setView([28.6139, 77.2090], 12);

// Add OpenStreetMap tiles with a custom style
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

// Sample data for flood-affected areas in Delhi
const floodZones = [
    { lat: 28.6139, lng: 77.2090, name: "Yamuna River Flood Zone", severity: "high", description: "Severe flooding along Yamuna River banks" },
    { lat: 28.7041, lng: 77.1025, name: "North Delhi Flood Zone", severity: "medium", description: "Moderate flooding in residential areas" },
    { lat: 28.5355, lng: 77.3910, name: "East Delhi Flood Zone", severity: "high", description: "Heavy flooding in low-lying areas" },
    { lat: 28.4595, lng: 77.0266, name: "South Delhi Flood Zone", severity: "low", description: "Light flooding in some areas" },
    { lat: 28.6692, lng: 77.4538, name: "East Delhi Flood Zone 2", severity: "medium", description: "Moderate flooding in commercial areas" }
];

// Sample data for safe locations in Delhi
const safeLocations = {
    shelter: [
        { lat: 28.6139, lng: 77.2090, name: "Yamuna Shelter", capacity: 200, distance: "1.5 km" },
        { lat: 28.7041, lng: 77.1025, name: "North Delhi Shelter", capacity: 150, distance: "2.3 km" },
        { lat: 28.5355, lng: 77.3910, name: "East Delhi Shelter", capacity: 180, distance: "1.8 km" },
        { lat: 28.4595, lng: 77.0266, name: "South Delhi Shelter", capacity: 120, distance: "2.5 km" }
    ],
    hospital: [
        { lat: 28.6139, lng: 77.2090, name: "AIIMS Hospital", beds: 500, distance: "2.1 km" },
        { lat: 28.7041, lng: 77.1025, name: "Safdarjung Hospital", beds: 400, distance: "2.8 km" },
        { lat: 28.5355, lng: 77.3910, name: "GTB Hospital", beds: 350, distance: "1.9 km" },
        { lat: 28.4595, lng: 77.0266, name: "Moolchand Hospital", beds: 300, distance: "2.4 km" }
    ]
};

// Create flood zone markers with pulsing effect
function createFloodMarker(zone) {
    const severityColors = {
        high: '#e74c3c',
        medium: '#f39c12',
        low: '#f1c40f'
    };
    const severitySizes = {
        high: 20,
        medium: 15,
        low: 10
    };
    return L.circleMarker([zone.lat, zone.lng], {
        radius: severitySizes[zone.severity],
        fillColor: severityColors[zone.severity],
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8,
        className: 'pulse-flood-marker'
    }).bindPopup(`
        <div class="popup-content">
            <h3>${zone.name}</h3>
            <p><strong>Severity:</strong> ${zone.severity.toUpperCase()}</p>
            <p><strong>Description:</strong> ${zone.description}</p>
            <button onclick="showNearbySafeLocations(${zone.lat}, ${zone.lng})" class="action-button">
                Show Nearby Safe Locations
            </button>
            <button onclick="showEmergencyInfo()" class="action-button">
                Emergency Information
            </button>
        </div>
    `);
}

// Create safe location markers
function createSafeMarker(loc, type) {
    const color = type === 'shelter' ? '#2ecc71' : '#3498db';
    const marker = L.circleMarker([loc.lat, loc.lng], {
        radius: 12,
        fillColor: color,
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8,
        className: type === 'shelter' ? 'safe-marker' : 'hospital-marker'
    });

    const popupContent = `
        <div class="popup-content">
            <h3>${loc.name}</h3>
            <p><strong>Type:</strong> ${type.charAt(0).toUpperCase() + type.slice(1)}</p>
            <p><strong>${type === 'shelter' ? 'Capacity' : 'Available Beds'}:</strong> 
                <span class="animated-value" data-value="${type === 'shelter' ? loc.capacity : loc.beds}">
                    ${type === 'shelter' ? loc.capacity : loc.beds}
                </span>
            </p>
            <p><strong>Distance:</strong> ${loc.distance}</p>
            <button onclick="showRoute(${loc.lat}, ${loc.lng})" class="action-button">
                Get Directions
            </button>
            <button onclick="show${type === 'shelter' ? 'Shelter' : 'Hospital'}Info()" class="action-button">
                ${type === 'shelter' ? 'Shelter' : 'Hospital'} Details
            </button>
        </div>
    `;

    marker.bindPopup(popupContent, {
        maxWidth: 300,
        minWidth: 250,
        autoPan: true,
        closeButton: true,
        className: 'custom-popup',
        offset: L.point(0, -10)
    });

    marker.on('mouseover', function() {
        this.openPopup();
        this.setStyle({
            fillOpacity: 1,
            radius: 15
        });
    });

    marker.on('mouseout', function() {
        this.setStyle({
            fillOpacity: 0.8,
            radius: 12
        });
    });

    return marker;
}

// Initialize markers
const floodMarkers = floodZones.map(createFloodMarker);
const safeMarkers = {
    shelter: safeLocations.shelter.map(loc => createSafeMarker(loc, 'shelter')),
    hospital: safeLocations.hospital.map(loc => createSafeMarker(loc, 'hospital'))
};

// Add markers to map
floodMarkers.forEach(marker => marker.addTo(map));
Object.values(safeMarkers).flat().forEach(marker => marker.addTo(map));

// Popup animation
map.on('popupopen', function(e) {
    const popup = e.popup;
    const content = popup.getElement();
    content.style.opacity = '0';
    content.style.transform = 'scale(0.95) translateY(-20px)';
    
    setTimeout(() => {
        content.style.transition = 'all 0.3s ease-out';
        content.style.opacity = '1';
        content.style.transform = 'scale(1) translateY(0)';
    }, 10);
});

// Show nearby safe locations
window.showNearbySafeLocations = function(lat, lng) {
    Object.values(safeMarkers).flat().forEach(marker => {
        if (map.hasLayer(marker)) {
            map.removeLayer(marker);
        }
    });
    Object.values(safeMarkers).flat().forEach(marker => marker.addTo(map));
    map.setView([lat, lng], 13);
};

// Show route to location
window.showRoute = function(lat, lng) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const routingControl = L.Routing.control({
                waypoints: [
                    L.latLng(position.coords.latitude, position.coords.longitude),
                    L.latLng(lat, lng)
                ],
                routeWhileDragging: false,
                show: false,
                addWaypoints: false,
                draggableWaypoints: false,
                fitSelectedRoutes: true,
                lineOptions: {
                    styles: [
                        {color: '#1a73e8', opacity: 0.8, weight: 5},
                        {color: '#2ecc71', opacity: 0.8, weight: 5, dashArray: '5,10'}
                    ]
                },
                createMarker: function() { return null; }
            }).addTo(map);
        });
    }
};

// Statistics Animation
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Update Statistics with Animation
function updateStatistics() {
    const stats = {
        totalFloodZones: floodZones.length,
        availableShelters: safeLocations.shelter.length,
        activeHospitals: safeLocations.hospital.length
    };

    const elements = {
        totalFloodZones: document.getElementById('totalFloodZones'),
        availableShelters: document.getElementById('availableShelters'),
        activeHospitals: document.getElementById('activeHospitals')
    };

    Object.entries(stats).forEach(([key, value]) => {
        const element = elements[key];
        const currentValue = parseInt(element.textContent) || 0;
        animateValue(element, currentValue, value, 1000);
    });
}

// Initialize statistics
updateStatistics();

// Update statistics when markers change
map.on('layeradd layerremove', function() {
    updateStatistics();
});

// Report Flood Form
const reportForm = document.getElementById('reportForm');
const reportFloodButton = document.getElementById('reportFlood');
const cancelReportButton = document.getElementById('cancelReport');

reportFloodButton.addEventListener('click', function() {
    reportForm.classList.add('active');
});

cancelReportButton.addEventListener('click', function() {
    reportForm.classList.remove('active');
});

// Handle flood report submission
document.getElementById('floodReportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('floodLocation').value;
    const severity = document.getElementById('floodSeverity').value;
    const description = document.getElementById('floodDescription').value;
    
    // Here you would typically send the data to your backend
    console.log('Flood report submitted:', { location, severity, description });
    
    // Close the form
    reportForm.classList.remove('active');
}); 
