
var cssSelector = anime({
  targets: '.square.anim',
  translateX: {
      value: '250px',
      duration: '1000',
      delay: '0',
      //easing: 'linear',
  },
  translateY: {
      value: '300px',
      duration: '800',
      delay: '1000',
      //easing: 'linear',
  },
  rotateZ:{
    value:'540deg',
    dulation:'500',
    delay:'1800'
  },
  scale:{
    value:'0',
    dulation:'1000',
    delay:'2200'
  }
});

/*document.body.addEventListener( "mousemove", function( e ) {
	// マウス位置を取得する
	var mouseX = e.pageX ;	// X座標
	var mouseY = e.pageY ;	// Y座標
    //console.log(mouseY);
    //console.log(mouseX);
} ) ;*/