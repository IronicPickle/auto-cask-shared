import Validator from "../utils/Validator";
import { PumpClientSetup, PumpClientFingerprint } from "../ts/api/pumpClients";
import { ValidatorInputs } from "../ts/api/generic";

export default {
  setup: ({ mac }: ValidatorInputs<PumpClientSetup>) => ({
    mac: new Validator(mac).is("string").exists().regex.isMacAddress(),
  }),
  fingerprint: ({ mac, userId }: ValidatorInputs<PumpClientFingerprint>) => ({
    mac: new Validator(mac).is("string").exists().regex.isMacAddress(),
    userId: new Validator(userId).is("string").exists().regex.isMongoId(),
  }),
};
