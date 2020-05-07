<template>
<body>
  <br />
  <br />
  <br />
  <br />

  <div class="home">
    <router-link id="routerlink" to="/">MALENE TRANHOLM</router-link>
  </div>
  <div class="works">
    <router-link id="routerlink" to="/Works">WORK</router-link>
  </div>
  <div class="contact">
    <router-link id="routerlink" to="/about">CONTACT</router-link>
  </div>

  <v-carousel
    vertical
    vertical-delimiters="right"
    cycle
    height="100%"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(item,i) in works" :key="i">
      <v-sheet :color="color" height="100%">
        <a :href="item.route">
          <h4 id="number">{{ item.number }}</h4>
          <h5 id="input">{{ item.input }}</h5>
          <v-img :src="item.image" aspect-ratio="2.7" contain />
        </a>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</body>
</template>

<script>
export default {
  data() {
    return {
      color: "rgb(192, 158, 144)",
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      works: [
        {
          number: "01",
          input: "PROJECTS",
          image: require("@/assets/images/project.png"),
          route: "/Work1"
        },
        {
          number: "02",
          input: "LOGOS",
          image: require("@/assets/images/logo.png"),
          route: "/Work2"
        },
        {
          number: "03",
          input: "POSTERS",
          image: require("@/assets/images/poster.png"),
          route: "/Work3"
        },
        {
          number: "04",
          input: "GRAPHICS",
          image: require("@/assets/images/graphic.png"),
          route: "/Work4"
        },
        {
          number: "05",
          input: "VIDEOS",
          image: require("@/assets/images/video.png"),
          route: "/Work5"
        }
      ]
    };
  }
};
</script>
<style >
.v-carousel__controls {
  right: 300px !important;
  top: 0px;
  height: 300px;
}
.v-carousel--vertical-delimiters .v-carousel__controls {
  top: 0px;
  height: 300px !important;
}
</style>
<style lang="css" scoped >
body {
  background-color: #c09e90 !important;
  color: white;
  font-family: Helvetica;
}

a {
  text-decoration: none;
}

.home {
  top: 40px;
  left: 60px;
  position: fixed;
  z-index: 10;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
}

.works {
  top: 60px;
  right: 20px;
  position: fixed;
  transform: rotate(+90deg);
  z-index: 10;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
}

.contact {
  bottom: 60px;
  left: 20px;
  position: fixed;
  transform: rotate(-90deg);
  z-index: 10;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
}

.v-carousel__controls {
  right: 250px;
}

h4 {
  font-family: abril fatface;
  font-size: 150px;
  color: rgba(255, 245, 245, 0.563);
  width: 300px;
  position: absolute;
  left: 240px;
  top: 10px;
  z-index: 888;
}

h5 {
  font-family: abril fatface;
  font-size: 100px;
  color: white;
  text-shadow: 6px 6px 12px rgba(6, 6, 6, 0.397);
  width: 300px;
  position: absolute;
  left: 200px;
  top: 200px;
  z-index: 888;
}

#routerlink {
  text-decoration: none;
  color: white !important;
}
</style>