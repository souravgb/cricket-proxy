// File: api/score.js

export default async function handler(req, res) {
  const { matchId } = req.query;

  if (!matchId) {
    return res.status(400).json({ error: 'matchId is required' });
  }

  try {
    const response = await fetch(`https://cricket-live-line1.p.rapidapi.com/getScore?id=${matchId}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com',
        'x-rapidapi-key': '3a0ca3bfbdmsh9b003ed5d989e94p126f08jsn4843e4e7273f'
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}  
