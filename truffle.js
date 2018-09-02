let WalletProvider = require("truffle-wallet-provider");

let endpoint = process.env.PROVIDER_ENDPOINT || "http://127.0.0.1:8545";
let b64account = process.env.ETH_ACCOUNT || "";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    test: {
      provider: () => {
        let keystore = Buffer.from(b64account, 'base64').toString();
        let pass = "";
        let wallet = require('ethereumjs-wallet').fromV3(keystore, pass);
        return new WalletProvider(wallet, endpoint)
      },
      network_id: "17"
    },
    staging: {
      provider: () => {
        let keystore = Buffer.from(b64account, 'base64').toString();
        let pass = "";
        let wallet = require('ethereumjs-wallet').fromV3(keystore, pass);
        return new WalletProvider(wallet, endpoint)
      },
      network_id: "17"
    },
    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      from: "0xd77c534aed04d7ce34cd425073a033db4fbe6a9d",
      gas: 4712388
    }
  }
};
