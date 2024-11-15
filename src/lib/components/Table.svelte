<script>
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from 'flowbite-svelte';

  let { data } = $props();
  console.log(data);
</script>

<Table>
  <TableHead>
    <TableHeadCell>FULL NAME</TableHeadCell>
    <TableHeadCell>LOCATION NAME</TableHeadCell>
    <TableHeadCell>REGION</TableHeadCell>
    <TableHeadCell>DETAILS</TableHeadCell>
    <TableHeadCell>SUCCESS RATE</TableHeadCell>
    <TableHeadCell>WIKIPEDIA LINK</TableHeadCell>
    <TableHeadCell>STATUS</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    {#each data as landingPad}
      <TableBodyRow>
        <TableBodyCell>{landingPad.full_name}</TableBodyCell>
        <TableBodyCell>{landingPad.location.name}</TableBodyCell>
        <TableBodyCell>{landingPad.location.region}</TableBodyCell>
        <TableBodyCell>{landingPad.details}</TableBodyCell>
        <TableBodyCell>{landingPad.status}</TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</Table>
