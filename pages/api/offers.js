export default async function handler(req, res) {
  try {
    const apiKey = "42401|Fntp097UoV5RMQbcKf0FVst9fs40SUqveRfePbAufff8241e"; // بدلها بالـ key ديالك

    const response = await fetch(
      `https://api.ogads.com/offer?api_key=${apiKey}&country=US`
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong", details: error.message });
  }
}
