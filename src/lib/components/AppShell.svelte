<script lang="ts">
    import Sidebar from './Sidebar.svelte';
  </script>
  
  <div class="flex h-screen bg-gray-100">
    <Sidebar />
    <main class="flex-1 p-4 overflow-y-auto">
      <slot />
    </main>
  </div>