
<template>
	<div>
		<section class="container">
			<Logo />
			<h1 class="title">
				users
			</h1>
			<ul class="users">
				<li
					v-for="(user, index) in this.$store.state.users"
					:key="index"
					class="user"
				>
					<nuxt-link :to="'/show/' + index">
						{{ user.name }}
					</nuxt-link>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	import axios from "~/plugins/axios"
	

	export default {		
		async fetch({ store }) {
			let { data } = await axios.get("/api/users");
			store.commit("SET_USERS", data);
		},
		head() {
			return {
				title: "Users",
			};
		},
	};
</script>

<style scoped>
	.title {
		margin: 30px 0;
		text-transform: uppercase;
	}
	.users {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.user {
		margin: 10px 0;
	}
</style>
