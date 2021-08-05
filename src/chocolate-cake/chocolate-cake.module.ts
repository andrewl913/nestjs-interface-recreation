import { Module } from '@nestjs/common';
import { ChocolateCakeResolver } from './chocolate-cake.resolver';

@Module({
  providers: [ChocolateCakeResolver],
})
export class ChocolateCakeModule {}
