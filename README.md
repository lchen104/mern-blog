# Introduction
Welcome to .ateM
This is a basic blog site which will evolve into a full blown social media website by adding addiitonal features and improving on current features.

# Technologies Used

## Backend
- Mongoose: [https://mongoosejs.com/docs/index.html]
```
npm i --save mongoose
```


- Express: [https://expressjs.com/en/starter/installing.html]
```
npm i --save express
```


- Dotenv: [https://www.npmjs.com/package/dotenv]
```
npm i --save dotenv nodemon
```


### Nodemon will restart server after each code change to prevent us from manually restarting
- Nodemon; [https://nodemon.io/]
```
npm i --save nodemon
```


### Gives users the ability to upload images
- Multer: [https://github.com/expressjs/multer#readme]
```
npm i --save multer
```


### Provides a Connect/Express middleware that can be used to enable CORS with various options
- Cors: [https://github.com/expressjs/cors#readme]
```
npm i --save cors
```


## Frontend

# frontend frameworks using vite or create-react-app
client folder: vite: npm run dev
frontend folder: create-react-app: npm start

# fetch data from mondoDB
https://axios-http.com/docs/intro

npm i --save axios

# encrypt user password
https://www.npmjs.com/package/bcryptjs
https://github.com/dcodeIO/bcrypt.js

npm i --save bcryptjs

# install jsonwebtoken
https://www.npmjs.com/package/jsonwebtoken

npm i --save jsonwebtoken

# install cookie
https://www.npmjs.com/package/cookie-parser
https://github.com/expressjs/cookie-parser

npm i --save cookie-parser

# react-router
https://v5.reactrouter.com/web/guides/quick-start

npm i --save react-router-dom

# material UI for design/layout
https://mui.com/material-ui/getting-started/installation/

npm install @mui/material 
npm install @emotion/react 
npm install @emotion/styled
npm install @fontsource/roboto
npm install @mui/icons-material

# multer to handle image uploads (WORK IN PROGRESS)
https://www.npmjs.com/package/multer

npm i --save multer


# Getting Started
- Trello Board [https://trello.com/b/litvpJqZ/mern-blog-app]
- GitHub [https://github.com/lchen104/mern-blog]

# Unsolved Problems
- Working on adding the ability for users to upload an image to blog about.

# Future Enhancements
- Add an image to blog about (Currently working on)
- Add user name on welcome message in navbar
- Add user friends who are also registered so user can also view friends blogs on the users main feed 
- Add user likes for each blog
- Added user comments for each blog