<template>
	<div class="row my-5 ">
		<div class="col-md-6 offset-md-3">
			<div class="card">
				<div class="card-body">
					<form @submit.prevent="login" >
						<h2 class="text-center my-4" style="color:#00B0FF">Login</h2>
						<div class="form-group">
							<label for="email" style="color:#00B0FF">Email:</label>
							<input type="email" name="email" v-model="email"  class="form-control"/>
						</div>
						<!-- het div field  -->
						<div class="form-group">
							<label for="password" style="color:#00B0FF">Password:</label>
							<input type="password" name="password" v-model="password" class="form-control" />
						</div>
						<!-- het div field  -->
						<p class="text-center text-danger" v-if="feedback">{{ feedback }}</p>
						<div class="form-group text-center">
							<button class="btn form-control" style="background:#00B0FF;color:#fff">Login</button>
						</div>
						<!-- het div field  -->
					</form>
					<!-- het form card-panel  -->
				</div>
				<!-- het card-body  -->
			</div>
			<!-- het card  -->
		</div>
		<!-- het col-md-6 offet-md-3  -->
	</div>
</template>

<script>
import firebase from "firebase";
export default {
	name: "Login",
	props: [],
	data() {
		return {
			email: null,
			password: null,
			feedback: null,
		};
	},
	methods: {
		login() {
			if (this.email && this.password) {
				firebase
					.auth()
					.signInWithEmailAndPassword(this.email, this.password)
					.then((cred) => {
						this.$noty.success("Successfully login!");
						console.log(cred.user);
						this.$router.push({ name: "trangChu" });
					})
					.catch((err) => {
						this.feedback = err.message;
					});
				this.feedback = null;
			} else {
				this.feedback = "Please fill in both fields";
			}
		},
	},
};
</script>

<style>
.login {
	max-width: 400px;
	margin-top: 30px;
	/* margin-bottom: 60px; */
}
.login h2 {
	font-size: 2.4em;
}
.login .field {
	margin-bottom: 16px;
}
</style>
