const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");
const Productmodle = require("./models/Products");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://HAC:dedsec@mycrud.vrhib.mongodb.net/product?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/read", async (req, res) => {
  Productmodle.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/insert", async (req, res) => {
  const product = new Productmodle({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  try {
    await product.save();
    res.send("result saved");
  } catch (err) {
    res.send(err);
  }
});

app.put("/update", async (req, res) => {
    try {
        await Productmodle.updateOne(
            { _id: req.body.id },
            { $set: { name: req.body.newDataname } }
        );
        res.send("result updated");
    } catch (err) {
        res.send(err);
    }
});


app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await Productmodle.findByIdAndDelete(id), exec();

  res.send("deleted");
});

app.listen(30001, () => {
  console.log("Server is running on port 30001");
});
