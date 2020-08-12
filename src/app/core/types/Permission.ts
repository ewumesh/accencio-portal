import { OrgPermission } from './OrgPermission';

export class Permission {
    id: string;
    orgid: string;
    org: string;
    un: string;
    permission: OrgPermission[];
}