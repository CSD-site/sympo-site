<script lang="ts">
	import { page } from '$app/state'
	import { eventPathMap } from '$lib'
	import Breaker from '../../../../components/Breaker.svelte'
	let { type, eventName } = page.params
	let event = eventPathMap.get(type)?.get(eventName)
	// $inspect(eventPathMap)
	// $inspect(page.params)
</script>

<img src={event?.img} alt={event?.heading} class="w-screen" />
<section>
	<Breaker text={event?.heading} />
	<article class="bg-black/35 px-20 py-10">
		<h2 class="mt-10 text-4xl">{event?.subHeading}</h2>
		<p class="mt-10 text-2xl font-bold">{'📌 Overview'}</p>
		<p class="mt-5 text-xl">{event?.overView}</p>
		<p class="mt-10 text-2xl font-bold">{'🎯 How It Works'}</p>
		<ul class="list-inside list-disc">
			{#each event?.howItWorks || [] as point}
				<li class="mt-3 list-item text-xl">{point}</li>
			{/each}
		</ul>
	</article>

	<article class="px-20 py-10">
		<p class="mt-10 text-2xl font-bold">{'📝 Challenge Guidelines'}</p>
		<ul class="list-inside list-disc">
			{#each event?.guides || [] as point}
				<li class="mt-3 list-item text-xl">{point}</li>
			{/each}
		</ul>
	</article>

	<article class="bg-black/35 px-20 py-10">
		<p class="mt-10 text-2xl font-bold">{'🏆 Judging Criteria'}</p>
		<ul class="list-inside list-decimal">
			{#each event?.criteria || [] as point}
				<li class="mt-3 list-item text-xl">{point}</li>
			{/each}
		</ul>
	</article>

	<article class="px-20 py-10">
		<p class="mt-10 text-2xl font-bold">{'🎁 Prizes & Recognition'}</p>
		<ul class="list-inside list-none">
			{#each event?.prize || [] as point}
				<li class=" mt-3 list-item list-['🏆'] text-xl">
					{point}
				</li>
			{/each}
		</ul>
	</article>
</section>
