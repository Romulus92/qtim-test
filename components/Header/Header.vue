<template>
	<header class="header">
		<div class="header-container">
			<nuxt-link to="/" class="header-logo">
				<IconLogo/>
			</nuxt-link>
			<div class="header-content">
				<div class="header-menu">
					<nuxt-link to="/works" class="header-link">Works</nuxt-link>
					<nuxt-link to="/about" class="header-link">About</nuxt-link>
				</div>
				<div class="header-buttons">
					<button class="btn btn_transparent">
						<IconUk/>
					</button>
					<button class="btn">Let's work</button>
				</div>
			</div>
		</div>
	</header>
</template>