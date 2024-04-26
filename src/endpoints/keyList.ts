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
    const keys = [
      {
        username: "nisse987",
        publicKey:
          "AblzwfZGpW2Cp8A4KPb8jbA3aKLMnx7sI1Ge9mipbHdqWafwJwKbiyxhzdvg2TK6aaADO2JzWiUZJTb2J6GXspE3sUhTb8XBwDZkzS+sielj6ICgDVkvrIvNS06eZfF81B6EVJnGX9XiTWlRGSstQsDwlvu8/pQ1qqzXwxB9gnRF8qnx86H50h+UweuJMi9WUwzfABi0+kc54H6RmGUULt8Vg0qcvgYxc9tkGkAQ97fQLPHz+7uk8JlgQ0DySSiepTVHAYVTnftTfySUsRbAfGw7xMPFanaav8X6HyUeb7fKEgdHY0R3/GBHTjGf465am/znYEV58NAyLxbxpPWvc5YzdapaYiyA7N0luxRN3Fy3YjQaWMNmtWfsFlEwYolr+sgooRJf361fDrwkvwyX7EiC6FwBi+gUBVCsRqHagvVNh7R9r4KgMZKuC7hufw6t/HVnWKo3u2WxtpR8flYUJEQdxp7UeJ6s/Wc11f7j9LHtad2/X+P3Uk0LdMb/C7elutDuEFhNs/2LaC5t+goEQJJ10AU8t30x28aVS2nUKj7O3449utwg2INa2jQl8DFsMriHBK64gg+RyEkAB4tEoY/D/qR/hh6CjI45e11IA2/o7/kR4QKzXKT7fOYwyzZsGLwbKjft29IrjwW4CAthgLQHNbLfQBf6GnsHzIURw31EPlUa",
        created: Date.now(),
      },
      {
        username: "user0032",
        publicKey:
          "n8P/d+hDlgOaFpDmyCgmIjKf1OXVufV7fxtrWRbswXGGEWQNBncJlNCRqeSSmJj6INjCSteaxeRFL5E0vZPQ5sNWU/9L3AdwkomA00S3JEoH7tSeS1bfIjV6ZNzgmnHx1Zy++m/+CGVZqDf7/wSqOGqVcTpPWpbNVTd03WIHmBKMacTXAytmTNVcNPyYfammMPB9LG0qj+KOLkg9WR/T6jdDApQarMBLS4ccH7DHfbGihfVusZbDFdDyv+mbAs6NOGUaMHE5+2WuwVf/qLeDNySkPBrxbCp174xCL91EP7DTH1JfZm00nDCZfgSVX1fxyK3sj42vnco/loFPm0zz2zBSjZI16rsb6A67GOW4A3CAblzwfZGpW2Cp8A4KPb8jbA3aKLMnx7sI1Ge9mipbHdqWafwJwKbiyxhzdvg2TK6aaADO2JzWiUZJTb2J6GXspE3sUhTb8XBwDZkzS+sielj6ICgDVkvrIvNS06eZfF81B6EVJnGX9XiTWlRGSstQsDwlvu8/pQ1qqzXwxB9gnRF8qnx86H50h+UweuJMi9WUwzfABi0+kc54H6RmGUULt8Vg0qcvgYxc9tkGkAQ97fQLPHz+7uk8JlgQ0DySSiepTVHAYVTnftTfySUsRbAfGw7xMPFanaav8X6HyUeb7fKEgdHY0R3/GBHTjGf46",
        created: Date.now(),
      },
      {
        username: "demo_user01",
        publicKey:
          "eZ4aEFgj/LqOYC0cNEDO0ha22y2D+bymYnomA4aYZweqZVXVkNTICspokujGeBC7mFAArKcfoWDSlAE3w/+h4/W5If9579xReeb/dbwTOp1GqQ3FjOrZCu+liYEIVOvDTMfZnEw6xedwxGWrrSj0JIgkBvMbFQpX0YsTMSsF0UAbU2GDFVpmgCopZDTHjUnwF51U68J0MrYLwoWwXHECcV9XoRh8MV3Gs4jT8IQa5+tZq5P5msKJc1tnUpBWzSyBCfRRzUvDW9m6M8S3wDGm1j2bSVXjfxoIJzS6TWuIoRTBfEpIstHnBTiS1qFqA37jhfSpqAniV8MXSk+yNnjbPljjCLlSMeTAXRPPRDr1U+6Wq7gE33zqCb4hNYehzkj13LrIajcFvHLsWHw/YduHk9X9w7vbl5mYFG1s7PTf1LVswkxHSfiBBbpAJDPXv38ShWUZ9eYI2Nzg3rjbxFlLy518oNYGS1FqyRzUjrGVuZdgNMn0h4ivWWrzc/yj0clsfgxsSkdTWUgCMEeh6NPWjsqi7Q0WhB9zfxSQ/SBXgJl4Gt5xHL2ML0DqzaA9ElaxsaF5XwoIKeURN8dVQEklku2XXTHkn0+EPz/pwCxuPJRcX1ci3PTSld8FTYoOdGwvE4LlcAjUex7TK2onyfT0jefZ1WRt9HP5/IP4",
        created: Date.now(),
      },
    ];
    // Retrieve the validated parameters
    const { page } = data.query;

    // Implement your own object list here

    return {
      success: true,
      keys: keys.slice(0, page),
    };
  }
}
