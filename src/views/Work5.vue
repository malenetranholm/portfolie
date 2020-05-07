<template>
<body>
  <kinesis-container id="headline">
    <kinesis-element :strength="30">
      <h5>VIDEOS</h5>
    </kinesis-element>
  </kinesis-container>

  <div class="home">
    <router-link id="routerlink" to="/">MALENE TRANHOLM</router-link>
  </div>

  <div class="works">
    <router-link id="routerlink" to="/Works">WORK</router-link>
  </div>

  <div class="contact">
    <router-link id="routerlink" to="/about">CONTACT</router-link>
  </div>

  <div class="cv_video">
    <iframe
      width="1000"
      height="600"
      src="https://www.youtube.com/embed/1OekZeNoNaE"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <br />
  <br />
  <div class="australian_wildfire">
    <iframe
      width="1000"
      height="600"
      src="https://www.youtube.com/embed/0K3ww2PVFdQ"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div class="australian_wildfire">
    <iframe
      width="1000"
      height="600"
      src="https://www.youtube.com/embed/lGl38kwzMa8"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div class="carlsberg">
    <iframe
      width="1000"
      height="600"
      src="https://www.youtube.com/embed/44xeF2mxv3k"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div class="friends_remake">
    <iframe
      width="1000"
      height="600"
      src="https://www.youtube.com/embed/KizzCYD96VA"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <br />
  <br />
   <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
  <v-row justify="center">
      <v-btn
        @click="prev"
        text
      >
        <v-icon>
          mdi-chevron-left
        </v-icon>
        prev
      </v-btn>
  </v-row>
</body>
</template>

<script>
export default {
  methods: {
    prev() {
      this.$router.push("/Work4");
    }
  }
};
</script>

<style lang="css" scoped>
#routerlink {
  text-decoration: none;
  color: black !important;
}

body {
  background-color: #e4e4e4 !important;
  color: black !important;
  font-family: Helvetica;
  height: 4350px;
}

.home {
  color: black;
  text-decoration: none;
  top: 40px;
  left: 60px;
  position: fixed;
  z-index: 10;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
}

.works {
  color: black;
  text-decoration: none;
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
  color: black;
  text-decoration: none;
  bottom: 60px;
  left: 20px;
  position: fixed;
  transform: rotate(-90deg);
  z-index: 10;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
}

h5 {
  font-family: abril fatface;
  font-size: 100px;
  color: black;
  text-shadow: 6px 6px 12px rgba(6, 6, 6, 0.397);
  position: absolute;
  top: 100px;
  left: 525px;
}
.cv_video {
  width: 100%;
  height: 1000px;
  position: relative;
  top: 200px;
}

.friends_remake {
  display: flex;
  justify-content: center;
}

.carlsberg {
  display: flex;
  justify-content: center;
}

.australian_wildfire {
  display: flex;
  justify-content: center;
}

.left {
  background-color: #e4e4e4 !important;
  height: 400px;
  width: 200%;
  position: relative;
  bottom: 0 !important;
  left: 600px;
}

.right {
  background-color: #e4e4e4 !important;
  height: 400px;
  width: 200%;
  position: relative;
  bottom: 0 !important;
}
</style>