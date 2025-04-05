<script lang="ts">
    import type { Email } from '$lib/data/emails';
  
    export let email: Email;
  </script>
  
  <a
    href={`/emails/${email.id}`}
    class="block bg-white p-4 rounded-lg shadow-sm hover:bg-gray-50 flex items-center gap-4"
    aria-label={`View email from ${email.sender} with subject ${email.subject}`}
  >
    <!-- Sender Avatar -->
    <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-medium">
      {email.sender[0]}
    </div>
  
    <!-- Email Info -->
    <div class="flex-1">
      <div class="flex items-center gap-2">
        <h3 class="text-sm font-semibold text-gray-800">{email.sender}</h3>
        {#if email.important}
          <span class="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">Important</span>
        {/if}
      </div>
      <p class="text-sm text-gray-600">{email.subject}</p>
      <p class="text-xs text-gray-500 truncate">{email.preview}</p>
    </div>
  
    <!-- Timestamp -->
    <span class="text-xs text-gray-400">{email.timestamp}</span>
  </a>