var category = 2,
	zd_head = '',
	IDcard = '',
	Selfie = '';
//字数格式
limit($('.zhidao_ipt'), $('.zhidao_num'), 10,2, $('.zhidao_tip1'),$('.zhidao_tip2')); //值道号名称
limit($('.introduce_ipt'), $('.introduce_num'), 300,10, $('.introduce_tip1'),$('.introduce_tip2')); //值道号介绍
limit($('.auxiliary_ipt'), $('.auxiliary_num'), 300,10, $('.auxiliary_tip1'),$('.auxiliary_tip2')); //辅助材料

$('#top_step').click(function(){
	window.history.back(-1);
});

$('#down_step').click(function(){
	$('.media_zd').hide();
	$('.media_master').show();
	$('.title_name').html('填写圈主信息');
	$('.step dl:nth-child(5) dt').css({border: '2px solid #3DAEA9',color: '#3DAEA9'});
	$('.step dl:nth-child(5) dd').css({color: '#333'});
	$('.step span:nth-child(4)').css({background: '#3DAEA9',height: '2px'});
	
});

$('#up_step').click(function(){
	$('.media_master').hide();
	$('.media_zd').show();
	$('.title_name').html('填写值道号信息');
	$('.step dl:nth-child(5) dt').css({border: '1px solid #ccc',color: '#999'});
	$('.step dl:nth-child(5) dd').css({color: ' #999'});
	$('.step span:nth-child(4)').css({background: '#ccc',height: '1px'});
});

//图片上传预览
$('#zd_head_up').change(function(){
	previewImage(this,'zd_head_up','zd_head','zd_head_img');
	
	var formData = new FormData();
	formData.append("filename", $('#zd_head_up')[0].files[0]);
	ajaxUpfile(
        'api/v2/apiUploadSingleFile',
        formData,
        function(res) {
	    	console.log(res);
	        if (res.success == true) {
	            console.log('上传成功');
	            console.log(res.result.url);
	            zd_head = res.result.url;
	     	 } else if (res.success == false) {
	        	alert(res.message);
	        } 
	    }
    );
});
$('#IDcard_up').change(function(){
	previewImage(this,'IDcard_up','IDcard_wrap','IDcard_img');
	
	var formData = new FormData();
	formData.append("filename", $('#IDcard_up')[0].files[0]);
	ajaxUpfile(
        'api/v2/apiUploadSingleFile',
        formData,
        function(res) {
	    	console.log(res);
	        if (res.success == true) {
	            console.log('上传成功');
	            console.log(res.result.url);
	            IDcard = res.result.url;
	     	 } else if (res.success == false) {
	        	alert(res.message);
	        } 
	    }
    );
});
$('#Selfie_up').change(function(){
	previewImage(this,'Selfie_up','Selfie_wrap','Selfie_img');
	
	var formData = new FormData();
	formData.append("filename", $('#Selfie_up')[0].files[0]);
	ajaxUpfile(
        'api/v2/apiUploadSingleFile',
        formData,
        function(res) {
	    	console.log(res);
	        if (res.success == true) {
	            console.log('上传成功');
	            console.log(res.result.url);
	            Selfie = res.result.url;
	     	 } else if (res.success == false) {
	        	alert(res.message);
	        } 
	    }
    );
});

regex($('#ID_card_num'),/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,$('.idCard_tip'));
regex($('#Contact_mail'),/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,$('.email_tip'));

function regInfo(){
	var token = localStorage.getItem("token");
	ajax(
		'api/v2/apiApplyAnalystCertification',
        {
        	token: token,
        	category: category,
        	nickname: $('.zhidao_ipt').val(),
        	introduce: $('.introduce_ipt').val(),
        	portrait: zd_head,
        	address: $('#Country').val(),
        	province: $('#province').val(),
        	city: $('#City').val(),
        	auxiliarymaterials: $('.auxiliary_ipt').val(),
        	name: $('#ID_card_name').val(),
        	idnumber: $('#ID_card_num').val(),
        	idpositive: IDcard,
        	applicantimage: Selfie,
        	email: $('#Contact_mail').val()
        },
        function(res) {
        	console.log(res);
            if (res.success == true) {
	          	console.log(res);
	          	alert('注册完成');
	            console.log('注册完成');
         	 } else if (res.success == false) {
            	alert(res.message);
            } 
        }
    );
}

$('#submit').click(function(){
	var nickname = $('.zhidao_ipt').val(),
    	introduce = $('.introduce_ipt').val(),
    	address = $('#Country')[0].selectedIndex,
    	province = $('#province')[0].selectedIndex,
    	city = $('#City')[0].selectedIndex,
    	auxiliarymaterials = $('.auxiliary_ipt').val(),
    	name = $('#ID_card_name').val(),
    	idnumber = $('#ID_card_num').val(),
    	email = $('#Contact_mail').val();
	if(nickname!=''&&introduce!=''&&zd_head!=''&&auxiliarymaterials!=''&&name!=''&&idnumber!=''&&IDcard!=''&&Selfie!=''&&email!=''&&!$('.tips').hasClass('show')){
		if(address=='1'){
			if(province!='0'&&city!='0'){
				regInfo();
			}else{
				alert('请选择省市!');
			}
		}else{
			regInfo();
		}
	}else{
		alert('请正确的填写完所有资料!');
	}
	
});