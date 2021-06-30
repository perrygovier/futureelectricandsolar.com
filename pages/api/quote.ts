import type { NextApiRequest, NextApiResponse } from 'next'
import FormData from 'form-data';

type Response = {
  ok: boolean,
  message: string,
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  if (req.method !== 'POST') {
    return res.status(405);
  }

  var formId = '1FAIpQLSeJEcRt9bqOGR3pFLL4wfjI4EKBQZjPcDC5fSkPZGnS0WnJag';
  var fields = {
    name: 'entry.1984838808',
    phone: 'entry.57305685',
    email: 'entry.1807023646',
    message: 'entry.427921603',
  }

  const formData = new FormData();
  Object.entries({ 
    [fields.name]: req.body.name,
    [fields.phone]: req.body.phone,
    [fields.email]: req.body.email,
    [fields.message]: req.body.message,
  }).forEach(([key, value]) => {
    formData.append(key, value);
  });
  try {
    const response = await fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`,{
      method: 'post',
      body: formData as any,
    })
    res.status(response.status).json({ok: response.status === 200, message: response.statusText})
  } catch {
    res.status(500).json({ ok: false, message: 'Unable to submit form' })
  }
}