// declare module "@am/auth-nodejs" {

// };

export = auth

declare function auth(apiKey: string): Auth.AuthInterface

interface Tokens {
  token: string;
  refreshToken?: string | null;
}

interface GenericObject { [name: string]: any }

declare namespace Auth {
  export interface AuthInterface {
    login(username: string, password: string, refresh?: boolean): Promise<Tokens>
    evartai: {
      login(ticket: string, refresh?: boolean): Promise<Tokens>
      sign(host: string): Promise<{
        url: string;
        ticket: string;
        host: string;
      }>
    },
    setUser(token: string): {
      me(): Promise<GenericObject>
      logout(): Promise<GenericObject>
    }
  }
}