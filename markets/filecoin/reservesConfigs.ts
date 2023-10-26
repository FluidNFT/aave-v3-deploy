import { rateStrategyStableOne, rateStrategyVolatileOne } from "./../aave/rateStrategies";
import { eContractid, IReserveParams } from "../../helpers/types";

export const strategyUSDC: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "8250",
  liquidationThreshold: "8500",
  liquidationBonus: "10400",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  flashLoanEnabled: true,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000",
  supplyCap: "2000000000",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: true,
};
