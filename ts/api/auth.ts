export interface RegisterReq {
  email: string;
  password: string;
  displayName: string;
}

export interface RegisterRes {
  accessToken: string;
  refreshToken: string;
}

export interface LoginReq {
  email: string;
  password: string;
}

export interface LoginRes {
  accessToken: string;
  refreshToken: string;
}

export interface RefreshReq {
  refreshToken: string;
}

export interface RefreshRes {
  accessToken: string;
}
