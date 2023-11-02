import express from "express";
import productRouter from "./router/products.router.js";
import cartRouter from "./router/carts.router.js";

const app = express();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/products", productRouter)
app.use("/api/carts", cartRouter)



app.listen(port, () => {
    console.log("Servidor express en puerto 8080")
})