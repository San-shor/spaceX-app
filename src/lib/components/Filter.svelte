<script>
  import { Button, Dropdown, DropdownItem, Radio } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  import FilterIcon from '$lib/assets/adjustment.svg';
  let group1 = 2;

  let { filterValue = $bindable(), ...props } = $props();

  const onChange = (e) => {
    filterValue = event.currentTarget.value;
  };
</script>

<Button
  class="bg-[#F8F8F8] text-black py-[10px] px-4 focus:text-[#1C64F2] focus:border-opacity-0 rounded-lg text-sm"
>
  <img
    src={FilterIcon}
    alt=""
    height="16px"
    width="16px"
    class="mr-2 focus:fill-blue-500"
  />
  Filter By Status <ChevronDownOutline class="w-4 h-4 ms-2 " />
</Button>
<Dropdown class="w-44 p-3 space-y-3 text-sm font-medium">
  <li>
    <Radio
      name="active"
      bind:group={filterValue}
      onchange={onChange}
      value={'active'}>Active</Radio
    >
  </li>
  <li>
    <Radio
      name="retired"
      bind:group={filterValue}
      onchange={onChange}
      value={'retired'}>Retired</Radio
    >
  </li>
  <li>
    <Radio
      name="under construction"
      bind:group={filterValue}
      onchange={onChange}
      value={'under construction'}
      class="text-nowrap">Under Construction</Radio
    >
  </li>
</Dropdown>
