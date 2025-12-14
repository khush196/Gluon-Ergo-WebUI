import { OutputInfo, RegisterType, TransactionInfo } from "./explorerApi";
import {
  ErgoTransaction,
  ErgoTransactionOutput,
  Registers,
} from "@/types/nodeApi";
import { explorerClient, GLUONW_NODE_API_URL, NODE_API_URL } from "./constants";
import { NodeApi } from "./nodeApi/api";
import {
  APIFriendlyValue,
  UIFriendlyValue,
  removeBackslashes,
} from "./walletUtils/utils";
import { UnsignedTransaction } from "@nautilus-js/eip12-types";

export async function getUnConfirmedOrConfirmedTx(
  txId: string,
  isMainnet: boolean
): Promise<TransactionInfo | ErgoTransaction> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    return await nodeApi.transactionsUnconfirmedByTransactionId(txId);
  } catch (error) {
    try {
      return (await explorerClient(isMainnet).getApiV1TransactionsP1(txId))
        .data;
    } catch (e) {
      return {} as TransactionInfo;
    }
  }
}
export async function getFissionPrice(
  isMainnet: boolean,
  ergAmount: number
): Promise<any> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    return await nodeApi.getFissionPrice(ergAmount);
  } catch (error: any) {
    console.warn("Error fetching fission price:", error.message || error);
    // Return empty data structure instead of throwing
    return { data: [] };
  }
}

export async function getFusionPrice(
  isMainnet: boolean,
  ergAmount: number
): Promise<any> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    return await nodeApi.getFusionPrice(ergAmount);
  } catch (error: any) {
    console.warn("Error fetching fusion price:", error.message || error);
    // Return empty data structure instead of throwing
    return { data: [] };
  }
}

export async function getNeutronsPrice(isMainnet: boolean): Promise<any> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    return await nodeApi.getNeutronsPrice();
  } catch (error: any) {
    console.warn("Error fetching neutrons price:", error.message || error);
    return { data: [] };
  }
}

export async function getProtonsPrice(isMainnet: boolean): Promise<any> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    return await nodeApi.getProtonsPrice();
  } catch (error: any) {
    console.warn("Error fetching protons price:", error.message || error);
    return { data: [] };
  }
}

export async function getTransmuteGoldToRsvRate(
  isMainnet: boolean,
  goldAmount: number
): Promise<any> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    goldAmount = APIFriendlyValue(goldAmount, 9);
    return await nodeApi.getTransmuteGoldToRsvRate(goldAmount);
  } catch (error: any) {
    console.warn("Error fetching transmute gold to rsv rate:", error.message || error);
    return { data: [] };
  }
}

export async function getTransmuteRsvToGoldRate(
  isMainnet: boolean,
  rsvAmount: number
): Promise<any> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    rsvAmount = APIFriendlyValue(rsvAmount, 9);
    return await nodeApi.getTransmuteRsvToGoldRate(rsvAmount);
  } catch (error: any) {
    console.warn("Error fetching transmute rsv to gold rate:", error.message || error);
    return { data: [] };
  }
}

export async function getMintGoldRate(
  isMainnet: boolean,
  ergAmount: string
): Promise<any> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    return await nodeApi.getMintGoldRate(ergAmount);
  } catch (error: any) {
    console.warn("Error fetching mint gold rate:", error.message || error);
    return { data: [] };
  }
}

export async function getMintRsvRate(
  isMainnet: boolean,
  ergAmount: string
): Promise<any> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    return await nodeApi.getMintRsvRate(ergAmount);
  } catch (error: any) {
    console.warn("Error fetching mint rsv rate:", error.message || error);
    return { data: [] };
  }
}

export async function UnsignedTxForFission(
  isMainnet: boolean,
  walletAddress: string,
  ergAmount: number,
  isEIP12: boolean
): Promise<UnsignedTransaction> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    const response = await nodeApi.putFissionService(
      walletAddress,
      ergAmount,
      isEIP12
    );
    const parsedResponse = JSON.parse(removeBackslashes(response.data));
    console.log(parsedResponse);
    return parsedResponse;
  } catch (error) {
    throw error;
  }
}

