import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './back'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3001)
}
bootstrap()
