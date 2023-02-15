import { PumpClient } from "./generic";

export interface SendFingerprintReq {
  userId: string;
}

export type SendFingerprintRes = PumpClient;
