<script lang="ts">
	import Footer from '../../components/Footer.svelte'

	let { children } = $props()
</script>

<div class="img-box">
	<img
		src="https://i.postimg.cc/Zn2VdBb5/BG-copy.png"
		alt=""
		class="fixed -z-10 w-screen overflow-hidden md:absolute"
	/>

	{@render children()}

	<Footer />
</div>

<style>
	.img-box {
		/* We'll be positioning the <img> relative to the <div>. */
		position: relative;

		/* Don't let an oversized background image stretch out the <div>. */
		overflow: hidden;
	}

	img {
		/* Since the image is an <img> element and not a background-image,
  we don't have to worry about it shrinking, but we do need to
  explicitly make it no smaller than the containing <div>. */
		min-width: 100%;

		/* Move the left edge of the image to the center of the <div>, then
  shift it back by half the width of the <img>. Result: centered
  image. */
		left: 50%;
		transform: translateX(-50%);
	}
</style>
