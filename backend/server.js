require("dotenv").config();
const connectDatabase = require("./config/db");
const express = require("express");
const cors = require("cors");


const userRoutes = require("./routes/UserRoutes");
const recipeRoutes = require("./routes/RecipeRoutes");
const notificationRoutes = require("./routes/NotificationRoutes");
const leaderboardRoutes = require("./routes/LeaderboardRoutes");
const gameRoutes = require("./routes/GamesRoutes");
const fileUploadRoutes = require("./routes/FileUploadRoutes");
const commentRoutes = require("./routes/CommentRoutes")
const favoriteRoutes = require("./routes/FavoriteRoutes");
const postRoutes = require("./routes/CommunityPostRoutes");
const coffeeProfileRoutes = require("./routes/CoffeeProfileRoutes");
const coffeeCompanionRoutes = require("./routes/CoffeeCompanionRoutes");
 

const app = express();



const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());



app.use("/api/users", userRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/files", fileUploadRoutes);
app.use("/api/games", gameRoutes);
app.use("/api/leaderboards", leaderboardRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/coffee-profiles", coffeeProfileRoutes);
app.use("/api/coffee-companions", coffeeCompanionRoutes);



connectDatabase();

app.get("/", (req, res) => {
    res.send("Caffeine backend is running! ☕");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
