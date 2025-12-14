import axios from 'axios';
import {NEXT_PUBLIC_NEST_API_URL} from "@/blockchain/ergo/constants";

// Create axios instance with timeout
const axiosInstance = axios.create({
  timeout: 10000, // 10 seconds timeout
});

export async function addressConnectionQuery(uuid: string, isMainnet: boolean): Promise<string | undefined> {
  try{
    const URL = `${NEXT_PUBLIC_NEST_API_URL(isMainnet)}/ergopay/address/${uuid}`;
    const response = await axiosInstance.get(URL);
    const address = response.data.address;
    return address === "null" ? undefined : address;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}