<template>
  <div class="gioHang container">
    <h1 class="text-center" style="">Customer information</h1>
    <div class="thongTinKH">
      <div class="tenHienThi"> Name: <span style="margin-left: 5px;">ok</span></div>
      <div class="tenHienThi">Email: <span style="margin-left: 5px;">ok@gmail.com</span></div>
    </div>
    <!-- het div thongTinKH  -->

    <div class="diaChiNhanHang">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Your address: </label>
          <input type="email" class="form-control" id="diaChi" aria-describedby="emailHelp" required>
        </div>
        <div class="form-group">
          <label for="sdt">Your phone: </label>
          <input type="tel" class="form-control" id="sdt" required>
        </div>
        <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
      </form>
    </div>
    <!-- het div diaChiNhanHang  -->

    <!-- div chi tiet don hang  -->
    <!--Shopping Cart Area Strat-->
    <div class="chiTietDonHang">
      <h1 class="text-center" style="">Order details</h1>
      <table class="table table-bordered text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Delete</th>
            <th scope="col">Product's name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td><a href=''><i class="fa fa-times"></i></a></td>
            <td>Giày 1</td>
            <td>399 000 VNĐ</td>
            <td>
              <a class="tru" href=''> - </a>
              <input class="quantity" type="text" name="quantity" value="1" autocomplete="off" style="text-align: center;">
              <a class="cong" href=''> + </a>
            </td>
            <td>399 000 VNĐ</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td><a href=''><i class="fa fa-times"></i></a></td>
            <td>Giày 2</td>
            <td>599 000 VNĐ</td>
            <td>
              <a class="tru" href=''> - </a>
              <input class="quantity" type="text" name="quantity" value="1" autocomplete="off" style="text-align: center;">
              <a class="cong" href=''> + </a>
            </td>
            <td>599 000 VNĐ</td>
          </tr>
          
        </tbody>
      </table>

      <div class="donHang">
        <div class="benCanhDonHang" style="display: flex;width: 60%;"></div>
        <div class="benTrongDHTongCong">
          <h2>Your Order</h2>
          <div class="tongCong">Total: <span>998 000</span> VNĐ</div>
          <div class="2nut">
            <button type="button" class="btn btn-primary" style="margin-right: 20px">Keep shopping</button>
            <button type="button" class="btn btn-success">Send the order</button>
          </div>
        </div>
      </div>
      <!-- het div donHang   -->
    </div>
    <!-- het chiTietDonHang  -->
  </div>
</template>

<script>
export default {
  name:'ShoppingCart'
}
</script>

<style scoped>
/* css cho gio hang  */
.gioHang {
	margin-top: 30px;
	font-family: Roboto;
}

.thongTinKH {
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: 100%;
	margin-top: 30px;
	margin-bottom: 30px;
	/* background-color: aqua; */
}
.tenHienThi {
	display: flex;
	justify-content: center;
	width: 40%;
	height: 100%;
	font-size: 1.2em;
	font-family: Roboto;
	/* background-color: red; */
	font-weight: bold;
}

.chiTietDonHang {
	margin-top: 30px;
}
table {
	margin-top: 30px;
}
.donHang {
	display: flex;
  /* flex-direction: column; */
  padding-top: 30px;
	width: 100%;
	height: 200px;
	/* background-color: cyan; */
  justify-content: space-around;
  margin-bottom: 30px;
}
.tongCong{
  font-weight: bold;
  font-size: 1.2em;
}
.benTrongDHTongCong {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 30%;
}
.tru{
  font-size: 1.6em;
  font-weight: bold;
  /* margin-right: 20px; */
}
.cong{
  font-weight: bold;
  font-size: 1.6em;
}
.quantity{
  width: 100px;
  margin-right: 10px;
  margin-left: 10px;
}
.benCanhDonHang{
  display: flex;
  width: 60%;
}
/* css cho di dong  */
@media only screen and (max-width: 600px) {
	.thongTinKH {
		flex-direction: column;
		justify-content: space-around;
		/* background-color: cyan; */
		height: 80px;
		width: 100%;
	}
	.tenHienThi {
		width: 100%;
		/* background-color: red; */
  }
}
/* hết css cho giỏ hàng  */

@media only screen and (max-width: 990px) {
  .benTrongDHTongCong{
    width: 100%;
  }
  .benCanhDonHang{
    width: 0%;
  }

}
</style>