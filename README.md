# MapFlood

# Flood Relief Map

A web application that displays flood-affected areas and helps users find safe locations during floods.

## Features

- Display flood-affected areas on an interactive map
- Mark safe locations (shelters and hospitals)
- Find the best route to safe locations from your current position
- Filter safe locations by type (shelters, hospitals, or all)

## How to Use

1. Open `index.html` in a web browser
2. The map will show flood-affected areas in red circles
3. Use the dropdown menu to select which type of safe locations to display
4. Click the "Locate Me" button to find your current position
5. Click on any safe location marker to see the best route from your current position

## Customization

To add or modify flood-affected areas and safe locations:

1. Open `app.js`
2. Modify the `floodZones` array to add or update flood-affected areas
3. Modify the `safeLocations` object to add or update safe locations

## Dependencies

- Leaflet.js (v1.9.4)
- Leaflet Routing Machine (v3.2.12)
- OpenStreetMap

## Note

This application uses sample data for demonstration purposes. Replace the sample data in `app.js` with real flood-affected areas and safe locations for actual use. 
