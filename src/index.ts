import { OpenAPIRouter } from "@cloudflare/itty-router-openapi";
import { KeyCreate } from "./endpoints/keyCreate";
import { KeyDelete } from "./endpoints/keyDelete";
import { KeyFetch } from "./endpoints/keyFetch";
import { KeyList } from "./endpoints/keyList";

export const router = OpenAPIRouter({
	docs_url: "/docs",
});

router.get("/api/keys/", KeyList);
router.post("/api/keys/", KeyCreate);
router.get("/api/keys/:username/", KeyFetch);
router.delete("/api/keys/:username/", KeyDelete);

// 404 for everything else
router.all("*", () =>
	Response.json(
		{
			success: false,
			error: "Route not found",
		},
		{ status: 404 }
	)
);

export default {
	fetch: router.handle,
};
