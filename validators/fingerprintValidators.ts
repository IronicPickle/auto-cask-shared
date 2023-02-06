import Validator from "../utils/Validator";
import { SendFingerprintReq } from "../ts/api/fingerprint";

export default {
  send: ({ userId }: Partial<SendFingerprintReq>) => ({
    id: new Validator(userId).exists().is("string"),
  }),
};
