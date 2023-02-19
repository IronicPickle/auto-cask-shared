import { PumpClient } from "./generic";

export interface CreateFingerprint {
  body: {
    userId: string;
  };
  res: PumpClient;
}
