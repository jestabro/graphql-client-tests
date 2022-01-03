<script>
  import { initClient, operationStore, query, mutation } from '@urql/svelte';
  import { GRAPHQL_ENDPOINT, SHOW_QUERY, CONFIG_FILE_SAVE_MUTATION } from './gql';

  initClient({
    url: GRAPHQL_ENDPOINT
  });

  const show_variables = {
    path: undefined,
  };

  const configfile_variables = {
    fileName: "",
  };

  const show = operationStore(SHOW_QUERY,
    show_variables,
    { pause: true }
  );

  const configFileStore = operationStore(CONFIG_FILE_SAVE_MUTATION,
    configfile_variables
  );

  const configFileSave = mutation(configFileStore);

  function config_file_save(file_name) {
    configFileSave({fileName: file_name}).then(result => {
      console.log(result.data, result.error);
    });
  }

  query(show);

  function update_show_query(path_s) {
    if (!path_s.length) {
      return;
    }
    let path_l = path_s.split(' ');
    console.log("show.variables before call:", show.variables);
    show.context.pause = false;
    show.variables = { ...show.variables, path: path_l };
    console.log("show.variables after call:", show.variables);
  }

  let path_str = "version";
  update_show_query(path_str);

  let file_str = "";

</script>

<main>
<h3>VyOS op-mode 'show':</h3>

{#if $show.fetching}
<p>Loading...</p>
{:else if $show.error}
<p>D'oh... {$show.error.message}</p>
{:else if $show.data}
{#if $show.data.Show.errors}
<p>{$show.data.Show.errors}</p>
{:else}
<p>{$show.data.Show.data.result}</p>
{/if}
{/if}
<p>Enter a show command, such as: 'interfaces detail', without quotes</p>
<input bind:value={path_str} on:change={() => update_show_query(path_str)}>
<p>Enter a file name wherein to save the config:</p>
<input bind:value={file_str} on:change={() => config_file_save(file_str)}>
{#if $configFileStore.fetching}
<p>Loading...</p>
{:else if $configFileStore.error}
<p>D'oh... {$configFileStore.error.message}</p>
{:else if $configFileStore.data}
{#if $configFileStore.data.SaveConfigFile.errors}
<p>{$configFileStore.data.SaveConfigFile.errors}</p>
{:else}
<p>Configuration saved to file:</p>
<p>{$configFileStore.data.SaveConfigFile.data.fileName}</p>
{/if}
{/if}
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
