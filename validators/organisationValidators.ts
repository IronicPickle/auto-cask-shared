import Validator from "../utils/Validator";
import {
  OrganisationsCreate,
  OrganisationsDelete,
  OrganisationsGet,
  OrganisationsInvitesAccept,
  OrganisationsInvitesCreate,
  OrganisationsInvitesDelete,
  OrganisationsInvitesGetAll,
  OrganisationsInvitesReject,
  OrganisationsLeave,
  OrganisationsMembersGet,
  OrganisationsMembersGetAll,
  OrganisationsMembersRemove,
  OrganisationsMembersRoleUpdate,
  OrganisationsPumpsBadgeUpdate,
  OrganisationsPumpsCreate,
  OrganisationsPumpsDelete,
  OrganisationsPumpsGet,
  OrganisationsPumpsGetAll,
  OrganisationsPumpsUpdate,
  OrganisationsUpdate,
} from "../ts/api/organisations";
import { OrganisationRole } from "../enums/api/generic";
import { ValidatorInputs } from "../ts/api/generic";

export default {
  get: ({ organisationId }: ValidatorInputs<OrganisationsGet>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
  }),
  create: ({ name }: ValidatorInputs<OrganisationsCreate>) => ({
    name: new Validator(name)
      .is("string")
      .exists()
      .length.greaterThanOrEqualTo(3)
      .length.lessThanOrEqualTo(50),
  }),
  update: ({ organisationId, name }: ValidatorInputs<OrganisationsUpdate>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
    name: new Validator(name)
      .is("string")
      .exists()
      .length.greaterThanOrEqualTo(3)
      .length.lessThanOrEqualTo(50),
  }),
  delete: ({ organisationId }: ValidatorInputs<OrganisationsDelete>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
  }),
  leave: ({ organisationId }: ValidatorInputs<OrganisationsLeave>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
  }),
  membersGetAll: ({
    organisationId,
  }: ValidatorInputs<OrganisationsMembersGetAll>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
  }),
  membersGet: ({
    organisationId,
    userId,
  }: ValidatorInputs<OrganisationsMembersGet>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
    userId: new Validator(userId).is("string").exists().regex.isMongoId(),
  }),
  membersRemove: ({
    organisationId,
    userId,
  }: ValidatorInputs<OrganisationsMembersRemove>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
    userId: new Validator(userId).is("string").exists().regex.isMongoId(),
  }),
  membersUpdateRole: ({
    organisationId,
    userId,
    role,
  }: ValidatorInputs<OrganisationsMembersRoleUpdate>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
    userId: new Validator(userId).is("string").exists().regex.isMongoId(),
    role: new Validator(role)
      .is("string")
      .exists()
      .enum.within(OrganisationRole)
      .custom((role) =>
        role === OrganisationRole.Owner ? "Invalid role" : undefined
      ),
  }),
  invitesGetAll: ({
    organisationId,
  }: ValidatorInputs<OrganisationsInvitesGetAll>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
  }),
  invitesCreate: ({
    organisationId,
    email,
  }: ValidatorInputs<OrganisationsInvitesCreate>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
    email: new Validator(email).is("string").exists().regex.isEmail(),
  }),
  invitesDelete: ({
    inviteId,
    organisationId,
  }: ValidatorInputs<OrganisationsInvitesDelete>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
    inviteId: new Validator(inviteId).is("string").exists().regex.isMongoId(),
  }),
  invitesAccept: ({
    inviteId,
    organisationId,
  }: ValidatorInputs<OrganisationsInvitesAccept>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
    inviteId: new Validator(inviteId).is("string").exists().regex.isMongoId(),
  }),
  invitesReject: ({
    inviteId,
    organisationId,
  }: ValidatorInputs<OrganisationsInvitesReject>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
    inviteId: new Validator(inviteId).is("string").exists().regex.isMongoId(),
  }),
  pumpsGet: ({
    organisationId,
    pumpId,
  }: ValidatorInputs<OrganisationsPumpsGet>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
    pumpId: new Validator(pumpId).is("string").exists().regex.isMongoId(),
  }),
  pumpsGetAll: ({
    organisationId,
  }: ValidatorInputs<OrganisationsPumpsGetAll>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
  }),
  pumpsCreate: ({
    organisationId,
    mac,
    name,
  }: ValidatorInputs<OrganisationsPumpsCreate>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
    mac: new Validator(mac).is("string").exists().regex.isMacAddress(),
    name: new Validator(name)
      .is("string")
      .exists()
      .length.greaterThanOrEqualTo(3)
      .length.lessThanOrEqualTo(50),
  }),
  pumpsUpdate: ({
    organisationId,
    pumpId,
    name,
  }: ValidatorInputs<OrganisationsPumpsUpdate>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
    pumpId: new Validator(pumpId).is("string").exists().regex.isMongoId(),
    name: new Validator(name)
      .is("string")
      .exists()
      .length.greaterThanOrEqualTo(3)
      .length.lessThanOrEqualTo(50),
  }),
  pumpsDelete: ({
    organisationId,
    pumpId,
  }: ValidatorInputs<OrganisationsPumpsDelete>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
    pumpId: new Validator(pumpId).is("string").exists().regex.isMongoId(),
  }),
  pumpsBadgeUpdate: ({
    organisationId,
    pumpId,
    badgeId,
  }: ValidatorInputs<OrganisationsPumpsBadgeUpdate>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
    pumpId: new Validator(pumpId).is("string").exists().regex.isMongoId(),
    badgeId: new Validator(badgeId).is("string").exists().regex.isMongoId(),
  }),
};
