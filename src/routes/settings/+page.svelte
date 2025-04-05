<script lang="ts">
  import SettingsPanel from '$lib/components/SettingsPanel.svelte';
</script>

<div class="h-full flex flex-col bg-white">
  <div class="flex items-center gap-3 p-4 pl-0 border-b border-gray-200 shadow-sm bg-white">
    <a href="/" class="text-gray-600 hover:text-gray-800 transition-colors" aria-label="Back to Inbox">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </a>
    <h2 class="text-lg font-semibold text-gray-800">Settings</h2>
  </div>
  <div class="flex-1 overflow-y-auto p-6">
    <SettingsPanel />
  </div>
</div>