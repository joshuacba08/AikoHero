import { Hero, Action } from './interface/hero.models';


const heroData: Hero[] = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    subtitle: 'Lorem Ipsum dolor amed...',
    image:
      'https://images.pexels.com/photos/1982485/pexels-photo-1982485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    action:{
      path:'https://images.pexels.com/photos/1982485/pexels-photo-1982485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      option:'Imagen'
    }
    },
  {
    id: 2,
    title: 'Lorem Ipsum',
    subtitle: 'Lorem Ipsum dolor amed...',
    image:
      'https://images.pexels.com/photos/7034524/pexels-photo-7034524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Lorem Ipsum',
    subtitle: 'Lorem Ipsum dolor amed...',
    image:
      'https://images.pexels.com/photos/7034523/pexels-photo-7034523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];


class AikoHero {
  hero: Hero[] = [];
  limit: number = 6;
  currentHero: number = 0;
  idContainer: string;
  nodeContainer: HTMLElement | null;

  constructor(arrayHeros: Hero[], idContainer: string) {
    this.hero = arrayHeros;
    this.idContainer = idContainer;
    this.nodeContainer = document.getElementById(idContainer);
    this.nodeContainer?.classList.add('aiko-hero');
    this.lauchAutomaticInterval();
  }

  createHero(hero: Hero) {
    // completar el método para crear un hero

    const heroContainer = document.createElement('div'); // <div></div>
    const bgImg = document.createElement('div'); // <div></div>
    const info = document.createElement('div'); // <div></div>

    this.nodeContainer?.appendChild(heroContainer);
    heroContainer.appendChild(bgImg);
    heroContainer.appendChild(info);
    heroContainer.classList.add('aiko-hero-container');
    bgImg.classList.add('aiko-hero__hero-bg');
    bgImg.style.backgroundImage = `url(${hero.image})`;
    info.classList.add('aiko-hero__info');
    info.innerHTML = `
      <h1 class="aiko-hero-info__title">${hero.title}</h1>
      <p class="aiko-hero-info__subtitle">${hero.subtitle}</p>
      <button class="aiko-hero-info__buttonAction" onclick="location.href='${hero.action?.path}';">${hero.action?.option}</button>
      `;
  }

  createNHeros() {
    if (this.hero.length <= this.limit) {
      this.hero.forEach((heroItem) => {
        this.createHero(heroItem);
      });
    } else {
      console.error('You have reached the limit');
    }
  }

  lauchAutomaticInterval() {
    // completar el método que a través de un interval cambie el valor de currentHero y ejecutar el método changeHero para cambiar al hero correspondiente
      setInterval (() => {
      this.changeHero(this.currentHero)
      console.log('current hero: ',this.currentHero)
      this.currentHero++;

      if(this.currentHero >= heroData.length) {
        this.currentHero = 0;
      }
    } , 3000)

  }

  changeHero(index: number) {
    // completar el método que cambia de hero modificando la regla de css "left"
  }

  createControls() {
    // Aún no lo vimos en las sesiones pero deberíamos crear una función que cree los botones para controlar el pasaje de los heros.
    const buttonLeft = document.createElement('button');
    const buttonRight = document.createElement('button');

    this.nodeContainer?.appendChild(buttonLeft);
    this.nodeContainer?.appendChild(buttonRight);

    buttonLeft.classList.add('aiko-hero__buttonControls');
    buttonRight.classList.add('aiko-hero__buttonControls');

    buttonLeft.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"/></svg>';
    buttonRight.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/></svg>';

    buttonLeft.addEventListener('click', () => {
      console.log('atras');
    });

    buttonRight.addEventListener('click', () => {
      console.log('adelante');
    });
  }

  currentHeroViewer(){
    let buttonDiv = document.createElement('div');
    this.nodeContainer?.appendChild(buttonDiv);
    buttonDiv.classList.add('aiko-hero__button-flex');
    let buttonView;

    for (let i=0; i<this.hero.length; i++){
      buttonView = document.createElement('button');
      buttonDiv.appendChild(buttonView);
      buttonView.classList.add('aiko-hero__button-viewer');

      if (i ===this.currentHero) {
        buttonView.classList.add('aiko-hero__button-this');
      }
    }
  }

  heroDestroy() {
    // El hero se remueve del DOM y ya no se muestra
  }
}


const hero = new AikoHero(heroData, 'aikohero');
hero.createControls();
hero.createNHeros();
hero.currentHeroViewer();
console.log(hero);
