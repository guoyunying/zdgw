$(function() {
  'use strict';
  var swiper = new Swiper('#main', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 500,
    mousewheel: true,
    pagination: {
      el: '.main_pag',
      clickable: true
    }
  });
  var dhArray = ['开始值道','认识值道','值道大咖','互动功能','操作简单','开始值道'];
  swiper.on('transitionStart', function() {
    // console.log(1111, swiper.activeIndex, swiper.previousIndex);
    switch (swiper.previousIndex) {
      case 0:
        p1End();
        break;
      case 1:
        p2End();
        break;
      case 2:
        p3End();
        break;
      case 3:
        p4End();
        break;
      case 4:
        p5End();
        break;
      case 5:
        p6End();
        break;
    }
    setTimeout(function() {
      switch (swiper.activeIndex) {
        case 0:
          $('.dh_wrap p').html(dhArray[0]);
          $('.dh_wrap span').html('01');
          p2End();
          p1Start();
          break;
        case 1:
          $('.dh_wrap p').html(dhArray[1]);
          $('.dh_wrap span').html('02');
          p2Start();
          break;
        case 2:
          $('.dh_wrap p').html(dhArray[2]);
          $('.dh_wrap span').html('03');
          p3Start();
          break;
        case 3:
          $('.dh_wrap p').html(dhArray[3]);
          $('.dh_wrap span').html('04');
          p4Start();
          break;
        case 4:
          $('.dh_wrap p').html(dhArray[4]);
          $('.dh_wrap span').html('05');
          p5Start();
          break;
        case 5:
          $('.dh_wrap p').html(dhArray[5]);
          $('.dh_wrap span').html('06');
          p6Start();
          break;
      }
    }, 2000);
  });
  if (iswebgl) {
    var container = document.getElementById('bg');
    var globe = new DAT.Globe(container);
    globe.createPoints();
    globe.animate();
    var timer = setInterval(function() {
      if (isOk) {
        setTimeout(function() {
          p1Start();
        }, 1000);
        clearInterval(timer);
      }
    }, 100);
  }
  if (!iswebgl) {
    p1Start();
  }
	var functionSwiper = new Swiper('#function', {
		watchSlidesProgress: true,
		centeredSlides: true,
		loop: true,
		loopedSlides: 6,
		slidesPerView: 'auto',
		nested:true,
		pagination: {
			el: '.function_pag',
		},
		on: {
			progress: function(progress) {
				var modify,translate,scale,zIndex;
				for (var i = 0; i < this.slides.length; i++) {
					var slide = this.slides.eq(i);
					var slideProgress = this.slides[i].progress;
					modify = 1;
					if (Math.abs(slideProgress) > 1) {
						modify = (Math.abs(slideProgress) - 1) * 0.5 + 1;
					}
					translate = slideProgress * modify * 92 + 'px';
					scale = 1 - Math.abs(slideProgress) / 6;
					zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
					slide.transform('translateX(' + translate + ') scale(' + scale + ')');
					slide.css('zIndex', zIndex);
					slide.css('opacity', 1);
					
					if (Math.abs(slideProgress) > 3) {
						slide.css('opacity', 0);
					}
				}
			},
			setTransition: function(transition) {
				for (var i = 0; i < this.slides.length; i++) {
					var slide = this.slides.eq(i)
					slide.transition(transition);
				}
			},
			slideChangeTransitionEnd: function(){
	      for (var i=0;i<this.slides.length; i++) {
	      	$('.func_dh span').removeClass('fun_active');
	      }
	      $('.func_dh span').eq(this.realIndex).addClass('fun_active');
	    },
		}
		
	});
  function linkHover(){
  	$(".download-link-item").hover(function() {
  		var lLeft = $(this).find($(".link-left"));
  		var lRight = $(this).find($(".link-right"));
			lLeft.css('left', '-16px')
			lRight.css('right', '-16px')
			setTimeout(function() {
				lLeft.css('left', '16px')
				lRight.css('right', '16px')
			}, 300);
		}, function () {
			var lLeft = $(this).find($(".link-left"));
  		var lRight = $(this).find($(".link-right"));
  		lLeft.css('left', '16px')
			lRight.css('right', '16px')
			setTimeout(function() {
				lLeft.css('left', '0px')
				lRight.css('right', '0px')
			}, 300);
		})
  }
  function p36Start(){
  	setTimeout(function(){
  		$('.con_logo_name').css({left:0,opacity:1});
  	},200);
  	setTimeout(function(){
  		$('.con_keyword span:nth-child(1)').addClass('animated fadeInUp');
  	},400);
  	setTimeout(function(){
  		$('.con_keyword span:nth-child(2)').addClass('animated fadeInUp');
  	},500);
  	setTimeout(function(){
  		$('.con_keyword span:nth-child(3)').addClass('animated fadeInUp');
  	},600);
  }
  function p36End(){
  	$('.con_logo_name').css({left:'-40px',opacity:0});
    $('.con_keyword span').removeClass('animated fadeInUp');
  }
  function p1Start() {
  	setTimeout(function() {
      $('.cont-start').css({ opacity: 1});
    }, 200);
    setTimeout(function() {
      $('#link1').css({ opacity: 1, bottom: 0 });
    }, 400);
    setTimeout(function() {
      $('#link2').css({ opacity: 1, bottom: 0 });
    }, 600);
    setTimeout(function() {
      $('#link3').css({ opacity: 1, bottom: 0 });
    }, 800);
//  p1Login();
    linkHover();
    
    $('.logo-p1').css({left:'40px'});
    //  p2重置
    $('.p2_wrap').css({ width: '70%',height:'1040px',opacity:0});
  }
  function p1Login(){
    setTimeout(function() {
      $('#anim1, #anim3').css('width', '280px');
    }, 200);
    setTimeout(function() {
      $('#anim2, #anim4').css('width', '280px');
      $('#anim5').css({width: '170px'});
    }, 400);
    setTimeout(function() {
      $('.phone-head').css('opacity', 1);
    }, 600);
    setTimeout(function() {
      $('.phone').css('opacity', 1);
    }, 800);
    setTimeout(function() {
      $('.verCode, .password, #toPassword, #getVercode,#toVercode, #canvas').css('opacity', 1);
    }, 1000);
    setTimeout(function() {
      $('.login-botton').css('opacity', 1);
    }, 1200);
    setTimeout(function() {
      $('.close_btn').css('opacity', 1);
    }, 1200);

  }
  function p1Close(){
  	$('.logo, .logo-info, #anim1, #anim2, #anim3, #anim4, #anim5, .phone-head, .phone, .verCode, .password, #toPassword, #getVercode, #toVercode, #canvas,.login-botton,.close_btn').css({
      opacity: 0,
      transform: 'translateY(-100px)'
    });
  }
  function p1LoginEnd(){
	  $('.logo, .logo-info, #anim1, #anim2, #anim3, #anim4, #anim5, .phone-head, .phone, .verCode, .password, #toPassword, #getVercode, #toVercode, #canvas,.login-botton,.close_btn').css({
	    opacity: 0,
	    transform: 'translateY(0)'
	  });
	  $('#anim1, #anim2, #anim3, #anim4, #anim5').css({ width: 0, opacity: 1 });
  }
  function p1End() {
    // 重置
    p1Close();
   
    setTimeout(function() {
      $('#link1, #link2, #link3').css({ opacity: 0, bottom: '-136px' });
      p1LoginEnd();
      $('.cont-start').show();
    }, 1000);
  }
  function p2Start() {
  	$('.p2_wrap').css({opacity:1});
  	setTimeout(function(){
  		$('.p2_wrap').css({ width: '100%',height:'100%' });
  	},300);
  	setTimeout(function(){
  		$('.logo-p1').css({left:'-50px'});
  		$('.con_logo_name').css({left:0,opacity:1});
  	},600);
  	setTimeout(function(){
  		$('.con_keyword span').addClass('animated fadeInUp');
  	},800);
  	setTimeout(function(){
  		$('.con_introduce').addClass('animated fadeInUp');
  	},1000);
    
    setTimeout(function(){
  		$('.curve_wrap').css({opacity:1});
			$('.svg_wrap').append('<svg width="245" height="135" version="1.1" class="curve" xmlns="http://www.w3.org/2000/svg"><path d="M0,100 A60,30 0 1,0 90,-90" style="fill:none;stroke:#fff;stroke-width:1"/><circle fill="#6CEAC1" r="10" stroke-width="1" stroke="#55C1BC"><animateMotion dur="3s" path="M0,100 A60,30 0 1,0 90,-90" fill="freeze" begin="1s" end="2.5s"/></circle></svg>');
  	},800);
  	setTimeout(function(){
  		$('.curve_peo').css({opacity:1});
  	},3200);
  }
  function p2End() {
    $('.con_logo_name').css({left:'-40px',opacity:0});
    $('.con_keyword span').removeClass('animated fadeInUp');
    $('.con_introduce').removeClass('animated fadeInUp');
    $('.svg_wrap').empty();
    $('.curve_wrap').css({opacity:0});
    $('.curve_peo').css({opacity:0});
  }
  function p3Start() {
  	p36Start();
  	setTimeout(function(){
  		$('.con_introduce').addClass('animated fadeInUp');
  	},600);
  }
  function p3End() {
  	p36End();
    $('.con_introduce').removeClass('animated fadeInUp');
  }
  function p4Start() {
  	p36Start();
  	setTimeout(function(){
  		$('.con_function').addClass('animated fadeIn');
  	},600);
  }
  function p4End() {
    p36End();
    $('.con_function').removeClass('animated fadeIn');
  }
  function p5Start() {
    p36Start();
    setTimeout(function(){
  		$('.con_op_icon').addClass('animated slideInLeft');
  		$('.con_op_icon').css({opacity:1});
  	},800);
    setTimeout(function(){
  		$('.con_operate hr').addClass('animated fadeIn');
  		$('.con_operate p').addClass('animated fadeIn');
  	},1000);
  }
  function p5End() {
    p36End();
    $('.con_op_icon').removeClass('animated slideInLeft');
    $('.con_op_icon').css({opacity:0});
    $('.con_operate hr').removeClass('animated fadeIn');
  	$('.con_operate p').removeClass('animated fadeIn');
  }
  function p6Start() {
   	p36Start();
   	setTimeout(function(){
  		$('.con_start').css({opacity:1});
  	},600);
  }
  function p6End() {
    p36End();
    	$('.con_start').css({opacity:0});
  }
  $('input').click(function(e) {
    e.stopPropagation();
  });
  // limit phone length
  $('#phone-vercode, #phone-password').bind('input propertychange', function() {
    if ($(this).val().length > 11) {
      $(this).val(
        $(this)
          .val()
          .slice(0, 11)
      );
    }
    $('#error-phone-vercode, #error-phone-password').text('');
  });
  // limit code length
  $('#vercode, #canvascode').bind('input propertychange', function() {
    if ($(this).val().length > 6) {
      $(this).val(
        $(this)
          .val()
          .slice(0, 6)
      );
    }
    $('#error-vercode, #error-canvascode').text('');
  });
  // hide password error info
  $('#password').bind('input propertychange', function() {
    $('#error-password').text('');
  });
  // hide tip info
  $('.tip').click(function() {
    $(this).addClass('hide');
  });
  // change login way
  $('#toPassword').click(function() {
  	$('.cont-code').hide();
  	$('.cont-pass').show();
  });
  $('#toVercode').click(function() {
  	$('.cont-pass').hide();
  	$('.cont-code').show();
  });
  // show tip info
  function showTip(title, content) {
    $('#tip-title').text(title);
    $('#tip-text').text(content);
    $('.tip').removeClass('hide');
  }

  function ajax(url, data, suc) {
    $.ajax({
      type: 'POST',
      url: 'http://192.168.1.197:8080/' + url,
      data: data,
      dataType: 'jsonp',
      contentType: 'application/x-www-form-urlencoded;charset=utf-8',
//			jsonp: 'callback',
//			processData: false,
//			contentType: false,
      success: function(data) {
        if (suc) {
          suc(data);
          // console.log(1)
        } else return;
      },
      error: function(xhr, type) {
        console.error('Ajax error!' + type);
      }
    });
  }

  // get ver code
  $('#getVercode').click(function() {
    if (/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test($('#phone-vercode').val())) {
      ajax(
        'api/v2/apiSendVerifyCode',
        {
        	type: '1',
          account: $('#phone-vercode').val()
        },
        function(res) {
          console.log(res);
          if (res.success == true) {
//          showTip('发送成功', '请及时查看手机短信，填写验证码。');
						console.log('success')
            $('#getVercode').attr('disabled', 'disabled');
            var second = 30;
            var timer = setInterval(function() {
              second--;
              $('#getVercode').text(second + '秒后重新获取');
              if (second === 0) {
                $('#getVercode').text('获取验证码');
                clearInterval(timer);
                $('#getVercode').removeAttr('disabled');
              }
            }, 1000);
            return;
          } else {
//          showTip('账号不存在', '请前往移动端注册您的账号');
						alert(res.message);
						console.log('fail');
            return;
          }
        }
      );
    } else {
      $('#error-phone-vercode').text('请输入正确的手机号');
    }
  });

  // ver code login
  $('#button-verCode').click(function() {
    if (/\d{1,6}/.test($('#vercode').val())) {
      // 登录
      ajax(
        'api/v2/apiLogin',
        {
        	type: '1',
          account: $('#phone-vercode').val(),
          code: $('#vercode').val(),
          platform: 'web'
        },
        function(res) {
        	console.log(res);
          if (res.success == true) {
          	console.log('true '+res);
            var obj = {
              userid: res.result.id,
              usertype: res.result.type,
              username: res.result.category,
              clubNum: res.result.nickname,
              userlogo: res.result.portrait,
              token:  res.result.token
            };
            localStorage.setItem('user', JSON.stringify(obj));
						alert('登录成功');
						localStorage.setItem('token', obj.token);
						location.href = 'type.html';
						return false;
          }else{
          	alert(res.message);
          }
        }
      );
    } else {
      $('#error-vercode').text('请输入正确的验证码');
    }
  });
// ver code register
	$('#verCode-register').click(function() {
    if (/\d{1,6}/.test($('#vercode').val())) {
      // 注册
      ajax(
        'api/v2/apiRegister',
        {
        	type: '1',
          account: $('#phone-vercode').val(),
          code: $('#vercode').val(),
          platform: 'web'
        },
        function(res) {
        	console.log(res);
          if (res.success == true) {
          	console.log(res);
          	alert('注册成功');
          	var obj = {
              token:  res.result.token
            };
            localStorage.setItem('token', obj.token);
          	location.href = 'type.html';
          } else if (res.success == false) {
            $('#error-vercode').text(res.message);
          } 
        }
      );
    } else {
      $('#error-vercode').text('请输入正确的验证码');
    }
  });
// password login
  $('#button-password').click(function() {
//	登录
    var isPhone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test($('#phone-password').val());
    if (!isPhone) {
      $('#error-phone-password').text('请输入正确的手机号');
    }
    if ($('#password').val() === '') {
      $('#error-password').text('请输入密码');
    }
    if ($('#canvascode').val() === '') {
      $('#error-canvascode').text('请输入验证码');
    }
    if (!isPhone || $('#password').val() === '' || $('#canvascode').val() === '') {
      return;
    }
    // console.log($('#canvascode').val(), $('#canvascode').val().toUpperCase(), trueCode)
    if (
      $('#canvascode')
        .val()
        .toUpperCase() === trueCode
    ) {
      ajax(
        'api/v2/apiLoginByPassword',
        {
        	type: '1',
          account: $('#phone-password').val(),
          'password': $('#password').val(),
          platform: 'web'
        },
        function(res) {
          if (res.success == true) {
            var obj = {
              userid: res.data.tzdMeber.userid,
              usertype: res.data.tzdMeber.type,
              username: res.data.meberInfo.user,
              clubNum: res.data.meberInfo.clubNum,
              userlogo: res.data.meberInfo.logo,
              usercash: res.data.meberInfo.cash,
              operate: res.data.tzdMeber.operate
            };
            localStorage.setItem('user', JSON.stringify(obj));
            location.href = 'https://www.touzd.cn/home';
          } else if (res.message === '密码错误') {
            $('#error-password').text('密码错误');
            drawPic();
          } else if (res.message === '账号不存在') {
            showTip('账号不存在', '请前往移动端注册您的账号');
            drawPic();
          }
        }
      );
    } else {
      $('#error-canvascode').text('验证码错误');
      drawPic();
    }
  });
// password register
  $('#password-register').click(function() {
//	注册
    var isPhone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test($('#phone-password').val());
    if (!isPhone) {
      $('#error-phone-password').text('请输入正确的手机号');
    }
    if ($('#password').val() === '') {
      $('#error-password').text('请输入密码');
    }
    if ($('#canvascode').val() === '') {
      $('#error-canvascode').text('请输入验证码');
    }
    if (!isPhone || $('#password').val() === '' || $('#canvascode').val() === '') {
      return;
    }
    // console.log($('#canvascode').val(), $('#canvascode').val().toUpperCase(), trueCode)
    if (
      $('#canvascode')
        .val()
        .toUpperCase() === trueCode
    ) {
      ajax(
        'api/v2/apiRegister',
        {
        	type: '1',
          account: $('#phone-password').val(),
          'password': $('#password').val(),
          platform: 'web'
        },
        function(res) {
          if (res.success == true) {
            var obj = {
              userid: res.data.tzdMeber.userid,
              usertype: res.data.tzdMeber.type,
              username: res.data.meberInfo.user,
              clubNum: res.data.meberInfo.clubNum,
              userlogo: res.data.meberInfo.logo,
              usercash: res.data.meberInfo.cash,
              operate: res.data.tzdMeber.operate
            };
            localStorage.setItem('user', JSON.stringify(obj));
            location.href = 'https://www.touzd.cn/home';
          } else if (res.message === '密码错误') {
            $('#error-password').text('密码错误');
            drawPic();
          } else if (res.message === '账号不存在') {
            showTip('账号不存在', '请前往移动端注册您的账号');
            drawPic();
          }
        }
      );
    } else {
      $('#error-canvascode').text('验证码错误');
      drawPic();
    }
  });
  /* canvas ver code */
  /** random number **/
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  /** random color **/
  function randomColor(min, max) {
    var r = randomNum(min, max);
    var g = randomNum(min, max);
    var b = randomNum(min, max);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  var trueCode = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var canvas = document.getElementById('canvas');
  var width = canvas.width;
  var height = canvas.height;
  var ctx = canvas.getContext('2d');
  ctx.textBaseline = 'bottom';
  canvas.onclick = function(e) {
    var event = e || window.event;
    window.event ? (event.returnValue = false) : event.preventDefault();
    $('#error-canvascode').text('');
    drawPic();
  };
  /** draw code **/
  function drawPic() {
    /** draw background **/
    trueCode = '';
    ctx.fillStyle = randomColor(240, 255);
    ctx.fillRect(0, 0, width, height);
    /** draw text **/
    for (var i = 0; i < 4; i++) {
      var txt = str[randomNum(0, str.length)];
      ctx.fillStyle = randomColor(60, 150); // random font color
      ctx.font = randomNum(20, 30) + 'px SimHei'; // random font size
      var x = 10 + i * 20;
      var y = randomNum(20, 40);
      var deg = randomNum(-45, 45);
      // 修改坐标原点和旋转角度
      ctx.translate(x, y);
      ctx.rotate(deg * Math.PI / 180);
      ctx.fillText(txt, 0, 0);
      // 恢复坐标原点和旋转角度
      ctx.rotate(-deg * Math.PI / 180);
      ctx.translate(-x, -y);
      trueCode += txt;
    }
    /** draw line**/
    for (var j = 0; j < 4; j++) {
      ctx.strokeStyle = randomColor(40, 140);
      ctx.beginPath();
      ctx.moveTo(randomNum(0, width), randomNum(0, height));
      ctx.lineTo(randomNum(0, width), randomNum(0, height));
      ctx.stroke();
    }
    /** draw point **/
    for (var k = 0; k < 30; k++) {
      ctx.fillStyle = randomColor(0, 255);
      ctx.beginPath();
      ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  drawPic();
  
  
	$('#toLogin').click(function(){
		$('.cont-start').hide();
		$('.cont-code').show();
		p1Login();
		console.log('tologin')
	});
	$('.close_btn').click(function(){
//		p1Close();
		p1LoginEnd();
		setTimeout(function(){
			$('.cont-code').hide();
			$('.cont-pass').hide();
			$('.cont-start').show();
		},800)
		
		console.log('tostart')
	});
	
//	$('.op_icon').hover(function(){
//		$(this).find('img').attr({'src':images/icon-3.png})
//	});
  
});
