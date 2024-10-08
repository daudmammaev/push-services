import { NestFactory } from '@nestjs/core';
import { PushModule } from './push-notifications/PushModule';


async function bootstrap() {
  const app = await NestFactory.create(PushModule);
  await app.listen(3000);
}
bootstrap();
