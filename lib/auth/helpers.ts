export function getCognitoLogoutUrl(cognitoSignoutUrl: string): string {
  const domain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID;
  const logoutUri = encodeURIComponent(cognitoSignoutUrl);

  return `${domain}/logout?client_id=${clientId}&logout_uri=${logoutUri}`;
}
