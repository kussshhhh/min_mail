<script lang="ts">
    import EmailCard from './EmailCard.svelte';
    import { emails } from '$lib/data/emails';
  </script>
  
  <div class="divide-y divide-gray-200 bg-white">
    {#each emails as email (email.id)}
      <EmailCard {email} />
    {/each}
  </div>