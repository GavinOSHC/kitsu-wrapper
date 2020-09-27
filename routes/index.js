const express = require("express");
const { getAnime } = require("../helpers/getAnime");

const anime = express.Router();

anime.get("/ping", (_, res) => {
	return res.status(200).json({ msg: "pong" });
});

anime.post("/anime", async (req, res) => {
	if (!req.body.year && !req.body.season) {
		return res.status(400).json({ msg: "invalid request" });
	}

	const year = req.body.year;
	const season = req.body.season;

	const requestURL = `https://kitsu.io/api/edge/anime?filter[season]=${season}&filter[seasonYear]=${year}`;

	try {
		const result = await getAnime(requestURL);

		return res.status(200).json({ anime: result });
	} catch (error) {
		console.log(error);
		return res.status(400).json({ msg: "Unable to make request" });
	}
});

module.exports = { anime };
