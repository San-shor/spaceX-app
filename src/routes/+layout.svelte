<script>
  import Logo from '$lib/assets/logo.png';
  import '../app.css';

  let { children } = $props();
</script>

<header class="bg-white shadow-md">
  <div class="flex items-center justify-center p-4">
    <img src={Logo} alt="Logo" class="h-8 mr-2" />
  </div>
</header>
<main class="p-4">
  <div class="px-4 grid grid-cols-12 gap-10">
    {@render children()}
  </div>
</main>
