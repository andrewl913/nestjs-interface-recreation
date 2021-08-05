import { Field, InterfaceType, registerEnumType } from '@nestjs/graphql';

export enum CakeType {
  ChocolateCake = 'ChocolateCake',
}

registerEnumType(CakeType, { name: 'CakeType' });

@InterfaceType({
  resolveType(cake: ICake) {
    return cake.cakeType;
  },
})
export class ICake {
  @Field()
  name: string;

  @Field(() => CakeType)
  cakeType: CakeType;
}
