<template>
  <div>
    <center>
      <vs-card>
        <template #title>
          <h3 class="title">{{heads.title}}</h3>
        </template>
        <template #img>
          <img :src="'https://img.youtube.com/vi/' + heads.id +'/sddefault.jpg'" alt="" draggable="false">
        </template>
        <template #text>
          <p class="description">
            {{heads.description}}
          </p>
        </template>
        <template #interactions>
          <vs-button danger gradient icon @click="download=!download; load()">
            <span class="material-icons">
                download
            </span>
          </vs-button>
          <vs-button danger border icon v-clipboard="copyData" @success="handleSuccess" @click="copyModal=!copyModal" @error="handleError">
            <span class="material-icons">
                content_copy
            </span>
          </vs-button>
        </template>
    </vs-card>
    <vs-button
      class="title"
      color="#ff2349"
      flat
      :active="active_1 == 'guide'"
      @click="active_1 = 'guide',download=!download,load()"
    >
    <span class="material-icons-round">download</span>Download From Server 1
    </vs-button>
    <vs-button
      class="title"
      color="#00e6e6"
      flat
      :active="active_1 == 'guide'"
      @click="active_1 = 'guide', download2 =!download2"
    >
    <span class="material-icons-round">download</span>Download From Server 2
    </vs-button>
  </center>
  <div class="center">
    <vs-dialog blur v-model="download">
        <!--<iframe id="buttonIframe" :src="'https://yt2mp3s.me/api/button/mp3/'+heads.id " width="100%" height="100%" allowtransparency="true" scrolling="yes" style="border:none"></iframe>-->
        <iframe style="margin-top:3%;margin-left:15%;width:230px;height:60px;border:0;overflow:hidden;" scrolling="yes" :src="'https://loader.to/api/button/?url=https://www.youtube.com/watch?v='+this.$route.params.id+'&f=m4a&color=ff8396'"></iframe>
    </vs-dialog>
    <vs-dialog v-model="download2">
      <h2>Server Will Be Avaliable At Next Version</h2>
    </vs-dialog>
    <vs-dialog blur v-model="copyModal">
      <center>
        <h4>Copied to Clipboard</h4>
        <vs-button color="#00e6e6"
        flat
         @click="copyModal=!copyModal"
        >Okay</vs-button>
      </center>
    </vs-dialog>
  </div>
  </div>
</template>

<script>

export default{
  data(){
    return{
      download: false,
      download2:false,
      share:false,
      color: '#ff8396',
      heads:[],
      id : '',
      copyData: "",
      copyModal: false,
      channel:''
    }
  },
  methods:{
    load: function () {
      const loading = this.$vs.loading({
        background: this.color,
        color: '#fff'
      })
      setTimeout(() => {
        loading.close()
      }, 7000)
    },
    handleSuccess(e) {
      console.log(e);
    },
    handleError(e) {
      console.log(e);
    },
  },
  created(){
    const loading = this.$vs.loading({
      background: this.color,
      color: '#fff'
    })
    setTimeout(() => {
      loading.close()
    }, 5000),
      this.id = this.$route.params.id;
      console.log(this.id);
      this.channel = this.$route.params.channel;
      fetch(`https://myutubeddr.000webhostapp.com/Midnight_Horror_Station/search.php/`+this.channel+`/id=`+this.id, {
      method: 'get'
    })
      .then((response)=>{
        return response.json()
      })
      .then((Jsondata)=>{
        this.heads = Jsondata;
        console.log(this.heads);
        document.title ="Suspensians - "+ this.heads.title;
      })
      this.copyData = `https://suspensians.netlify.app/#/`+this.channel+`/`+this.id;
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
    font-family: 'Nunito Sans', sans-serif;
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
