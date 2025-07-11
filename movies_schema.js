import mongoose from "mongoose";
import {Schema} from "mongoose";

const movieSchema = new Schema ({
    tmdbId: {// This is the unique identifier from TMDB
        type: String, //String is safer for external IDs
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    posterPath: {// e.g., /some/path/to/poster.jpg (will be prepended with TMDB base URL on frontend)
        type: String,
        required: true,
        trim: true
    },
    overview: {
        type: String, // Short description of the movie
        required: true,
        trim: true
    },
    videoKey: {// YouTube video key for trailers (e.g., dQw4w9WgXcQ)
        type: String,
        required: false, // Not all movies may have trailers
        trim: true
    },
    genres: { // Array of genre names (e.g., ["Action", "Science Fiction"])
        type: [String],
        required: true
    },
    voteAverage: { // Average user rating from TMDB (e.g., 7.5)
        type: Number,
        required: true,
    },
    popularity: { // TMDB's popularity score (e.g., 123.45)
        type: Number,
        required: true,
    },
    backdropPath: { // Path to the backdrop image (e.g., /some/path/to/backdrop.jpg)
        type: String,
        required: false,
        trim: true
    },

    createdAt: { // Timestamp of when the movie was added to the database
        type: Date,
        default: Date.now
    },
    updatedAt: { // Timestamp of the last update to the movie record
        type: Date,
        default: Date.now
    }
});

// Add a pre-save hook to update the 'updatedAt' field on each save
movieSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Movie = mongoose.model("Movie", movieSchema); //Renamed to singular 'Movie' for consistency with Mongoose conventions
export default Movie; // Export the Movie model for use in other parts of the application