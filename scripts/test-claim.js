const ethers = require("ethers");

async function main() {
  require('dotenv').config();
  
  const CONTRACT_ADDRESS = "0xd3DCcCE2eD92Cf9C8062C6dc25532E21cbDA1189";
  const RPC_URL = "https://polygon-amoy.g.alchemy.com/v2/oo8Ij67ra4jois2S_jaf6";
  
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  
  console.log("Wallet:", wallet.address);
  
  const ABI = [
    "function claimBadge() external",
    "function claimed(address) view returns (bool)",
    "function nextId() view returns (uint256)"
  ];
  
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);
  
  // Check balance
  const balance = await provider.getBalance(wallet.address);
  console.log("Balance:", ethers.utils.formatEther(balance), "MATIC");
  
  // Check if already claimed
  const claimed = await contract.claimed(wallet.address);
  console.log("Already claimed:", claimed);
  
  if (claimed) {
    console.log("Already claimed!");
    return;
  }
  
  // Estimate gas
  try {
    const gasEstimate = await contract.estimateGas.claimBadge();
    console.log("Gas estimate:", gasEstimate.toString());
  } catch (err) {
    console.log("Gas estimate error:", err.message);
  }
  
  // Try to claim
  try {
    console.log("Claiming badge...");
    const tx = await contract.claimBadge();
    console.log("Transaction hash:", tx.hash);
    await tx.wait();
    console.log("Success! Badge claimed!");
  } catch (err) {
    console.log("Error:", err.message);
  }
}

main().catch(console.error);

