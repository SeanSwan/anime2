anime({
  targets: ['line', 'circle', 'polygon', 'polyline', 'path', 'rect'],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  direction: 'alternate',
  loop: true
});
var pathEl = anime.path('.path');
anime({
  targets: '.item',
  translateX: pathEl('x'),
  translateY: pathEl('y'),
  easing: 'easeInOutSine',
  duration: 1500,
  direction: 'alternate',
  loop: true
});