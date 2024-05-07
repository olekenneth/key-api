import { DateTime, Str } from "@cloudflare/itty-router-openapi";

export const Key = {
  username: new Str({ example: "user1234", required: false }),
  displayName: new Str({ example: "User Name", required: false }),
  publicKey: new Str({
    example:
      "qyby1ppUqa1Gy/hjlLWuklz0YM72AKpomYKqCEb6h2F1U0k0x3gO75UAzWBRmZwMAi62yxPZJ786B1Fsary9V43SWCWQsFgmS9kCTzMkacgUb23TQCSOyFDC1EN6Whw",
    required: true,
  }),
};

export interface Env {
  DB: D1Database;
}
