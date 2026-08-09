const express = require("express");
const cors = require("cors");
const pizzas = require("./data/pizzas");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// ===============================
// HOME
// ===============================

app.get("/", (req, res) => {
  res.json({
    message: "PizzaRush Backend is Running 🚀"
  });
});


// ===============================
// GET ALL PIZZAS
// ===============================

app.get("/api/pizzas", (req, res) => {
  res.json(pizzas);
});


// ===============================
// SEARCH / FILTER PIZZAS
// ===============================

app.get("/api/pizzas/search", (req, res) => {

  const { category, name } = req.query;

  let result = pizzas;

  // Category filter
  if (category) {
    result = result.filter(
      (pizza) =>
        pizza.category.toLowerCase() ===
        category.toLowerCase()
    );
  }

  // Name search
  if (name) {
    result = result.filter(
      (pizza) =>
        pizza.name
          .toLowerCase()
          .includes(name.toLowerCase())
    );
  }

  res.json(result);
});


// ===============================
// GET SINGLE PIZZA
// ===============================

app.get("/api/pizzas/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const pizza = pizzas.find(
    (pizza) => pizza.id === id
  );

  if (!pizza) {
    return res.status(404).json({
      message: "Pizza not found"
    });
  }

  res.json(pizza);
});


// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {
  console.log(
    `PizzaRush server running on http://localhost:${PORT}`
  );
});