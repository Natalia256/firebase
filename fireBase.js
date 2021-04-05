const fireBase = fireBase || firebase;
const hasInit = false;
const config = {
  apiKey: "AIzaSyD6d_d49VvLn0FGHUVrQK9cnS-jeLg63RQ",
  authDomain: "proba-ad273.firebaseapp.com",
  projectId: "proba-ad273",
  storageBucket: "proba-ad273.appspot.com",
  messagingSenderId: "716843966889",
  appId: "1:716843966889:web:b4c76f7a5ce50c3cca64b8"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}
