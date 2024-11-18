<script>
  import { Card, Badge, Button, Progressbar } from 'flowbite-svelte';
  import { LinkOutline } from 'flowbite-svelte-icons';
  import { MapPinAltOutline } from 'flowbite-svelte-icons';
  import DetailsModal from './Details/DetailsModal.svelte';

  let { data } = $props();

  let openModal = $state(false);
  let selectedLandingPad = $state(null);

  const handleClickDetails = (landingPad) => {
    selectedLandingPad = landingPad;
    openModal = true;
  };
</script>

<div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 align-center">
  {#each data as landingPad}
    <Card class="min-w-full  sm:p-5 ">
      <p
        class="text-md font-bold tracking-tight text-gray-900 dark:text-white mb-3"
      >
        {landingPad.full_name}
      </p>

      <div class=" flex flex-col gap-4 text-gray-900 mt-2">
        <div class="flex flex-row gap-1">
          <MapPinAltOutline />

          <span class="leading-5 text-sm"
            >{landingPad.location.name}, {landingPad.location.region}
          </span>
        </div>
        <div class="flex flex-row gap-1 text-sm">
          <p>Success Rate:</p>
          <p>
            {landingPad.attempted_landings > 0
              ? (
                  (landingPad.successful_landings /
                    landingPad.attempted_landings) *
                  100
                ).toFixed(0) + '%'
              : 'N/A'}
          </p>
        </div>
        <div class="flex flex-row flex-wrap gap-2 text-sm items-end">
          <Button
            color="light"
            size="sm"
            pill
            class="rounded-md bg-gray-100 text-xs font-medium py-1 px-3 hover:bg-gray-200 "
            onclick={() => {
              handleClickDetails(landingPad);
            }}
            >View Details
          </Button>
          <Button
            href={landingPad.wikipedia}
            target="_blank"
            color="light"
            size="sm"
            pill
            class="rounded-md bg-gray-100 text-xs font-medium py-1 px-3 hover:bg-gray-200 "
            >Wikipedia</Button
          >

          <Badge
            class="capitalize text-xs font-semibold  px-2 py-1"
            color={`${
              landingPad.status === 'active'
                ? 'green'
                : landingPad.status === 'retired'
                  ? 'red'
                  : 'indigo'
            }`}>{landingPad.status}</Badge
          >
        </div>
      </div>
    </Card>
  {/each}
</div>
{#if selectedLandingPad}
  <DetailsModal bind:open={openModal} {selectedLandingPad} />
{/if}
