const { deployProxy } = require("@openzeppelin/truffle-upgrades");
const ImportIERC20 = artifacts.require("MyToken");
module.exports = async function (deployer) {
  const tok = await deployProxy(ImportIERC20, { deployer });
  console.log(await tok.name());
  //await deployer.deploy(ImportIERC20);
};
