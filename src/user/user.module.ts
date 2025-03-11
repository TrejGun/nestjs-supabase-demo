import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { supabaseProvider } from "../database/database.provider";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
  imports: [ConfigModule],
  providers: [supabaseProvider, UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
