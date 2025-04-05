<script lang="ts">
  import { emails, type Email } from '$lib/data/emails';

  export let emailId: string;

  // Find the email by ID
  let email: Email | undefined = emails.find((e) => e.id === emailId);

  // If email is not found, display a message
  if (!email) {
    console.error(`Email with ID ${emailId} not found`);
  }

  let replyContent = "";

  function sendReply() {
    if (!email || !replyContent.trim()) return;

    // Simulate sending a reply by updating the thread
    email.thread = [
      ...email.thread,
      {
        sender: "User Name",
        senderEmail: "user@example.com",
        content: replyContent,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ];

    // Clear the reply input
    replyContent = "";
  }
</script>

<div class="h-full flex flex-col bg-white">
  {#if email}
    <!-- Header -->
    <div class="flex items-center gap-3 p-4 bg-white border-b border-gray-200 shadow-sm">
      <a href="/" class="text-gray-600 hover:text-gray-800 transition-colors" aria-label="Back to Inbox">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </a>
      <h3 class="text-lg font-semibold text-gray-800 truncate">{email.subject}</h3>
    </div>

    <!-- Thread -->
    <div class="flex-1 overflow-y-auto">
      <div class="divide-y divide-gray-200">
        {#each email.thread as message}
          <div class="flex items-start gap-4 p-4 bg-white">
            <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-medium text-lg shadow-sm">
              {message.sender[0]}
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2">
                <p class="text-sm font-medium text-gray-800">{message.sender}</p>
                <span class="text-xs text-gray-500">({message.senderEmail})</span>
                <span class="text-xs text-gray-400">{message.timestamp}</span>
              </div>
              <p class="text-sm text-gray-700 leading-relaxed">{message.content}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Reply Form -->
    <div class="p-4 bg-white border-t border-gray-200 shadow-sm">
      <textarea
        bind:value={replyContent}
        class="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y transition-all"
        rows="4"
        placeholder="Write your reply here..."
      ></textarea>
      <div class="flex justify-end mt-2">
        <button
          on:click={sendReply}
          class="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          disabled={!replyContent.trim()}
        >
          Send Reply
        </button>
      </div>
    </div>
  {:else}
    <div class="p-6 text-gray-600">Email not found.</div>
  {/if}
</div>