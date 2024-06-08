import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SenderModule } from './sender/sender.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sender } from './sender/entities/sender.entity';
import { TestModule } from './test/test.module';
import { TokensModule } from './tokens/tokens.module';
import { Token } from './tokens/entities/token.entity';
import { TokensService } from './tokens/tokens.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'just_send_db',
      entities: [Sender, Token],
      synchronize: true,
    }),
    TestModule,
    SenderModule,
    TokensModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
