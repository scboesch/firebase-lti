/**
 * Functions main package.
 *
 * Register all cloud functions handlers.
 *
 */

'use strict';

const functions = require('firebase-functions');

const server = require('./server');
const database = require('./database');

exports.server = functions.https.onRequest(server);

exports.verify = functions.database.ref('provider/launches/{consumerKey}/{linkId}/users/{userId}/solution')
  .onWrite(event => database.launches.gradeSolution(event.data, event.params));
