export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { formData, role } = req.body;
    console.log('FormData:', formData);
    console.log('Role:', role);
    

  
    const formattedData = Object.entries(formData).map(
        ([key, value]) => `*${key}*: ${value}`
    ).join('\n');
    
    const payload = {
        text: `New volunteer application for ${role}:\n${formattedData}`
    };
    
  
    const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
  
    const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  
    if (slackResponse.ok) {
      return res.status(200).json({ success: true });
    } else {
      const text = await slackResponse.text();
      return res.status(400).json({ error: text });
    }
  }
  