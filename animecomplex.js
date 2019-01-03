var boxShadow = anime2({
  targets: '.box-shadow',
  boxShadow: [
    {value: ['10px -10px 10px 0 currentColor', '10px 10px 20px 0 currentColor']},
    {value: '-10px 10px 30px 0 currentColor'},
    {value: '-10px -10px 20px 0 currentColor'},
    {value: '10px -10px 10px 0 currentColor'}
  ],
  loop: true,
  easing: 'linear'
});
var unitLess = anime2({

  targets: '.unit-less',
  borderRadius: 10,
  loop: true,
  direction: 'alternate',
  easing: 'linear'
});
var specifiedUnit = anime2({
  targets: '.specified-unit',
  borderRadius: ['0px', '50px'],
  loop: true,
  direction: 'alternate',
  easing: 'linear'
});
var filter = anime2({
  targets: '.filter',
  filter: ["blur(20px)", "blur(0px)"],
  loop: true,
  direction: 'alternate',
  easing: 'linear'
});
var rgba = anime2({
  targets: '.rgba',
  backgroundColor: ['rgba(255,100,50,1)', 'rgba(255,100,50,.0)'],
  loop: true,
  direction: 'alternate',
  easing: 'linear'
});
var calc = anime2({
  targets: '.calc',
  height: ['calc(25% - 100px)', 'calc(25% - 0px)'],
  loop: true,
  direction: 'alternate',
  easing: 'linear'
});
var zeroValue = anime2({
  targets: '.zero-value',
  scale: 0,
  loop: true,
  direction: 'alternate',
  easing: 'linear'
});
var roundValue = anime2({
  targets: '.round-value',
  translateY: 100,
  loop: true,
  round: 1,
  direction: 'alternate',
  easing: 'linear'
});
var clipPath = anime2({
  targets: '.clip-path',
  clipPath: ['circle(0px at center)', 'circle(100px at center)'],
  loop: true,
  direction: 'alternate',
  easing: 'linear'
});
console.log(clipPath.animations[0]);