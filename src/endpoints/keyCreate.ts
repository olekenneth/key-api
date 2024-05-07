import {
  OpenAPIRoute,
  OpenAPIRouteSchema,
} from "@cloudflare/itty-router-openapi";

import { Key, Env } from "../types";

const randomBytes = (len = 32) => {
  const byteArray = new Uint8Array(len);
  crypto.getRandomValues(byteArray);

  return byteArray.buffer;
};

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
    env: Env,
    context: any,
    data: Record<string, any>,
  ) {
    const userId = randomBytes(32);

    // Retrieve the validated request body
    const { publicKey } = data.body;

    const info = await env.DB.prepare(
      "INSERT INTO keystore (id, publicKey) VALUES (?1, ?2)",
    )
      .bind(userId, publicKey)
      .run();

    // return the new key
    return {
      success: true,
      info,
      meta: info.meta,
    };
  }
}