export async function UnsignedTxForFusion(
  isMainnet: boolean,
  walletAddress: string,
  ergAmount: number,
  isEIP12: boolean
): Promise<UnsignedTransaction> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    const response = await nodeApi.putFusionService(
      walletAddress,
      ergAmount,
      isEIP12
    );
    const parsedResponse = JSON.parse(removeBackslashes(response.data));
    console.log(parsedResponse);
    return parsedResponse;
  } catch (error) {
    throw error;
  }
}

export async function UnsignedTxForTransmuteGoldToRsv(
  isMainnet: boolean,
  walletAddress: string,
  goldAmount: number,
  isEIP12: boolean
): Promise<any> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    goldAmount = APIFriendlyValue(goldAmount, 9);
    const response = await nodeApi.putTransmuteGoldToRsv(
      walletAddress,
      goldAmount,
      isEIP12
    );
    const parsedResponse = JSON.parse(removeBackslashes(response.data));
    console.log(parsedResponse);
    return parsedResponse;
  } catch (error) {
    throw error;
  }
}

export async function UnsignedTxForTransmuteRsvToGold(
  isMainnet: boolean,
  walletAddress: string,
  rsvAmount: number,
  isEIP12: boolean
): Promise<any> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    rsvAmount = APIFriendlyValue(rsvAmount, 9);
    const response = await nodeApi.putTransmuteRsvToGold(
      walletAddress,
      rsvAmount,
      isEIP12
    );
    const parsedResponse = JSON.parse(removeBackslashes(response.data));
    console.log(parsedResponse);
    return parsedResponse;
  } catch (error) {
    throw error;
  }
}

export async function UnsignedTxForMintGold(
  isMainnet: boolean,
  walletAddress: string,
  ergAmount: number,
  isEIP12: boolean
): Promise<any> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    const response = await nodeApi.putMintGold(
      walletAddress,
      ergAmount,
      isEIP12
    );

    if (Array.isArray(response.data)) {
      const dataResponse = [];
      for (let i = 0; i < response.data.length; i++) {
        const result = JSON.parse(removeBackslashes(response.data[i]));
        dataResponse.push(result);
      }
      console.log(dataResponse);
      return dataResponse;
    } else {
      const parsedResponse = JSON.parse(removeBackslashes(response.data));
      console.log(parsedResponse);
      return parsedResponse;
    }
  } catch (error) {
    throw error;
  }
}

export async function UnsignedTxForMintRsv(
  isMainnet: boolean,
  walletAddress: string,
  ergAmount: number,
  isEIP12: boolean
): Promise<any> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    const response = await nodeApi.putMintRsv(
      walletAddress,
      ergAmount,
      isEIP12
    );
    if (Array.isArray(response.data)) {
      const dataResponse = [];
      for (let i = 0; i < response.data.length; i++) {
        const result = JSON.parse(removeBackslashes(response.data[i]));
        dataResponse.push(result);
      }
      console.log(dataResponse);
      return dataResponse;
    } else {
      const parsedResponse = JSON.parse(removeBackslashes(response.data));
      console.log(parsedResponse);
      return parsedResponse;
    }
  } catch (error) {
    throw error;
  }
}

export async function getBetaDecayStats(isMainnet: boolean): Promise<any> {
  const nodeApi = new NodeApi(
    NODE_API_URL(isMainnet),
    GLUONW_NODE_API_URL(isMainnet)
  );
  try {
    return await nodeApi.getBetaDecayStats();
  } catch (error) {
    console.error("Error fetching beta decay stats:", error);
    // Return default values on error
    return {
      toProtons: {
        volume14d: 0,
        fee14d: 0,
        volumeTotal: 0,
        feeTotal: 0,
        transactionCount: 0
      },
      toNeutrons: {
        volume14d: 0,
        fee14d: 0,
        volumeTotal: 0,
        feeTotal: 0,
        transactionCount: 0
      }
    };
  }
}
