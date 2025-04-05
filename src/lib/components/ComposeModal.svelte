<script lang="ts">
  let to = "";
  let subject = "";
  let body = "";

  function sendEmail() {
    console.log("Sending email:", { to, subject, body });
    to = "";
    subject = "";
    body = "";
  }

  function cancel() {
    window.history.back();
  }
</script>

<div class="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
  <h3 class="text-lg font-semibold text-gray-800 mb-4">Compose Email</h3>

  <!-- To -->
  <div class="mb-4">
    <label for="to" class="block text-sm font-medium text-gray-700 mb-2">To</label>
    <input
      id="to"
      type="email"
      bind:value={to}
      class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="recipient@example.com"
    />
  </div>

  <!-- Subject -->
  <div class="mb-4">
    <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
    <input
      id="subject"
      type="text"
      bind:value={subject}
      class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Subject"
    />
  </div>

  <!-- Body -->
  <div class="mb-6">
    <label for="body" class="block text-sm font-medium text-gray-700 mb-2">Body</label>
    <textarea
      id="body"
      bind:value={body}
      class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows="6"
      placeholder="Write your email here..."
    ></textarea>
  </div>

  <!-- Actions -->
  <div class="flex justify-end gap-3">
    <button
      on:click={cancel}
      class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
    >
      Cancel
    </button>
    <button
      on:click={sendEmail}
      class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Send
    </button>
  </div>
</div>