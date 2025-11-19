const ethers = require("ethers");

async function main() {
  const CONTRACT_ADDRESS = "0xd3DCcCE2eD92Cf9C8062C6dc25532E21cbDA1189";
  const RPC_URL = "https://polygon-amoy.g.alchemy.com/v2/oo8Ij67ra4jois2S_jaf6";
  
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  
  const ABI = [
    "function claimed(address) view returns (bool)",
    "function nextId() view returns (uint256)"
  ];
  
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
  
  // Check nextId
  const nextId = await contract.nextId();
  console.log("Next Token ID:", nextId.toString());
  
  // Check if deployer wallet claimed
  const deployer = "0x521a812d8Bd36b428536f4812766B51d51685071";
  const claimed = await contract.claimed(deployer);
  console.log("Deployer claimed:", claimed);
}

main().catch(console.error);

