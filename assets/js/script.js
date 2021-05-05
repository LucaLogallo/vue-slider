

const app = new Vue ({

  el : '#app',
  data : {
    indexPhoto: 0, //variabile di lavoro utilizzata come indice dell'array photos 
    photos : [
      'assets/img/img.jpg',
      'assets/img/img1.jpg',
      'assets/img/img2.jpg',
      'assets/img/img3.jpg',
      'assets/img/img4.jpg',
      'assets/img/img5.jpg'
    ]
  },
  methods:{
    prevImg(){
      this.indexPhoto--; //decremento la variabile indice dell'array photos
      if(this.indexPhoto < 0)  this.indexPhoto = this.photos.length-1;
    }, 
    nextImg(){
      this.indexPhoto++;//incremento la variabile indice dell'array photos
      if(this.indexPhoto === this.photos.length)  this.indexPhoto = 0;
    }
  }
})