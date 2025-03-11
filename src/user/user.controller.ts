import { Controller, Get } from "@nestjs/common";

import { Tables } from "../database/supabase.types";
import { UserService } from "./user.service";

@Controller("/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/")
  public search(): Promise<{ rows: Array<Tables<"users">>; count: number }> {
    return this.userService.search().then(([rows, count]) => ({ rows, count }));
  }
}
