<script>
  import Table from '$lib/components/Table.svelte';

  let { data } = $props();
</script>

<h1>{data.landsPadData[0].full_name}</h1>
<Table data={data.landsPadData} />
