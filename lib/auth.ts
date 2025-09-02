import { ConfidentialClientApplication, Configuration } from '@azure/msal-node';

const config: Configuration = {
  auth: {
    clientId: process.env.AAD_CLIENT_ID!,
    authority: `https://login.microsoftonline.com/${process.env.AAD_TENANT_ID}`,
    clientSecret: process.env.AAD_CLIENT_SECRET!,
  },
};

export const msal = new ConfidentialClientApplication(config);

// Application permissions scope for app-only access
export const scopes = ['https://graph.microsoft.com/.default'];

export async function getAppOnlyToken(): Promise<string> {
  try {
    const result = await msal.acquireTokenByClientCredential({
      scopes,
    });
    if (!result) {
      throw new Error('Failed to acquire app-only token');
    }
    return result.accessToken;
  } catch (error) {
    console.error('Error acquiring app-only token:', error);
    throw error;
  }
}