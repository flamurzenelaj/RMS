import admin from "firebase-admin";

import serviceAccount from "../../credintials/rms-vuejs-4969a-firebase-adminsdk-ba4ue-c13cf8df05.json"assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://u-express-52da6-default-rtdb.europe-west1.firebasedatabase.app"
});

export default admin;