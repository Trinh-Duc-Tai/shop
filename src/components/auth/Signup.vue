<template>
	<div class="row my-5 ">
		<div class="col-md-6 offset-md-3">
			<div class="card">
				<div class="card-body">
					<form @submit.prevent="signup" >
						<h2 class="text-center my-4" style="color:#00B0FF">Signup</h2>
						<div class="form-group">
							<label for="name" style="color:#00B0FF">Name:</label>
							<input type="text" name="name" v-model="name"  class="form-control"/>
						</div>
						<!-- het div field  -->
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
							<button class="btn form-control" style="background:#00B0FF;color:#fff">Signup</button>
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
import slugify from 'slugify'
import db from '../../firebase/init'
import firebase from 'firebase'

export default {
  name:'Signup',
  props:[
    'ten'
  ],
  data(){
    return{
      email: null,
      password: null,
      feedback: null,
      slug: null,
      name: null
    }
  },
  methods:{
    signup(){
      // console.log(this.email, this.password, this.alias)
      if(this.name && this.email && this.password){
        this.slug = slugify(this.name, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        let ref = db.collection('users').doc(this.slug)
        ref.get().then(doc => {
          if(doc.exists){
            this.feedback = "This name already exists"
          }else{
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(cred => {
              // cred.user.displayName = this.name
              ref.set({
                displayName: this.name,
                user_id: cred.user.uid,
                email: this.email, 
                password: this.password
              })
            }).then(()=>{
              var user = firebase.auth().currentUser;

              user.updateProfile({
                displayName: this.name,
                // photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(function() {
                // Update successful.
                console.log("Update successfully")
              }).catch(function(eo) {
                // An error happened.
                console.log(eo)
              });

              this.$noty.success("Successfully signup!")
              this.$router.push({ name: 'trangChu' })
            })
            .catch(err => {
              console.log(err)
              this.feedback = err.message
            })
            this.feedback = "This name is free to use"
          }
        })
        console.log(this.name)
      }else{
        this.feedback = "You must enter all fields"
      }
    }
  }
}
</script>

<style>
.signup{
  max-width: 400px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.signup h2{
  font-size: 2.4em;
}
.signup .field{
  margin-bottom: 16px;
}
</style>