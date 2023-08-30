const origin = "https://deep-index.moralis.io";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjYyNWUwNDg0LWQzZDYtNDE1ZS04OGQ1LTlmMjQwMDQ0MDUxOSIsIm9yZ0lkIjoiMzUzOTExIiwidXNlcklkIjoiMzYzNzQ1IiwidHlwZUlkIjoiYjRkMWVmYTUtNDM3ZS00OTY1LWI4ZjEtM2ZlMTEyZTQzZWVhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTI1NDA4NDksImV4cCI6NDg0ODMwMDg0OX0.xfoHwqSF1yWya_y9PuguC2TAcFMK-DWYui2tLzOaaiI";

// get all nfts under one contract, based on tokenaddress
export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

// get all trades under this contract
export const getContractTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

// get the individual nft transfer
export const getNFTTransfers = async (tokenAddress, tokenId) => {
  const url = new URL(
    `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
  );
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};
