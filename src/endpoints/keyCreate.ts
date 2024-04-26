import {
  OpenAPIRoute,
  OpenAPIRouteSchema,
} from "@cloudflare/itty-router-openapi";
import { Key } from "../types";

export class KeyCreate extends OpenAPIRoute {
  static schema: OpenAPIRouteSchema = {
    tags: ["Keys"],
    summary: "Create a new Key",
    requestBody: Key,
    responses: {
      "200": {
        description: "Returns the created key",
        schema: {
          success: Boolean,
          result: {
            key: Key,
          },
        },
      },
    },
  };

  async handle(
    request: Request,
    env: any,
    context: any,
    data: Record<string, any>
  ) {
    // Retrieve the validated request body
    const { username, publicKey } = data.body;

    // Implement your own object insertion here

    // return the new key
    return {
      success: true,
      key: {
        username,
        publicKey,
        created: Date.now()
      },
    };
  }
}
