<script>
    import { onMount } from 'svelte';

    let profile = [];

    // fetch profile data from the server endpoint
    async function fetchProfile() {
        const response = await fetch('/profile');
        profile = await response.json();
    }

    onMount(fetchProfile);
</script>
<div class="my-60">
    <h1 class="font-medium text-4xl flex justify-center text-white my-8">Who's watching</h1>
    <main class="flex flex-wrap gap-4">
        {#each profile as card}
            <div class="flex flex-col items-center">
                <img src={card.image} class="image" alt="" />
                <p class="text-white mt-2">{card.description}</p>
            </div>
        {/each}
    </main>
</div>
  