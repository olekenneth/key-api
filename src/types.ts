import { DateTime, Str } from "@cloudflare/itty-router-openapi";

export const Key = {
	username: new Str({ example: "user1234", required: true }),
	publicKey: new Str({ required: true }),
	created: new DateTime(),
};
