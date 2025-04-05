<script lang="ts">
  import SettingsPanel from '$lib/components/SettingsPanel.svelte';
</script>

<div class="max-w-4xl mx-auto py-6">
  <div class="flex items-center gap-2 mb-6">
    <a href="/" class="text-gray-600 hover:text-gray-800" aria-label="Back to Inbox">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </a>
    <h2 class="text-lg font-semibold text-gray-800">Settings</h2>
  </div>
  <SettingsPanel />
</div>