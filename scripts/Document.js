/*Vue.component('btn', {
  
  <h1></h1>'
             +
            '<div v-for="comic in comicData">' +
            ' {{comic}}' +
            ' <hr>' +
            '</div>' +
            '<div>' +
            '  <img :src="ImagenComic" alt=""/>' +
            '</div>'
  data:{ 
    comicData:[],
    ImagenComic:''
  },
  methods: {
    getComic: function () {
      this.$http.get('temp/info.0.json').then(function (respuesta) {    
        this.comicData = respuesta.body;
        this.ImagenComic = this.comicData.img;
        this.$emit(this.comicData);
      });
    }
  },
  template: '<button class="btn btn-primary" v-on:click="getComic()">Calificar comic</button>{{comicData.safe_title}}'
})

Vue.component('comic',{
  
})
,
    template: '<button class="btn btn-primary" v-on:click="getComic()">Calificar comic</button>'
new Vue({ el: '#comics' })*/
new Vue({
    el: '#comics',
    data:{
      urls: ['temp/info.0.json', 'temp/info.1.json', 'temp/info.2.json', 'temp/info.3.json'],
      comicData:[],
      ImagenComic:'',
      idx:''
    },
    methods: {
      getComic: function () {
        idx = Math.floor(Math.random() * this.urls.length);
        this.$http.get(this.urls[idx]).then(function (respuesta) {    
          this.comicData = respuesta.body;
          this.ImagenComic = this.comicData.img;
        });
      }
    }
})