## Project Overview
You are tasked with creating a React web application using Next.js and Cesium JS that integrates Google Sign-In and displays a map with a pin marking our new office. We do not expect you to spend more than 3 or 4 hours on this, and we do not expect a polished, shippable product. You will be invited to submit your code, and present it to us in a technical interview where you can take us through your thought process, explain anything you did not have time to do, and show us what you have built. You can also expect that we will ask some questions about your code too!

## Requirements
To successfully complete this project, you will need to:
- Use Next.js to create a basic layout for the web app.
- Implement Google Sign-In to allow users to sign in to your app using their Google account.
- Use Cesium JS to display a map.
- Add pins to the map to mark the locations.

### Technologies to Use
- React
- Next.js
- Cesium JS
- Google Sign-In API

### Tasks to Complete
- Set up a new Next.js project by running npx create-next-app.
- Install the necessary dependencies for Cesium JS and Google Sign-In.
- Create a basic layout for the web app using Next.js. This should include a header, footer, and a main section for the map.
- Implement Google Sign-In by following the official documentation provided by Google. You will need to create a Google Cloud Platform project, enable the Google Sign-In API, and obtain a client ID.
- Create an endpoint that provides the coordinates. Then, using JavaScript, fetch the coordinates from the endpoint.
- Display the map of our offices using Cesium JS. You will need to add a CesiumViewer to your app and set the initial camera position to focus on Budapest.
- Add a pin to the map to mark the location of the office. You can use the Entity API provided by Cesium JS to add a pin at the appropriate location.

### Additional Requirements
- Your code should be clean, maintainable, and easy to understand.
- Your app should be responsive and look good on both desktop and mobile devices.
- Your app should be properly tested to ensure that it functions correctly.
- You should use best practices when it comes to security and data privacy.

## Data - Coordinates
```
{
  "budapest": {
    "lat": "47.4986567",
    "lng": "19.0532484"
  },
  "dresden": { 
    "lat": "51.082249", 
    "lng": "13.7269685"
  }, 
  "los_angeles": {
    "lat": "33.9201528",
    "lng": "-118.3925842"
  }
}
```

## Deadline
You'll have 4 days to complete the challenge. Of course, life is life, and anything can happen which blocks you to keep this deadline, so please let us know if you need more time with it, we can be flexible with it.