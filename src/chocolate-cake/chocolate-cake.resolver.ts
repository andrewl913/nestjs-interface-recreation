import { Resolver, Query } from '@nestjs/graphql';

import { ChocolateCake } from './entities/chocolate-cake.entity';

@Resolver(() => ChocolateCake)
export class ChocolateCakeResolver {
  @Query(() => [ChocolateCake])
  chocolateCakes() {
    return [];
  }
}
