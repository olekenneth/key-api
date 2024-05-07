import {
  OpenAPIRoute,
  OpenAPIRouteSchema,
  Query,
} from "@cloudflare/itty-router-openapi";
import { Key } from "../types";

export class KeyList extends OpenAPIRoute {
  static schema: OpenAPIRouteSchema = {
    tags: ["Keys"],
    summary: "List Keys",
    parameters: {
      page: Query(Number, {
        description: "Page number",
        default: 0,
        required: false,
      }),
    },
    responses: {
      "200": {
        description: "Returns a list of keys",
        schema: {
          success: Boolean,
          result: {
            keys: [Key],
          },
        },
      },
    },
  };

  async handle(
    request: Request,
    env: any,
    context: any,
    data: Record<string, any>,
  ) {
    const { results } = await env.DB.prepare(
      "SELECT * FROM Keystore limit 10",
    ).all();

    // Retrieve the validated parameters
    const { page } = data.query;

    // Implement your own object list here

    console.log(results);

    return {
      success: true,
      results,
    };
  }
}
