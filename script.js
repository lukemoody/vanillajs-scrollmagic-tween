import { TweenMax } from "gsap";
import ScrollMagic from "scrollmagic";

const ScrollFadeIn = () => {

  const controller = new ScrollMagic.Controller();
  let trigger = document.querySelectorAll('.js-trigger');

  // Loop over all trigger elements 
  for (let i = 0; i < trigger.length; i++) {

    // Get elements to animate
    const animate = trigger[i].querySelectorAll(".js-animate");

    // Tween
    const tween = TweenMax.staggerFromTo(
      animate,
      1, {
      y: '3%',
      ease: Power1.easeInOut,
      autoAlpha: 0
    },
      {
        y: '0%',
        ease: Power1.easeInOut,
        autoAlpha: 1
      }, 0.15);

    // Scene
    const scene = new ScrollMagic.Scene({
      triggerElement: trigger[i],
      offset: -25
    })
      .setTween(tween)
      .reverse(false)
      .addTo(controller)
      .addIndicators()
      ;

  }

};

export default ScrollFadeIn;
