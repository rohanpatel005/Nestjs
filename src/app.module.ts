import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './User/user.module.js';
import { UserController } from './User/user.controllers.js';
import { ProductsModule } from './products/products.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [UserModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
