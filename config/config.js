/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {
  // Mongo database url
  mongodb: process.env.MONGODB || 'ethanhermon:sis4MongoDB@ds143777.mlab.com:43777/celebs',

  // Personality Insights credentials
  personality_insights: {
    url: 'https://gateway.watsonplatform.net/personality-insights/api',
    username: 'imIC7IW8HjkJ',
    password: '4eecf4cb-4038-47e4-bf38-1f1a64196923',
    version: 'v2'
  },

  // Twitter app credentials: https://apps.twitter.com/app
  twitter: process.env.TWITTER ? JSON.parse(process.env.TWITTER) : [{
    consumer_key: 'qPwl6ZnSkkKE3kNMxYeDWsrbD',
    consumer_secret: 'McwpBHQDTEAtgiQ1da0HdOT1m1vTxzILTLg1hhKz0ipB2oqnte',
    access_token_key: '4071428416-89A2tUWP8hOA84gBYP0NXOD5yaDHP8wD1iXcGcs',
    access_token_secret: '18HZ7kidR6HEcxxCkcOmAIqedT0dchNFcEI2g8F6tL2Tu'
  }]
};
