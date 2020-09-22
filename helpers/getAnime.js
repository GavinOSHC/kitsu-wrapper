const axios = require("axios");

const getAnime = async (url) => {
	let animeResult = [];
	let allRequests = false;
	let next = "";

	const { data } = await axios.get(url);
	animeResult = [...data.data];

	if (data.links.next) {
		next = data.links.next;
	} else {
		allRequests = true;
	}

	while (!allRequests) {
		if (next) {
			const { data } = await axios.get(next);
			animeResult = [...animeResult, ...data.data];
			if (data.links.next) {
				next = data.links.next;
			} else {
				allRequests = true;
			}
		} else {
			allRequests = true;
		}
	}

	return animeResult;
};

//"https://kitsu.io/api/edge/anime?filter[season]=summer&filter[seasonYear]=2020"

module.exports = { getAnime };
