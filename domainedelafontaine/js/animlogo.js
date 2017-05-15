setTimeout(function(){
        console.log("animation");
    var colors = anime({
  targets: '.ball',
  translateX: 250,
  backgroundColor: [
    {value: '#FFF'}, // Or #FFFFFF
    {value: 'rgb(255, 0, 0)'},
    {value: 'hsl(100, 60%, 60%)'}
  ],
  easing: 'linear',
  direction: 'alternate',
  duration: 2000
});

},5000)

