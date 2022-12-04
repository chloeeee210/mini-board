import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, BoardModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
