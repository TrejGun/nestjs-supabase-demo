import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { UserModule } from "./user/user.module";

@Module({
  imports: [ConfigModule.forRoot(), UserModule],
  controllers: [AppController],
})
export class AppModule {}
