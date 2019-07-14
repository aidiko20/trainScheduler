var firebaseConfig = {
    apiKey: "AIzaSyAcy9BBTZY96qJP3nhXau8uRSfIgjE6mxI",
    authDomain: "aida-s-first.firebaseapp.com",
    databaseURL: "https://aida-s-first.firebaseio.com",
    projectId: "aida-s-first",
    storageBucket: "aida-s-first.appspot.com",
    messagingSenderId: "610842950040",
    appId: "1:610842950040:web:76218a6419982d30"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var name = "";
var destination = "";
var time = 0;
var frequency = 0;

$(".btn-primary").on("click", function (event) {
    event.preventDefault();
    name = $("#trainInput").val().trim();
    destination = $("#destinationInput").val().trim();
    time = $("#timeInput").val().trim();
    frequency = $("#frequencyInput").val().trim();
    console.log(name);
    console.log(destination);
    console.log(time);
    console.log(frequency);

      // Comming back
      database.ref().push({
        name: name,
        destination: destination,
        time: time,
        frequency: frequency
      });
});