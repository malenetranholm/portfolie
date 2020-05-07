<template>
<body>
  <div class="home">
    <router-link id="routerlink" to="/">MALENE TRANHOLM</router-link>
  </div>

  <div class="works">
    <router-link id="routerlink" to="/Works">WORK</router-link>
  </div>

  <div class="contact">
    <router-link id="routerlink" to="/about">CONTACT</router-link>
  </div>

  <div id="app">
    <tiny-slider
      :mouse-drag="true"
      :loop="true"
      items="1"
      gutter="20"
      autoplay="true"
      :controls="!true"
    >
      <a href="https://www.linkedin.com/in/malene-tranholm-a85511187/" target="_blank">
        <img id="linkedin" src="../assets/images/linkedin.png" alt="linkedin" width="1100px;" />
      </a>

      <a href="https://www.instagram.com/malenetranholm.dk/?hl=da" target="_blank">
        <img id="instagram" src="../assets/images/instagram.png" alt="instagram" width="1100px;" />
      </a>

      <a href="tel:+4551920600">
        <img id="phone" src="../assets/images/phone.png" alt="phone" width="950;" />
      </a>

      <a href="mailto:tranholmmalene@outlook.dk">
        <img id="mail" src="../assets/images/mail.png" alt="mail" width="1200;" />
      </a>
    </tiny-slider>
  </div>
</body>
</template>
<script>

// @ is an alias to /src
var VueTinySlider = require("vue-tiny-slider");

export default {
  name: "Home",
  components: {
    "tiny-slider": VueTinySlider
  }
};
</script>


<style lang="scss">
@import "tiny-slider/src/tiny-slider";

body {
  background-color: #c09e90;
  color: white;
  font-family: Helvetica;
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
h1 {
  top: 700px;
  font-family: abril fatface;
  font-size: 75px;
}

#app {
  position: relative;
}
.tns-item {
  font-size: 3rem;
  font-family: Arial;
  text-align: center;
  padding: 2em;
}

#routerlink {
  text-decoration: none;
}

#linkedin {
  left: -400px !important;
}

#tns1-ow button {
  color:#c09e90;
}
//@media screen and (max-width: 600px)
</style>




