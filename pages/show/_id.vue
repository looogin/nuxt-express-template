<template>
	<section class="container">
		<Logo />
		<h1 class="title">
			user
		</h1>
		<h2 class="info">
			{{ user.name }}
		</h2>
		<nuxt-link class="button" :to="'/'">
			users
		</nuxt-link>
	</section>
</template>

<script>
	import axios from "~/plugins/axios";	
	export default {
		name: "id",
		asyncData({ params, error }) {
			return axios
				.get("/api/users/" + params.id)
				.then((res) => {
					return { user: res.data };
				})
				.catch(() => {
					error({ statusCode: 404, message: "User not found" });
				});
		},
		head() {
			return {
				title: `User: ${this.user.name}`,
			};
		},
	};
</script>

<style scoped>
	.title {
		margin-top: 30px;
	}
	.info {
		font-weight: 300;
		color: #9aabb1;
		margin: 0;
		margin-top: 10px;
	}
	.button {
		margin-top: 30px;
	}
</style>
