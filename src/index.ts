import { Hero } from './interface/hero.models';

const heroData:Hero[] = [
  {
    id:1,
    title: 'Lorem Ipsum',
    subtitle: 'Lorem Ipsum dolor amed...',
    image:
      'https://images.pexels.com/photos/1982485/pexels-photo-1982485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id:2,
    title: 'Lorem Ipsum',
    subtitle: 'Lorem Ipsum dolor amed...',
    image:
      'https://images.pexels.com/photos/7034524/pexels-photo-7034524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id:3,
    title: 'Lorem Ipsum',
    subtitle: 'Lorem Ipsum dolor amed...',
    image:
      'https://images.pexels.com/photos/7034523/pexels-photo-7034523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

class AikoHero {
  hero:Hero[] = [];
  limit:number = 6;
  currentHero: number = 0;
  idContainer: string;
  nodeContainer: HTMLElement;

  constructor(arrayHeros: [], idContainer: string){
    this.hero=arrayHeros;
    this.idContainer=idContainer;
    this.nodeContainer= document.getElementById(idContainer)


  }

  createHero( hero: Hero ){
    // completar el método para crear un hero
  }

  createNHeros( qty: number, arrayHeros:Hero[] ){
    // completar el método para crear una cantidad de heros
  }

  lauchAutomaticInterval(){
    // completar el método que a través de un interval cambie el valor de currentHero y ejecutar el método changeHero para cambiar al hero correspondiente

  }

  changeHero(index:number){
    // completar el método que cambia de hero modificando la regla de css "left"
  }

  createControls(){
    // Aún no lo vimos en las sesiones pero deberíamos crear una función que cree los botones para controlar el pasaje de los heros.
  }

  heroDestroy(){
    // El hero se remueve del DOM y ya no se muestra
  }

}

export default AikoHero;

