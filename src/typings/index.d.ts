import {Express} from 'express';
import {Session, SessionData} from 'express-session';

declare module 'express-session' {
  export interface SessionData {
    email: string;
    isAuth: boolean;
  }
}
declare module 'express' {
    export interface Request {
        session: Session & SessionData
    }
}

declare global {
    namespace NodeJS {
      export interface ProcessEnv {
        NODE_ENV: 'development' | 'qa' | 'production';
        PORT: number;
        PASSPORT_APP : string;
        SALT_CRYPT_CODE: number;
        DATABASE_URI: string;
        DATABASE_NAME: string;
        SECRET_KEY_JWT: string;
        IMDB_URL: string;
        IMDB_API_KEY: string;
      }
    }
  }
  export interface LooseObject {
    [key: string]: never;
  }
  export interface ServiceConfig {
    baseURL: string;
    headers?: Record<string, string>;
    timeout?: number;
  }
