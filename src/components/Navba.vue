<template>
	<div class="nab">
		<nav
			class="navbar navbar-expand-lg navbar-light text-light tunav"
			style=" color: #fff"
		>
			<!-- <div class="container-fluid"> -->
				<router-link to="/" style="font-size:15px;width:1000px;color: #fff" >
					<marquee behavior=""
						>Chào mừng bạn tới Shop Now ^^ Sự hài lòng của bạn là sứ mệnh của
						chúng tôi!!!</marquee
					>
				</router-link>

				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<router-link
								class="nav-link"
								:to="{ name: 'ShoppingCart' }"
								style=" color: #fff"
								><i
									class="fas fa-shopping-cart"
									style="margin-right:5px;height:25px;font-size:15px;"
								></i
								>Shopping Cart <b>({{ numberItems }})</b></router-link
							>
						</li>
						<li class="nav-item" v-if="!user">
							<router-link
								class="nav-link"
								:to="{ name: 'Login' }"
								style=" color: #fff"
								>Login</router-link
							>
						</li>
						<li class="nav-item" v-if="!user">
							<router-link
								class="nav-link"
								:to="{ name: 'Signup' }"
								style=" color: #fff"
								>Signup</router-link
							>
						</li>

						<li class="nav-item dropdown" v-if="user">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								style="color:#fff"
								> Hi 
								<span v-if="name"> {{ name }}</span>
								<span v-else> {{ user.email }}</span>
							</a>
							<div
								id="logout"
								class="dropdown-menu col-sm-2"
								aria-labelledby="navbarDropdown"
								style=""
							>
								<a @click="logout()" class="dropdown-item" >Logout</a>
							</div>
						</li>
						<!-- het nav-item dropdown  -->
					</ul>
				</div>
				<!-- het div collapse  -->
			<!-- </div> -->
			<!-- het container  -->
		</nav>
		<KhoiLogo />
	</div>
</template>

<script>
import KhoiLogo from "./KhoiLoGo.vue";
import firebase from "firebase";

export default {
	name: "Navba",
	props: ["numberItems"],
	components: {
		KhoiLogo,
	},
	data() {
		return {
			// numberItems: 0,
			user: null,
			name: null,
		};
	},
	created() {
		// let userCurrent = firebase.auth().currentUser
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				//u1 để test
				// this.u1 = firebase.auth().currentUser;
				// console.log(this.u1);
				this.user = user; //ko được xóa dòng này nếu ko sẽ lỗi
				this.name = user.displayName;
				
			} else {
				this.user = null;
			}
		});
	},
	methods: {
		logout() {
			firebase
				.auth()
				.signOut()
				.then(() => {
					this.$noty.success("Successfully logout!");
					this.$router.push({ name: "Login" });
				});
		},
	},
};
</script>

<style>
/* .navbar nav {
	padding: 0 20px;
} */
.tunav {
	background: #00b0ff;
	color: #fff !important;
	padding: 5px 0px;
}
#logout {
	cursor: pointer;
	background: #00B0FF;
	color: #fff;
}
#logout:hover {
	background-color: #fff;
	color: #00b0ff;
}
</style>
