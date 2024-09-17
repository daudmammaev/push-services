import { Module } from '@nestjs/common';
import { AuthService } from './AuthService';
import { jwtConstants } from './constants';
import { AuthController } from './AuthController';


@Module({
    imports: [
      UsersModule,
      JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthService],
  })
  export class AuthModule {}