var firebaseConfig = {
    apiKey: "AIzaSyD9dqHDXCWmj5gSHMGFPsqpJ88tDjoveuA",
    authDomain: "bankermax-fb195.firebaseapp.com",
    databaseURL: "https://bankermax-fb195-default-rtdb.firebaseio.com",
    projectId: "bankermax-fb195",
    storageBucket: "bankermax-fb195.appspot.com",
    messagingSenderId: "246976655095",
    appId: "1:246976655095:web:120fe751ed0333f2d8edf2"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var get = function(dataLocation, callback){
    firebase.database().ref(dataLocation).on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            callback(childKey, childData.val);
        });
    });
}, add = function(ref, key, value){
    firebase.database().ref(ref).child(key).update({val: value});
}

