import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [BoardModule, HomeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
