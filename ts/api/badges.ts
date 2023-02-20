import { Badge } from "./generic";

// Get All

export interface BadgesGetAll {
  res: Badge[];
}

// Get

export interface BadgesGet {
  params: {
    badgeId: string;
  };
  res: Badge;
}

// Create

export interface BadgesCreate {
  body: {
    name: string;
    breweryName: string;
    // img: string;
  };
  res: Badge;
}

// Update

export interface BadgesUpdate {
  params: {
    badgeId: string;
  };
  body: {
    name: string;
    breweryName: string;
    // img: string;
  };
  res: Badge;
}

// Delete

export interface BadgesDelete {
  params: {
    badgeId: string;
  };
  res: Badge;
}
