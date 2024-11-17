<script>
  import { Card, Badge, Button } from 'flowbite-svelte';
  import { LinkOutline } from 'flowbite-svelte-icons';

  let { data } = $props();
</script>

<div class="grid grid-cols-12 gap-5">
  {#each data as landingPad}
    <div class="grid col-span-4">
      <Card href="/cards" class="min-w-full">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Landing Zone 1
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
          Location Name
        </p>
        <p>Region</p>
        <Button
          color="light"
          size="sm"
          pill
          class="rounded-md bg-gray-100 text-xs font-medium py-[2px] px-[10px]"
          >View Details
        </Button>
        <p>wikipedia Link</p>
        <a href="" target="_blank"><LinkOutline color="#1C64F2" /></a>
        <Badge class="capitalize">status</Badge>
      </Card>
    </div>
  {/each}
</div>
