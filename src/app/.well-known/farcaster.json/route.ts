export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjM0MTc5NCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc4Mzk3RDlEMTg1RDNhNTdEMDEyMTNDQmUzRWMxRWJBQzNFRWM3N2QifQ",
      payload: "eyJkb21haW4iOiJmcmFtZXMtdjItZGVtby1laWdodC52ZXJjZWwuYXBwIn0",
      signature:
        "MHhiZGM0OTMwNzU0NDU3YTI1MjAzYzM1ZDhmNmQ1Zjg3NjVmMTkwN2IzZGI4NWNiYjBjZGM2OGUzNGY1NDM5ZmM1MGFkM2VkOTc0MDMwNGViNTUwMWE5MWQ2NmYzNTJmYTNhZTg3N2UxNTAyY2FiZDA1ZGJjZWIzNjkyYjczYjExZTFj",
    },
    frame: {
      version: "1",
      name: "Frames v2 Demo",
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
