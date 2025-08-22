# 🌊 Smart Guard System – Flood Warning & Disaster Management

A **Smart Guard System** designed for **real-time disaster management**, focusing on **flood prediction, monitoring, and relief mapping**.  
This project combines **IoT sensors, web dashboard, and interactive maps** to monitor water levels, predict floods, and guide people to **safe locations**.  

---

## 🚀 Overview
Floods are one of the most devastating natural disasters. The **Smart Guard System** provides a complete solution for **flood detection, alerting, and relief coordination**.  
It continuously tracks water levels, sends warnings, and provides a **flood relief map (MapFlood)** to guide people to shelters and hospitals during emergencies.  

---

## ✨ Features
- 📡 **Real-time Monitoring** – Tracks water levels and rainfall data using IoT sensors  
- 🔔 **Flood Alerts** – Early warning via SMS, email, or web notifications  
- 🌐 **Web Dashboard** – Centralized panel for authorities and users  
- 🗺️ **MapFlood – Flood Relief Map**  
  - Display flood-affected areas on an interactive map  
  - Mark safe locations (shelters and hospitals)  
  - Find the best route to safe locations from your current position  
  - Filter safe locations by type (shelters, hospitals, or all)  
- 📊 **Data Visualization** – Graphs and analytics for rainfall, water levels, and alerts  
- 📱 **Mobile-Friendly Access** – Works on mobile & desktop  
- ☁️ **Cloud Integration** – Stores historical data for prediction  
- 🛠 **Admin Panel** – Manage locations, thresholds, and users  

---

## 🏗️ System Architecture
1. **IoT Layer** – Sensors collect real-time water/rainfall data  
2. **Data Layer** – MySQL stores water level & weather data  
3. **Processing Layer** – Threshold-based flood detection  
4. **Application Layer** – Web dashboard + MapFlood relief system  

---

## 🖥️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript, Leaflet.js  
- **Backend:** PHP / Node.js  
- **Database:** MySQL  
- **IoT Devices:** Arduino/ESP32 with water-level sensors  
- **Maps & Routing:** Leaflet.js, Leaflet Routing Machine, OpenStreetMap  
- **APIs:** Weather API, SMS Gateway  

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/smart-guard-system.git
cd smart-guard-system
```

### 2. Setup Database
- Import `database.sql` into MySQL  
- Update database credentials in `config.php`  

### 3. Run the Application
- Start local server (XAMPP/WAMP/LAMP)  
- Place project in `htdocs` (for XAMPP)  
- Open: `http://localhost/smart-guard-system`  

### 4. MapFlood – Flood Relief Map
1. Open `index.html` in a browser  
2. The map will show **flood-affected areas in red circles**  
3. Use the dropdown to filter safe locations (shelters, hospitals, or all)  
4. Click **Locate Me** to find your position  
5. Click on a safe location marker to get the **best route**  

---

## 🛠️ Customization

### Flood & Safe Locations
1. Open `app.js`  
2. Edit the `floodZones` array to update flood-affected areas  
3. Edit the `safeLocations` object to add/update shelters & hospitals  

---

## 📸 Screenshots
(Add screenshots of your dashboard & MapFlood map here)

---

## 📊 Use Cases
- **Disaster-Prone Areas** – Early warning & safe evacuation routes  
- **Government Agencies** – Real-time monitoring and coordination  
- **Smart Cities** – Integrated disaster management solution  
- **Communities** – Access to safe shelters during emergencies  

---

## 🔮 Future Scope
- 🌍 Multi-disaster support (earthquakes, landslides, wildfires)  
- 🤖 AI/ML-based predictive disaster analytics  
- 📱 Dedicated mobile app with **push notifications**  
- 🛰️ Integration with **satellite & GIS data**  
- ☁️ Blockchain-based secure data sharing  

---

## 📜 Dependencies
- Leaflet.js (v1.9.4)  
- Leaflet Routing Machine (v3.2.12)  
- OpenStreetMap  

---

## 🧑‍💻 Contributors
- **Abhay Kumar Gond** – Project Lead & Developer  

---

## 📜 License
This project is licensed under the **MIT License** – free to use and modify with attribution.  

---

## 🙌 Acknowledgements
- Inspired by real flood disasters in India  
- Supported by IoT, Web, and Cloud technologies  
- Thanks to **Leaflet.js, OpenStreetMap, and open-source community**  
