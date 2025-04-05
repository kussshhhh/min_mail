<script lang="ts">
  import { page } from '$app/state';
  import EmailDetail from '$lib/components/EmailDetail.svelte';

  const emailId = page.params.id;
</script>

<div class="h-full ">
  <EmailDetail {emailId} />
</div>