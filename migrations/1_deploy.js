const { deployProxy } = require("@openzeppelin/truffle-upgrades");
const ImportIERC20 = artifacts.require("ImportIERC20");

module.exports = async function (deployer) {
  await deployProxy(ImportIERC20, { deployer });
};
