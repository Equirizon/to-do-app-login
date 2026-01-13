import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'a-strong-random-secret', // Use an environment variable in production
      resave: false, // Only save sessions when modified
      saveUninitialized: false, // Don't save empty sessions
      cookie: {
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production (HTTPS only)
        maxAge: 3600000 * 24, // Cookie expiration time (e.g., 1 day)
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
