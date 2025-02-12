<script lang="ts">
	import '../app.css'
	import Navbar from '../components/Navbar.svelte'
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	let { children } = $props()

	injectAnalytics()
</script>

<Navbar />

{@render children()}
