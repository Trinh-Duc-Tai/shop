<template>
  <div class="card my-5">
    <div class="card-body">
      <h5 class="text-center card-title">{{product.title}}</h5>
      <p class="text-center text-muted card-text display-4">${{Number(product.price).toFixed()}}</p>
      <button :disabled="isInCart" @click="$emit('add-to-cart',product)" class="btn btn-primary form-control">
        {{isInCart ? 'Added to cart':'Add to cart'}}
        </button>
    </div>
    <!-- het card body  -->

  <!-- bat dau nhap  -->
    <!-- <div class="col mb-4">
				<div class="card h-100">
					<img :src="https://giayxshop.vn/wp-content/uploads/2019/07/MG_7113-600x600.jpg" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">{{product.title}}</h5>
						<p class="card-text">
							This is a longer card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</p>
            <button :disabled="isInCart" @click="$emit('add-to-cart',product)" class="btn btn-primary form-control">
              {{isInCart ? 'Added to cart':'Add to cart'}}
            </button>
					</div>
				</div>
			</div> -->
      <!-- het nhap -->
  </div>
  <!-- het card my-5  -->

  
</template>

<script>
export default {
  props: ["product",'isInCart']
};
</script>

