export class Casa {

    // "nombre": "Santutxu",
    //   "precio": 600,
    //   "alquiler": true,
    //   "habitaciones": 3,
    //   "foto": "https://d.inmofactory.com/1/98366/13970473/165256531.jpg/300x225/a_fill/",
    //   "direccion": "Mazustegi 9, Bilbao - 4800",
    //   "servicios": [
    //     { "nombre": "tv","disponible": false },
    //     { "nombre": "wc","disponible": true },
    //     { "nombre": "jardin","disponible": false },
    //     { "nombre": "cocina","disponible": true } 
    //   ]


      nombre:string;
      precio:number;
      alquiler:boolean;
      habitaciones:number;
      foto:string;
      direccion:string;
      servicios:string[];


      constructor(){
          this.nombre= "";
          this.precio=0;
          this.alquiler= false;
          this.habitaciones= 0;
          this.foto= "";
          this.direccion="";
          this.servicios= [];
      }

}
