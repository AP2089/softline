import ScrollMagic from 'scrollmagic';

export const scenesInit = () => {
  const scenes = document.querySelectorAll('.js-scene');
  const controller = new ScrollMagic.Controller();

  for (let i = 0; i < scenes.length; i++) {
    const scene = scenes[i];

    new ScrollMagic.Scene({
      triggerElement: scene
    })
    .addTo(controller)
    .on('enter leave', () => {
      if (!scene.classList.contains('active')) {
        scene.classList.add('active');
      }
    });
  }
}