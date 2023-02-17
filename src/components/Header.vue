<template>
  <div class="container">
    <div class="left-icon">
      <button>
        <img class="menu-icon" src="../assets/menu.png">
      </button>
    </div>
    <div class="mid-search">
      <form action="" class="search">
        <div class="search-input-around">
          <input type="text" class="search-input">
          <button class="search-btn">
            <img class="search-logo" src="../assets/search.png"/>
          </button>
        </div>
      </form>
    </div>
    <div class="right">
      <div class="notice-around">
        <button>
          <img class="notice" src="../assets/notice.png" alt="">
        </button>
      </div>
      <div class="edit-around">
        <button>
          <img class="edit" src="../assets/edit.png" alt="">
        </button>
      </div>
      <div class="user-img-around">
        <button>
          <img class="user-img" src="../assets/qiu2.jpg" alt="">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Header',
  data(){
    return{
      
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 56px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  position: relative;
}
.left-icon{
  /* background-color: pink; */
  /* line-height: 56px; */
}
.left-icon button{
  width: 40px;
  height: 40px;
  border: none;
  background-color: white;
  border-radius: 20px;
  cursor: pointer;
}
.left-icon button:hover{
  background-color: rgb(231, 231, 231);
}
.menu-icon{
  width: 24px;
  height: 24px;
}
.mid-search{
  height: 56px;
  justify-content: center;
  display: flex;
  /* background-color: aqua; */
  align-items: center;

  /* line-height: 56px; */
}
.search-input-around{
  width: 400px;
  height: 34px;
  display: flex;
  padding-left: 17px;
  align-items: center;
  background-color: #fff;
  border-radius: 17px;
  border: 1px solid rgb(194, 193, 193);
}
.search-input{
  width: 90%;
  height: 24px;
  line-height: 24px;
  border: none;
  outline: none;
  background-color: #fff;
}
.search-btn{
  width: 8%;
  height: 100%;
  background-color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 7px;
}
.search-logo{
  width: 18px;
  height: 18px;
}
.right{
  display: flex;
  justify-content: space-between;
  /* background-color: antiquewhite; */
}
.notice-around button,.edit-around button,.user-img-around button{
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #fff;
  border: none;
  cursor: pointer;
}
.notice-around button:hover,.edit-around button:hover{
  background-color: rgb(231, 231, 231);
}
.notice-around,.edit-around,.user-img-around{
  width: 40px;
  height: 40px;
  align-items: center;
  padding-right: 10px;
  display: flex;
}
.edit-around{
}
.user-img-around{
  padding-right: 20px;
}
.notice,.edit{
  width: 24px;
  height: 24px;
}
.user-img{
  width: 32px;
  height: 32px;
  border-radius: 16px;
}
</style>