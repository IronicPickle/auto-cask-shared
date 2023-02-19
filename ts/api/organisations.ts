import { OrganisationRole } from "../../enums/api/generic";
import {
  Organisation,
  OrganisationInvite,
  OrganisationMember,
  OrganisationPump,
} from "./generic";

// Get

export interface OrganisationsGet {
  params: {
    organisationId: string;
  };
  res: Organisation;
}

// Create

export interface OrganisationsCreate {
  body: {
    name: string;
  };
  res: Organisation;
}

// Update

export interface OrganisationsUpdate {
  params: {
    organisationId: string;
  };
  body: {
    name: string;
  };
  res: Organisation;
}

// Delete

export interface OrganisationsDelete {
  params: {
    organisationId: string;
  };
  res: Organisation;
}

// Leave

export interface OrganisationsLeave {
  params: {
    organisationId: string;
  };
  res: Organisation;
}

// Get All Members

export interface OrganisationsMembersGetAll {
  params: {
    organisationId: string;
  };
  res: OrganisationMember[];
}

// Get Member

export interface OrganisationsMembersGet {
  params: {
    organisationId: string;
    userId: string;
  };
  res: OrganisationMember;
}

// Remove Member

export interface OrganisationsMembersRemove {
  params: {
    organisationId: string;
    userId: string;
  };
  res: OrganisationMember;
}

// Update Member's Role

export interface OrganisationsMembersRoleUpdate {
  params: {
    organisationId: string;
    userId: string;
  };
  body: {
    role: OrganisationRole;
  };
  res: OrganisationMember;
}

// Get All Invites

export interface OrganisationsInvitesGetAll {
  params: {
    organisationId: string;
  };
  res: OrganisationInvite[];
}

// Create Invite

export interface OrganisationsInvitesCreate {
  params: {
    organisationId: string;
  };
  body: {
    email: string;
  };
  res: OrganisationInvite;
}

// Delete Invite

export interface OrganisationsInvitesDelete {
  params: {
    organisationId: string;
    inviteId: string;
  };
  res: OrganisationInvite;
}

// Accept Invite

export interface OrganisationsInvitesAccept {
  params: {
    organisationId: string;
    inviteId: string;
  };
  res: OrganisationInvite;
}

// Reject Invite

export interface OrganisationsInvitesReject {
  params: {
    organisationId: string;
    inviteId: string;
  };
  res: OrganisationInvite;
}

// Get All Pumps

export interface OrganisationsPumpsGetAll {
  params: {
    organisationId: string;
  };
  res: OrganisationPump[];
}

// Get Pump

export interface OrganisationsPumpsGet {
  params: {
    organisationId: string;
    pumpId: string;
  };
  res: OrganisationPump;
}

// Create Pump

export interface OrganisationsPumpsCreate {
  params: {
    organisationId: string;
  };
  body: {
    mac: string;
    name: string;
  };
  res: OrganisationPump;
}

// Update Pump

export interface OrganisationsPumpsUpdate {
  params: {
    organisationId: string;
    pumpId: string;
  };
  body: {
    name: string;
  };
  res: OrganisationPump;
}

// Delete Pump

export interface OrganisationsPumpsDelete {
  params: {
    organisationId: string;
    pumpId: string;
  };
  res: OrganisationPump;
}
