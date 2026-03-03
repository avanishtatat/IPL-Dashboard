# 🏏 IPL Dashboard

A comprehensive React web application that displays Indian Premier League (IPL) team information, match details, and statistics with an interactive and responsive design.

## 🚀 Live Demo

[View Live Application](https://your-vercel-deployment-url.vercel.app)

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Integration](#-api-integration)
- [Components Overview](#-components-overview)
- [Responsive Design](#-responsive-design)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

## ✨ Features

### 🏠 Home Dashboard

- **Team Overview**: Display all IPL teams in an interactive grid layout
- **Team Cards**: Clickable team cards with logos and basic information
- **Loading States**: Professional loading spinners during data fetching
- **Responsive Navigation**: Seamless routing between different views

### 🏆 Team Details

- **Match History**: Comprehensive list of recent matches for each team
- **Latest Match Highlight**: Featured display of the most recent match
- **Match Statistics**: Win/Loss indicators and match details
- **Interactive Design**: Hover effects and smooth transitions

### 📱 User Experience

- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Fast Loading**: Optimized performance with efficient API calls
- **Error Handling**: User-friendly 404 page for invalid routes
- **Modern UI**: Clean and professional interface design

## 🛠 Technologies Used

- **Frontend Framework**: React 17.0.1
- **Routing**: React Router DOM 5.2.0
- **State Management**: React Hooks (useState, useEffect)
- **HTTP Requests**: Fetch API
- **Charts & Visualization**: Recharts 2.1.9
- **Loading Indicators**: React Loader Spinner 4.0.0
- **Build Tool**: Create React App
- **Deployment**: Vercel
- **Code Quality**: ESLint, Prettier, Husky

## 📁 Project Structure

```
src/
├── components/
│   ├── Home/                 # Home page with team listings
│   │   ├── index.js
│   │   └── index.css
│   ├── TeamCard/            # Individual team card component
│   │   ├── index.js
│   │   └── index.css
│   ├── TeamMatches/         # Team-specific match details
│   │   ├── index.js
│   │   └── index.css
│   ├── LatestMatch/         # Latest match highlight component
│   │   ├── index.js
│   │   └── index.css
│   ├── MatchCard/           # Individual match card component
│   │   ├── index.js
│   │   └── index.css
│   └── NotFound/            # 404 error page
│       ├── index.js
│       └── index.css
├── App.js                   # Main application component
├── App.css                  # Global styles
└── index.js                 # Application entry point
```

## 🚀 Installation

### Prerequisites

- Node.js (version 20.x recommended)
- npm or yarn package manager

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/ipl-dashboard.git
   cd IPL-Dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

The application will open in your browser at `http://localhost:3000`

## 💻 Usage

### Navigation

- **Home Page**: Browse all IPL teams in an interactive grid
- **Team Details**: Click any team card to view detailed match information
- **Match History**: Explore recent matches with comprehensive statistics

### Key Features

1. **Real-time Data**: All team and match data is fetched from live APIs
2. **Interactive UI**: Smooth navigation with React Router
3. **Responsive Layout**: Optimized viewing across all devices
4. **Loading States**: Professional loading indicators during data fetch

## 🔗 API Integration

This application integrates with IPL APIs to provide real-time data:

### Endpoints Used

- **Teams API**: `https://apis.ccbp.in/ipl` - Fetches all team information
- **Team Matches API**: `https://apis.ccbp.in/ipl/:id` - Fetches specific team match details

### Data Features

- Live team standings and information
- Recent match results and statistics
- Team-specific match history
- Player performance data

## 🧩 Components Overview

### Core Components

#### 🏠 **Home Component**

- Displays grid of all IPL teams
- Implements loading states during API calls
- Handles team selection and routing

#### 🏏 **TeamMatches Component**

- Shows team-specific match information
- Displays latest match highlights
- Lists recent match history with results

#### 🎯 **TeamCard Component**

- Reusable team display card
- Interactive hover effects
- Links to detailed team view

#### ⚡ **MatchCard Component**

- Individual match result display
- Shows match outcome, venue, and date
- Color-coded for win/loss status

#### 🏆 **LatestMatch Component**

- Highlighted display of most recent match
- Comprehensive match details
- Enhanced visual presentation

#### 🚫 **NotFound Component**

- Custom 404 error page
- User-friendly error handling
- Navigation back to home

## 📱 Responsive Design

The application is fully responsive and optimized for:

### Device Breakpoints

- **Mobile**: < 576px - Stacked layout with touch-friendly navigation
- **Tablet**: 576px - 992px - Optimized grid layout
- **Desktop**: > 992px - Full grid with enhanced hover effects

### Design Features

- **CSS Grid & Flexbox**: Modern layout techniques
- **Mobile-First Design**: Optimized for mobile devices
- **Touch-Friendly Interface**: Accessible on all devices
- **Smooth Animations**: Enhanced user experience

## 🚀 Deployment

### Vercel Deployment (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

### Manual Build

```bash
npm run build
```

The build folder will contain the optimized production build.

## 🛠 Development

### Available Scripts

- `npm start` - Runs development server
- `npm test` - Launches test runner
- `npm run build` - Creates production build
- `npm run lint` - Runs ESLint
- `npm run lint:fix` - Fixes linting issues
- `npm run format` - Formats code with Prettier

### Code Quality

- **ESLint**: Code linting with Airbnb configuration
- **Prettier**: Automatic code formatting
- **Husky**: Git hooks for pre-commit checks
- **Lint-Staged**: Run linters on staged files

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- IPL API providers for real-time data
- React community for excellent documentation
- Cricket fans worldwide for inspiration

---

**Built with ❤️ by [Your Name]**

_For any questions or support, please open an issue or contact [your.email@example.com]_

> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
