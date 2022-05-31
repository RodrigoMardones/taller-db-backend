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
        DB_CONNECTION_URI: string;
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
