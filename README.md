# Medical Consultation Platform

## Deployment Instructions

CD pipeline is already setup using GitHub Actions. Follow the instructions if you 
want to deploy via your local machine (NOT RECOMMENDED)

* Install `firebase-tools` by running `npm i -g firebase-tools`
* Login to the correct gmail account by running `firebase login`
* Run `npm run build --prod` to build the files for deployment. The build files are assembled in the `build/` folder
* Run `firebase deploy` to deploy the current build

Live at: https://medicalconsultationplatform.firebaseapp.com/

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)