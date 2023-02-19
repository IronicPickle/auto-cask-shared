import Validator from "../utils/Validator";
import { UserGet } from "../ts/api/users";
import { ValidatorInputs } from "../ts/api/generic";

export default {
  get: ({ userId }: ValidatorInputs<UserGet>) => ({
    userId: new Validator(userId).is("string").exists().regex.isMongoId(),
  }),
};
