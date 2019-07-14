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
var firstTrain ;
var frequency = 0;


$(".btn-primary").on("click", function (event) {
    event.preventDefault();
    name = $("#trainInput").val().trim();
    destination = $("#destinationInput").val().trim();
    firstTrain = moment($("#firstTrainInput").val().trim(), "HH:mm").subtract(1, "years");
    console.log(firstTrain);
    frequency = $("#frequencyInput").val().trim();
    


      database.ref().push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
  });
      });

database.ref().on("child_added", function (snapshot) {
    var sv = snapshot.val();
    var minAwayData = $("<td>");
    var newRow = $("<tr>");
    var nameData = $("<td>");
    nameData.text(sv.name);
    var destinationData = $("<td>");
    destinationData.text(sv.destination);
    var diffData = $("<td>");
    diffData.text(moment().diff(moment(earlyTrain), "minutes"));
    var earlyTrain = $("<td>");
    earlyTrain.text(moment().diff(moment(sv.date, "HH:mm"), "minutes"));
    var nextTrainData = moment().add(minAwayData, "minutes");
    nextTrainData = moment(nextTrainData).format("HH:mm");
    console.log(snapshot);

    newRow.append(nameData, destinationData, diffData, nextTrainData, minAwayData);
    $("tbody").append(newRow);

   
});
