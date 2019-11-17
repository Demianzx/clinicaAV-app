import {createStore,combineReducers,compose} from 'redux';
import{reactReduxFirebase,firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore,firestoreReducer}from 'redux-firestore'
import firebase from 'firebase/app';
import 'firebase/firestore';

//configurar firestore

const firebaseConfig={
    apiKey: "AIzaSyAufr6puTJbzP9EKAfIbFt4Y_wxb5KnYQ0",
    authDomain: "clinicaav-80066.firebaseapp.com",
    databaseURL: "https://clinicaav-80066.firebaseio.com",
    projectId: "clinicaav-80066",
    storageBucket: "clinicaav-80066.appspot.com",
    messagingSenderId: "987734697845",
    appId: "1:987734697845:web:e921346e02faa49838953c",
    measurementId: "G-0GN5Y9N12Q"
}
//inicializar firebase
firebase.initializeApp(firebaseConfig); 

//configuracion de react redux

const rrfConfig={
    userProfile: 'users',
    useFirestoreForProfile: true
}

//crear el enhacer con compose de redux y firestore
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase,rrfConfig),
    reduxFirestore(firebase)
)(createStore)

//reducer
const rootReducer= combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer
})

//state inicial
const initialState={};

//crear el store
const store= createStoreWithFirebase(rootReducer,initialState,compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
))
export default store;