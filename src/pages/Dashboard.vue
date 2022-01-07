<template>
  <el-container>
    <!-- aside -->
    <el-aside width="200px">
      <!-- Menu -->
      <el-row>
        <el-col>
          <el-col
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 20px 10px;
            "
          >
            <img style="width: 180px" src="../assets/wx-brand.png" />
          </el-col>
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-menu-item index="1">
              <el-icon><Grid /></el-icon>
              <span>Dash Board</span>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon><operation /></el-icon>
              <span>Statistics</span>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon><location-filled /></el-icon>
              <span>Map</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><calendar /></el-icon>
              <span>Calendar</span>
            </el-menu-item>
            <el-menu-item index="5">
              <el-icon><setting /></el-icon>
              <span>Setting</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
      <!-- End menu -->
      <el-divider></el-divider>
    </el-aside>

    <!-- End Aside -->
    <el-container class="container-main">
      <el-main>
        <el-container>
          <el-row :gutter="20">
            <!-- Left -->
            <el-col :span="18">
              <el-card>
                <el-row class="search" :gutter="20">
                  <el-col :span="21">
                    <el-input
                      v-model="query"
                      class="w-50 m-2"
                      placeholder="Type something"
                      @keypress="fetchDataWeatherSearch"
                    >
                      <template #prefix>
                        <el-icon class="el-input__icon"><search /></el-icon>
                      </template>
                    </el-input>
                  </el-col>
                  <el-col
                    style="
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      font-size: 26px;
                      color: #fa406c
                    "
                    :span="1"
                  >
                    <el-icon><bell-filled /></el-icon
                  ></el-col>
                  <el-col
                    :span="1"
                    style="
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      font-size: 20px;
                    "
                  >
                    <img class="avatar" src="../assets/unnamed.webp" />
                    <!-- <span
                      style="margin-left: 10px; color: gray; font-size: 16px"
                      >Dan</span
                    > -->
                  </el-col>
                </el-row>

                <el-container class="title-welcome">
                  <!-- <el-row> -->
                  <el-col :span="21">
                    <el-row>
                      <el-col> <h2>Hi, Dan</h2> </el-col>
                      <el-col>
                        <h4>How are you today?</h4>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="3">
                    <el-button
                      style="
                        width: 100px;
                        background-color: #5ac0c0;
                        border: none;
                      "
                      round
                      type="primary"
                      >New</el-button
                    >
                  </el-col>
                  <!-- </el-row> -->
                </el-container>
                <el-row >
                  <span
                  v-if="weather7Days.location"
                    style="
                      font-size: 20px;
                      font-weight: 600;
                      color: #474747;
                      margin-bottom: 20px;
                    "
                    >Weather {{weather7Days.location.name}} in 3 days</span
                  >
                </el-row>
                <!-- Weather 24h in 3 Days -->
                <el-row v-if="weather7Days.forecast">
                  <el-col :span="24">
                    <el-container
                      v-for="(item, index) in weather7Days.forecast.forecastday"
                      :key="index"
                    >
                      <el-row>
                        <el-col :span="24">
                          <el-card class="card-weather-day">
                            <el-row>
                              <el-col :span="6">
                                <el-row justify="center"
                                  ><span style="font-weight: 900">
                                    {{ item.date }}</span
                                  >
                                </el-row>
                                <el-row justify="center">
                                  <el-col
                                    :span="24"
                                    style="
                                      display: flex;
                                      justify-content: center;
                                    "
                                  >
                                    <img
                                      :src="item.day.condition.icon"
                                      alt="icon-weather-day"
                                    />
                                  </el-col>
                                  <el-row>
                                    <span style="color: gray">{{
                                      item.day.condition.text
                                    }}</span>
                                  </el-row>
                                </el-row>
                              </el-col>
                              <el-col :span="18">
                                <el-col :span="8">
                                  <el-row>
                                    <el-col
                                      style="margin-bottom: 18px"
                                      :span="24"
                                    >
                                      <span class="detail-day">
                                        UV index: {{ item.day.uv }}
                                      </span>
                                    </el-col>
                                    <el-col
                                      style="margin-bottom: 18px"
                                      :span="24"
                                      ><span class="detail-day">
                                        Sun Rise: {{ item.astro.sunrise }}
                                      </span></el-col
                                    >
                                  </el-row>
                                </el-col>
                                <el-col :span="8">
                                  <el-row>
                                    <el-col
                                      style="margin-bottom: 18px"
                                      :span="24"
                                      ><span class="detail-day">
                                        Humidity average:
                                        {{ item.day.avghumidity }}
                                      </span></el-col
                                    >
                                    <el-col
                                      style="margin-bottom: 18px"
                                      :span="24"
                                    >
                                      <span class="detail-day">
                                        Temple average:
                                        {{ item.day.avgtemp_c }} °C
                                      </span>
                                    </el-col>
                                  </el-row>
                                </el-col>

                                <el-col :span="8">
                                  <el-row
                                    ><el-col :span="24">
                                      <span class="detail-day">
                                        Sun Set: {{ item.astro.sunset }}
                                      </span>
                                    </el-col></el-row
                                  >
                                </el-col>
                              </el-col>
                            </el-row>
                          </el-card>
                        </el-col>
                        <!-- Collapse -->
                        <el-collapse
                          v-model="activeNames"
                          @change="handleChange"
                        >
                          <el-collapse-item name="1">
                            <template #title>
                              <span class="title-collapse">Weather Hour </span>
                            </template>
                            <el-scrollbar height="350px">
                              <el-row style="margin-bottom: 10px">
                                <el-col
                                  v-for="(itemDay, indexDay) in item.hour"
                                  :key="indexDay"
                                  :span="24"
                                >
                                  <el-card class="card-hour">
                                    <el-row>
                                      <el-col
                                        class="info-card-hour"
                                        style="font-weight: 600"
                                        :span="6"
                                        >{{ itemDay.time }}</el-col
                                      >
                                      <el-col class="info-card-hour" :span="8">
                                        <img
                                          style="width: 32px"
                                          :src="itemDay.condition.icon"
                                          alt="icon-weather-hour"
                                        />
                                      </el-col>
                                      <el-col
                                        class="info-card-hour"
                                        style="font-size: 16px"
                                        :span="10"
                                        >{{ itemDay.condition.text }}</el-col
                                      >
                                    </el-row>
                                  </el-card>
                                </el-col>
                              </el-row>
                            </el-scrollbar>
                          </el-collapse-item>
                        </el-collapse>
                        <el-divider></el-divider>
                      </el-row>
                    </el-container>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>

            <!-- Right -->
            <el-col :span="6">
              <el-card class="container-default-card">
                <!-- Weather default position -->
                <el-row justify="center">
                  <img
                    style="width: 260px; height: 160px; border-radius: 30px"
                    src="../assets/uk.jpg"
                    alt="img"
                  />
                </el-row>
                <el-row
                  v-if="weather.location"
                  class="infor-weather-default"
                  justify="center"
                >
                  <el-col :span="24" v-if="weather.location">
                    <span class="country"> {{ weather.location.country }}</span>
                  </el-col>
                  <el-col :span="24" v-if="weather.location">
                    <span class="name">
                      {{ weather.location.name }}
                    </span>
                  </el-col>
                  <el-col :span="24" v-if="weather.location">
                    <span class="temp"> {{ weather.current.temp_c }} °C </span>
                  </el-col>
                  <el-row justify="center">
                    <el-row>
                      <img
                        style="width: 72px"
                        :src="weather.current.condition.icon"
                      />
                    </el-row>
                    <el-col v-if="weather.current">
                      <span class="status-default">{{
                        weather.current.condition.text
                      }}</span>
                    </el-col>
                  </el-row>
                  <el-col :span="24" v-if="weather.location">
                    <span  class="region"> {{ weather.location.region }} </span>
                  </el-col>
                  <el-col :span="24" v-if="weather.location">
                    <span class="localtime">
                      {{ weather.location.localtime }}
                    </span>
                  </el-col>
                </el-row>
                <!-- End -->
                <el-divider></el-divider>
              </el-card>
            </el-col>
          </el-row>
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import {
  Search,
  Grid,
  Operation,
  LocationFilled,
  Calendar,
  Setting,
  BellFilled,
  // Menu,
} from "@element-plus/icons-vue";
import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
  components: {
    Search,
    BellFilled,
    Grid,
    Operation,
    LocationFilled,
    Calendar,
    Setting,
    // Menu,
  },
  data() {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false,
      },

      api_key: "",
      url_base: "https://api.weatherapi.com/v1/",
      query: "LonDon",
      weather: {},
      weatherSearch: {},
      weather7Days: {},
      weatherInWeek: [],
      // LocationFilled
    };
  },
  created() {
    this.fetchWeather7days();
    this.fetchDataWeather();
  },
  methods: {
    scrollHanle(evt) {
      console.log(evt);
    },
    fetchWeather7days() {
      fetch(
        `${this.url_base}forecast.json?key=${this.api_key}&q=${this.query}&days=7&aqi=yes&alerts=yes`
      )
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          console.log(result);
          this.weather7Days = result;
        });
    },
    fetchDataWeather() {
      fetch(
        `${this.url_base}current.json?key=${this.api_key}&q=${this.query}&aqi=yes`
      )
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          // console.log(result);
          this.weather = result;
        });
    },
    fetchDataWeatherSearch(ev) {
      if (ev.key === "Enter") {
        fetch(
          `${this.url_base}forecast.json?key=${this.api_key}&q=${this.query}&days=7&aqi=yes&alerts=yes`
        )
          .then((res) => {
            return res.json();
          })
          .then((result) => {
            console.log(result);
            this.weather7Days = result;
          });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap');
* {
  margin: 0;
  padding: 0;
  font-family: 'Inconsolata', monospace;
}

.el-aside {
  min-height: 100vh;
}
.el-header {
  border: 1px solid black;
}
.el-input {
  .el-input__inner {
    color: red !important;
  }
}

.el-input__prefix {
  font-size: 20px !important;
  color: #000 !important;
}

.el-menu {
  margin-top: 60px !important;
  border-right: none !important;
  .el-menu-item {
    font-size: 14px;
    color: rgb(144, 144, 144);
  }
  .el-menu-item {
    .el-icon {
      margin-right: 20px !important;
    }
  }
  .el-menu-item.is-active {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-left: 22px;
    color: #5ac0c0;
    font-weight: 800;
    background-color: #f9f8f8;
    .el-icon {
      background-color: #5ac0c0;
      color: white;
      border-radius: 5px;
      padding: 8px 5px;
    }
  }
}
.avatar {
  width: 32px;
  border-radius: 10px;
  cursor: pointer;
  float: right;
}
.container-default-card {
  background-color: #5ac0c0;
  color: white;
}
.infor-weather-default {
  margin-top: 30px;
  .name {
    display: flex;
    justify-content: center;
    font-weight: 900;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .temp {
    display: flex;
    justify-content: center;
    font-weight: 300;
    font-style: italic;
    font-size: 44px;
    margin-bottom: 10px;
  }
  .region {
    font-style: italic;
    display: flex;
    justify-content: center;
    font-size: 18px;
    text-align: center;
  }
  .country {
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-style: italic;
    margin-bottom: 10px;
  }
  .localtime {
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-style: italic;
    margin-top: 10px;
  }
  .status-default {
    display: flex;
    justify-content: center;
    font-size: 24px;
    margin-bottom: 10px;
  }
}

.container-main {
  background-color: #f9f8f8;
  padding: 20px 40px;
}

.title-welcome {
  margin-top: 30px;
  margin-bottom: 40px;
  h2 {
    color: rgb(71, 71, 71);
  }
  h4 {
    color: rgb(71, 71, 71);
  }
}
.card-weather-day {
  margin-bottom: 20px;
  border: 1px solid #5ac0c0;
}
.card-hour {
  border-left: 2px solid red;
  margin: 5px;
  font-size: 16px;
}
.info-card-hour {
  display: flex;
  justify-content: center;
}
.detail-day {
  margin-bottom: 18px;
  font-style: italic;
  border: 1px solid #5ac0c0;
  padding: 3px 10px;
  border-radius: 20px;
}
.title-collapse {
  font-weight: 600;
  font-size: 16px;
}
</style>
