function insertAtCursor(t, e) {
	var n = t.scrollTop,
		o = document.documentElement.scrollTop;
	if (document.selection) {
		t.focus();
		var s = document.selection.createRange();
		s.text = e, s.select()
	} else {
		if (t.selectionStart || "0" == t.selectionStart) {
			var l = t.selectionStart,
				c = t.selectionEnd;
			t.value = t.value.substring(0, l) + e + t.value.substring(c, t.value.length), t.focus(), t.selectionStart = l + e.length, t.selectionEnd = l + e.length
		} else {
			t.value += e, t.focus()
		}
	}
	t.scrollTop = n, document.documentElement.scrollTop = o
}
window.onload = function () {
	$(document).ready(function () {
		if ($("#wmd-button-row").length > 0) {
			$('#wmd-button-row').append(
				'<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-photoset-button" style="" title="插入选项卡"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-chanpinxuanxiangka"></use></svg></li>' +
				'<li class="wmd-button OwO" id="wmd-owo-button" style="" title="插入表情"></li>' +
				'<li class="wmd-button" id="wmd-bvid-button" style="" title="插入Bilibili视频"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-bilibili-"></use></svg></li>' +
				'<li class="wmd-button" id="wmd-acc-button" style="" title="插入多彩折叠面板"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-caidan-zhankai"></use></svg></li>' +
				'<li class="wmd-button" id="wmd-button-button" style="" title="插入多彩按钮"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-anniu1"></use></svg></li>' +
				'<li class="wmd-button" id="wmd-bar-button" style="" title="插入多彩信息条"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-icontiaoxingtu"></use></svg></li>' +
				'<li class="wmd-button" id="wmd-mes-button" style="" title="插入多彩信息面板"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-__zongkongmianban"></use></svg></li>' +
				'<li class="wmd-button" id="wmd-pro-button" style="" title="插入多彩进度条"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-C32"></use></svg></li>' +
				'<li class="wmd-button" id="wmd-pic-button" style="" title="插入画廊"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-tupian"></use></svg></li>' +
				'<li class="wmd-button" id="wmd-tex-button" style="" title="插入特殊文字效果"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-wenzi"></use></svg></li>' +
				'<li class="wmd-button" id="wmd-fri-button" style="" title="插入友情链接"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-duoren-lan"></use></svg></li>' +
				'<li class="wmd-button" id="wmd-vid-button" style="" title="插入直链视频"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-shipin"></use></svg></li>' +
				'<li class="wmd-button" id="wmd-aud-button" style="" title="插入直链音频"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-moren_yinle"></use></svg></li><li class="wmd-spacer wmd-spacer1"></li>' +
				'<style>.wmd-button-row{height: 100%!important;}</style>');
			// $('#text').before('<div class="wmd-button OwO" style="" title="插入表情"></div>');
			new OwO({
				logo: "OωO",
				container: document.getElementsByClassName("OwO")[0],
				target: document.getElementById("text"),
				api: CUTEEN_SETTING.STATIC_PATH + "/Func/OwO/OwO.json",
				position: "down",
				width: "400px",
				maxHeight: "220px"
			});

			//面板初始化
			$(document).on('click', '#wmd-fri-button', function () {//友链
				$('body').append(
					'<div id="friPanel">' +
					'<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
					'<div class="wmd-prompt-dialog">' +
					'<div>' +
					'<p style="color:red">请在友情链接页面使用本短代码</p>' +
					'<p><b>插入友链</b></p>' +
					'<p>基本</p>' +
					'<p><input type="text" name="zdmc" placeholder="站点名称"></input><input type="text" name="zdlj" placeholder="站点链接"></input><input type="text" name="txlj" placeholder="站点头像链接"></input><input type="text" name="zdms" placeholder="站点描述"></input></p>' +
					'<p><labe>加载基本框架</labe></p>' +
					'<p><select id="ylkj"><option value="bjzkj">否</option><option value="jzkj">是</option></select>' +
					'</div>' +
					'<form>' +
					'<button type="button" class="btn btn-s primary" id="fri_ok">确定</button>' +//按钮
					'<button type="button" class="btn btn-s" id="fri_cancel">取消</button>' +//按钮
					'</form>' +
					'</div>' +
					'</div>');
				$('.wmd-prompt-dialog input').select();
			});
			$(document).on('click', '#wmd-tex-button', function () {//文字
				$('body').append(
					'<div id="texPanel">' +
					'<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
					'<div class="wmd-prompt-dialog">' +
					'<div>' +
					'<p><b>插入特殊文字</b></p>' +
					'<p>样式选择</p>' +
					'<p><select id="wzlxxz"><option value="dheimu">黑幕</option><option value="ggl">刮刮乐</option><option value="xlch">绚丽彩虹</option></select>' +
					'<p><labe>输入文字</labe></p>' +
					'<p><input type="text" name="txwzsr" placeholder="输入需要加入特效的文字"></input></p>' +


					'</div>' +
					'<form>' +
					'<button type="button" class="btn btn-s primary" id="tex_ok">确定</button>' +//按钮
					'<button type="button" class="btn btn-s" id="tex_cancel">取消</button>' +//按钮
					'</form>' +
					'</div>' +
					'</div>');
				$('.wmd-prompt-dialog input').select();
			});
			$(document).on('click', '#wmd-bvid-button', function () {//bilibili视频
				$('body').append(
					'<div id="bvidPanel">' +
					'<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
					'<div class="wmd-prompt-dialog">' +
					'<div>' +
					'<p><b>插入bilibili视频</b></p>' +
					'<p>输入嵌入代码</p>' +
					'<p><input type="text" name="bvid" placeholder="整个iframe标签"></input></p>' +
					'</div>' +
					'<form>' +
					'<button type="button" class="btn btn-s primary" id="bvid_ok">确定</button>' +//按钮
					'<button type="button" class="btn btn-s" id="bvid_cancel">取消</button>' +//按钮
					'</form>' +
					'</div>' +
					'</div>');
				$('.wmd-prompt-dialog input').select();
			});
			$(document).on('click', '#wmd-button-button', function () {//按钮
				$('body').append(
					'<div id="buttonPanel">' +//按钮
					'<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
					'<div class="wmd-prompt-dialog">' +
					'<div>' +
					'<p><b>插入按钮</b></p>' +
					'<p>基本</p>' +
					'<p><input type="text" name="te" placeholder="内容"></input><input type="text" name="url" placeholder="链接"></input></p>' +
					'<p><labe>样式</labe></p>' +
					'<p><select id="co"><option value="info">蓝色</option><option value="download">下载按钮</option><option value="success">绿色</option><option value="black">紫色</option><option value="warning">黄色</option><option value="danger">红色</option></select>' +
					'</div>' +
					'<form>' +
					'<button type="button" class="btn btn-s primary" id="button_ok">确定</button>' +//按钮
					'<button type="button" class="btn btn-s" id="button_cancel">取消</button>' +//按钮
					'</form>' +
					'</div>' +
					'</div>');
				$('.wmd-prompt-dialog input').select();
			});
			$(document).on('click', '#wmd-bar-button', function () {//信息条
				$('body').append(
					'<div id="barPanel">' +//信息条
					'<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
					'<div class="wmd-prompt-dialog">' +
					'<div>' +
					'<p><b>插入信息条</b></p>' +
					'<p>输入内容</p>' +
					'<p><textarea name="bar6" style="width: 100%; height: 100px"></textarea></p>' +
					'<p><labe>选择样式</labe></p>' +
					'<p><select id="co"><option value="gbar">绿色</option><option value="ybar">黄色</option><option value="rbar">红色</option><option value="bbar">蓝色</option><option value="pbar">紫色</option></select>' +
					'</div>' +
					'<form>' +
					'<button type="button" class="btn btn-s primary" id="bar_ok">确定</button>' +//按钮
					'<button type="button" class="btn btn-s" id="bar_cancel">取消</button>' +//按钮
					'</form>' +
					'</div>' +
					'</div>');
				$('.wmd-prompt-dialog input').select();
			});
			$(document).on('click', '#wmd-pro-button', function () {//进度条
				$('body').append(
					'<div id="proPanel">' +//信息条
					'<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
					'<div class="wmd-prompt-dialog">' +
					'<div>' +
					'<p><b>插入进度条</b></p>' +
					'<p>输入进度（范围：0~100数字）</p>' +
					'<p><input type="text" name="pro5" placeholder="输入0~100数字，留空则为未定义滚动"></input></p>' +
					'<p><labe>选择样式</labe></p>' +
					'<p><select id="co"><option value="gpro">绿色</option><option value="ypro">黄色</option><option value="rpro">红色</option><option value="bpro">蓝色</option><option value="ppro">紫色</option></select>' +
					'</div>' +
					'<form>' +
					'<button type="button" class="btn btn-s primary" id="pro_ok">确定</button>' +//按钮
					'<button type="button" class="btn btn-s" id="pro_cancel">取消</button>' +//按钮
					'</form>' +
					'</div>' +
					'</div>');
				$('.wmd-prompt-dialog input').select();
			});
			$(document).on('click', '#wmd-mes-button', function () {//信息面板
				$('body').append(
					'<div id="mesPanel">' +//信息条
					'<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
					'<div class="wmd-prompt-dialog">' +
					'<div>' +
					'<p><b>插入信息面板</b></p>' +
					'<p>输入标题</p>' +
					'<p><input type="text" name="mes5" placeholder="标题"></input></p>' +
					'<p>输入内容</p>' +
					'<p><textarea name="mes6" style="width: 100%; height: 100px"></textarea></p>' +
					'<p><labe>选择样式</labe></p>' +
					'<p><select id="co"><option value="bmes">蓝色</option><option value="gmes">绿色</option><option value="ymes">黄色</option><option value="rmes">红色</option><option value="pmes">紫色</option></select>' +
					'</div>' +
					'<form>' +
					'<button type="button" class="btn btn-s primary" id="mes_ok">确定</button>' +//按钮
					'<button type="button" class="btn btn-s" id="mes_cancel">取消</button>' +//按钮
					'</form>' +
					'</div>' +
					'</div>');
				$('.wmd-prompt-dialog input').select();
			});
			$(document).on('click', '#wmd-acc-button', function () {//信息acc
				$('body').append(
					'<div id="accPanel">' +//信息条
					'<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
					'<div class="wmd-prompt-dialog">' +
					'<div>' +
					'<p><b>插入信息面板</b></p>' +
					'<p>输入标题</p>' +
					'<p><input type="text" name="acc5" placeholder="标题"></input></p>' +
					'<p>输入内容</p>' +
					'<p><textarea name="acc6" style="width: 100%; height: 100px"></textarea></p>' +
					'<p><labe>选择样式</labe></p>' +
					'<p><select id="co"><option value="bacc">蓝色</option><option value="gacc">绿色</option><option value="yacc">黄色</option><option value="racc">红色</option><option value="pacc">紫色</option></select></p>' +
					'<p><labe>是否展开</labe></p>' +
					'<p><select id="co1"><option value="guanacc">关闭</option><option value="zhanacc">展开</option></select></p>' +
					'</div>' +
					'<form>' +
					'<button type="button" class="btn btn-s primary" id="acc_ok">确定</button>' +//按钮
					'<button type="button" class="btn btn-s" id="acc_cancel">取消</button>' +//按钮
					'</form>' +
					'</div>' +
					'</div>');
				$('.wmd-prompt-dialog input').select();
			});
			$(document).on('click', '#wmd-vid-button', function () {//视频
				$('body').append(
					'<div id="vidPanel">' +//信息条
					'<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
					'<div class="wmd-prompt-dialog">' +
					'<div>' +
					'<p><b>插入视频</b></p>' +
					'<p style="color:red">支持Ogg、Mp4、WebM三种格式</p>' +
					'<p>输入直链</p>' +
					'<p><input type="text" name="vid5" placeholder="/xxxx.mp4"></input></p>' +
					'</div>' +
					'<form>' +
					'<button type="button" class="btn btn-s primary" id="vid_ok">确定</button>' +//按钮
					'<button type="button" class="btn btn-s" id="vid_cancel">取消</button>' +//按钮
					'</form>' +
					'</div>' +
					'</div>');
				$('.wmd-prompt-dialog input').select();
			});
			$(document).on('click', '#wmd-aud-button', function () {//音频
				$('body').append(
					'<div id="audPanel">' +//信息条
					'<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
					'<div class="wmd-prompt-dialog">' +
					'<div>' +
					'<p><b>插入音频</b></p>' +
					'<p style="color:red">支持wav、mp3、ogg三种格式</p>' +
					'<p>输入直链</p>' +
					'<p><input type="text" name="aud5" placeholder="/xxxx.mp3"></input></p>' +
					'</div>' +
					'<form>' +
					'<button type="button" class="btn btn-s primary" id="aud_ok">确定</button>' +//按钮
					'<button type="button" class="btn btn-s" id="aud_cancel">取消</button>' +//按钮
					'</form>' +
					'</div>' +
					'</div>');
				$('.wmd-prompt-dialog input').select();
			});
			//执行取消
			$(document).on('click', '#tex_cancel', function () {//按钮
				$('#texPanel').remove();//按钮
				$('#wmd-editarea textarea').focus();
			});
			$(document).on('click', '#fri_cancel', function () {//按钮
				$('#friPanel').remove();//按钮
				$('#wmd-editarea textarea').focus();
			});
			$(document).on('click', '#button_cancel', function () {//按钮
				$('#buttonPanel').remove();//按钮
				$('#wmd-editarea textarea').focus();
			});
			$(document).on('click', '#bar_cancel', function () {//按钮
				$('#barPanel').remove();//按钮
				$('#wmd-editarea textarea').focus();
			});
			$(document).on('click', '#mes_cancel', function () {//按钮
				$('#mesPanel').remove();//按钮
				$('#wmd-editarea textarea').focus();
			});
			$(document).on('click', '#vid_cancel', function () {//视频
				$('#vidPanel').remove();//按钮
				$('#wmd-editarea textarea').focus();
			});
			$(document).on('click', '#aud_cancel', function () {//视频
				$('#audPanel').remove();//按钮
				$('#wmd-editarea textarea').focus();
			});
			$(document).on('click', '#acc_cancel', function () {//视频
				$('#accPanel').remove();//按钮
				$('#wmd-editarea textarea').focus();
			});
			$(document).on('click', '#pro_cancel', function () {//视频
				$('#proPanel').remove();//按钮
				$('#wmd-editarea textarea').focus();
			});
			$(document).on('click', '#bvid_cancel', function () {//视频
				$('#bvidPanel').remove();//按钮
				$('#wmd-editarea textarea').focus();
			});

			//执行确定
			$(document).on('click', '#bvid_ok', function () {//bilibili
				var bvid = $('.wmd-prompt-dialog input[name="bvid"]').val();
				//输出格式
				textContent = '[BiliVideo]' + bvid + '[/BiliVideo]';
				myField = document.getElementById('text');
				inserContentToTextArea(myField, textContent, '#bvidPanel');//按钮
			});

			$(document).on('click', '#button_ok', function () {//按钮
				//内容
				var textContent = $('.wmd-prompt-dialog input[name="te"]').val();
				//颜色
				var obj_co = document.getElementById("co"); //定位id
				var index_co = obj_co.selectedIndex; // 选中索引
				var color = obj_co.options[index_co].value; // 选中值
				//URL
				var url = $('.wmd-prompt-dialog input[name="url"]').val();
				//输出格式
				if (color == 'info') {
					textContent = '[btnblue href="' + url + '" target="blank"]' + textContent + '[/btnblue]';
				}
				else if (color == 'success') {
					textContent = '[btngreen href="' + url + '" target="blank"]' + textContent + '[/btngreen]';
				}
				else if (color == 'black') {
					textContent = '[btnblack href="' + url + '" target="blank"]' + textContent + '[/btnblack]';
				}
				else if (color == 'warning') {
					textContent = '[btnyellow href="' + url + '" target="blank"]' + textContent + '[/btnyellow]';
				}
				else if (color == 'danger') {
					textContent = '[btnred href="' + url + '" target="blank"]' + textContent + '[/btnred]';
				}
				else if (color == 'download') {
					textContent = '[download href="' + url + '" target="blank"]' + textContent + '[/download]';
				}
				myField = document.getElementById('text');
				inserContentToTextArea(myField, textContent, '#buttonPanel');//按钮

			});

			$(document).on('click', '#tex_ok', function () {//多彩文字

				var txwzsr = $('.wmd-prompt-dialog input[name="txwzsr"]').val();
				var obj_co = document.getElementById("wzlxxz"); //定位id
				var index_co = obj_co.selectedIndex; // 选中索引
				var color = obj_co.options[index_co].value; // 选中值

				//输出格式
				if (color == 'dheimu') {
					textContent = '[DarkBText]' + txwzsr + '[/DarkBText]';
				}
				else if (color == 'ggl') {
					textContent = '[BlurText]' + txwzsr + '[/BlurText]';
				}
				else if (color == 'xlch') {
					textContent = '[RainBowText]' + txwzsr + '[/RainBowText]';
				}
				myField = document.getElementById('text');
				inserContentToTextArea(myField, textContent, '#texPanel');//按钮

			});

			$(document).on('click', '#fri_ok', function () {//友链

				var zdmc = $('.wmd-prompt-dialog input[name="zdmc"]').val();
				var zdlj = $('.wmd-prompt-dialog input[name="zdlj"]').val();
				var txlj = $('.wmd-prompt-dialog input[name="txlj"]').val();
				var zdms = $('.wmd-prompt-dialog input[name="zdms"]').val();
				var obj_co = document.getElementById("ylkj"); //定位id
				var index_co = obj_co.selectedIndex; // 选中索引
				var color = obj_co.options[index_co].value; // 选中值

				//输出格式
				if (color == 'bjzkj') {
					textContent = '[link img="' + txlj + '" href="' + zdlj + '" title="' + zdms + '"]' + zdmc + '[/link]';
				}
				else if (color == 'jzkj') {
					textContent = '[friends random="false"]\n[link img="' + txlj + '" href="' + zdlj + '" title="' + zdms + '"]' + zdmc + '[/link]\n\n[/friends]';
				}
				myField = document.getElementById('text');
				inserContentToTextArea(myField, textContent, '#friPanel');//按钮

			});
			$(document).on('click', '#bar_ok', function () {//信息条
				//内容
				var textContent = $('.wmd-prompt-dialog textarea[name=bar6]').val();
				//颜色
				var obj_co = document.getElementById("co"); //定位id
				var index_co = obj_co.selectedIndex; // 选中索引
				var color = obj_co.options[index_co].value; // 选中值

				//输出格式
				if (color == 'rbar') {
					textContent = '[redbar]' + textContent + '[/redbar]';
				}
				else if (color == 'gbar') {
					textContent = '[greenbar]' + textContent + '[/greenbar]';
				}
				else if (color == 'ybar') {
					textContent = '[yellowbar]' + textContent + '[/yellowbar]';
				}
				else if (color == 'bbar') {
					textContent = '[bluebar]' + textContent + '[/bluebar]';
				}
				else if (color == 'pbar') {
					textContent = '[purplebar]' + textContent + '[/purplebar]';
				}

				myField = document.getElementById('text');
				inserContentToTextArea(myField, textContent, '#barPanel');//按钮

			});
			$(document).on('click', '#pro_ok', function () {//进度条
				//内容
				var textContent = $('.wmd-prompt-dialog input[name=pro5]').val();
				//颜色
				var obj_co = document.getElementById("co"); //定位id
				var index_co = obj_co.selectedIndex; // 选中索引
				var color = obj_co.options[index_co].value; // 选中值

				//输出格式
				if (color == 'rpro') {
					textContent = '[redpro value="' + textContent + '"]PROGRESS[/redpro]';
				}
				else if (color == 'gpro') {
					textContent = '[greenpro value="' + textContent + '"]PROGRESS[/greenpro]';
				}
				else if (color == 'ypro') {
					textContent = '[yellowpro value="' + textContent + '"]PROGRESS[/yellowpro]';
				}
				else if (color == 'bpro') {
					textContent = '[bluepro value="' + textContent + '"]PROGRESS[/bluepro]';
				}
				else if (color == 'ppro') {
					textContent = '[purplepro value="' + textContent + '"]PROGRESS[/purplepro]';
				}

				myField = document.getElementById('text');
				inserContentToTextArea(myField, textContent, '#proPanel');//按钮

			});
			$(document).on('click', '#mes_ok', function () {//信息面板
				//内容
				var textContent = $('.wmd-prompt-dialog textarea[name=mes6]').val();
				//颜色
				var obj_co = document.getElementById("co"); //定位id
				var index_co = obj_co.selectedIndex; // 选中索引
				var color = obj_co.options[index_co].value; // 选中值
				var tit = $('.wmd-prompt-dialog input[name="mes5"]').val();
				//输出格式
				if (color == 'rmes') {
					textContent = '[redinfo title="' + tit + '"]' + textContent + '[/redinfo]';
				}
				else if (color == 'gmes') {
					textContent = '[greeninfo title="' + tit + '"]' + textContent + '[/greeninfo]';
				}
				else if (color == 'bmes') {
					textContent = '[blueinfo title="' + tit + '"]' + textContent + '[/blueinfo]';
				}
				else if (color == 'ymes') {
					textContent = '[yellowinfo title="' + tit + '"]' + textContent + '[/yellowinfo]';
				}
				else if (color == 'pmes') {
					textContent = '[purpleinfo title="' + tit + '"]' + textContent + '[/purpleinfo]';
				}

				myField = document.getElementById('text');
				inserContentToTextArea(myField, textContent, '#mesPanel');//按钮

			});
			$(document).on('click', '#acc_ok', function () {//信息acc
				//内容
				var textContent = $('.wmd-prompt-dialog textarea[name=acc6]').val();
				//颜色
				var obj_co = document.getElementById("co"); //定位id
				var index_co = obj_co.selectedIndex; // 选中索引
				var color = obj_co.options[index_co].value; // 选中值
				//是否展开
				var obj_co1 = document.getElementById("co1"); //定位id
				var index_co1 = obj_co1.selectedIndex; // 选中索引
				var open = obj_co1.options[index_co1].value; // 选中值
				var tit = $('.wmd-prompt-dialog input[name="acc5"]').val();
				//输出格式
				if (open == 'guanacc') {
					if (color == 'racc') {
						textContent = '[redacc open="" title="' + tit + '"]' + textContent + '[/redacc]';
					}
					else if (color == 'gacc') {
						textContent = '[greenacc open="" title="' + tit + '"]' + textContent + '[/greenacc]';
					}
					else if (color == 'bacc') {
						textContent = '[blueacc open="" title="' + tit + '"]' + textContent + '[/blueacc]';
					}
					else if (color == 'yacc') {
						textContent = '[yellowacc open="" title="' + tit + '"]' + textContent + '[/yellowacc]';
					}
					else if (color == 'pacc') {
						textContent = '[purpleacc open="" title="' + tit + '"]' + textContent + '[/purpleacc]';
					}
				}
				else if (open == 'zhanacc') {
					if (color == 'racc') {
						textContent = '[redacc open="open" title="' + tit + '"]' + textContent + '[/redacc]';
					}
					else if (color == 'gacc') {
						textContent = '[greenacc open="open" title="' + tit + '"]' + textContent + '[/greenacc]';
					}
					else if (color == 'bacc') {
						textContent = '[blueacc open="open" title="' + tit + '"]' + textContent + '[/blueacc]';
					}
					else if (color == 'yacc') {
						textContent = '[yellowacc open="open" title="' + tit + '"]' + textContent + '[/yellowacc]';
					}
					else if (color == 'pacc') {
						textContent = '[purpleacc open="open" title="' + tit + '"]' + textContent + '[/purpleacc]';
					}
				}


				myField = document.getElementById('text');
				inserContentToTextArea(myField, textContent, '#accPanel');//按钮

			});
			$(document).on('click', '#vid_ok', function () {//视频


				var tit5 = $('.wmd-prompt-dialog input[name="vid5"]').val();
				//输出格式

				textContent = '[video src="' + tit5 + '" preload="metadata" width="100%" height="auto" ]视频[/video]';


				myField = document.getElementById('text');
				inserContentToTextArea(myField, textContent, '#vidPanel');//按钮

			});

			$(document).on('click', '#aud_ok', function () {//音频


				var tit51 = $('.wmd-prompt-dialog input[name="aud5"]').val();
				//输出格式

				textContent = '[audio src="' + tit51 + '" preload="metadata" autoplay="autoplay" loop="loop"]音频[/audio]';


				myField = document.getElementById('text');
				inserContentToTextArea(myField, textContent, '#audPanel');//按钮

			});

			$(document).on("click", "#wmd-photoset-button", function () {
				myField = document.getElementById("text"), insertAtCursor(myField, '\n[tabs]\n[item title="标题一"]这里替换内容[/item]\n[item title="标题二"]这里替换内容[/item]\n[/tabs]\n')
			});
			$(document).on("click", "#wmd-pic-button", function () {
				myField = document.getElementById("text"), insertAtCursor(myField, '\n[photos]\n这里替换您的图片链接（markdown格式）\n[/photos]')
			});
		}
	});
};
//依赖
function inserContentToTextArea(myField, textContent, modelId) {
	$(modelId).remove();
	if (document.selection) {//IE浏览器
		myField.focus();
		var sel = document.selection.createRange();
		sel.text = textContent;
		myField.focus();
	} else if (myField.selectionStart || myField.selectionStart == '0') {
		//FireFox、Chrome
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		var cursorPos = startPos;
		myField.value = myField.value.substring(0, startPos)
			+ textContent
			+ myField.value.substring(endPos, myField.value.length);
		cursorPos += textContent.length;

		myField.selectionStart = cursorPos;
		myField.selectionEnd = cursorPos;
		myField.focus();
	}
	else {//其他环境
		myField.value += textContent;
		myField.focus();
	}
}