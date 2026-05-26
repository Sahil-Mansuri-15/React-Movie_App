export default async function handler(req, res) {
  const { url } = req.query;
  const response = await fetch(`https://api.themoviedb.org/3/${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.VITE_TMDB_API_KEY}`,
      accept: 'application/json',
    },
  });
  const data = await response.json();
  res.status(200).json(data);
}
