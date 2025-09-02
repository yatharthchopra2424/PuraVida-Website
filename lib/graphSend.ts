export async function sendTwoEmailsWithGraph(params: {
  accessToken: string;
  adminAddress: string;
  userAddress: string;
  name: string;
  message: string;
}) {
  const { accessToken, adminAddress, userAddress, name, message } = params;

  console.log('=== EMAIL SENDING DEBUG ===');
  console.log('Graph send params:', { adminAddress, userAddress, name });
  console.log('Full message content:', message);

  const mk = (to: string, subject: string, body: string) => ({
    message: {
      subject,
      body: { contentType: 'Text', content: body },
      toRecipients: [{ emailAddress: { address: to } }],
    },
    saveToSentItems: true,
  });

  const base = `https://graph.microsoft.com/v1.0/users/${adminAddress}/sendMail`;
  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` };

  const adminPayload = mk(
    adminAddress,
    `New contact from ${name}`,
    `Name: ${name}\nEmail: ${userAddress}\n\n${message}`
  );

  // Send user confirmation directly to user with improved content to avoid spam filters
  const userPayload = mk(
    userAddress,
    `Thank you for contacting PuraVida - We received your inquiry`,
    `Hi ${name},\n\nThank you for reaching out to PuraVida!\n\nWe have received your inquiry and will get back to you within 24 hours.\n\nYour message:\n${message}\n\nBest regards,\nPuraVida Team\nrk@puravida.org.in\n\n---\nThis is an automated confirmation. Please do not reply to this email.`
  );

  console.log('Admin email payload:', JSON.stringify(adminPayload, null, 2));
  console.log('User email payload:', JSON.stringify(userPayload, null, 2));

  console.log('Sending admin email to:', adminAddress);
  const r1 = await fetch(base, { method: 'POST', headers, body: JSON.stringify(adminPayload) });
  const adminResponseText = await r1.text();
  console.log('Admin email response:', r1.status, adminResponseText);
  if (!r1.ok) throw new Error(`Admin send failed: ${r1.status} - ${adminResponseText}`);

  console.log('Sending user email to:', userAddress);
  const r2 = await fetch(base, { method: 'POST', headers, body: JSON.stringify(userPayload) });
  const userResponseText = await r2.text();
  console.log('User email response:', r2.status, userResponseText);
  if (!r2.ok) throw new Error(`User send failed: ${r2.status} - ${userResponseText}`);

  console.log('=== BOTH EMAILS SENT SUCCESSFULLY ===');
}