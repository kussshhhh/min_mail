<script lang="ts">
    import EmailList from '$lib/components/EmailList.svelte';
  </script>
  
  <div class="h-full flex flex-col bg-white">
    <h2 class="text-lg font-semibold text-gray-800 p-4 border-b border-gray-200 shadow-sm bg-white">Inbox</h2>
    <div class="flex-1 overflow-y-auto bg-gray-50">
      <EmailList />
    </div>
  </div>