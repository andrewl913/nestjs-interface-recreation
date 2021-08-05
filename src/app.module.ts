import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { CakeModule } from './cake/cake.module';
import { ChocolateCakeModule } from './chocolate-cake/chocolate-cake.module';

@Module({
  imports: [
    CakeModule,
    ChocolateCakeModule,
    GraphQLFederationModule.forRoot({
      path: '/graphql',
      autoSchemaFile: true,
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
