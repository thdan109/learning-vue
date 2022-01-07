<template>
  <!-- Session One -->
  <el-header>
    <el-row>
      <el-col :span="2"></el-col>

      <el-col :span="13" justify="center">
        <img src="../assets/logo1.png" />
        <span>WEATHER GREEN</span>
      </el-col>
      <el-col class="menu" :span="8">
        <el-col :span="8" @click="this.$router.push('/dashboard')">
          DASHBOARD
        </el-col>
        <el-col @click="this.$router.push('/dashboard')" :span="8"
          >ABOUT US</el-col
        >
        <el-col :span="8">CONTACT</el-col>
      </el-col>
      <el-col :span="1"></el-col>
    </el-row>
  </el-header>

  <el-row class="main">
    <el-col class="left-main" :span="12">
      <el-col :span="16">
        <span id="question">HOW'S THE WEATHER?</span><br />
        <span id="answer"
          >Loren ipsum dolor siot amet consectetur adipiscing, sed eiusmod
          tempor incididunt ut</span
        >
        <br />
        <el-row style="margin-top: 30px"
          ><el-button round>Read more</el-button></el-row
        >
      </el-col>
    </el-col>
    <el-col class="right-main" :span="12">
      <img id="img-big" src="../assets/39960137.jpg" />
    </el-col>
  </el-row>

  <el-row>
    <div class="container">
      <div class="box">
        <img src="https://source.unsplash.com/1000x800" />
        <span>One</span>
      </div>
      <div class="box">
        <img src="https://source.unsplash.com/1000x802" />
        <span>Image</span>
      </div>
      <div class="box">
        <img src="https://source.unsplash.com/1000x804" />
        <span>Hover</span>
      </div>
      <div class="box">
        <img src="https://source.unsplash.com/1000x806" />
        <span>Effect</span>
      </div>
    </div>
  </el-row>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
* {
  margin: 0;
}
.el-header {
  margin-top: 20px;
}
.el-header img {
  width: 60px;
  border-radius: 40px;
}
.el-header span {
  margin-left: 20px;
  color: #d2d2d2;
  font-weight: 900;
  font-size: 22px;
}
.el-header .el-row .el-col {
  display: flex;
  align-items: center;
}
.menu {
  color: #d2d2d2;
  font-size: 20px;
  font-weight: 900;
}
.menu .el-col:hover {
  cursor: pointer;
  color: black;
  transform: scale(1.2);
  transition: 0.5s;
}
.main {
  margin-top: 30px;
}
.main .left-main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-main #question {
  color: rgb(238, 143, 34);
  font-size: 86px;
  font-weight: 900;
  margin-bottom: 30px;
}
#answer {
  color: #d2d2d2;
  font-size: 36px;
  margin-bottom: 20px;
}

.main .right-main img {
  float: right;
  max-width: 680px;
}
/* source css */
.container {
  display: flex;
  width: 100%;
  padding: 4% 2%;
  box-sizing: border-box;
  height: 100vh;
}

.box {
  flex: 1;
  overflow: hidden;
  transition: 0.5s;
  margin: 0 2%;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  line-height: 0;
}

.box > img {
  width: 200%;
  height: calc(100% - 10vh);
  object-fit: cover;
  transition: 0.5s;
}

.box > span {
  font-size: 3.8vh;
  display: block;
  text-align: center;
  height: 10vh;
  line-height: 2.6;
}

.box:hover {
  flex: 1 1 50%;
}
.box:hover > img {
  width: 100%;
  height: 100%;
}
</style>
