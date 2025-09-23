import express from "express";
import axios from "axios";
import body from "body-parser";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/submit", async (req, res) => {
  try {
  const animeName = req.body.anime;
  console.log(animeName);
  const response = await axios.get(
    `https://api.animechan.io/v1/quotes/random?anime=${animeName}`
  );
  // Directly access the nested properties of the 'data' object
  const wisdom = response.data.data.content;
  const character = response.data.data.character.name;
  console.log(wisdom);
  console.log(character);

  res.render("index.ejs", {
    anime: animeName,
    wisdom: wisdom,
    character: character,
  });
} catch (error) {
  console.error(error);
  res.render("index.ejs", {
    anime: "",
    wisdom: "Sorry, no quote found for that anime.",
    character: "",
  });
}
});

app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
