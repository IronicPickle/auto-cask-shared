import { OrganisationRole } from "../../enums/api/generic";

export type ValidationErrors<K extends string | number | symbol> = {
  failed: boolean;
} & Partial<Record<K, string[]>>;

export type ApiError<K extends string | number | symbol> = {
  error: any;
  errorCode: any;
  validation: ValidationErrors<K>;
};

export interface Organisation {
  _id: string;
  name: string;
  createdOn: string;
}

export interface OrganisationMember {
  _id: string;
  user: User;
  organisation: Organisation;
  role: OrganisationRole;
  joinedOn: string;
}

export interface OrganisationInvite {
  _id: string;
  organisation: Organisation;
  email: string;
  createdOn: string;
}

export interface User {
  _id: string;
  displayName: string;
  createdOn: string;
}

export interface UserPrivate extends User {
  email: string;
}

export interface OrganisationPump {
  _id: string;
  organisation: Organisation;
  pumpClient: PumpClient;
  name: string;
  createdOn: string;
}

export interface PumpClient {
  _id: string;
  mac: string;
  fingerprintedUsers: User;
  createdOn: string;
}
