<script lang="ts">
	let { text }: { text?: string } = $props()
</script>

<div class="mt-[5vh]"></div>
{#if text}
	<p class="text-center text-9xl py-10">{text}</p>
{/if}

<style>
	p {
		font-size: clamp(50px, 6vw, 100px);
	}
</style>
