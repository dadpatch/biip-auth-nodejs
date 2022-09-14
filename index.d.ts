
declare function auth(apiKey: string, options?: {
  host?: string;
}): Auth.AuthInterface
interface Tokens {
  token: string;
  refreshToken?: string | null;
}

interface Crud {
  get(data?: GenericObject): Promise<Array<GenericObject>>;
  getOne(id: string | number, data?: GenericObject): Promise<GenericObject>;
  create(data: GenericObject): Promise<GenericObject>;
  update(id: string | number, data: GenericObject): Promise<GenericObject>;
  delete(id: string | number): Promise<GenericObject>;
}

interface GenericObject { [name: string]: any }

declare namespace Auth {
  export enum UserGroupRole {
    USER = 'USER',
    ADMIN = 'ADMIN'
  }
  export interface AuthInterface {
    login(email: string, password: string, refresh?: boolean): Promise<Tokens>;
    remindPassword(email: string): Promise<GenericObject>;
    refreshToken(token: string): Promise<Tokens>;
    app(): Promise<GenericObject>;
    changePasswordVerify(data: {h: string, s: string}): Promise<GenericObject>;
    changePasswordAccept(data: {h: string, s: string, password: string}): Promise<GenericObject>;
    getSeedData(): Promise<GenericObject>;
    evartai: {
      login(ticket: string, refresh?: boolean): Promise<Tokens>;
      sign(host: string): Promise<{
        url: string;
        ticket: string;
        host: string;
      }>;
    };
    public: {
      getUsersInGroup(groupId: string | number): Promise<GenericObject>
    };
    setToken(token: string): {
      users: Crud & {
        me(): Promise<GenericObject>;
        logout(): Promise<GenericObject>;
        invite(data: {
          companyCode?: string;
          personalCode?: string;
          companyId?: string | number;
          role?: UserGroupRole | string;
          notify?: Array<string>;
          throwErrors?: boolean;
        }): Promise<GenericObject>;
        assignToGroup(id: string | number, groupId: string | number, role?: UserGroupRole | string): Promise<GenericObject>
        unassignFromGroup(id: string | number, groupId: string | number): Promise<GenericObject>
      };
      apps: Crud & {
        generateApiKey(id: string | number): Promise<GenericObject>
        getUsersApp(): Promise<GenericObject>
      };
      groups: Crud;
      permissions: Crud & {
        getUsersByAccess(access: string, data?: any): Promise<GenericObject>
        getMunicipalities(): Promise<GenericObject>
        getUsersInMunicipality(id: string | number, data?: {
          role?: string
        }): Promise<GenericObject>
        createWithMunicipalities(data: {
          group: string | number;
          municipalities: Array<string>
        }): Promise<GenericObject>
      };
    };
  }
}
export = auth
