import {
  OrganisationInvite,
  OrganisationMember,
  User,
  UserPrivate,
} from "./generic";

// Get

export interface UserGet {
  params: {
    userId: string;
  };
  res: User;
}

// Get Self

export interface UserGetSelf {
  res: UserPrivate;
}

// Get Invites

export interface UserGetInvites {
  res: OrganisationInvite[];
}

// Get Organisations

export interface UserGetMemberships {
  res: OrganisationMember[];
}
