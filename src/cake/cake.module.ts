import { Module } from '@nestjs/common';
import { CakeResolver } from './cake.resolver';

@Module({
  providers: [CakeResolver],
})
export class CakeModule {}
