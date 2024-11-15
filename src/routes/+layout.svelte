<script>
  import '../app.css';
  import Logo from '$lib/assets/logo.png';
  import Table from '$lib/components/Table.svelte';

  let { children } = $props();
</script>

<header class="bg-white shadow-md">
  <div class="flex items-center justify-center p-4">
    <img src={Logo} alt="Logo" class="h-8 mr-2" />
  </div>
</header>
<main class="p-4">
  {@render children()}
</main>
