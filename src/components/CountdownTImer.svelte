<script lang="ts">
	import { onMount } from 'svelte'
	let targetDate = $state(new Date('2025-02-25T00:00:00').getTime())
	let timeLeft = $state(calculateTimeLeft())

	function calculateTimeLeft() {
		let now = new Date().getTime()
		let difference = targetDate - now
		return {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
			minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
			seconds: Math.floor((difference % (1000 * 60)) / 1000)
		}
	}

	onMount(() => {
		const interval = setInterval(() => {
			timeLeft = calculateTimeLeft()
			if (targetDate - new Date().getTime() <= 0) clearInterval(interval)
		}, 1000)
	})
</script>

<div class="flex items-center justify-center space-x-4">
	{#each Object.entries(timeLeft) as [label, value]}
		<div class="text-center">
			<div
				class="relative flex h-20 w-16 items-center justify-center rounded-md bg-gray-800 font-mono text-4xl text-white shadow-md"
			>
				{value}
			</div>
			<p class="text-sm text-gray-600">{label}</p>
		</div>
	{/each}
</div>
