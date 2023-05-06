import { Module } from '@nestjs/common';
import { Expenses } from './expenses';

@Module({
  imports: [Expenses],
})
export class AppModule {}
