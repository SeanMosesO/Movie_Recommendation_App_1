import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo"; // for session storage in MongoDB
const app = express();
dotenv.config();
//middleware
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI, // use the same DB URI as in session store
    autoRemove: 'native', // automatically remove expired sessions
    // Collection name for sessions
    collectionName: "sessions",
    ttl: 60 * 60, // session time to live in seconds (1 day)
  }),
    cookie: {
        maxAge: 1000 * 60 * 60 // cookie expiration time in milliseconds (1 hour)
    }
}));


// import user route
import signup from "./routes/signup_route.js";
import login from "./routes/login_route.js";
import getProfile from "./routes/get_profile.js";
import updateProfile from "./routes/updateProfile.js";
import logout from "./routes/logout.js";
import deleteAccount from "./routes/deleteAccount.js";
import addToFavorites from "./routes/add_favorites.js";
import createWatchlist from "./routes/create_watchlist.js";
import addToWatchlist from "./routes/add_to_watchlist.js";

// import movie route
import getMovies from "./routes/get_movies.js";
//home page
app.get("/", (req, res) =>{
    res.send("Welcome to the Movie Recommendation App API");
})
// use route
app.use(signup);
app.use(login);
app.use(getProfile);
app.use(updateProfile);
app.use(logout);
app.use(deleteAccount);
app.use(addToFavorites);
app.use(createWatchlist);
app.use(addToWatchlist);
app.use(getMovies);
// connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
 useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected successfully");
})
.catch((error) => {
  console.error("MongoDB connection failed:", error.message);
});

app.listen(5000, () => console.log("app listening on port 5000")
)
