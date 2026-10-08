import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [UsersModule, ServeStaticModule.forRoot({
      rootPath: join(import.meta.dirname, '..', 'public'),
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
