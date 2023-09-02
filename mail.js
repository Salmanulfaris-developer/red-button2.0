const firebaseConfig = {
    apiKey: "AIzaSyC8UdElkPgM8VD1eLvgQI2gR7XTHu2GdBI",
    authDomain: "redbtn-3e66d.firebaseapp.com",
    databaseURL: "https://redbtn-3e66d-default-rtdb.firebaseio.com",
    projectId: "redbtn-3e66d",
    storageBucket: "redbtn-3e66d.appspot.com",
    messagingSenderId: "472372660490",
    appId: "1:472372660490:web:5c25ad55338a051a3412f3",
    measurementId: "G-X69P7P3CHM"
};
  
firebase.initializeApp(firebaseConfig);
  

var contactFormDB = firebase.database().ref("redButton");
  
document.getElementById("redButton").addEventListener("submit", submitForm);
  
function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var mobileNumber = getElementVal("mobileNumber");
    var location = getElementVal("location");
    var storeName = getElementVal("storeName");
  
    saveMessages(name, emailid, mobileNumber, location, storeName);
  
    document.querySelector(".alert").style.display = "block";
  
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    document.getElementById("redButton").reset();
  }
  
const saveMessages = (name, emailid, mobileNumber, location, storeName) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      mobileNumber: mobileNumber,
      location: location,
      storeName : storeName,
    });
};
  
const getElementVal = (id) => {
    return document.getElementById(id).value;
};