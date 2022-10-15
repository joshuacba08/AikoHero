interface Hero{
  id: number,
  title: string,
  subtitle: string,
  image: string
}

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


window.addEventListener('load', () => {
  const aikoHero = document.getElementById('aikohero'); //<div id="aikohero"></div>

  const createHeroItem = (hero:Hero) => {
    const heroContainer = document.createElement('div'); // <div></div>
    const bgImg = document.createElement('div'); // <div></div>
    const info = document.createElement('div'); // <div></div>

    aikoHero?.appendChild(heroContainer);
    heroContainer.appendChild(bgImg);
    heroContainer.appendChild(info);

    aikoHero?.classList.add('aiko-hero');
    heroContainer.classList.add('aiko-hero-container');
    bgImg.classList.add('aiko-hero__hero-bg');
    bgImg.style.backgroundImage = `url(${hero.image})`;

    info.classList.add('aiko-hero__info');
    info.innerHTML = `
      <h1 class="aiko-hero-info__title">${hero.title}</h1>
      <p class="aiko-hero-info__subtitle">${hero.subtitle}</p>
    `
  };

  const changeHero = (i:number) => {

    const heroContainers = Array.from(document.getElementsByClassName('aiko-hero-container'));
    heroContainers.forEach( (el) =>{
        el.style.left = `${i}00vw`
    })
  }


  //ejecuciones inmediatas
  heroData.forEach( (element:Hero) => {
    createHeroItem(element);
  });

  let count = 0;
  setInterval(()=>{

    changeHero(count);
    if(Math.abs(count) + 1 < heroData.length){
      count += -1;
    }else{
      count = 0;
    }

  },3000);




});
