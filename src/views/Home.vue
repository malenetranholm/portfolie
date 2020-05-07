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

  <div class="cv">
    <div id="portait">
      <img
        id="portait_img"
        src="../assets/images/portrait.png"
        alt="portrait"
        width="100%; height: 100%;"
      />
    </div>

    <div id="divider"></div>

    <div id="text">
      <div id="Personlige_skills">
        <h1>Personlige skills</h1>
        <h3>Passioneret</h3>
        <h3>Målrettet</h3>
        <h3>Engageret</h3>
        <h3>Empatisk</h3>
        <h3>Team-minded</h3>
      </div>
      <br />
      <div id="Erfaringer">
        <h1>Erfaringer</h1>
        <h2>2016-2020</h2>
        <h3>Sales assistant hos Landal Greenparks</h3>
        <p>
          Her har jeg udviklet kompetencer inden for salg og service, men også været en del af en flad organisation i vækst, som har givet mig stor indsigt i en moderne virksomhed i konstant udvikling. I perioden har jeg ud over mit daglige virke beskæftet
          mig med følgende:
          Inviteret til workshop under konceptet “Planning for agility“ med reklameberauet Mindshare.
          Deltaget i div. messer i både indland og udland.
          Oplæring i Leichendamm, holland, i nyt bookingsystem.
          Torvholder for migrering fra ét bookingsystem til et andet. Heraf modtog jeg en bonus for en ekstraordinær indsats i året 2018.
        </p>
        <h2>2018-2019</h2>
        <h3>Omsorgsmedhjælper hos Bo-Østervang</h3>
        <p>Her har udviklet kompetencer i forhold til relationsdannelse, samt kommunakativt. Borgerne er under §108, og mange uden sprog, hvilket har lært mig effekteen af tydeligt kropssprog samt kognitiv kommuikation.</p>
        <h2>2017-2018</h2>
        <h3>Content Writer hos Landal Greenparks</h3>
        <p>I forbindelse med overgangen fra Dayz resort til Landal Greenparks oversatte jeg content fra Engelsk til Dansk. Dette foregik i css systemet Sitecore.</p>
        <h2>2014-2016</h2>
        <h3>Kassemedarbejder/lukkeansvarlig i Rema 1000</h3>
      </div>
      <br />
      <div id="sprogkundskaber">
        <h1>Sprogkundskaber</h1>
        <h3>Dansk - modersmål</h3>
        <h3>Engelsk - flydende</h3>
      </div>
      <br />
      <div id="uddannelse">
        <h1>Uddannelse</h1>
        <h2>2019 -</h2>
        <h3>Erhvervsakademi Sydvest</h3>
        <h3>Multimedie design</h3>
        <h2>2014-2017</h2>
        <h3>Varde Handelsgymnasium</h3>
        <h3>Interkulturel Marketing</h3>
        <h2>2012-2014</h2>
        <h3>Ladelund efterskole</h3>
        <h3>9. klasses afgangseksamen og LE10</h3>
      </div>
      <br />
      <div id="It-kompetencer">
        <h1>It-kompetencer</h1>
        <img src="../assets/images/ikoner.png" alt="adobe ikoner" height="180px;" width="400px;" />
        <br />
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
</body>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style lang="css" >
body {
  background-color: #c09e90 !important;
  color: white;
  font-family: Helvetica;
}

.home {
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

h1 {
  font-family: abril fatface;
}
h2 {
  font-family: Helvetica;
  font-size: large;
}
h3 {
  font-family: Helvetica;
  font-size: medium;
  font-style: light;
}

.cv_video {
  padding: 100px 0 0 0;
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: row;
}

#routerlink {
  text-decoration: none;
  color: white !important;
}

#arrow {
  bottom: 400px;
}

.cv {
  width: 100%;
  height: 1200px;
  display: flex;
  flex-direction: row;
}

#divider {
  background-color: white;
  width: 3px;
  height: 1500px;
}

#portait {
  width: 49%;
  height: 1600px;
}

#portait_img {
  position: sticky;
  top: 0px;
}

#text {
  width: 50%;
  height: 1600px;
  padding-left: 40px;
  padding-right: 40px;
}
</style>
