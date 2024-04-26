import {
	OpenAPIRoute,
	OpenAPIRouteSchema,
	Path,
} from "@cloudflare/itty-router-openapi";
import { Key } from "../types";

export class KeyDelete extends OpenAPIRoute {
	static schema: OpenAPIRouteSchema = {
		tags: ["Keys"],
		summary: "Delete a Key",
		parameters: {
			username: Path(String, {
				description: "username",
			}),
		},
		responses: {
			"200": {
				description: "Returns if the key was deleted successfully",
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
		// Retrieve the validated slug
		const { username } = data.params;

		// Implement your own object deletion here

		// Return the deleted key for confirmation
		return {
			result: {
				key: {
          username,
				},
			},
			success: true,
		};
	}
}
