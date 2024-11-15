<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  export let data = [];

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
    <TableBodyRow>
      {#each data as landingPads }
      <TableBodyCell>{landingPads.full_name}</TableBodyCell>
      <TableBodyCell>{landingPads.location}</TableBodyCell>
      
      {/each}
      
    </TableBodyRow>
   
 
  </TableBody>
</Table>