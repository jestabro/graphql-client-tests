import fetch from "cross-fetch";
import { createClient } from "@urql/core";
import { queryStore } from "@urql/svelte";

import { ShowCpuDocument, ShowVersionDocument, ShowRouteDocument, FamilyRoute } from "./types";

const client = createClient({
    url: "https://euporia.xyz/graphql",
    fetch,
});

/*client
    .query(ShowRouteDocument, {
        key: "werty",
        family: FamilyRoute.Inet
    })
    .toPromise()
    .then(({ data }) => console.log(data?.ShowRoute?.data?.result));
*/

client
    .query(ShowCpuDocument, {
        key: "werty",
    })
    .toPromise()
    .then(({ data }) => console.log(data?.ShowCpu?.data?.result));
