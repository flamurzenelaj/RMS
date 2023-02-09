
// var admin = require("firebase-admin");

var serviceAccount = require("./rms-vuejs-14f1c-firebase-adminsdk-iifrg-7bfa3a52dc.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});