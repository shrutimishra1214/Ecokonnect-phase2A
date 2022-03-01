export const config = {
    apiKey: "AIzaSyDbHlkDI-WkGFKZXXQZ1F1jTp5_Ak424rw",
    authDomain: "ecokonnect-77.firebaseapp.com",
    projectId: "ecokonnect-77",
    storageBucket: "ecokonnect-77.appspot.com",
    messagingSenderId: "219486673803",
    appId: "1:219486673803:web:e42cc34827fc18744a2d8e",
    measurementId: "G-WW41DCFYBL"

}
export const anonInfo = {
    email: "neharane123456789@gmail.com",
    pass: "nr123456789"
}

export const lastFMKey = "04ffaae673ab7bb3e4f28373766d23e1";
export const recaptchaSitekey = "6Let-IseAAAAANnu-3CdfC9s30YeoV1KU2h514X5";













// ----- Firebase database rules ------

// OLD

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//   match /{document=**} {
//       allow read : if request.auth.uid != null;
//       allow write : if request.auth.uid != null;
//     }
//   }
  

//     match /users/{usersId} {
//       allow create: if request.auth.uid != null;
//     	allow read : if request.auth.uid  == usersId;
//     	allow write: if request.auth.uid == usersId;
//     }
//   }

// NEW

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//   match /{document=**} {
//       allow read ;
//       allow write : if request.auth.uid != null;
//     }
//   }
  

//     match /users/{usersId} {
//       allow create: if request.auth.uid != null;
//     	allow read : if request.auth.uid  == usersId;
//     	allow write: if request.auth.uid == usersId;
//     }
// }


// ----x-x---- Firebase database rules -----xx-------
// ------- Firebase realtime db rules -----------

// /{
//   "rules": {
//     "status": {
//           ".read": "auth.uid != null",
//    	 			".write": "auth.uid != null",
//     },
//     "rating": {
//           ".read": "auth.uid != null",
//    	 			".write": "auth.uid != null",
//     },
//     "userNames":{
//       	".read":"true",
//         ".write": "true"
//     }

//   }
// }

// ----xx---- Firebase realtime db rules -----xx------

//export const secretkey = 6LeNoL8cAAAAAHehWSh-eR9BSOSsGg8uI7MZX5N3
