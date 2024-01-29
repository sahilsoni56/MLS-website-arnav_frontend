
const tl = gsap.timeline();
tl.to('#main', { y: '100vh', duration: 0 });
tl.to('#ignite', { x: '20vh', opacity: 0, duration: 0 });
tl.to('#igniteP', { x: '-20vh', opacity: 0, duration: 0 });
tl.to('#main', { y: 0, duration: 1.5, delay: 1, scale: 0.4 });
tl.to('#main', { rotate: 360, scale: 1, delay: 0.4, duration: 1 });
tl.to('#ignite', { scrollTrigger: '#ignite', x: 0, opacity: 1, duration: 0.4 });
tl.to('#igniteP', { scrollTrigger: '#igniteP', x: 0, opacity: 1, duration: 0.4 });
 