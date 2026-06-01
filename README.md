# Insight.IO - ERIC Robotics Dashboard Recreation

### What is this project?
Imagine you are controlling a drone or a remote-controlled robot. You need a computer screen (a "dashboard") to see what the robot sees, check its battery, and tell it where to go. 

This project is exactly that: a web-based control panel for a robot. It shows a live video feed, real-time battery and speed data, and a 3D map of the environment. While the robot in this project is "simulated" (using fake data for testing), the dashboard itself is built using the exact same professional tools that companies use to build real software.

This project is a high-fidelity, self-hosted recreation of the ERIC Robotics Insight.IO dashboard. It features a live camera feed, an interactive 3D point cloud visualization, and robotics telemetry panels.

## Developer Contact
**Full Name:** Amit Lakade  
**Contact Number:** +91 9168830229  
**Email ID:** lakadeamit220@gmail.com  

## Tech Stack & Approach

### Core Architecture
- **Framework**: Built with **React 18** and **Vite** so it runs very fast.
- **Global State**: We use **Zustand** to manage data across the app. Think of it as the "Brain" that connects all the different parts of the dashboard together easily.
- **Styling**: **Tailwind CSS v4** is used for the design. We created a soft, light theme that is very easy on the eyes.
- **Animations**: **Framer Motion** adds smooth animations, like the sliding sidebar menu.

### Standout Features
This project includes several advanced features that make it feel like a real, professional robotics application:

1. **Simulated Live Data**: The dashboard acts like it is connected to a real robot. It constantly updates the signal strength and battery levels to show how it handles live data.
2. **Interactive 3D Map**: The 3D point cloud isn't just a video. You can move around it, and if you double-click anywhere on the map, it will drop a red "Target Waypoint" exactly where you clicked.
3. **Keyboard Controls**: Real robot operators use keyboards. You can press the **Spacebar** to trigger an Emergency Stop, press **M** to change modes, and hold **W, A, S, D** to see the joystick move.
4. **Smart Error Handling**: If the robot loses connection (you can test this by double-clicking the camera feed), the app doesn't break. It shows a professional "Signal Lost" screen and automatically reconnects after a few seconds.
5. **Multiple Dashboard Views**: If you click "Analytics" or "Camera Feed" in the sidebar, the whole screen smoothly changes to show you those specific tools instead of keeping you stuck on one page.
6. **Accessible Design**: The dashboard is designed so that screen readers can understand all the buttons and controls, making it accessible to visually impaired users.

## Setup & Run Instructions

This project is fully self-hosted and requires no external internet dependencies to run locally (beyond installing the NPM packages). 

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Steps to Run

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```

3. **View the Dashboard**
   Open your browser and navigate to `http://localhost:5173/`

### Adding Custom Assets
- **Video Feed:** Place your `.mp4` file in `public/videos/camera-feed.mp4`
- **Point Cloud:** Place your `.ply` file in `public/models/pointcloud.ply`

## Project Structure
```
src/
├── components/
│   ├── layout/       # Sidebar, Header, DashboardLayout
│   ├── camera/       # CameraFeed, FallbackScreens
│   ├── map/          # 3D PointCloudMap, WaypointMarker
│   ├── ui/           # Controls (E-Stop), StatusPills
│   └── analytics/    # Live Telemetry AnalyticsPanel
├── hooks/            # useHotkeys.js, useRosTelemetry.js
├── store/            # useRobotStore.js (Zustand Global State)
├── App.jsx           # Main router & layout assembly
└── index.css         # Tailwind v4 configuration and global themes
```

## Demo Video
You can watch a full video demonstration of this project working in real-time here:

🎥 [**Click here to watch the Demo Video on Google Drive**](https://drive.google.com/file/d/1gcryUicZ3Uwt8_FupiAZsh82Rdo6hsPn/view?usp=sharing)
