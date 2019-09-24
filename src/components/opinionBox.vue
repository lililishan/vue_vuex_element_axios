<template>
  <div class="opinion_box">
    <div class="opinion_boxtitle"><span>流转意见</span></div>
    <ul class="opinion_list">
      <li v-for='c in pinionList' :key='c.name'>
        <div class="opinion_img">
          <img src="./../assets/images/user.png">
        </div>
        <div class="opinion_name">
          <p>{{c.name}}</p>
          <p>{{c.character}}</p>
        </div>
        <div class="opinion_right">
          <p>接收人：{{ c.receiver}}</p>
          <p>{{c.times}} {{c.text}}</p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    props: ['pinionList'],
    
  }
</script>

<style lang="less" scoped>
/*流转意见*/
.opinion_box{
	width: 92%;
	margin: 0 auto;
  margin-top: 41px;
  padding-bottom: 30px;
}
.opinion_boxtitle{
	width: 100%;
	height: 29px;
	line-height: 29px;
  border-bottom: 1px solid #cccccc;
  span{
    color: #ce4b4b;
    line-height: 29px;
    display: inline-block;
    // width: 6.5%;
    border-bottom: 2px solid #ce4b4b;
  }

}
.opinion_list {
	width: 98%;
	margin: 0 auto;
  margin-top: 33px;
  li {
    width: 100%;
    height: 76px;
    margin-bottom: 31px;
    font-size: 14px;
    color: #9a9a9a;
    .opinion_img {
      width: 40px;
      height: 40px;
      margin-right: 3%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .opinion_name {
      margin-right: 13%;
      p:nth-child(1) {
        color: #ce4b4b;
        margin-bottom: 6px;
     }
    }
    .opinion_right {
      p:nth-child(1){
        margin-top: 26px;
        margin-bottom: 10px;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  li>div{
    float: left;
  }
}

</style>