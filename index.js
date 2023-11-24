import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (request, response) => {
  response.json({
    data: {
      product_name: "Sepatu Olahraga",
      price: 2000000,
      image_url:
        "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    message: "Data succeessfully retrieved!",
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
