import { Module } from '@nestjs/common';
import { AuthService } from './AuthService';
import { jwtConstants } from './constants';
import { AuthController } from './AuthController';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { UserModule } from 'src/User/UserModule';


@Module({
    imports: [
      UserModule,
      JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60000s' },
      }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthService],
  })
  export class AuthModule {}