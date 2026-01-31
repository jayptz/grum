import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost" // desktop redirect
);

export function getAuthUrl() {
  return oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/gmail.readonly"],
  });
}

export async function setTokens(tokens: unknown) {
  oauth2Client.setCredentials(tokens as Parameters<typeof oauth2Client.setCredentials>[0]);
}

export async function listEmails() {
  const gmail = google.gmail({ version: "v1", auth: oauth2Client });
  const res = await gmail.users.messages.list({
    userId: "me",
    maxResults: 10,
  });
  return res.data.messages ?? [];
}
