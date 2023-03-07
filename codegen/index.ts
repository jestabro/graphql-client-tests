import fetch from "cross-fetch";
import { createClient } from "@urql/core";
import { queryStore } from "@urql/svelte";

import { ShowCpuDocument, ShowVersionDocument, ShowRouteDocument, FamilyRoute } from "./types";
import { FamilyNeighbor, ResetNeighborDocument } from "./types";

const client = createClient({
//    url: "https://euporia.xyz/graphql",
    url: "https://mondotopos.net/graphql",
    fetch,
});

/*
client
    .query(ShowRouteDocument, {
        key: "Ar1st2rchu",
        family: FamilyRoute.Inet
    })
    .toPromise()
    .then(({ data }) => console.log(data?.ShowRoute?.data?.result));
*/

client
    .mutation(ResetNeighborDocument, {
        key: "Ar1st2rchu",
        family: FamilyNeighbor.Inet
    })
    .toPromise()
    .then(({ data }) => console.log(data?.ResetNeighbor));


/*
client
    .query(ShowCpuDocument, {
        key: "Ar1st2rchu",
    })
    .toPromise()
    .then(({ data }) => console.log(data?.ShowCpu?.data?.result));
*/
