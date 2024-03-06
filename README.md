# Embedded Product Recommender Chatbot

Creating a chatbot that can be integrated using an embedded iframe. This is done by building a conversational interface designed to assist users in finding the right computer or laptop based on their needs and preferences. Chatbot aims to provide personalized recommendations and assistance to users seeking advice on purchasing a computer or laptop, making the process more interactive and engaging.

**Example Use Case provided: Laptop Recommender**

**Tech Stack: React + CSS + express.js server**

Version 2:
<img width="1193" alt="v2github-1" src="https://github.com/wyang23/chatbot-embedded-iframe/assets/92281375/ca44a184-15a9-4d94-868e-e36001440201">

<img width="1193" alt="v2github-2" src="https://github.com/wyang23/chatbot-embedded-iframe/assets/92281375/d82ef14b-e68f-46da-898e-00b8e9f39bb2">

Version 2 Demo Video:

https://github.com/wyang23/chatbot-embedded-iframe/assets/92281375/15dfd24d-0f30-484e-a239-bb9e40b66958

Version 1:

<img width="1483" alt="Screenshot 2024-02-27 at 4 21 22 pm" src="https://github.com/wyang23/chatbot-embedded-iframe/assets/92281375/94d9b94e-6a9d-49f4-a105-1f3f75ef1a74">

# Functionality and Component Breakdown

**Send Message/Chat History:** The chat history displays the conversation between the user and the chatbot, including messages exchanged and any suggested items provided by the chatbot. Users can send their messages by pressing the "Send" button or hitting the Enter key after typing their message.

<img width="1178" alt="image" src="https://github.com/wyang23/chatbot-embedded-iframe/assets/92281375/eb2a9aa3-c865-40f8-abdc-c4ab83bc132c">

**Product Suggestions:** Based on the user's input and preferences, the chatbot provides suggestions for suitable computers or laptops. These suggestions include information such as product title, description, SKU, pros, cons, and an image.

<img width="270" alt="product card" src="https://github.com/wyang23/chatbot-embedded-iframe/assets/92281375/4001abb2-5ac7-4f93-9e1c-c0c020c09c63">

**User Input:** Users can input their messages or responses to the chatbot's prompts using the text input field provided.

**Suggested Replies:** The chatbot may also offer suggested replies or follow-up questions to guide the conversation and provide further assistance.

<img width="1180" alt="Screenshot 2024-03-06 at 11 44 09 am" src="https://github.com/wyang23/chatbot-embedded-iframe/assets/92281375/1a233181-3793-42c7-a7f8-2949d6b7e57d">


# Mock API Express Server

This express server acts as the endpoint which provides the suggestions provided by the chatbot. 

Picks from 10 predefined laptops and then selects 3 of them and then provides 3 random suggested follow up questions

uses /api/message route



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
