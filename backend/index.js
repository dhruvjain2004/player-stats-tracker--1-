const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

// Routes
const playerRoutes = require("./routes/playerRoutes");
const matchRoutes = require("./routes/matchRoutes");

app.use("/api/players", playerRoutes);
app.use("/api/matches", matchRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
