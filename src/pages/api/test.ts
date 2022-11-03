import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, published, ids } = req.body || {};
    res.json({ name, published, ids });
  }
  if (req.method === 'GET') {
    try {
      return res.json({ name: 'Test Post', published: true, ids: [1, 2, 3] });
    } catch (err) {
      return res.status(500).send('Error revalidating');
    }
  }
}
