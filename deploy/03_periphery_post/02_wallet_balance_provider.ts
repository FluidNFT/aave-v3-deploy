import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { COMMON_DEPLOY_PARAMS } from "../../helpers/env";

const func: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
  ...hre
}: HardhatRuntimeEnvironment) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("WalletBalanceProvider", {
    from: deployer,
    // ...COMMON_DEPLOY_PARAMS,
    log: true,
    maxPriorityFeePerGas: hre.ethers.utils.parseUnits('50', 'gwei'),
  });
};

func.tags = ["periphery-post", "walletProvider"];

export default func;
