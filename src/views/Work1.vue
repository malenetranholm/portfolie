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

  <img
    id="outzybg"
    src="../assets/images/outzy_back@20x.png"
    alt="outzy baggrund"
    width="100%; height: 100%;"
  />
  <div class="logocontroler">
    <img id="outzylogo" src="../assets/images/LOGO1@15x.png" alt="outzy baggrund" />
  </div>

  <div id="content">
    <div id="date">
      <h3>CC/UX PROJECT 2020:</h3>
      <h2>Outxy er et project udviklet for Esbjerg kommune med formålet om at tiltrække mere af befolkningen til de udendørs faciliteter byen tilbyder.</h2>
    </div>
    <div id="pdf">
      <a
        href="https://xd.adobe.com/view/a319b35e-7e9e-4adb-794c-4012db42418c-d528/screen/747716b8-5ca1-4bed-b647-64cfbbacea08/SPORT?fbclid=IwAR0NIwvZCOe_KTTVa5STPEJxEeNdstJdxo6IkUFAMQmO4PQSc0JTYDo1B-A"
      >Watch prototype</a>
    </div>
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
  <br />
  <br />

  <img
    id="astroxpressbg"
    src="../assets/images/astroxpressbg.png"
    alt="astroxpress baggrund"
    width="100%; height: 100%;"
  />
  <div class="logocontroler">
    <img id="astrologo" src="../assets/images/astrologo.png" alt="outzy baggrund" />
  </div>
  <div class="spaceship">
    <img id="spaceship" src="../assets/images/spaceship.png" alt="spaceship" />
    <h1>2019</h1>
    <div id="content-absolute">
      <div id="date">
        <h4>
          astroXpress er vores første semester eksamensprojekt, hvor vi udarbejdede en visuel profil for en fiktiv virksomhed under emnet "space"
          Heraf kunne vi drage mange gode erfaringer, og lære om hele processen, alt fra planlægning til vigtigheden af user testing.
          Eksamensprojektet sendte os godt videre med et 12 tal.
        </h4>
      </div>
      <div id="pdf">
        <a
          href="http://astroxpress.000webhostapp.com/about.html"
        >Udforsk hjemmesiden udviklet til projektet "astroXpress"</a>
        <br />
        <a
          href="https://firebasestorage.googleapis.com/v0/b/pdf-portfolie.appspot.com/o/Rapport_eksamen.pdf?alt=media&token=ffc27ec1-5e5b-43a9-9cf2-b2f9e200cdb5"
        >Se rapport via firebase</a>
        <br />
        <a
          href="https://firebasestorage.googleapis.com/v0/b/pdf-portfolie.appspot.com/o/design_manua_endelig-2.pdf?alt=media&token=ed69f215-be66-4e3e-97c7-a2b7538b20b3"
        >Se design manual via firebase</a>
        <br />
        <a
          href="https://firebasestorage.googleapis.com/v0/b/pdf-portfolie.appspot.com/o/plakater.pdf?alt=media&token=7079fa3b-aae6-4354-a8d0-acd89cf448fb"
        >se astroXpress merch plakater via firebase</a>
        <br />
        <a
          href="https://firebasestorage.googleapis.com/v0/b/pdf-portfolie.appspot.com/o/plakat-færdig.pdf?alt=media&token=e2dc95f9-5aa4-4ac3-9c40-9d03004eb625"
        >se astroXpress reklame plakat fra firebase</a>
      </div>
    </div>
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
  <v-row justify="center">
    <v-btn class="mb-12" @click="next" text>
      next
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </v-row>
</body>
</template>

<script>
export default {
  methods: {
    next() {
      this.$router.push("/Work2");
    }
  }
};
</script>

<style lang="css" scoped >
#routerlink {
  text-decoration: none;
  color: black !important;
}

body {
  background-color: #e4e4e4 !important;
  color: black !important;
  font-family: Helvetica;
  height: 100%;
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
.logocontroler {
  display: flex;
  justify-content: center;
}

#outzylogo {
  top: -700px;
  position: relative;
  z-index: 888;
  width: 400px;
}

#astrologo {
  top: -700px;
  position: relative;
  z-index: 888;
  width: 400px;
}
.spaceship {
  display: flex;
  justify-content: center;
  position: relative;
  top: -300px;
}
#spaceship {
  height: 1000px;
}

h1 {
  font-family: abril fatface;
  position: relative;
  top: 220px;
  right: 275px;
}

h2 {
  font-family: Helvetica;
  font-size: large;
  font-weight: 300;
  text-align: right;
  padding: 0 20px 0 0;
  position: relative;
  top: -50px;
}

h3 {
  font-family: abril fatface;
  position: relative;
  font-size: xx-large;
  top: -100px;
  left: 150px;
}

h4 {
  font-family: Helvetica;
  font-size: large;
  font-weight: 300;
  text-align: right;
  padding: 0 20px 0 0;
  position: relative;
}
a {
  color: black !important;
}

#content {
  position: relative;
  left: 380px;
  top: 15px;
  width: 800px;
  height: 200px;
  z-index: 888;
  display: flex;
  justify-content: center;
}

#content-absolute {
  position: absolute;
  top: 300px;
  width: 800px;
  height: 200px;
  z-index: 888;
  display: flex;
  justify-content: center;
}

#pdf {
  top: 2500px;
  width: 400px;
  height: 200px;
  z-index: 888;
  font-family: Helvetica;
  font-size: large;
  font-weight: 300;
}

#date {
  top: 2500px;
  width: 400px;
  height: 200px;
  z-index: 888;
}

.even-left {
  background-color: #e4e4e4 !important;
}
.even-right {
  background-color: #e4e4e4 !important;
}
</style>