import axios from 'axios';

export default async function handler(req: { method: string; body: { email: any; phone: any; company: any; website: any; lastname: any; firstname: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; end: { (): void; new(): any; }; }; }) {
  if (req.method === 'POST') {
    try {
      const API_KEY = 'pat-na1-d475f84d-4737-408c-85ae-8e9bf661e2db';
      const { email, phone, company, website, lastname, firstname } = req.body;

      const response = await axios.post('https://api.hubapi.com/crm/v3/objects/contacts', {
        properties: { email, phone, company, website, lastname, firstname },
      }, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      res.status(response.status).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating contact' });
    }
  } else {
    res.status(405).end();
  }
}
