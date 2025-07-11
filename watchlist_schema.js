import mongoose from "mongoose";
import {Schema} from "mongoose";

const watchlistSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User", // Reference to the User schema
        required: true,
    },
    name: {
        // This is the name the user gives to the specific watchlist (e.g., "My Fantasy Movies")
        type: String,
        required: true,
        trim: true,
    },    
    movies: [
     {
       // This array will hold the movieIds for this specific watchlist       
       type: Schema.Types.ObjectId,
       ref: "Movie", // Reference to the Movie schema
     },
    ],
    sharedWith: [
      {
        type: Schema.Types.ObjectId,
        ref: "User" // Users with whom this watchlist is shared
     },
    ],
    createdAt: {
        // When this specific name watchlist was created
        type: Date,
        default: Date.now
    },
});

// unique index to ensure a user can't have two watchlist with the exact same name
watchlistSchema.index({ userId: 1, name: 1 }, { unique: true });
    
export default mongoose.model("Watchlist", watchlistSchema);
// This will create a collection named "watchlists" in MongoDB
 