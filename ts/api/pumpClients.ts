import { PumpClient } from "./generic";

// Setup

export interface PumpClientSetupReq {
  mac: string;
}

export type PumpClientSetupRes = PumpClient & { accessToken: string };

// Fingerprint

export interface PumpClientFingerprintReq {
  mac: string;
  userId: string;
}

export type PumpClientFingerprintRes = PumpClient;
