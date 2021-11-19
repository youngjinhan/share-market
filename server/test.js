const admin = require("firebase-admin");
const serviceAccount = require("./uni-market-85001-firebase-adminsdk-vwijm-a74118e7bd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://uni-market-85001-default-rtdb.firebaseio.com",
});

const db = admin.database();
const ref = db.ref();
console.log(ref);
// ref.once("value", function (snapshot) {
//   console.log(snapshot.val());
// });

/*
const firebase=require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyD_BkE8RY1L0uA5cKpCXG5z1aXYABXr1Ng",
  authDomain: "uni-market-85001.firebaseapp.com",
  projectId: "uni-market-85001",
  storageBucket: "uni-market-85001.appspot.com",
  messagingSenderId: "473518401967",
  appId: "1:473518401967:web:52818ebee45c23072aa75a",
};
*/
