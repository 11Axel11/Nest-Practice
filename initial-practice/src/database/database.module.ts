// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders], // Esto es un export
})
export class DatabaseModule {}
