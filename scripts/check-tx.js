const ethers = require("ethers");

async function main() {
  const RPC_URL = "https://polygon-amoy.g.alchemy.com/v2/oo8Ij67ra4jois2S_jaf6";
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  
  const txHash = "0xda7385bd3bece82d96bce03fd7291ed52b5144ca6e7c367910650890a16d9358";
  
  const tx = await provider.getTransaction(txHash);
  const receipt = await provider.getTransactionReceipt(txHash);
  
  console.log("Transaction found:", tx ? "Yes" : "No");
  console.log("Receipt:", receipt ? "Confirmed" : "Pending");
  
  if (receipt) {
    console.log("Status:", receipt.status === 1 ? "Success" : "Failed");
    console.log("Block:", receipt.blockNumber);
    console.log("Gas used:", receipt.gasUsed.toString());
  } else {
    console.log("Still pending in mempool...");
  }
}

main().catch(console.error);


