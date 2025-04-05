<script lang="ts">
    import EmailCard from './EmailCard.svelte';
    import { emails } from '$lib/data/emails';
  </script>
  
  <div class="space-y-2">
    {#each emails as email (email.id)}
      <EmailCard {email} />
    {/each}
  </div>