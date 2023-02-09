import admin from "firebase-admin";

import serviceAccount from "../../credintials/rms-vuejs-14f1c-firebase-adminsdk-iifrg-7bfa3a52dc.json" assert { type: "json" };;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://u-express-52da6-default-rtdb.europe-west1.firebasedatabase.app"
});

export default admin;