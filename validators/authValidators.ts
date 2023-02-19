import { Login, Refresh, Register } from "../ts/api/auth";
import { ValidatorInputs } from "../ts/api/generic";
import Validator from "../utils/Validator";

export default {
  register: ({
    email,
    password,
    displayName,
    confirmPassword,
  }: ValidatorInputs<Register> & { confirmPassword?: string }) => ({
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
    confirmPassword: new Validator(confirmPassword)
      .skipIf(confirmPassword == null)
      .is("string")
      .custom((confirmPassword) =>
        confirmPassword !== password ? "Passwords don't match" : ""
      ),
  }),
  login: ({ email, password }: ValidatorInputs<Login>) => ({
    email: new Validator(email).exists().is("string").regex.isEmail(),
    password: new Validator(password).is("string").exists(),
  }),
  refresh: ({ refreshToken }: ValidatorInputs<Refresh>) => ({
    refreshToken: new Validator(refreshToken).exists().is("string"),
  }),
};
