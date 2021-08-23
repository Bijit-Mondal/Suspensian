<template>
    <div class="center examplex">
      <vs-navbar style="position:fixed;" color="#ff8396" center-collapsed v-model="active_1">
        <template #left>
          <img src="../assets/logo/64.png" alt="Logo" style="padding-top:10px" draggable="false">
        </template>
        <vs-navbar-item class="nav_items" color="#c00022" :active="active_1 == 'guide'" id="guide" to="/mhstation">
          Midnight Horror Station
        </vs-navbar-item>
        <vs-navbar-item class="nav_items" color="#c00022" :active="active_1 == 'docs'" id="docs" to="/sunday_suspense">
          Sunday Suspense
        </vs-navbar-item>
        <vs-navbar-item class="nav_items" color="#c00022" :active="active_1 == 'components'" id="components" to="/thrillerland">
          ThrillerLand
        </vs-navbar-item>
        <template #right>
          <vs-button style="font-family:  'Source Code Pro', monospace;" flat border color="#c00022" @click="login=!login"><b>Login</b></vs-button>
          <vs-button style="font-family:  'Source Code Pro', monospace;" color="#ff2349" @click="active=!active"  gradient><b>Menu</b></vs-button>

        </template>
      </vs-navbar>
      <div class="center">
        <vs-dialog blur v-model="active">
          <vs-button
          color="#ff8396"
          gradient
           :active="active_2 == 0"
           @click="active_2 = 0,active_1 = 'fuck',active=!active"
           to="/"
         >
         <span class="material-icons-round">home</span>Home
         </vs-button>
           <vs-button
           color="#ff8396"
           gradient
            :active="active_2 == 1"
            @click="active_2 = 1,active_1 = 'fuck', active=!active"
            to="/about"
          >
          <span class="material-icons-round">groups</span>About
          </vs-button>
         <vs-button
           color="#ff2349"
           flat
           :active="active_1 == 'guide'"
           @click="active_1 = 'guide',active=!active"
           to="/mhstation"
         >
         <span class="material-icons-round">stream</span>Midnight Horror Station
         </vs-button>
         <vs-button
           color="#40e0c3"
           flat
           :active="active_1 == 'docs'"
           @click="active_1 = 'docs',active=!active"
           to="/sunday_suspense"
         >
         <span class="material-icons-round">stream</span>Sunday Suspense
         </vs-button>
         <vs-button
           color="#00e6e6"
           flat
           :active="active_1 == 'components'"
           @click="active_1 = 'components',active=!active"
           to="/thrillerland"
         >
         <span class="material-icons-round">stream</span>Thrillerland
         </vs-button>
        </vs-dialog>
      </div>

      <div class="center">
        <vs-dialog not-close v-model="login">
          <h1>Feature is not still avaliable</h1>
        </vs-dialog>
      </div>

    </div>
  </template>
  <script>
   export default {
     data:() => ({
       active: false,
       active_1 : '',
       active_2 : 0,
       login: false
     })
   }
   </script>
   <style scoped>
      @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@1,300&display=swap');
      .nav_items{
        font-family:  'Source Code Pro', monospace;
      }
      ::-moz-selection {
        color: black;
        background: #ff2349;
      }

      ::selection {
        color: black;
        background:#ff2349;
      }
   </style>
