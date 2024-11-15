<script>
  import Table from '$lib/components/Table.svelte';

  let { data } = $props();
</script>

<div class="grid grid-cols-12 gap-10">
  <div class="grid col-span-9">
    <Table data={data.landsPadData} />
  </div>
  <div class="grid col-span-3">MapView</div>
</div>
