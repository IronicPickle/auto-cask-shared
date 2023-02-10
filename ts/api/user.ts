import { OrganisationMember, User, UserPrivate } from "./generic";

// Get

export interface UserGetReq {
  userId: string;
}

export type UserGetRes = User;

// Get Self

export interface UserGetSelfReq {}

export type UserGetSelfRes = UserPrivate;

// Get Organisations

export interface UserGetMembershipsReq {}

export type UserGetMembershipsRes = OrganisationMember[];
