import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import { ChocolateCake } from 'src/chocolate-cake/entities/chocolate-cake.entity';

import { CakeType, ICake } from './entities/cake.entity';

@Resolver(() => ICake)
export class CakeResolver {
  @Query(() => [ICake])
  cakes(): ICake[] {
    return [
      {
        name: 'Chocolate',
        cakeType: CakeType.ChocolateCake,
        hasCaramel: true,
      } as ChocolateCake,
    ];
  }

  //This should resolve
  @ResolveField(() => String)
  shelfLife(): string {
    return '2021-10-05';
  }
}
