# CyberConverge 2025 - Event Registration Website

A modern, secure event registration website for CyberConverge 2025 cybersecurity conference hosted by CYSCOM VIT Chennai.

## Features

- 🔐 **Secure Authentication**: Firebase Google OAuth integration
- 🎨 **Modern UI**: Hacker-themed green color scheme with cyber aesthetics
- 📱 **Responsive Design**: Works perfectly on all devices
- 🛡️ **Protected Routes**: Registration only available to authenticated users
- ⚡ **Fast & Secure**: Built with Vite + React + TypeScript
- 🎯 **User Experience**: Smooth animations and intuitive navigation

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase project with Google Authentication enabled

## Setup Instructions

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd cyberconverge
npm install
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable **Authentication** > **Sign-in method** > **Google**
4. Add your domain to authorized domains
5. Go to **Project Settings** > **Web apps** > **Add app**
6. Copy the Firebase configuration

### 3. Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Fill in your Firebase configuration in `.env`:
```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the application.

### 5. Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Login.tsx       # Google OAuth login page
│   ├── Registration.tsx # Registration form component
│   ├── ProtectedRoute.tsx # Route protection wrapper
│   ├── Hero.tsx        # Landing page hero section
│   ├── EventDetails.tsx # Event information
│   └── Footer.tsx      # Site footer
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication state management
├── pages/              # Page components
│   ├── HomePage.tsx    # Main landing page
│   └── RegistrationPage.tsx # Protected registration page
├── firebase.ts         # Firebase configuration
└── App.tsx            # Main app with routing
```

## User Flow

1. **Landing Page** (`/`): Users see event details and a "Register Now" button
2. **Authentication** (`/login`): Clicking register redirects to Google OAuth login
3. **Registration** (`/register`): After login, users can fill the registration form
4. **Success**: Form submission shows confirmation with next steps

## Key Features Explained

### Authentication Flow
- Uses Firebase Google OAuth for secure authentication
- Implements protected routes that redirect to login if user not authenticated
- Stores authentication state in React Context
- Automatic redirect back to intended page after login

### Security
- Environment variables for sensitive Firebase config
- Client-side route protection
- Secure Firebase authentication tokens
- No sensitive data stored in localStorage

### UI/UX
- Hacker-themed green color scheme (emerald/lime gradient)
- Cyber-punk aesthetic with glowing effects
- Smooth animations and transitions
- Responsive design for all screen sizes
- Loading states and error handling

## Customization

### Changing Colors
The theme uses CSS classes with Tailwind. Main colors:
- Primary: `emerald-400` to `lime-300`
- Secondary: `emerald-500`
- Background: `gray-900`/`gray-800`

### Adding Form Fields
Modify `src/components/Registration.tsx` to add new form fields to the `formData` state and form UI.

### Styling
The project uses Tailwind CSS with custom cyber-themed classes. Check `src/index.css` for custom styles.

## Deployment

### Netlify/Vercel
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables in your hosting platform
4. Add your domain to Firebase authorized domains

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_FIREBASE_API_KEY` | Firebase API Key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase Project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase App ID |

## Support

For technical issues or questions:
- Email: cyscom@vit.ac.in
- Phone: Vijval (+91 93243 84817), Niharga (+91 96061 49532)

## License

This project is created for CyberConverge 2025 event by CYSCOM VIT Chennai.
