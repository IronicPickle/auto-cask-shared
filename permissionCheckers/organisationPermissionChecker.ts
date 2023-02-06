import { OrganisationRole } from "../enums/api/generic";

interface PopulatedUser {
  _id: string;
}

interface OrganisationMemberShape {
  user: PopulatedUser | any;
  role: string;
}

const isPopulatedUser = (value: any): value is PopulatedUser => !!value._id;

export default class OrganisationPermissionChecker {
  private members: OrganisationMemberShape[];

  constructor(members: OrganisationMemberShape[]) {
    this.members = members.map(this.parseMember);
  }

  private parseMember({ role, user }: OrganisationMemberShape) {
    return {
      role,
      user: isPopulatedUser(user) ? user._id.toString() : user.toString(),
    };
  }

  public hasRole(role: OrganisationRole, userId: any) {
    return !!this.members.find((member) => {
      return member.role === role && (userId == null || member.user === userId);
    });
  }

  public isOwner(userId: any) {
    return this.hasRole(OrganisationRole.Owner, userId);
  }

  public isAdmin(userId: any) {
    return this.hasRole(OrganisationRole.Admin, userId) || this.isOwner(userId);
  }

  public isMember(userId: any) {
    return (
      this.hasRole(OrganisationRole.Member, userId) ||
      this.isAdmin(userId) ||
      this.isOwner(userId)
    );
  }

  public canUpdate(userId: any) {
    return this.isOwner(userId);
  }

  public canDelete(userId: any) {
    return this.isOwner(userId);
  }

  public canView(userId: any) {
    return this.isMember(userId);
  }

  public canModifyRoles(userId: any) {
    return this.isOwner(userId);
  }

  public canCreateInvites(userId: any) {
    return this.isAdmin(userId);
  }

  public canDeleteInvites(userId: any) {
    return this.isAdmin(userId);
  }

  public canViewInvites(userId: any) {
    return this.isAdmin(userId);
  }

  public canViewMembers(userId: any) {
    return this.isMember(userId);
  }

  public canRemoveMember(userId: any, targetUserId: any) {
    if (this.isOwner(userId)) return true;
    if (
      this.isAdmin(userId) &&
      !this.isAdmin(targetUserId) &&
      !this.isOwner(targetUserId)
    )
      return true;
    return false;
  }
}
