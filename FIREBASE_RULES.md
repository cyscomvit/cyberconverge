# Firebase Firestore Security Rules

This file contains the Firestore security rules for the CyberConverge registration system.

## Rules Overview

The security rules ensure that:

1. **Authentication Required**: Only authenticated users can access the database
2. **User Isolation**: Users can only access their own registration data
3. **Data Integrity**: Validates that required fields are present
4. **Admin Access**: Admins have full access for management purposes

## Collections

### day1 Collection
- Stores registrations for Day 1 (Offensive Security)
- Users can create, read, and update their own registrations
- Only admins can delete registrations

### day2 Collection
- Stores registrations for Day 2 (Defensive Security)
- Users can create, read, and update their own registrations
- Only admins can delete registrations

## How to Deploy

1. Go to Firebase Console
2. Navigate to Firestore Database
3. Click on "Rules" tab
4. Copy and paste the contents of `firestore.rules`
5. Click "Publish"

## Admin Setup (Optional)

To set up admin users who can read all registrations:

1. Go to Firebase Console > Authentication
2. Find the user you want to make admin
3. Set custom claims:

```javascript
// Use Firebase Admin SDK
admin.auth().setCustomUserClaims(uid, {admin: true})
```

Or use the Firebase CLI:

```bash
firebase functions:shell
admin.auth().setCustomUserClaims('USER_UID', {admin: true})
```

## Testing Rules

You can test these rules in the Firebase Console:
1. Go to Firestore Database
2. Click on "Rules" tab
3. Use the "Rules Playground" to simulate requests

## Important Security Notes

- These rules ensure users can only access their own data
- Email verification is enforced through Firebase Auth
- All operations require authentication
- Data validation ensures required fields are present
- Admin privileges are controlled through custom claims
