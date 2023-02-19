import { PumpClient } from "./generic";

// Setup

export interface PumpClientSetup {
  body: {
    mac: string;
  };
  res: PumpClient & {
    publicKey: string;
    secretKey: string;
    serverPublicKey: string;
  };
}

// Fingerprint

export interface PumpClientFingerprint {
  params: {
    mac: string;
  };
  body: {
    userId: string;
  };
  res: PumpClient;
}
