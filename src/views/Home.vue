<template>
  <div>
    <center>
      <vs-card>
        <template #title>
          <h3 class="title">Suspensians</h3>
        </template>
        <template #img>
          <img src="../assets/logo.png" alt="" draggable="false">
        </template>
        <template #text>
          <p class="description">
            Welcome To Suspensians. All Bengali Suspense Story At One Place. This Website Is Fully Handcrafted By Bijit
              It Is Still Under Devloping. So Please Stay Connected


          </p>
        </template>
    </vs-card>
    <vs-button
      class="title"
      color="#ff2349"
      flat
      :active="active_1 == 'guide'"
      @click="active_1 = 'guide',active=!active"
      to="/mhstation"
    >
    <span class="material-icons-outlined">
arrow_forward
</span>Have a look
    </vs-button>
  </center>

  </div>
</template>

<script>

export default{
  data(){
    return{

    }
  },
  created(){

  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Style+Script&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap');

  .title{
    font-family: 'Style Script', cursive;
  }
  .description{
    font-family: 'Style Script', sans-serif;
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
