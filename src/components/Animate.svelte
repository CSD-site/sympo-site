<script lang="ts">
	import { onMount } from 'svelte'
	let { children } = $props()

	let animate = $state(false)
	onMount(() => {
		animate = true
	})
</script>

{#if animate}
	{@render children()}
{/if}
