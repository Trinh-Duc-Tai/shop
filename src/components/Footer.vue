<template>
  <div class="footer">
        <div class="khoifooter">
            <div class="tdFooter">
                Liên hệ
            </div>
            <!-- het td footer  -->
            <div class="benDuoiFooter" style="align-items: flex-start;justify-content: flex-start;">
                <div class="nhoFooter"><i class="fas fa-map-marker-alt" style="margin-right:10px;width:20px;height:10px;display:inline-block"></i><span>7 Tạ Quang Bửu, Hai Bà Trưng, Hà Nội</span> <br></div>
                <div class="nhoFooter"><i class="fas fa-phone" style="margin-right:10px;transform:rotate(90deg);width:20px;height:10px;display:inline-block"></i><span>0369489262</span></div>
                <div class="nhoFooter"><i class="far fa-envelope" style="margin-right:10px;width:20px;height:10px;display:inline-block"></i><span>trinhductai6869@gmail.com</span></div>
                
            </div>
            <!-- het ben duoi Footer     -->
        </div>
        <!-- het khoi 1 footer  -->
        <div class="khoifooter">
            <div class="tdFooter" style="height: 80px;">
                Thông tin
            </div>
            <!-- het td footer  -->
            <div class="benDuoiFooter">
                <ul>
                    <div class="nhoFooter"><li>Giới thiệu</li></div>
                    <div class="nhoFooter"><li>Thông tin vận chuyển</li></div>
                    <div class="nhoFooter"><li>Quy định và điều khoản</li></div>
                    <div class="nhoFooter"><li>Chính sách bảo mật</li></div>
                </ul>
            </div>
            <!-- het ben duoi Footer     -->
        </div>
        <!-- het khoi 2 footer  -->
        <div class="khoifooter">
            <div class="tdFooter">
                Facebook
            </div>
            <!-- het td footer  -->
            <div class="benDuoiFooter" style="position:relative">
                <!-- <div id="fb-root" style="display: inline-block;margin-left: 300px;margin-top:-100px;position: absolute;height:100px">
                    <script async defer crossorigin="anonymous" :src="src"></script>
                    <div class="fb-page" style="marrgin-left:20px;" data-href="https://www.facebook.com/facebookappVietnam/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                        <blockquote cite="https://www.facebook.com/facebookappVietnam/" class="fb-xfbml-parse-ignore" style="width:300px;display: inline-block;">
                            <a href="https://www.facebook.com/facebookappVietnam/">Facebook app</a>
                        </blockquote>
                    </div>
                </div> -->
                
            </div>
            <!-- het ben duoi Footer     -->
        </div>
        <!-- het khoi 3 footer  -->
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data(){
    return{
      src: 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v5.0&appId=190748445085686&autoLogAppEvents=1'
    }
  }
}
</script>

<style>
.footer{
    /* background-color: #2DB43A; */
    background-color: #00B0FF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:100%;
    height: 292px;
}
.khoifooter{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: Roboto;
    color:#fff;
    width:30%;
    height: 100%;
    /* background-color: royalblue; */
}
.tdFooter{
    /* margin-top:15px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-size:18px;
    font-weight: bold;
    /* height: 59px; */
    height: 20%;
    /* background-color: royalblue; */
    width:100%;

}
.benDuoiFooter{
    font-size:16px;
    display: flex;
    height: 80%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    margin-left: 20px;
}
.nhoFooter{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height:55px;
    line-height: 16px;
    /* background-color: royalblue; */
}
@media screen and (max-width: 760px){
  .footer{
    /* height: 1000px; */
  }
.khoifooter{
  /* display: block; */
  width: 100%;
  /* background: red; */
}

}
</style>