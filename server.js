const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");

// Init middleware
app.use(express.json({ extended: false }));

// Connect to Database
connectDB();

// app.get("/", (req, res) => res.json({ msg: "Hello there" }));

app.use("/users", require("./routes/users"));
app.use("/contacts", require("./routes/contacts"));
app.use("/auth", require("./routes/auth"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
