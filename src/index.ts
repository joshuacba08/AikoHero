import { Hero } from './interface/hero.models';

const heroData: Hero[] = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    subtitle: 'Lorem Ipsum dolor amed...',
    image:
      'https://images.pexels.com/photos/1982485/pexels-photo-1982485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
  }
  changeHero = (i: number) => {
    const heroContainers = Array.from(
      document.getElementsByClassName('aiko-hero-container')
    );
    i++;
    heroContainers.forEach((el: any) => {
      el.style.left = `${i}00vw`;
      console.log(i);

      if (i == 0) el.style.left = '0px';
      if (i == 1) el.style.left = '-100vw';
      if (i == 2) el.style.left = '-200vw';
      if (i > 2) i = 2;
    });
  };
  // completar el método que cambia de hero modificando la regla de css "left"
  // index: number = 0;
  // this.heroContainer.document.querySelectorAll('.aiko-hero-container')

  // // const slideLeft = document.querySelector('.slideLeft');
  // // const slideRight = document.querySelector('.slideRight');

  // slideRight = () => {
  //   this.index++;
  //   for (let i of this.heroContainer) {
  //     if (this.index == 0) i.style.left = '0px';
  //     if (this.index == 1) i.style.left = '-100vw';
  //     if (this.index == 2) i.style.left = '-200vw';
  //     if (this.index > 2) this.index = 2;
  //   }
  // };
  // slideLeft = () => {
  //   this.index--;
  //   for (let i of this.heroContainer) {
  //     if (this.index == 0) i.style.left = '0px';
  //     if (this.index == 1) i.style.left = '-740px';
  //     if (this.index == 2) i.style.left = '-1480px';
  //     if (this.index < 0) this.index = 2;
  //   }
  // };

  createControls() {
    // Aún no lo vimos en las sesiones pero deberíamos crear una función que cree los botones para controlar el pasaje de los heros.
    const buttonLeft = document.createElement('button');
    const buttonRight = document.createElement('button');

    this.nodeContainer?.appendChild(buttonLeft);
    this.nodeContainer?.appendChild(buttonRight);

    buttonLeft.classList.add('aiko-hero__buttonControls', 'slideLeft');
    buttonRight.classList.add('aiko-hero__buttonControls', 'slideRight');

    buttonLeft.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"/></svg>';
    buttonRight.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/></svg>';

    buttonLeft.addEventListener('click', () => {
      console.log('left click');

      this.changeHero(0);
    });

    buttonRight.addEventListener('click', () => {
      console.log('Right click');
      this.changeHero(1);
    });
  }

  currentHeroViewer() {}

  heroDestroy() {
    // El hero se remueve del DOM y ya no se muestra
  }
}

const data = heroData[1];
const hero = new AikoHero(heroData, 'aikohero');
hero.createControls();
hero.createNHeros();

console.log(hero);
