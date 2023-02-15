import Validator from "../utils/Validator";
import {
  PumpClientSetupReq,
  PumpClientFingerprintReq,
} from "../ts/api/pumpClients";

export default {
  setup: ({ mac }: Partial<PumpClientSetupReq>) => ({
    mac: new Validator(mac).is("string").exists().regex.isMacAddress(),
  }),
  fingerprint: ({ mac, userId }: Partial<PumpClientFingerprintReq>) => ({
    mac: new Validator(mac).is("string").exists().regex.isMacAddress(),
    userId: new Validator(userId).is("string").exists().regex.isMongoId(),
  }),
};
