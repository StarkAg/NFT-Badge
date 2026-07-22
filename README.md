

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```
PRIVATE_KEY=your_private_key_here
AMOY_RPC=https://polygon-amoy.g.alchemy.com/v2/your-api-key
```

3. Compile contracts:
```bash
npm run compile
```

4. Deploy to Polygon Amoy:
```bash
npm run deploy:amoy
```

## 🌐 Frontend

Open `frontend/index.html` in your browser to interact with the contract.

**Requirements:**
- MetaMask wallet
- Connected to Polygon Amoy network
- Some testnet MATIC for gas fees

## 📦 Project Structure

```
srm-badge-demo/
├── contracts/
│   └── SRMBadge.sol      # Main NFT contract
├── scripts/
│   └── deploy.js         # Deployment script
├── frontend/
│   ├── index.html        # Frontend UI
│   └── script.js         # Wallet interaction
├── hardhat.config.js     # Hardhat configuration
└── package.json          # Dependencies
```

## 🔧 Commands

- `npm run compile` - Compile Solidity contracts
- `npm run deploy:amoy` - Deploy to Polygon Amoy
- `./deploy-and-update.sh` - Deploy and update frontend

## 📝 License

MIT

