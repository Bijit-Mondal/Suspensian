<template>
  <div>
    <div class="webflow-style-input">
      <input v-on:keyup="formatSearch" v-model="search" class="search" type="text" style="display: block; margin : 0 auto; font-family: 'Source Code Pro'" placeholder="Search in Suspensians">
    </div>
    <div v-for="head in searchStory" :key="head.id" class="child">
          <center>
            <vs-card  type="3" style="padding-top:20px;">
              <template #title>
                <h3 class="title">{{head.title}}</h3>
              </template>
              <template #img>
                <img :src="'https://img.youtube.com/vi/' + head.id +'/sddefault.jpg'" alt="" draggable="false">
              </template>
              <template #text>
                <p class="desc">
                  {{head.description.slice(0,70)+'...'}}
                </p>
              </template>
              <template #interactions>
                <vs-button class="go_btn" danger color="#ff8396" gradient :to="'/'+$route.params.channel+'/'+head.id">Go</vs-button>
              </template>
            </vs-card>
          </center>
        </div>
  </div>
</template>

  <script>
    export default {
      data: () => ({
        color: '#ff8396',
        heads:[],
        arr:[],
        search:'',
        url:'',
        dump:[],
        route:''
      }),
      beforeRouteUpdate (to, form, next){
          this.heads = [];
          this.arr = [];
          const loading = this.$vs.loading({
            background: this.color,
            color: '#fff'
          })
          setTimeout(() => {
            loading.close()
          }, 7000),
          this.route = to.params.channel;
          //console.log(form);
          fetch('https://myutubeddr.000webhostapp.com/Midnight_Horror_Station/json.php/'+ this.route, {
          method: 'get'
        })
          .then((response)=>{
            return response.json()
          })
          .then((Jsondata)=>{
            this.heads = Jsondata;
            this.heads.forEach((value, index) => {
              this.dump = this.heads[index];
              this.arr = this.dump.concat(this.arr);
          });
          this.heads = this.arr;
          console.log(this.heads);
          })
          next();
      },
        created() {
          const loading = this.$vs.loading({
            background: this.color,
            color: '#fff'
          })
          setTimeout(() => {
            loading.close()
          }, 7000),
          this.url = this.$route.params.channel;
          console.log(this.url);
          fetch('https://myutubeddr.000webhostapp.com/Midnight_Horror_Station/json.php/'+ this.url, {
          method: 'get'
        })
        .then((response)=>{
          return response.json()
        })
        .then((Jsondata)=>{
          this.heads = Jsondata;
          this.heads.forEach((value, index) => {
            this.dump = this.heads[index];
            this.arr = this.dump.concat(this.arr);
        });
        this.heads = this.arr;
        console.log(this.heads);
        })
    },
    methods:{
      formatSearch(){
        if(this.search){
          this.search = this.search.toString();
          this.search = this.search.charAt(0).toUpperCase() + this.search.slice(1);
        }
      }
    },
      computed:{
          searchStory : function(){
            return this.heads.filter((head) =>{
              return head.title.toLowerCase().match(this.search.toLowerCase())
            })
          }
        }
    }
  </script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@1,300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Style+Script&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap');

    .title{
      font-family: 'Source Code Pro', cursive;
    }
    .desc{
      font-family: 'Nunito Sans', sans-serif;
    }
    .go_btn{
      font-family: 'Source Code Pro', cursive;
    }
    ::-moz-selection {
      color: black;
      background: #ff2349;
    }

    ::selection {
      color: black;
      background:#ff2349;
    }
    .search { border-style: none; background: transparent; outline: none; }
    .btn { padding: 0; background: none; border: none; outline: none; }
  </style>
