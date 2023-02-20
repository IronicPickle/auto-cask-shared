import { OrganisationRole } from "../enums/api/generic";

interface PopulatedUser {
  _id: string;
  email?: string;
}

interface OrganisationMemberShape {
  user: PopulatedUser | any;
  role: string;
  email?: string;
}

interface CheckerMember {
  user: string;
  role: string;
  email?: string;
}

const isPopulatedUser = (value: any): value is PopulatedUser => !!value._id;

export default class OrganisationPermissionChecker {
  public members: CheckerMember[];

  constructor(members: OrganisationMemberShape[]) {
    this.members = members.map(this.parseMember);
  }

  private parseMember({ role, user }: OrganisationMemberShape): CheckerMember {
    return {
      role,
      user: isPopulatedUser(user) ? user._id.toString() : user.toString(),
      email: isPopulatedUser(user) ? user.email : undefined,
    };
  }

  public hasRole(role: OrganisationRole, user: any) {
    return !!this.members.find((member) => {
      return (
        member.role === role &&
        (user == null || member.user === user || member.email === user)
      );
    });
  }

  public isOwner(user: any) {
    return this.hasRole(OrganisationRole.Owner, user);
  }

  public isAdmin(user: any) {
    return this.hasRole(OrganisationRole.Admin, user) || this.isOwner(user);
  }

  public isMember(user: any) {
    return (
      this.hasRole(OrganisationRole.Member, user) ||
      this.isAdmin(user) ||
      this.isOwner(user)
    );
  }

  public canUpdate(user: any) {
    return this.isOwner(user);
  }

  public canDelete(user: any) {
    return this.isOwner(user);
  }

  public canView(user: any) {
    return this.isMember(user);
  }

  public canModifyRoles(user: any) {
    return this.isOwner(user);
  }

  public canViewInvites(user: any) {
    return this.isAdmin(user);
  }

  public canCreateInvites(user: any) {
    return this.isAdmin(user);
  }

  public canDeleteInvites(user: any) {
    return this.isAdmin(user);
  }

  public canViewPumps(user: any) {
    return this.isMember(user);
  }

  public canCreatePumps(user: any) {
    return this.isAdmin(user);
  }

  public canUpdatePumps(user: any) {
    return this.isAdmin(user);
  }

  public canDeletePumps(user: any) {
    return this.isAdmin(user);
  }

  public canViewMembers(user: any) {
    return this.isMember(user);
  }

  public canRemoveMember(user: any, targetuser: any) {
    if (user === targetuser) return false;
    if (this.isOwner(user)) return true;
    if (
      this.isAdmin(user) &&
      !this.isAdmin(targetuser) &&
      !this.isOwner(targetuser)
    )
      return true;
    return false;
  }

  public canUpdatePumpsBadge(user: any) {
    return this.isMember(user);
  }
}
