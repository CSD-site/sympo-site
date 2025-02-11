<script>
	import { fly, slide } from 'svelte/transition'
	import Breaker from '../../components/Breaker.svelte'
	import Card from '../../components/Card.svelte'
	import Animate from '../../components/Animate.svelte'
	import {
		NonTechnicalEventData,
		normalizeString,
		SpecialEventData,
		TechnicalEventData
	} from '$lib'
	const duration = 1000
</script>

<Animate>
	<div class="flex flex-col items-center justify-between pt-20">
		<p class="h-max pb-10">Pixelize awaits your Decision</p>
		<div class="flex flex-col items-center justify-between gap-5 px-20 sm:flex-row">
			<div class="candy">
				<img
					src="https://i.postimg.cc/c1wpRdq5/red-ddakji-4555519-3770334-1564356504.png"
					alt="cone candy"
					in:fly={{ x: -200, duration }}
				/>
				<p class="h my-9 text-5xl">Will you go Red ?</p>
				<p class="mb-9">where does your alligence lie?</p>
				<a href="/" class="btn btn-error btn-lg">Join Now</a>
			</div>
			<div class="candy">
				<img
					src="https://i.postimg.cc/prf3RJYt/blue-ddakji-4555519-3770334-1564356504.png"
					alt="heart candy"
					in:fly={{ x: 200, duration }}
				/>
				<p class="h my-9 text-5xl">Will you go blue ?</p>
				<p class="mb-9">pick your side.Game will start soon</p>
				<a href="/" class="btn btn-info btn-lg">Join Now</a>
			</div>
		</div>
	</div>

	<Breaker text="Technical Events" />
	<div class="flex flex-col items-center justify-between gap-5 px-20">
		{#each TechnicalEventData as TechnicalEvent, i}
			<Card
				x={i % 2 === 0 ? -200 : 200}
				delay={(i + 1) * duration}
				link={`events/technical/${normalizeString(TechnicalEvent.heading)}`}
				heading={TechnicalEvent.heading}
				description={TechnicalEvent.overView}
				img={TechnicalEvent.img}
			/>
		{/each}
	</div>

	<Breaker text="Non Technical Events" />
	<div class="flex flex-col items-center justify-between gap-5 px-20">
		{#each NonTechnicalEventData as event, i}
			<Card
				x={i % 2 === 0 ? -200 : 200}
				delay={(i + 1) * duration}
				link={`events/nonTechnical/${normalizeString(event.heading)}`}
				heading={event.heading}
				description={event.overView}
				img={event.img}
			/>
		{/each}
	</div>

	<Breaker text="Special Events" />
	<div class="flex flex-col items-center justify-between gap-5 px-20">
		{#each SpecialEventData as event, i}
			<Card
				x={i % 2 === 0 ? -200 : 200}
				delay={(i + 1) * duration}
				link={`events/special/${normalizeString(event.heading)}`}
				heading={event.heading}
				description={event.overView}
				img={event.img}
			/>
		{/each}
	</div>
</Animate>

<style>
	p.h-max {
		font-size: clamp(48px, 5vw, 72px);
	}
	p.h {
		font-size: clamp(24px, 3vw, 36px);
	}
	.candy {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
</style>
