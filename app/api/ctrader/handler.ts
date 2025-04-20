// /pages/api/ctrader/token.ts
export default async function handler(req, res) {
  const { code } = req.body;

  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: process.env.CTRADER_CLIENT_ID!,
    client_secret: process.env.CTRADER_CLIENT_SECRET!,
    redirect_uri: 'http://localhost:3000/ctrader/redirect',
    code,
  });

  const tokenRes = await fetch('https://openapi.ctrader.com/apps/token', {
    method: 'GET',
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  });

  const data = await tokenRes.json();

  if (!tokenRes.ok) {
    return res.status(400).json({ error: data });
  }

  // ✅ Store access_token (in DB, Redis, cookie, etc.)
  // 🔒 Consider encrypting it or tying it to the user's session
  console.log(data);
  return res.status(200).json(data);
}
