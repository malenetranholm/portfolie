<template>
<body>
  <kinesis-container id="headline">
    <kinesis-element :strength="30">
      <h5>POSTERS</h5>
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
  <kinesis-container>
    <v-row>
      <v-col class="odd-left">
        <kinesis-element :strength="30">
          <img src="../assets/images/Greta.png" alt="astroxpress baggrund" />
        </kinesis-element>
      </v-col>
      <v-col class="odd-right">
        <h1>Barbara Kruger inspireret plakat</h1>
        <h2>
          Plakaten er udarbejdet, med udgangspunkt i inspiration fra en kendt kunstner.
          Her ses Greta Thunberg i et udtryk med inspiration fra Barbara, med stærke nutidige budskaber.
        </h2>
      </v-col>
    </v-row>
  </kinesis-container>
  <kinesis-container>
    <v-row>
      <v-col class="even-left">
        <h1>astroXpress plakat</h1>
        <h2>
          Denne er lavet i forbindelse med vores 1. semester projekt.
          Reklamen er designet til at reklamere for virksomheden, på en elegant og diskret måde, således at materialet passer til målgruppeen.
        </h2>
      </v-col>
      <v-col class="even-right">
        <kinesis-element :strength="30">
          <img src="../assets/images/astro.png" alt="astroxpress logo" />
        </kinesis-element>
      </v-col>
    </v-row>
  </kinesis-container>
  <kinesis-container>
    <v-row>
      <v-col class="odd-left">
        <kinesis-element :strength="30">
          <img src="../assets/images/me1.png" alt="astroxpress logo" />
        </kinesis-element>
      </v-col>
      <v-col class="odd-right">
        <h1>Double exposure</h1>
        <h2>Vi fik til opgave at tage et portræt, samt lave denne double exposure effekt, dette var mit første bud.</h2>
      </v-col>
    </v-row>
  </kinesis-container>
  <kinesis-container>
    <v-row>
      <v-col class="even-left">
        <h1>Double exposure</h1>
        <h2>Vi fik til opgave at tage et portræt, samt lave denne double exposure effekt, dette var mit andet bud.</h2>
      </v-col>
      <v-col class="even-right">
        <kinesis-element :strength="30">
          <img src="../assets/images/me2.png" alt="astroxpress logo" />
        </kinesis-element>
      </v-col>
    </v-row>
  </kinesis-container>
  <kinesis-container>
    <v-row>
      <v-col class="odd-left">
        <kinesis-element :strength="30">
          <img src="../assets/images/me3.png" alt="astroxpress logo" />
        </kinesis-element>
      </v-col>
      <v-col class="odd-right">
        <h1>Double exposure</h1>
        <h2>Vi fik til opgave at tage et portræt, samt lave denne double exposure effekt, dette var mit endelige bud.</h2>
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
      this.$router.push("/Work4");
    },
    prev() {
      this.$router.push("/Work2");
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
  height: 4450px;
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