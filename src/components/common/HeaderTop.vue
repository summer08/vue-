<template>
  <div class="header-wrapper">
    <div id="logo">
  		<a class="sianUrl" href="http://sina.cn?pos=10001">
  			<img src="http://test.static.book.weibo.com/yuedu/dist/static/img/SinaLogo.png">
  		</a>
  		<a class="readUrl" href="/?pos=10002">
  			新浪小说
  			<em>BETA</em>
  		</a>
  	</div>
    <div id="header_right">
      <div class="avatar" id="avatar">
        <img src="../../assets/images/avatar_def.png">
      </div>
      <a class="bookshelf-icon" id="goBookshelf" href="/dpool/newbook/bookv1/user/bookshelf.php?pos=400008">书架</a>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" rel="stylesheet/scss">
.header-wrapper{
  height: 44px;
    background: #f7f7f8;
    border-bottom: 1px solid #d7d7d7;
    z-index: 50;
    width: 100%;
  #logo{
    height: 100%;
    float: left;
    position: relative;
    a{
      display: block;
      float: left;
      img{
        height: 44px;
        float: left;
        border-right: 1px solid #dfdfdf;
      }
      &.readUrl{
        width: 75px;
        float: left;
        color: #1a1a1a;
        font-size: 14px;
        line-height: 44px;
        font-weight: 700;
        margin-left: 8px;
        position: relative;
        em{
          position: absolute;
          transform: scale(.4);
          top: 10px;
          right: -10px;
          line-height: 1;
        }
      }
    }
  }
  #header_right{
    float: right;
    margin-right: 8px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #1a1a1a;
    height: 100%;
    .avatar img {
        width: 27px;
        height: 27px;
        border-radius: 50%;
    }
    .bookshelf-icon {
        color: #1a1a1a;
        margin-left: 15px;
    }
  }
}
</style>
