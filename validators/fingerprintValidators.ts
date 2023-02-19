import Validator from "../utils/Validator";
import { CreateFingerprint } from "../ts/api/fingerprint";
import { ValidatorInputs } from "../ts/api/generic";

export default {
  create: ({ userId }: ValidatorInputs<CreateFingerprint>) => ({
    id: new Validator(userId).exists().is("string"),
  }),
};
