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
$("#submit-btn").on("click", function (event) {
  event.preventDefault();

  var name = $("#trainInput").val().trim();
  var destination = $("#destinationInput").val().trim();
  var frequency = $("#frequencyInput").val().trim();
  var firstTrain = $("#firstTrainInput").val().trim();

  var newTrain = {
    name: name,
    destination: destination,
    frequency: frequency,
    firstTrain: firstTrain
  };
  database.ref().push(newTrain);

  alert("New train info successfully added");

  $("#trainInput").val("");
  $("#destinationInput").val("");
  $("#frequencyInput").val("");
  $("#firstTrainInput").val("");
});

database.ref().on("child_added", function (childSnapshot) {
  var name = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var frequency = childSnapshot.val().frequency;
  var nextTrain;
  var minutesAway;
  var firstTrainfirst = moment(childSnapshot.val().firstTrain, "MM:hh").subtract(1, "years");
  var timeDiff = moment().diff(moment(firstTrainfirst), "minutes");
  var remainder = timeDiff % childSnapshot.val().frequency;
  var nextTrain = childSnapshot.val().frequency - remainder;
  var minutesAway = moment().add(minutesAway, "minutes");
  minutesAway = moment(minutesAway).format("HH:mm");

  var newRow = $("<tr>").append(
    $("<td>").text(name),
    $("<td>").text(destination),
    $("<td>").text(frequency),
    $("<td>").text(minutesAway),
    $("<td>").text(nextTrain)
  );
  $("#trainTable > tbody").append(newRow);

});