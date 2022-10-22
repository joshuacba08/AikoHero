# Histórico de funciones

Acá está lo que habíamos escrito anteriormente en el index:

```typescript
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
    heroContainers.forEach( (el:any) =>{
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
```


## Objetivos

Para desarrollar la primera etapa de nuestra librería será necesario aplicar toda la lógica a programación orientada a objetos. 

Para eso he establecido algunos cambios en  el archivo index.ts. 


* Definir el método constructor
* Crear un método que cree un hero
* Crear un método que cree n° heros
