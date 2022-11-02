import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    return res.json({ test: 'test', thing: true, list: [1, 2, 3] });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
