import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import * as database from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.FIREBASE_DATABASEURL,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID
  }

  const app = initializeApp(firebaseConfig);
  const db = database.getDatabase(app);
  const auth = getAuth(app)
  const googleAuthProvider = new GoogleAuthProvider();


  export {firebase as default,googleAuthProvider,db, database,signInWithPopup,auth, signOut}

  // const expRef = ref(db,'expenses')
  // onValue(expRef, (snapshot) => {
  //   const expenses = []
  //   snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //           id: childSnapshot.key,
  //           ...childSnapshot.val()
  //       })
  //   });
  //   console.log(expenses)
  // }, {
  //   onlyOnce: false
  // });

  // onChildRemoved(expRef, (snapshot)=> {
  //   console.log(snapshot.key, snapshot.val())
  // })

  // onChildChanged(expRef, (snapshot)=> {
  //   console.log(snapshot.key, snapshot.val())
  // })

  // onChildAdded(expRef, (snapshot)=> {
  //   console.log(snapshot.key, snapshot.val())
  // })

  // const pushData = ({description,note,amount,createdAt}) => {
    // push(ref(db, 'expenses'),{
    //     description,
    //     note,
    //     amount,
    //     createdAt
    //   })
  // }
// setTimeout(()=> {
    // pushData({
    //     description: 'seventh bill',
    //     note: '',
    //     amount: 5345,
    //     createdAt: 4678798
    //   })
// },3000)
//   push(ref(db, 'expenses'),{
//     description: 'phone bill',
//     note: '',
//     amount: 45435,
//     createdAt: 9797432
//   })

//   remove(ref(db, 'notes/-NIHJJljXH9gS1TotQ1g'))
// push(ref(db, 'notes') ,{
//     title: 'To Do',
//     body: 'Go on a run'
// })
//   const firebaseNotes = {
//     notes: {
//         id1: {
//             id: '12',
//             title: 'first notes',
//             body: ' this is my body'
//         },
//         id2: {
//             id: '13',
//             titel: 'second notes',
//             body: 'this is another bidy'
//         }
//     }
//   }

// set(ref(db), firebaseNotes)

//   const onValueChange =  (snapshot) => {
//     console.log(snapshot.val())
//   }

//   onValue(ref(db),onValueChange)


//   set(ref(db), {
//     username: 'Aravind Merugu',
//     age: 17,
//     isSingle: true,
//     stressLevel:6,
//     job:{
//         title:'software engineer',
//         company: 'VAM'
//     },
//     location: {
//         city: 'Warangal',
//         country: 'India'
//     }
//   }).then(()=>{
//     console.log("Data is saved")
//   }).catch((e)=>{
//     console.log('This failed',e)
//   })

//   set(ref(db,'age'), 27)

//   set(ref(db,'location/city'), 'hyderabad')
//   set(ref(db,'attributes'), {
//     height: '5.10',
//     weight: 60
//   }).then(()=>{
//     console.log('attributes updated')
//   }).catch((e)=>{
//     console.log('attributes update',e)
//   })

//   remove(ref(db,'isSingle'))
//   .then(()=>{
//     console.log('data was removed')
//   }).catch(()=>{
//     console.log('data was not removed')
//   })

// // set(ref(db,'isSingle'), null)

// update(ref(db),{
//     stressLevel: 9,
//     'job/company': 'Delloite',
//     'location/city': 'Bangalore'   
// })

// get(child(ref(db),'username')).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });



// setTimeout(()=>{
//     set(ref(db,'age'), 24)
//     off(ref(db))
// }, 3500)

// setTimeout(()=>{
//     set(ref(db,'age'), 25)
// }, 7000)



// update(ref(db),{
//     job:'SE',
//     isSingle:null,
//     'location/city':'Hyderabad'
// })