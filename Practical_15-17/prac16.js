const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [];
  
//middleware for session management
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}));

//middleware for Passport.js 
app.use(passport.initialize());
app.use(passport.session());


//Passport.js local strategy for username/password authentication
passport.use(new LocalStrategy(
  { usernameField: 'username', passwordField: 'pwd' },
  (username, password, done) => {
    const user = users.find(u => u.username === username && u.pwd === pwd);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false, { message : "Incorrect username or password." });
    }
  }
));

//Passport.js JWT strategy for token authentication
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'jwt-secret-key',
};

passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
  const user = users.find(u => u.id === payload.id);

  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }
}));

// Serialize and deserialize user functions for Passport.js
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user);
});

app.get('/register', (req, res) => {
    res.send(`
      <h1>Registration</h1>
      <form action="/register" method="post">
        <label for="username">Username : </label>
        <input type="text" id="username" name="username" required>
        <br><br><br>
        <label for="pwd">Password : </label>
        <input type="pwd" id="pwd" name="pwd" required>
        <br><br><br>
        <input type="Submit" value="Register">
      </form>`);
});

app.get('/login', (req, res) => {
    res.send(`
      <h1>Login</h1>
      <form action="/login" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br><br>
        <input type="submit" value="Login">
      </form>
    `);
});
  
//api to register a new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  res.status(201).json({ message: "User registered successfully."});
});

//api for user login
app.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  const token = jwt.sign({ username: req.user.username}, jwtOptions.secretOrKey);
  res.json({ token });
});

//api to get user profile (requires authentication)
app.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json(req.user);
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
