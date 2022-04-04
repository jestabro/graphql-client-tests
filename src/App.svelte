<script>
  import { initClient, operationStore, query } from '@urql/svelte';
  import { GRAPHQL_ENDPOINT, SHOW_QUERY } from './gql';

  initClient({
    url: GRAPHQL_ENDPOINT
  });

  const show_variables = {
    path: undefined,
  };

  const show = operationStore(SHOW_QUERY,
    show_variables,
    { pause: true }
  );

  query(show);

  function auth_show_query(key_s) {
    if (!key_s.length) {
      return;
      }
    $show.context.pause = false;
    $show.variables = { ...show.variables, key: key_s };
   }

  function update_show_query(path_s) {
    if (!path_s.length) {
      return;
    }
    let path_l = path_s.split(' ');
    console.log("show.variables before call:", show.variables);
    $show.context.pause = false;
    $show.variables = { ...show.variables, path: path_l };
    console.log("show.variables after call:", show.variables);
  }

  let key_str = "";
  let path_str = "version";
  update_show_query(path_str);

</script>

<main>
<h3>VyOS op-mode 'show':</h3>

{#if $show.fetching}
<p>Loading...</p>
{:else if $show.error}
<p>{$show.error.message}</p>
{:else if $show.data}
{#if $show.data.Show.errors}
<p>{$show.data.Show.errors}</p>
{:else}
<p>{$show.data.Show.data.result}</p>
{/if}
{/if}
<p>Enter the API key</p>
<input bind:value={key_str} on:change={() => auth_show_query(key_str)}>
<p>Enter a show command, such as: 'interfaces detail', without quotes</p>
<input bind:value={path_str} on:change={() => update_show_query(path_str)}>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
