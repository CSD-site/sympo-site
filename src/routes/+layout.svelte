<script lang="ts">
	import '../app.css'
	import Navbar from '../components/Navbar.svelte'
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	let { children } = $props()
</script>

<Navbar />

{@render children()}
