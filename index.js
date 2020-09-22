const express = require("express");

const { anime } = require("./routes");

const app = express();

app.use(express.json());
app.use(anime);

app.listen(process.env.PORT || "3000", () => {
	console.log(`Server Running on port ${process.env.PORT || "3000"}`);
});
