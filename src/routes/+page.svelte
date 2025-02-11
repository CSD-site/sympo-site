<script lang="ts">
	import Animate from '../components/Animate.svelte'

	import { MoveRight } from 'lucide-svelte'
	import CountdownTImer from '../components/CountdownTImer.svelte'
	import { blur, crossfade, fade, fly } from 'svelte/transition'
	import { onMount } from 'svelte'

	let animate = false
	onMount(() => {
		animate = true
	})
</script>

<Animate>
	<header>
		<img
			src="https://i.postimg.cc/286BqC9P/hero-img-bg.png"
			alt="background_image"
			class="fixed inset-0 bottom-10 -z-10 h-screen w-screen object-cover"
			in:fade={{ duration: 1000 }}
		/>
		<img
			src="https://i.postimg.cc/3NL4LqNS/hero-img-text.png"
			alt="background_image text"
			class="fixed inset-0 bottom-10 -z-[9] h-screen w-screen object-cover"
			in:fly={{ y: 100, duration: 1000, delay: 600 }}
		/>
		<img
			src="https://i.postimg.cc/y6nZYDjm/hero-img-character.png"
			alt="background_image character"
			class="fixed inset-0 bottom-10 -z-[8] h-screen w-screen object-cover"
			in:fly={{ x: 100, duration: 2000, delay: 900 }}
		/>
		<div style="padding-top: 75vh;"></div>
		<div class="flex flex-col items-center justify-between px-20 sm:flex-row">
			<CountdownTImer />
			<a
				href="/events"
				class="btn btn-primary h-[100px] w-[100px] text-xl"
				in:fly={{ y: 50, duration: 1000, delay: 1200 }}><MoveRight size={100} /></a
			>
		</div>
	</header>
</Animate>
