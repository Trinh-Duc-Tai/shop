<template>
  <!-- <div class="khoiLogo light-blue accent-3"> -->
  <div class="khoiLogo">
        <div class="khoi1Logo" style=""> 
            <router-link :to="{name: 'trangChu'}">
            <img src="../assets/lo2.png" alt="" style="height:80%; margin-left:10px; margin-right:6px;margin-top:5px;margin-bottom:5px">
            </router-link>
            <router-link :to="{name: 'trangChu'}" class="para2" style="font-size:20px;font-family:Roboto">Shop Now!!!</router-link>
        </div>
        
        <div class="khoi2Logo">
            <div class="logo2"><i class="fas fa-car" style="width:32px;height:32px;display:inline-block  "></i></div>
            <div class="para2">
                <div>Miễn phí vận chuyển</div>
                <div style="font-size:10px">Áp dụng cho đơn hàng từ 500k</div> 
            </div>
            <!-- het para2  -->
        </div>
        <!-- het khoi 2 logo  -->
        <div class="khoi2Logo">
            <div class="logo2"><i class="fas fa-clock" style="width:32px;height:32px;display:inline-block  "></i></div>
            <div class="para2">
                <div>Giờ làm việc</div>
                <div style="font-size:10px">T2 - T7 Giờ hành chính</div> 
            </div>
            <!-- het para2  -->
        </div>
        <!-- het khoi 2 logo  -->
        <div class="khoi2Logo">
            <div class="logo2" style="font-size:25px;"><i class="fas fa-phone" style="transform:rotate(90deg);width:32px;height:32px;display:inline-block  "></i></div>
            <div class="para2">
                <div>Hotline</div>
                <div style="font-size:10px">0369489262</div> 
            </div>
            <!-- het para2  -->
        </div>
        <!-- het khoi 2 logo  -->
    </div>
    <!-- het khoi logo  -->
</template>

<style scoped>
/* css cho khoi logo   */
.khoiLogo{
    height: 45px;
    width: 100%;
    /* background-color: #00B0FF; */
    background-color: #2979FF;
    display: flex;
    justify-content: space-around;
}
.khoi1Logo{
    width: 25%;
    display: flex;
    height: 100%;
}
.khoi2Logo{
    display: flex;
    width:25%;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-right: 10px;
}
.logo2{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* color: #2DB43A; */
    /* color: #00B0FF; */
    color: #FFF;
    height: 100%;
    /* background-color: #7ed6df; */
    font-size:30px;
    margin-right: 20px;
}

.para2{
    /* background-color: #f0932b; */
    font-size:15px;
    line-height:15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* color:#EB9B1D; */
    color:#fff;
    font-weight: bold;
    font-family: Roboto;
}
/* het css cho khoi logo  */

/* bắt đầu css responsive  */
@media screen and (max-width: 760px){
    .khoiLogo{
        height: 200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .khoi1Logo{
        /* display: flex;*/
        /* width: 100%;  */
        display: none;
    }
    .khoi2Logo{
        height: 30%;
        width: 100%;
    }
}
</style>