import { ObjectType, Field } from '@nestjs/graphql';
import { ICake } from 'src/cake/entities/cake.entity';

@ObjectType({ implements: ICake })
export class ChocolateCake extends ICake {
  @Field(() => Boolean)
  hasCaramel: boolean;
}
