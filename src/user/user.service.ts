import { Inject, Injectable } from "@nestjs/common";
import { SupabaseClient } from "@supabase/supabase-js";

import { SUPABASE_PROVIDER } from "../database/database.provider";
import { Database, Tables } from "../database/supabase.types";

@Injectable()
export class UserService {
  constructor(
    @Inject(SUPABASE_PROVIDER)
    private readonly supabase: SupabaseClient<Database>,
  ) {}

  public async search(): Promise<[Array<Tables<"users">>, number]> {
    const { data, count } = await this.supabase //
      .from("users")
      .select()
      .throwOnError();
    return [data, count || 0];
  }

  public async insert(): Promise<Tables<"users">> {
    const { data } = await this.supabase //
      .from("users")
      .insert({
        email: "oleg@ethberry.io",
        password: "qwerty",
      })
      .select()
      .single()
      .throwOnError();
    return data;
  }
}
