<script lang="ts">
	import { MoveDown } from 'lucide-svelte'
	import CountdownTImer from '../components/CountdownTImer.svelte'
</script>

<header>
	<img
		src="https://i.postimg.cc/Njm15NPW/hero-img-copy.png"
		alt="background_image"
		class="fixed inset-0 bottom-10 -z-10 w-screen object-cover"
	/>
	<div style="padding-top: 75vh;"></div>
	<div class="flex flex-col items-center justify-between px-20 sm:flex-row">
		<CountdownTImer />
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button class="btn btn-ghost h-[100px] w-[100px] rounded-full border-zinc-100 bg-black/35">
			<MoveDown size={100} />
		</button>
		<button class="btn btn-primary h-[75px] text-xl">Register now !</button>
	</div>
</header>

<section class="bg-image"></section>
