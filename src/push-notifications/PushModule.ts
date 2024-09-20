import { Module } from '@nestjs/common';
import { PushController } from './PushController';
import { PushService } from './PushService';
import { SchedulerRegistry } from '@nestjs/schedule';
import { EmailService } from 'src/Email/EmailService';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from 'src/auth/AuthController';
import { AuthService } from 'src/auth/AuthService';
import { UsersServices } from 'src/User/UsersServices';
import { UserModule } from 'src/User/UserModule';
import { jwtConstants } from 'src/auth/constants';


@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [PushController, AuthController],
  providers: [PushService, SchedulerRegistry, EmailService,  AuthService, UsersServices],
})
export class PushModule {}
