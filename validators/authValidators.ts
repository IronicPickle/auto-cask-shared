import Validator from "../utils/Validator";
import { RegisterReq, LoginReq, RefreshReq } from "../ts/api/auth";

export default {
  register: ({ email, password, displayName }: Partial<RegisterReq>) => ({
    email: new Validator(email).exists().is("string").regex.isEmail(),
    password: new Validator(password)
      .is("string")
      .exists()
      .length.greaterThanOrEqualTo(8)
      .length.lessThanOrEqualTo(100),
    displayName: new Validator(displayName)
      .is("string")
      .exists()
      .length.greaterThanOrEqualTo(3)
      .length.lessThanOrEqualTo(50),
  }),
  login: ({ email, password }: Partial<LoginReq>) => ({
    email: new Validator(email).exists().is("string").regex.isEmail(),
    password: new Validator(password).is("string").exists(),
  }),
  refresh: ({ refreshToken }: Partial<RefreshReq>) => ({
    refreshToken: new Validator(refreshToken).exists().is("string"),
  }),
};
