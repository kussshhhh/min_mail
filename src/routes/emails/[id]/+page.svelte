<script lang="ts">
    import { page } from '$app/state';
    import EmailDetail from '$lib/components/EmailDetail.svelte';
  
    const emailId = page.params.id;
  </script>
  
  <div class="max-w-4xl mx-auto py-6">
    <EmailDetail {emailId} />
  </div>