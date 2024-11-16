<script>
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Button,
    Badge,
    Progressbar,
    Card,
  } from 'flowbite-svelte';
  import { LinkOutline } from 'flowbite-svelte-icons';

  let { data } = $props();
</script>

<Card class="max-w-screen-xl max-h-fit"
  ><Table class="w-full table-auto">
    <TableHead class="font-semibold text-xs text-[#6B7280]">
      <TableHeadCell>FULL NAME</TableHeadCell>
      <TableHeadCell>LOCATION NAME</TableHeadCell>
      <TableHeadCell>REGION</TableHeadCell>
      <TableHeadCell>DETAILS</TableHeadCell>
      <TableHeadCell class="w-[150px]">SUCCESS RATE</TableHeadCell>
      <TableHeadCell>WIKIPEDIA LINK</TableHeadCell>
      <TableHeadCell>STATUS</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      {#each data as landingPad}
        <TableBodyRow class="text-sm font-semibold text-gray-900">
          <TableBodyCell>{landingPad.full_name}</TableBodyCell>
          <TableBodyCell>{landingPad.location.name}</TableBodyCell>
          <TableBodyCell>{landingPad.location.region}</TableBodyCell>
          <TableBodyCell
            ><Button
              color="light"
              size="sm"
              pill
              class="rounded-md bg-gray-100 text-xs font-medium py-[2px] px-[10px]"
              >View Details</Button
            ></TableBodyCell
          >
          <TableBodyCell class="min-w-[150px]">
            <Progressbar
              progress={landingPad.attempted_landings > 0
                ? (
                    (landingPad.successful_landings /
                      landingPad.attempted_landings) *
                    100
                  ).toFixed(0)
                : 0}
              size="h-1.5"
              progressClass="bg-green-400"
            />
            {landingPad.attempted_landings > 0
              ? (
                  (landingPad.successful_landings /
                    landingPad.attempted_landings) *
                  100
                ).toFixed(0) + '%'
              : 'N/A'}</TableBodyCell
          >
          <TableBodyCell
            ><a href={landingPad.wikipedia} target="_blank"
              ><LinkOutline color="#1C64F2" /></a
            ></TableBodyCell
          >
          <TableBodyCell
            ><Badge
              class="capitalize"
              color={`${
                landingPad.status === 'active'
                  ? 'green'
                  : landingPad.status === 'retired'
                    ? 'red'
                    : 'indigo'
              }`}>{landingPad.status}</Badge
            ></TableBodyCell
          >
        </TableBodyRow>
      {/each}
    </TableBody>
  </Table></Card
>
