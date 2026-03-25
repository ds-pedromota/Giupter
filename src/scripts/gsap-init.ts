// @ts-nocheck

const gsap = (window as any).gsap;
const ScrollTrigger = (window as any).ScrollTrigger;

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('[data-reveal]').forEach((el) => {
  const delay = parseFloat((el as HTMLElement).dataset.revealDelay || '0') / 1000;
  gsap.fromTo(
    el,
    { opacity: 0, y: 28 },
    {
      opacity: 1, y: 0, duration: 0.9, delay, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
    }
  );
});

const planet = document.querySelector('[data-parallax]');
if (planet) {
  const speed = parseFloat((planet as HTMLElement).dataset.parallax || '0.1');
  gsap.to(planet, {
    yPercent: -30 * speed * 100,
    ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
  });
}

document.querySelectorAll('[data-count]').forEach((el) => {
  const end = parseFloat((el as HTMLElement).dataset.count || '0');
  gsap.fromTo(
    { val: 0 },
    {
      val: end, duration: 2, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
      onUpdate() { (el as HTMLElement).textContent = this.targets()[0].val.toFixed(end % 1 !== 0 ? 1 : 0); }
    }
  );
});

export {};