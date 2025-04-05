<script lang="ts">
    import Sidebar from './Sidebar.svelte';
  </script>
  
  <div class="flex h-screen bg-white">
    <Sidebar />
    <div class="flex-1 h-full border-l border-gray-200">
      <main class="h-full overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>