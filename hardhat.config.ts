import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";

dotenv.config();
/* This loads the variables in your .env file to `process.env` */
const { PRIVATEKEY, URL } = process.env;
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.15",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },

  networks: {
    ropsten: {
      url: `${URL}`,
      accounts: [`0x${PRIVATEKEY}`],
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCANAPI,
  },
  mocha: {
    timeout: 200000000,
  },
};
export default config;