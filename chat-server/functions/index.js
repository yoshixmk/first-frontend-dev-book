const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase)

const express = require('express')
const app = express()

const cors = require('cors')({origin: true})
app.use(cors)

const anonymousUser = {
  id: "anon",
  name: "Anonymous",
  avator: ""
}

const checkUser = (req, res, next) => {
  req.user = anonymousUser
  if (req.query.auth != undefined) {
    const idToken = req.query.auth_token
    admin.auth().token.verifyIdToken(idToken)
      .then(decodedIdToken => {
        const authUser = {
          id: docodedIdToken.user_id,
          name: decodedIdToken.name,
          avator: decodedIdToken.user.picture
        }
        req.user = authUser
        next()
      })
      .catch(error => {next()})
  }
  next()
}

app.use(checkUser)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
