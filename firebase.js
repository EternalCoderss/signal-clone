import * as firebase from "firebase";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC5tT65IcsRwbio5ii8rycTPJR5NxJ1R1M",
    authDomain: "signal-clone-d11e8.firebaseapp.com",
    projectId: "signal-clone-d11e8",
    storageBucket: "signal-clone-d11e8.appspot.com",
    messagingSenderId: "43789803",
    appId: "1:43789803:web:c4a0c4b6fc3123b5047dae"
  };

  let app;

  if (firebase.apps.length === 0) {
           app = firebase.initializeApp(firebaseConfig);
    }
    else {
        app = firebase.app();
    }
  const db = app.firestore();
  const auth = firebase.auth();
  
  export {db, auth };