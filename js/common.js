'use strict';
//阻止图片拖动
document.addEventListener("dragstart", function (ev) {
    ev.preventDefault();
}, false);
function ajax(url, data, suc) {
    $.ajax({
      type: 'POST',
      url: 'http://192.168.1.197:8080/' + url,
      data: data,
      dataType: 'jsonp',
      contentType: 'application/x-www-form-urlencoded;charset=utf-8',
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

function ajaxUpfile(url, data, suc) {
    $.ajax({
        type: 'POST',
		url: 'http://192.168.1.197:8080/' + url,
		data: data,
		jsonp: 'callback',
		processData: false,
		contentType: false,
		success: function(data) {
			if(suc) {
				suc(data);
				// console.log(1)
			} else return;
		},
		error: function(xhr, type) {
			console.error('Ajax error!' + type);
		}
    });
}

function showTip(title, content) {
    $('#tip-title').text(title);
    $('#tip-text').text(content);
    $('.tip').removeClass('hide');
}

$('.tip').click(function() {
    $(this).addClass('hide');
 });
 
//地区联动
var oCountry = $('#Country'); //国内外
var oProvince = $('#province'); //省
var oCity = $('#City'); //城市

var cities = {}; //对象数组

cities['北京市'] = new Array('北京市区', '北京市辖区');
cities['上海市'] = new Array('上海市区', '上海市辖区');
cities['天津市'] = new Array('天津市区', '天津市辖区');
cities['重庆市'] = new Array('重庆市区', '重庆市辖区');
cities['河北省'] = new Array('石家庄', '张家口市', '承德市', '秦皇岛市', '唐山市', '廊坊市', '保定市', '沧州市', '衡水市', '邢台市', '邯郸市');
cities['山西省'] = new Array('太原市', '大同市', '朔州市', '阳泉市', '长治市', '晋城市', '忻州地区', '吕梁地区', '晋中市', '临汾地区', '运城地区');
cities['辽宁省'] = new Array('沈阳市', '朝阳市', '阜新市', '铁岭市', '抚顺市', '本溪市', '辽阳市', '鞍山市', '丹东市', '大连市', '营口市', '盘锦市', '锦州市', '葫芦岛市');
cities['吉林省'] = new Array('长春市', '白城市', '松原市', '吉林市', '四平市', '辽源市', '通化市', '白山市', '延边朝鲜族自治州');
cities['黑龙江省'] = new Array('哈尔滨市', '齐齐哈尔市', '黑河市', '大庆市', '伊春市', '鹤岗市', '佳木斯市', '双鸭山市', '七台河市', '鸡西市', '牡丹江市', '绥化市', '大兴安');
cities['江苏省'] = new Array('南京市', '徐州市', '连云港', '宿迁市', '淮阴市', '盐城市', '扬州市', '泰州市', '南通市', '镇江市', '常州市', '无锡市', '苏州市');
cities['浙江省'] = new Array('杭州市', '湖州市', '嘉兴市', '舟山市', '宁波市', '绍兴市', '金华市', '台州市', '温州市', '丽水地区');
cities['安徽省'] = new Array('合肥市', '宿州市', '淮北市', '阜阳市', '蚌埠市', '淮南市', '滁州市', '马鞍山市', '芜湖市', '铜陵市', '安庆市', '黄山市', '六安市', '巢湖市', '池州地区', '宣城地区');
cities['福建省'] = new Array('福州市', '南平市', '三明市', '莆田市', '泉州市', '厦门市', '漳州市', '龙岩市', '宁德市');
cities['江西省'] = new Array('南昌市', '九江市', '景德镇市', '鹰潭市', '新余市', '萍乡市', '赣州市', '上饶地区', '抚州地区', '宜春地区', '吉安地区');
cities['山东省'] = new Array('济南市', '聊城市', '德州市', '东营市', '淄博市', '潍坊市', '烟台市', '威海市', '青岛市', '日照市', '临沂市', '枣庄市', '济宁市', '泰安市', '莱芜市', '滨州地区', '菏泽地区');
cities['河南省'] = new Array('郑州市', '三门峡市', '洛阳市', '焦作市', '新乡市', '鹤壁市', '安阳市', '濮阳市', '开封市', '商丘市', '许昌市', '漯河市', '平顶山市', '南阳市', '信阳市', '省直辖行政单位', '周口地区', '驻马店地区');
cities['湖北省'] = new Array('武汉市', '十堰市', '襄攀市', '荆门市', '孝感市', '黄冈市', '鄂州市', '黄石市', '咸宁市', '荆州市', '宜昌市', '省直辖行政单位', '恩施土家族苗族自治州', '襄樊市');
cities['湖南省'] = new Array('长沙市', '张家界市', '常德市', '益阳市', '岳阳市', '株洲市', '湘潭市', '衡阳市', '郴州市', '永州市', '邵阳市', '怀化市', '娄底市', '湘西土家族苗族自治州');
cities['广东省'] = new Array('广州市', '清远市', '韶关市', '河源市', '梅州市', '潮州市', '汕头市', '揭阳市', '汕尾市', '惠州市', '东莞市', '深圳市', '珠海市', '江门市', '佛山市', '肇庆市', '云浮市', '阳江市', '茂名市', '湛江市');
cities['海南省'] = new Array('海口市', '三亚市', '省直辖行');
cities['四川省'] = new Array('成都市', '广元市', '绵阳市', '德阳市', '南充市', '广安市', '遂宁市', '内江市', '乐山市', '自贡市', '泸州市', '宜宾市', '攀枝花市', '巴中地区', '达川市', '资阳地区', '眉山地区', '雅安地区', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州');
cities['贵州省'] = new Array('贵阳市', '六盘水市', '遵义市', '毕节地区', '铜仁地区', '安顺地区', '黔东南苗族侗族自治地区', '黔南布依族苗族自治区', '黔西南布依族苗族自治州');
cities['云南省'] = new Array('昆明市', '曲靖市', '玉溪市', '丽江地区', '昭通地区', '思茅地区', '临沧地区', '保山地区', '德宏傣族景颇族自治州', '怒江僳僳族自治州', '迪庆藏族自治州', '大理白族自治州', '楚雄彝族自治州', '红河哈尼族自治州', '文山壮族自治州', '西双版纳傣族自治州');
cities['陕西省'] = new Array('西安市', '延安市', '铜川市', '渭南市', '咸阳市', '宝鸡市', '汉中市', '榆林市', '商洛地区', '安康地区');
cities['甘肃省'] = new Array('兰州市', '嘉峪关市', '金昌市', '白银市', '天水市', '酒泉地区', '张掖地区', '武威地区', '庆阳地区', '平凉地区', '定西地区', '陇南地区', '临夏回族自治州', '甘南藏族自治州');
cities['青海省'] = new Array('西宁市', '海东地区', '西宁市', '海北藏族', '海南藏族', '黄南藏族', '果洛藏族', '玉树藏族', '海西蒙古');
cities['内蒙古自治区'] = new Array('呼和浩特', '包头市', '乌海市', '赤峰市', '呼伦贝尔盟', '兴安盟', '哲里木盟', '锡林郭勒盟', '乌兰察布盟', '鄂尔多斯市', '巴彦淖尔盟', '阿拉善盟');
cities['广西壮族自治区'] = new Array('南宁市', '桂林市', '柳州市', '梧州市', '贵港市', '玉林市', '钦州市', '北海市', '防城港市', '南宁地区', '百色地区', '河池地区', '柳州地区', '贺州地区');
cities['西藏自治区'] = new Array('拉萨市', '那曲地区', '昌都地区', '林芝地区', '山南地区', '日喀则', '阿里地区');
cities['宁夏回族自治区'] = new Array('银川市', '石嘴山市', '吴忠市', '固原地区');
cities['新疆维吾尔自治区'] = new Array('乌鲁木齐市', '克拉玛依市', '自治区直辖行政单位', '喀什地区', '阿克苏地区', '和田地区', '吐鲁番地区', '哈密地区', '克孜勒苏柯尔克孜', '博尔塔拉蒙古自治州', '昌吉回族自治州', '巴音郭楞蒙古自治州', '伊犁哈萨克自治州', '伊犁地区', '塔城地区', '阿勒泰地区');

oCountry.change(function () {
    if (oCountry.val() === '中国') {
    	oProvince.show();
    	oCity.show();
    } else {
    	oProvince.hide();
    	oCity.hide();
    }
});

oProvince.change(function () {
    var province = oProvince.val(); //当前省份
    if (typeof cities[province] === 'undefined') return;
    oCity.append('<option value="市/区">市/区</option>'); //清空所有下拉列表
    for (var i = 0; i < cities[province].length; i++) {
        oCity.append("<option value=" + cities[province][i] + ">" + cities[province][i] + "</option>");
    } //添加
});

//字数格式
function limit(obj, tarObj, num1, num2, tip1, tip2) {
    obj.bind('input propertychange',function () {
    	tarObj.html(obj.val().length + '/' + num1);
    	if(obj.val().length < num2){
    		obj.addClass('wrong');
        	tip2.addClass('show');
    	}else if(obj.val().length > num1){
    		obj.addClass('wrong');
        	tip1.addClass('show');
    	}else{
    		obj.removeClass('wrong');
    		tip1.removeClass('show')
        	tip2.removeClass('show');
    	}
        
    })
};
//验证正则
function regex(obj,reg,tip){
	obj.bind('input propertychange',function () {
		if(reg.test(obj.val())){
			obj.removeClass('wrong');
			tip.removeClass('show');
		}else{
			obj.addClass('wrong');
			tip.addClass('show');
		}
	})
}

//图片上传预览 
function previewImage(target,id,wrap,imgid,max) {
  var MAXWIDTH  = 90; 
  var MAXHEIGHT = 90;
  var div = document.getElementById(wrap);
  if (target.files && target.files[0])
  {
  	    var filepath = target.value;
	    var fileSize = 0;
	    var limit = max*1024;
	    var isIE = /msie/i.test(navigator.userAgent) && !window.opera;
	    if (isIE && !target.files) {
	        var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
	        var file = fileSystem.GetFile(filepath);
	        fileSize = file.Size;
	    } else {
	        fileSize = target.files[0].size;
	    }
	    console.log(fileSize)
	    var size = fileSize / 1024;
	    if (size > limit) {
	        target.value = '';
	        alert('文件大小不能大于'+max+'M！');
	        return false;
	    }else{
	    	div.innerHTML ='<img id='+imgid+' onclick=$("#'+id+'").click()>';
	      var img = document.getElementById(imgid);
	      img.onload = function(){
	        var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
	        img.width  =  rect.width;
	        img.height =  rect.height;
	//                 img.style.marginLeft = rect.left+'px';
	        img.style.marginTop = rect.top+'px';
	      }
	      var reader = new FileReader();
	      reader.onload = function(evt){img.src = evt.target.result;}
	      reader.readAsDataURL(target.files[0]);
	    }
	    
   }
}
function clacImgZoomParam( maxWidth, maxHeight, width, height ){
    var param = {top:0, left:0, width:width, height:height};
    if( width>maxWidth || height>maxHeight ){
        var rateWidth = width / maxWidth;
        var rateHeight = height / maxHeight;
        
        if( rateWidth > rateHeight ){
            param.width =  maxWidth;
            param.height = Math.round(height / rateWidth);
        }else{
            param.width = Math.round(width / rateHeight);
            param.height = maxHeight;
        }
    }
    param.left = Math.round((maxWidth - param.width) / 2);
    param.top = Math.round((maxHeight - param.height) / 2);
    return param;
}