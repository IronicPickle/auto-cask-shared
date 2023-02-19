export interface Register {
  body: {
    email: string;
    password: string;
    displayName: string;
  };
  res: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface Login {
  body: {
    email: string;
    password: string;
  };
  res: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface Refresh {
  body: {
    refreshToken: string;
  };
  res: {
    accessToken: string;
  };
}
