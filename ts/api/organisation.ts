import { OrganisationRole } from "../../enums/api/generic";
import {
  Organisation,
  OrganisationInvite,
  OrganisationMember,
  OrganisationPump,
} from "./generic";

// Get

export interface OrganisationGetReq {
  organisationId: string;
}

export type OrganisationGetRes = Organisation;

// Create

export interface OrganisationCreateReq {
  name: string;
}

export type OrganisationCreateRes = Organisation;

// Update

export interface OrganisationUpdateReq {
  organisationId: string;
  name: string;
}

export type OrganisationUpdateRes = Organisation;

// Delete

export interface OrganisationDeleteReq {
  organisationId: string;
}

export type OrganisationDeleteRes = Organisation;

// Leave

export interface OrganisationLeaveReq {
  organisationId: string;
}

export type OrganisationLeaveRes = Organisation;

// Get All Members

export interface OrganisationMembersGetAllReq {
  organisationId: string;
}

export type OrganisationMembersGetAllRes = OrganisationMember[];

// Get Member

export interface OrganisationMembersGetReq {
  organisationId: string;
  userId: string;
}

export type OrganisationMembersGetRes = OrganisationMember;

// Remove Member

export interface OrganisationMembersRemoveReq {
  organisationId: string;
  userId: string;
}

export type OrganisationMembersRemoveRes = OrganisationMember;

// Update Member's Role

export interface OrganisationMembersRoleUpdateReq {
  organisationId: string;
  userId: string;
  role: OrganisationRole;
}

export type OrganisationMembersRoleUpdateRes = OrganisationMember;

// Get All Invites

export interface OrganisationInvitesGetAllReq {
  organisationId: string;
}

export type OrganisationInvitesGetAllRes = OrganisationInvite[];

// Create Invite

export interface OrganisationInvitesCreateReq {
  organisationId: string;
  email: string;
}

export type OrganisationInvitesCreateRes = OrganisationInvite;

// Delete Invite

export interface OrganisationInvitesDeleteReq {
  inviteId: string;
}

export type OrganisationInvitesDeleteRes = OrganisationInvite;

// Accept Invite

export interface OrganisationInvitesAcceptReq {
  inviteId: string;
}

export type OrganisationInvitesAcceptRes = OrganisationInvite;

// Reject Invite

export interface OrganisationInvitesRejectReq {
  inviteId: string;
}

export type OrganisationInvitesRejectRes = OrganisationInvite;

// Get All Pumps

export interface OrganisationPumpsGetAllReq {
  organisationId: string;
}

export type OrganisationPumpsGetAllRes = OrganisationPump[];

// Get Pump

export interface OrganisationPumpsGetReq {
  pumpId: string;
}

export type OrganisationPumpsGetRes = OrganisationPump;

// Create Pump

export interface OrganisationPumpsCreateReq {
  organisationId: string;
  mac: string;
  name: string;
}

export type OrganisationPumpsCreateRes = OrganisationPump;

// Update Pump

export interface OrganisationPumpsUpdateReq {
  pumpId: string;
  name: string;
}

export type OrganisationPumpsUpdateRes = OrganisationPump;

// Delete Pump

export interface OrganisationPumpsDeleteReq {
  pumpId: string;
}

export type OrganisationPumpsDeleteRes = OrganisationPump;
