import { JwtModuleOptions } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
dotenv.config();

export const jwtConfig: JwtModuleOptions = {
    secret: process.env.SECRET_KEY,
    signOptions: {
        expiresIn: '3600s',
    },
};
