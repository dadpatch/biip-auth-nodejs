
declare function auth(apiKey: string, options?: {
  host?: string 
}): Auth.AuthInterface
interface Tokens {
  token: string;
  refreshToken?: string | null;
}

interface Crud {
  get(data?: GenericObject): Promise<Array<GenericObject>>
  getOne(id: string, data?: GenericObject): Promise<GenericObject>
  create(data: GenericObject): Promise<GenericObject>
  update(id: string, data: GenericObject): Promise<GenericObject>
}

interface UsersCrud extends Crud {
  me(): Promise<GenericObject>
  logout(): Promise<GenericObject>
}
interface AppsCrud extends Crud {
  generateApiKey(id: string): Promise<GenericObject>
}

interface GenericObject { [name: string]: any }

declare namespace Auth {
  export interface AuthInterface {
    login(email: string, password: string, refresh?: boolean): Promise<Tokens>
    evartai: {
      login(ticket: string, refresh?: boolean): Promise<Tokens>
      sign(host: string): Promise<{
        url: string;
        ticket: string;
        host: string;
      }>
    },
    setToken(token: string): {
      users: UsersCrud,
      apps: AppsCrud,
      groups: Crud,
    }
  }
}

export = auth