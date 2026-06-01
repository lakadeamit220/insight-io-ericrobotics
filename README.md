# Insight.IO - ERIC Robotics Dashboard Recreation

This project is a high-fidelity, self-hosted recreation of the ERIC Robotics Insight.IO dashboard. It features a live camera feed, an interactive 3D point cloud visualization, and robotics telemetry panels.

## Developer Contact
**Full Name:** Amit Lakade  
**Contact Number:** +91 9168830229  
**Email ID:** lakadeamit220@gmail.com  

## Tech Stack & Approach

### Architecture & Technology Decisions
- **Framework**: **React 18** with **Vite** for fast, optimized local development and bundling. I chose JavaScript as per preference over TypeScript to keep the setup streamlined.
- **Styling**: **Tailwind CSS v4** combined with custom CSS variables to create the sleek "glassmorphism" panels and dark theme requested by the UI design.
- **Animations**: **Framer Motion** was used extensively to bring the UI to life, ensuring the Sidebar collapses and expands smoothly, and the telemetry panels transition elegantly.
- **3D Visualization**: Built with **Three.js**, **@react-three/fiber**, and **@react-three/drei**. This enables a fully interactive, GPU-accelerated Point Cloud map using a `.ply` sample file, along with orbit controls.
- **Icons**: **Lucide React** for consistent, clean vector icons.

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
│   ├── camera/       # CameraFeed component
│   ├── map/          # 3D PointCloudMap component
│   └── analytics/    # Live Telemetry AnalyticsPanel
├── App.jsx           # Main layout assembly
└── index.css         # Tailwind v4 configuration and global themes
```

## Demo
*(Include a link to your Loom video or screenshots here before submitting!)*
