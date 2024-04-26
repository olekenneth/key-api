import {
  OpenAPIRoute,
  OpenAPIRouteSchema,
  Path,
} from "@cloudflare/itty-router-openapi";
import { Key } from "../types";

export class KeyFetch extends OpenAPIRoute {
  static schema: OpenAPIRouteSchema = {
    tags: ["Keys"],
    summary: "Get a single Key by slug",
    parameters: {
      keySlug: Path(String, {
        description: "Key slug",
      }),
    },
    responses: {
      "200": {
        description: "Returns a single key if found",
        schema: {
          success: Boolean,
          result: {
            key: Key,
          },
        },
      },
      "404": {
        description: "Key not found",
        schema: {
          success: Boolean,
          error: String,
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
    // Retrieve the validated slug
    const { keySlug } = data.params;

    // Implement your own object fetch here

    const exists = true;

    // @ts-ignore: check if the object exists
    if (exists === false) {
      return Response.json(
        {
          success: false,
          error: "Object not found",
        },
        {
          status: 404,
        },
      );
    }

    return {
      success: true,
      key: {
        username: "nisse987",
        created: Date.now(),
      },
    };
  }
}
