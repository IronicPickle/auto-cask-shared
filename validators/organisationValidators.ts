import Validator from "../utils/Validator";
import {
  OrganisationCreateReq,
  OrganisationDeleteReq,
  OrganisationGetReq,
  OrganisationInvitesAcceptReq,
  OrganisationInvitesCreateReq,
  OrganisationInvitesDeleteReq,
  OrganisationInvitesGetAllReq,
  OrganisationMembersGetAllReq,
  OrganisationMembersGetReq,
  OrganisationMembersRemoveReq,
  OrganisationMembersRoleUpdateReq,
  OrganisationUpdateReq,
} from "../ts/api/organisation";
import { OrganisationRole } from "../enums/api/generic";

export default {
  get: ({ organisationId }: Partial<OrganisationGetReq>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
  }),
  create: ({ name }: Partial<OrganisationCreateReq>) => ({
    name: new Validator(name)
      .is("string")
      .exists()
      .length.greaterThanOrEqualTo(3)
      .length.lessThanOrEqualTo(50),
  }),
  update: ({ organisationId, name }: Partial<OrganisationUpdateReq>) => ({
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
  delete: ({ organisationId }: Partial<OrganisationDeleteReq>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
  }),
  membersGetAll: ({
    organisationId,
  }: Partial<OrganisationMembersGetAllReq>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
  }),
  membersGet: ({
    organisationId,
    userId,
  }: Partial<OrganisationMembersGetReq>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
    userId: new Validator(userId).is("string").exists().regex.isMongoId(),
  }),
  membersRemove: ({
    organisationId,
    userId,
  }: Partial<OrganisationMembersRemoveReq>) => ({
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
  }: Partial<OrganisationMembersRoleUpdateReq>) => ({
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
  }: Partial<OrganisationInvitesGetAllReq>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
  }),
  invitesCreate: ({
    organisationId,
    userId,
  }: Partial<OrganisationInvitesCreateReq>) => ({
    organisationId: new Validator(organisationId)
      .is("string")
      .exists()
      .regex.isMongoId(),
    userId: new Validator(userId).is("string").exists().regex.isMongoId(),
  }),
  invitesDelete: ({ inviteId }: Partial<OrganisationInvitesDeleteReq>) => ({
    organisationId: new Validator(inviteId)
      .is("string")
      .exists()
      .regex.isMongoId(),
  }),
  invitesAccept: ({ inviteId }: Partial<OrganisationInvitesAcceptReq>) => ({
    inviteId: new Validator(inviteId).is("string").exists().regex.isMongoId(),
  }),
};
