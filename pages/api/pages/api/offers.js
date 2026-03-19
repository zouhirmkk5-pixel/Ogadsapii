export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.ogads.com/offer?api_key=42400|vvDeeK3iEUyHnoJJhDBrjRRtg9HwlkxdtLizvsbecfcd6706&country=US");
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching offers" });
  }
}
