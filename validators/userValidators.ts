import Validator from "../utils/Validator";
import { UserGetReq } from "../ts/api/user";

export default {
  get: ({ userId }: Partial<UserGetReq>) => ({
    userId: new Validator(userId).is("string").exists().regex.isMongoId(),
  }),
};
