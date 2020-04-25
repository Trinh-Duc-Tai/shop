<template>
	<div class="cart container">
		<h2>Cart</h2>
		<div class="row row-cols-1 row-cols-md-3">
			<div class="col mb-4">
				<div class="card h-100">
					<img
						src="https://giayxshop.vn/wp-content/uploads/2019/10/MG_8178-600x600.jpg"
						class="card-img-top"
						alt="..."
					/>
					<div class="card-body">
						<h6 class="text-center card-title">
							Giày Thể Thao XSPORT Adi.das Superstar Trắng mũi sò SF
						</h6>
						<p class="text-center text-muted card-text display-4">399,000đ</p>

						<button
							:disabled="isInCart"
							@click="$emit('add-to-cart', product)"
							class="btn btn-primary form-control"
						>
							{{ isInCart ? "Added to cart" : "Add to cart" }}
						</button>
					</div>
					<!-- het card body  -->
				</div>
			</div>
			<div class="col mb-4">
				<div class="card h-100">
					<img
						src="https://giayxshop.vn/wp-content/uploads/2019/02/MG_5045-600x600.jpg"
						class="card-img-top"
						alt="..."
					/>
					<div class="card-body">
						<h6 class="text-center card-title">
							Giày Thể Thao XSPORT Ni.ke Air Force 1 Full Trắng SF
						</h6>

						<p class="text-center text-muted card-text display-4">699,000đ</p>
						<button
							:disabled="isInCart"
							@click="$emit('add-to-cart', product)"
							class="btn btn-primary form-control"
						>
							{{ isInCart ? "Added to cart" : "Add to cart" }}
						</button>
					</div>
					<!-- het card body  -->
				</div>
			</div>
			<div class="col mb-4">
				<div class="card " style="">
					<img
						src="https://giayxshop.vn/wp-content/uploads/2018/12/MG_0479-600x600.jpg"
						class="card-img-top"
						alt="..."
					/>
					<div class="card-body">
						<h6 class="text-center card-title">
							Giày Thể Thao XSPORT Yeezy Boost REP
						</h6>

						<p class="text-center text-muted card-text display-4">400,000đ</p>

						<button
							:disabled="isInCart"
							@click="$emit('add-to-cart', product)"
							class="btn btn-primary form-control"
						>
							{{ isInCart ? "Added to cart" : "Add to cart" }}
						</button>
					</div>
					<!-- het card body  -->
				</div>
			</div>
			<div class="col mb-4">
				<div class="card h-100">
					<img
						src="https://giayxshop.vn/wp-content/uploads/2019/07/MG_7113-600x600.jpg"
						class="card-img-top"
						alt="..."
					/>
					<div class="card-body">
						<h6 class="text-center card-title">
							Giày Thể Thao XSPORT Gu.cci Sneaker Rhyton Cream F1
						</h6>

						<p class="text-center text-muted card-text display-4">599,000đ</p>

						<button
							:disabled="isInCart"
							@click="$emit('add-to-cart', product)"
							class="btn btn-primary form-control"
						>
							{{ isInCart ? "Added to cart" : "Add to cart" }}
						</button>
					</div>
					<!-- het card body  -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Cart",
};
</script>

<style></style>
