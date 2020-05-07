<template>
<body>
  <kinesis-container id="headline">
    <kinesis-element :strength="30">
      <h5>LOGO</h5>
    </kinesis-element>
  </kinesis-container>
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

  <div class="home">
    <router-link id="routerlink" to="/">MALENE TRANHOLM</router-link>
  </div>

  <div class="works">
    <router-link id="routerlink" to="/Works">WORK</router-link>
  </div>

  <div class="contact">
    <router-link id="routerlink" to="/about">CONTACT</router-link>
  </div>

  <kinesis-container>
    <v-row>
      <v-col class="odd-left">
        <kinesis-element :strength="30">
          <img src="../assets/images/mtlogo.png" alt="astroxpress baggrund" />
        </kinesis-element>
      </v-col>

      <v-col class="odd-right">
        <h1>Personligt logo</h1>
        <h2>Udarbejdet i forbindelse med produktionen af cv samt visitkort.</h2>
      </v-col>
    </v-row>
  </kinesis-container>
  <kinesis-container>
    <v-row>
      <v-col class="even-left">
        <h1>astroXpress logo</h1>
        <h2>Udarbejdet i forbindelse med vores 1 semester projekt. astroXpress er en fiktiv virksomhed der tilbyder rumrejser.</h2>
      </v-col>
      <v-col class="even-right">
        <kinesis-element :strength="30">
          <img src="../assets/images/astroxpresslogo.png" alt="astroxpress logo" />
        </kinesis-element>
      </v-col>
    </v-row>
  </kinesis-container>
  <kinesis-container>
    <v-row>
      <v-col class="odd-left">
        <kinesis-element :strength="30">
          <img src="../assets/images/bblogo.png" alt="astroxpress logo" />
        </kinesis-element>
      </v-col>
      <v-col class="odd-right">
        <h1>Bed & Breakfast logo</h1>
        <h2>Logoet er lavet i fobindelse af mit første front end development projekt.</h2>
      </v-col>
    </v-row>
  </kinesis-container>
  <kinesis-container>
    <v-row>
      <v-col class="even-left">
        <h1>Esbjerg krisecenter logo</h1>
        <h2>
          Esbjerg krisecenter kontaktede i starten af 1 semester easv sydvest, for et nyt logo.
          Dette var mit bud til på et logo til krisecenteret.
        </h2>
      </v-col>
      <v-col class="even-right">
        <kinesis-element :strength="30">
          <img src="../assets/images/krisecenterlogo.png" alt="astroxpress logo" />
        </kinesis-element>
      </v-col>
    </v-row>
  </kinesis-container>
  <kinesis-container>
    <v-row>
      <v-col class="odd-left">
        <kinesis-element :strength="30">
          <img src="../assets/images/outzylogo1.png" alt="astroxpress logo" />
        </kinesis-element>
      </v-col>
      <v-col class="odd-right">
        <h1>Outzy logo</h1>
        <h2>Lavet i forbindelse med en tværfaglig opgave vi havde i fagene cc/ux med fokus på branding af Esbjergs udendørs faciliteter.</h2>
      </v-col>
    </v-row>
  </kinesis-container>
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
    <v-btn @click="prev" text>
      <v-icon>mdi-chevron-left</v-icon>prev
    </v-btn>
    <v-btn @click="next" text>
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
      this.$router.push("/Work3");
    },
    prev() {
      this.$router.push("/Work1");
    }
  }
};
</script>

<style lang="css" scoped>
#routerlink {
  text-decoration: none;
  color: black !important;
}

.even-left {
  background-color: #e4e4e4 !important;
  display: flex;
  justify-content: center;
}

.odd-left {
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
}
.odd-right {
  display: flex;
  justify-content: center;
  background-color: #e4e4e4;
}
h2 {
  font-weight: 200;
  padding: 0 40px 0 40px;
  text-align: center;
  position: relative;
  top: 350px;
}
h1 {
  position: absolute;
  top: 250px;
}

.even-left {
  background-color: yellow;
}
.even-right {
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
}

body {
  background-color: #e4e4e4 !important;
  color: black !important;
  font-family: Helvetica;
  height: 4500px;
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
  left: 550px;
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