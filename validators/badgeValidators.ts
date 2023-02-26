import Validator from "../utils/Validator";
import {
  BadgesCreate,
  BadgesDelete,
  BadgesGet,
  BadgesImageUpdate,
  BadgesQrcodeGet,
  BadgesUpdate,
} from "../ts/api/badges";
import { ValidatorInputs } from "../ts/api/generic";

export default {
  get: ({ badgeId }: ValidatorInputs<BadgesGet>) => ({
    badgeId: new Validator(badgeId).is("string").exists().regex.isMongoId(),
  }),
  create: ({ name, breweryName }: ValidatorInputs<BadgesCreate>) => ({
    name: new Validator(name)
      .is("string")
      .exists()
      .length.greaterThanOrEqualTo(3)
      .length.lessThanOrEqualTo(50),
    breweryName: new Validator(breweryName)
      .is("string")
      .exists()
      .length.greaterThanOrEqualTo(3)
      .length.lessThanOrEqualTo(50),
  }),
  update: ({ badgeId, name, breweryName }: ValidatorInputs<BadgesUpdate>) => ({
    badgeId: new Validator(badgeId).is("string").exists().regex.isMongoId(),
    name: new Validator(name)
      .is("string")
      .exists()
      .length.greaterThanOrEqualTo(3)
      .length.lessThanOrEqualTo(50),
    breweryName: new Validator(breweryName)
      .is("string")
      .exists()
      .length.greaterThanOrEqualTo(3)
      .length.lessThanOrEqualTo(50),
  }),
  delete: ({ badgeId }: ValidatorInputs<BadgesDelete>) => ({
    badgeId: new Validator(badgeId).is("string").exists().regex.isMongoId(),
  }),
  updateImage: ({ badgeId }: ValidatorInputs<BadgesImageUpdate>) => ({
    badgeId: new Validator(badgeId).is("string").exists().regex.isMongoId(),
  }),
  getQrcode: ({ badgeId }: ValidatorInputs<BadgesQrcodeGet>) => ({
    badgeId: new Validator(badgeId).is("string").exists().regex.isMongoId(),
  }),
};
