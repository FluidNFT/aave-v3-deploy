import { eFilecoinNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { ZERO_ADDRESS } from "../../helpers/constants";
import {
  strategyUSDC,
} from "./reservesConfigs";
// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const FilecoinMarket: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 42,
  WrappedNativeTokenSymbol: "TFIL",
  MarketId: "Filecoin Aave Market",
  ATokenNamePrefix: "Filecoin",
  StableDebtTokenNamePrefix: "Filecoin",
  VariableDebtTokenNamePrefix: "Filecoin",
  SymbolPrefix: "Fil",
  ReservesConfig: {
    USDC: strategyUSDC,
  },
  ReserveAssets: {
    [eFilecoinNetwork.filecoin]: {
      USDC: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
    },
    [eFilecoinNetwork.calibrationnet]: {
      USDC: "0xbEA8bf3573Aa155265996DB35E56b60FEA3cFD2b",
    },
  },
  ChainlinkAggregator: {
    [eFilecoinNetwork.filecoin]: {
      USDC: ZERO_ADDRESS,
    },
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["USDC"],
    },
  },
};

export default FilecoinMarket;
