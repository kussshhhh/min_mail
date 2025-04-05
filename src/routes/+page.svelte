<!-- src/routes/+page.svelte -->
<script lang="ts">
    import EmailList from '$lib/components/EmailList.svelte';
  
    let showAll = false;
    let lastUpdated = 'Just now';
  
    function refreshEmails() {
      lastUpdated = 'Just now';
      // Placeholder for refreshing emails
      console.log('Refreshing emails...');
    }
  </script>
  
  <div class="py-6">
    <h2 class="text-lg font-semibold text-gray-800 mb-4">Inbox</h2>
    <div class="flex items-center justify-between mb-4">
      <label class="flex items-center gap-2 text-sm text-gray-500">
        <input
          type="checkbox"
          bind:checked={showAll}
          class="w-4 h-4 border border-gray-300 rounded"
        />
        Show All
      </label>
      <div class="flex items-center gap-2">
        <span class="text-sm text-gray-500">Last updated: {lastUpdated}</span>
        <button
          on:click={refreshEmails}
          class="text-gray-500 hover:text-gray-700"
          aria-label="Refresh emails"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9H0m0 0v5h5.582M19.418 13A8.001 8.001 0 019.582 15H24v-5h-5.582z" />
          </svg>
        </button>
      </div>
    </div>
    <EmailList />
  </div>