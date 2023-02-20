import { OrganisationRole } from "../../enums/api/generic";

export interface RequestDetails {
  params?: {};
  body?: {};
  query?: {};
  res: {};
}

export type RequestInputs<D extends RequestDetails> = Omit<D, "res">;

export type ValidatorInputs<D extends RequestDetails> = Partial<
  D["params"] & D["body"] & D["query"]
>;

export type ReqParams<
  R extends {
    params: object;
  }
> = Partial<R["params"]>;

export type ReqBody<
  R extends {
    body: object;
  }
> = Partial<R["body"]>;

export type ReqQuery<
  R extends {
    query: object;
  }
> = Partial<R["query"]>;

export type ReqRes<
  R extends {
    res: object;
  }
> = R["res"];

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
  badge?: Badge;
  name: string;
  createdOn: string;
}

export interface PumpClient {
  _id: string;
  mac: string;
  fingerprintedUsers: User;
  createdOn: string;
}

export interface Badge {
  _id: string;
  name: string;
  breweryName: string;
  createdBy: User;
  createdOn: string;
}
