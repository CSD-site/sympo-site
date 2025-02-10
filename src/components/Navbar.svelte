<div class="navbar bg-black/35 fixed">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-circle btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/>
				</svg>
			</div>
			<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
			<ul
				tabindex="0"
				class="bg-black/35 menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box p-2 shadow"
			>
				<li><a href="/tech">Technical Events</a></li>
				<li><a href="/nontech">Non-Technical Events</a></li>
				<li><a href="/special">Special Events</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a href="/" class="btn btn-ghost text-xl">Pixelize</a>
	</div>
	<div class="navbar-end">
		<button class="btn btn-secondary">Register now</button>
	</div>
</div>
