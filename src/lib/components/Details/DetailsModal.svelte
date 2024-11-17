<script>
  import { Button, Modal } from 'flowbite-svelte';

  let { open = $bindable(), selectedLandingPad } = $props();
</script>

<Modal
  title={`Details - ${selectedLandingPad.full_name}`}
  headerClass="flex justify-between items-center p-4 md:p-5 rounded-t-lg text-gray-900 text-lg font-semibold "
  bind:open
  autoclose
  class="h-[380px]"
>
  <p class="text-base font-normal text-gray-500">
    {selectedLandingPad.details}
  </p>
</Modal>
