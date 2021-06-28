import FormData from 'form-data';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
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
    [fields.name]: 'Perry Govier',
    [fields.phone]: '612-208-9384',
    [fields.email]: 'test@example.com',
    [fields.message]: 'Testing API Integration',
  }).forEach(([key, value]) => {
    formData.append(key, value);
  });
  try {
    const response = await fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`,{
      method: 'post',
      body: formData as any,
    })
    console.log();
    res.status(response.status).json({ok: response.status === 200, message: response.statusText})
  } catch {
    res.status(500).json({ ok: false, message: 'Unable to submit form' })
  }
}