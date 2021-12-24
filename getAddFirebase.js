var firebaseConfig = {
    apiKey: "AIzaSyDSkvZDwRlB19dS35tesFuPN2m_cuhr2gw",
    authDomain: "bankermax-31bc4.firebaseapp.com",
    databaseURL: "https://bankermax-31bc4-default-rtdb.firebaseio.com",
    projectId: "bankermax-31bc4",
    storageBucket: "bankermax-31bc4.appspot.com",
    messagingSenderId: "325575354542",
    appId: "1:325575354542:web:1081be2d5172d16d65a53f"
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

