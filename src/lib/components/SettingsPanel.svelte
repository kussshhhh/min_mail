<script lang="ts">
    let systemPrompt = "You are an email assistant. Filter out noise and only show important emails. When helping compose emails, be concise, professional, and to the point.";
    let noiseThreshold = 0.7;
    let refreshInterval = 5;
    let autoTrashNoise = false;
  
    const account = {
      email: "user@example.com",
      permissions: ["Read emails", "Send emails", "Trash/delete emails", "Modify labels"],
    };
  
    function saveSettings() {
      console.log("Settings saved:", { systemPrompt, noiseThreshold, refreshInterval, autoTrashNoise });
    }
  </script>
  
  <div class="space-y-8">
    <!-- AI Configuration Section -->
    <div class="bg-white p-6 rounded-lg shadow-sm">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">AI Configuration</h3>
      <p class="text-gray-600 mb-4">Customize how Claude AI filters and assists with your emails</p>
  
      <!-- System Prompt -->
      <div class="mb-6">
        <label for="system-prompt" class="block text-sm font-medium text-gray-700 mb-2">System Prompt</label>
        <p class="text-sm text-gray-500 mb-2">This prompt guides how Claude AI understands and processes your emails</p>
        <textarea
          id="system-prompt"
          bind:value={systemPrompt}
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />
      </div>
  
      <!-- Noise Threshold -->
      <div class="flex items-center gap-4 mb-6">
        <div class="flex-1">
          <label for="noise-threshold" class="block text-sm font-medium text-gray-700 mb-2">Noise Threshold</label>
          <p class="text-sm text-gray-500 mb-2">Higher values filter more aggressively (0-1)</p>
          <input
            id="noise-threshold"
            type="range"
            min="0"
            max="1"
            step="0.1"
            bind:value={noiseThreshold}
            class="w-full"
          />
        </div>
        <span class="text-sm text-gray-600">{noiseThreshold} (Balanced)</span>
      </div>
  
      <!-- Refresh Interval -->
      <div class="flex items-center gap-4 mb-6">
        <div class="flex-1">
          <label for="refresh-interval" class="block text-sm font-medium text-gray-700 mb-2">Refresh Interval (minutes)</label>
          <p class="text-sm text-gray-500 mb-2">How often to check for new emails</p>
          <select
            id="refresh-interval"
            bind:value={refreshInterval}
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1">1 minute</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
          </select>
        </div>
      </div>
  
      <!-- Auto-Trash Noise -->
      <div class="flex items-center gap-4">
        <div class="flex-1">
          <label for="auto-trash" class="block text-sm font-medium text-gray-700 mb-2">Auto-Trash Noise</label>
          <p class="text-sm text-gray-500">Automatically move noisy emails to trash</p>
        </div>
        <input
          id="auto-trash"
          type="checkbox"
          bind:checked={autoTrashNoise}
          class="toggle toggle-primary"
        />
      </div>
    </div>
  
    <!-- Gmail Integration Section -->
    <div class="bg-white p-6 rounded-lg shadow-sm">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Gmail Integration</h3>
      <p class="text-gray-600 mb-4">Manage your Gmail connection and permissions</p>
  
      <!-- Connected Account -->
      <div class="mb-6">
        <!-- svelte-ignore a11y_label_has_associated_control -->
        <label class="block text-sm font-medium text-gray-700 mb-2">Connected Account</label>
        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span class="text-gray-800">{account.email}</span>
          <button
            class="text-sm text-gray-600 hover:text-gray-800"
            aria-label="Disconnect Gmail account"
          >
            Disconnect
          </button>
        </div>
      </div>
  
      <!-- Permissions -->
      <div>
        <!-- svelte-ignore a11y_label_has_associated_control -->
        <label class="block text-sm font-medium text-gray-700 mb-2">Permissions Granted</label>
        <ul class="space-y-2">
          {#each account.permissions as permission}
            <li class="flex items-center gap-2 text-gray-600">
              <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {permission}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  
    <!-- Save Button -->
    <div class="flex justify-end">
      <button
        on:click={saveSettings}
        class="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        Save Settings
      </button>
    </div>
  </div>
  
  <style>
    .toggle {
      appearance: none;
      width: 40px;
      height: 20px;
      background: #d1d5db;
      border-radius: 9999px;
      position: relative;
      cursor: pointer;
      transition: background 0.2s;
    }
  
    .toggle:checked {
      background: #3b82f6;
    }
  
    .toggle::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      transition: transform 0.2s;
    }
  
    .toggle:checked::before {
      transform: translateX(20px);
    }
  </style>