const express = require("express");
const cors = require("cors");

const { anime } = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(anime);

app.listen(process.env.PORT || "3000", () => {
	console.log(`Server Running on port ${process.env.PORT || "3000"}`);
});
