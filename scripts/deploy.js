const hre = require("hardhat");
const ethers = hre.ethers;


async function main() {
  // We get the contract to deploy
  const MathExtended = await hre.ethers.getContractFactory("MathExtended");
  const mathextended = await MathExtended.deploy();

  await mathextended.deployed();

  // await hre.run("verify:verify", {
  //   address: mathextended.address,
  //   constructorArguments: [],
  // });

  console.log("Contract deployed to:", mathextended.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
