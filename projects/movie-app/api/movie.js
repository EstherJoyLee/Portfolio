import fetch from "node-fetch";

const { REACT_APP_API_KEY } = process.env;

export default async function handler(request, response) {
  console.log(request.body);
  console.log(REACT_APP_API_KEY);
  const { title, page, id } = JSON.parse(request.body);
  const url = id
    ? `https://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${title}&page=${page}`;

  const res = await fetch(url);
  const json = await res.json();
  console.log("json:", json.Search[0]);

  response.status(200).json({ json });
}
