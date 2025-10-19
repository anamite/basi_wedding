# Wedding Invitation - React App

A beautiful, animated wedding invitation website for Basith Sidhique & Shireen Mansoor built with React and Three.js.

## Features

- ✨ Animated silk background using Three.js and @react-three/fiber
- 📱 Fully responsive and mobile-friendly
- 🎨 Elegant maroon and gold color scheme
- 🖨️ Print-friendly for PDF generation
- 🧭 Hash-based navigation between pages (Home, Nikkah, Reception)
- 💫 Smooth animations and transitions
- 📍 Integrated Google Maps links for venues

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- React 18
- Three.js
- @react-three/fiber
- Google Fonts (Playfair Display, Amiri, Great Vibes)

## Structure

```
src/
├── components/
│   ├── Silk.js              # Three.js animated background
│   ├── Navigation.js        # Header navigation component
│   ├── Navigation.css
│   ├── HomePage.js          # Home page with invitation overview
│   ├── HomePage.css
│   ├── NikkahPage.js        # Nikkah ceremony details
│   ├── ReceptionPage.js     # Reception details
│   └── PageStyles.css       # Shared page styles
├── App.js                   # Main app component with routing
├── App.css                  # Global app styles
├── index.js                 # React entry point
└── index.css                # Base styles
```

## Customization

### Silk Background
You can customize the animated background in `App.js`:

```jsx
<Silk
  speed={5}                  // Animation speed
  scale={1}                  // Size scale
  color="#7B7481"            // Background color
  noiseIntensity={1.5}       // Wave intensity
  rotation={0}               // Rotation angle
/>
```

### Colors
Edit CSS variables in `App.css`:

```css
:root {
  --maroon: #3f0b0b;
  --gold: #cfa85a;
  --ivory: #fff8f3;
  /* ... */
}
```

## License

This project is for personal use.
