<script lang="ts">
	import { fly } from 'svelte/transition'

	let {
		img,
		heading,
		description,
		link,
		x = 100,
		delay = 1000
	}: {
		img?: string
		heading?: string
		description?: string
		link?: string
		x?: number
		delay?: number
	} = $props()
</script>

<div class="card bg-black/35 p-0 shadow-2xl" in:fly={{ x, duration: 1000, delay }}>
	<figure >
		<img src={img} alt="Shoes" class="w-full" />
	</figure>
	<div class="card-body">
		<h2 class="card-title">
			{heading}
		</h2>
		<p>{description}</p>
		<a href={link} class="btn btn-primary">Learn More</a>
	</div>
</div>
