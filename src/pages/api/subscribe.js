import mailchimp from "../../lib/mailchimp";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }

      await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
        email_address: email,
        status: "subscribed",
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.log("Mailchimp Error:", error);
      return res.status(500).json({
        error: `Error subscribing to Mailchimp: ${error.message}`,
        errorDetail: JSON.stringify(error),
      });
    }
  } else {
    res.setHeader("Allow", "POST");

    res.status(405).end("Method Not Allowed");
  }
}
