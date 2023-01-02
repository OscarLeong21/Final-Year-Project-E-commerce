require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productsRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");
const cookieParser = require("cookie-parser");

connectDB();
const app = express();
app.use(
  cors({
    origin: "*",
  })
)

app.use(express.json());
app.use(cookieParser());

app.use("/api/products", productsRoutes);

app.use("/api/users", userRoutes);

app.use("/api", orderRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
