import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB3rUlhNBmj2NiBM_Y7DK5pJl2ZjyerfiA",
  authDomain: "shopnow-ee6f4.firebaseapp.com",
  databaseURL: "https://shopnow-ee6f4.firebaseio.com",
  projectId: "shopnow-ee6f4",
  storageBucket: "shopnow-ee6f4.appspot.com",
  messagingSenderId: "837232379202",
  appId: "1:837232379202:web:b46854b98f4fc12260b4db",
  measurementId: "G-KPH3E1H838"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()