console.log(' %c Theme Cuteen v3.1.200810 %c https://blog.zwying.com/ ', 'color: #fff; background: #2dce89; padding:5px;', 'background: #1c2b36; padding:5px;');

var CuteenFunc = {
	sidebar: function () {
		var b;
		(CUTEEN_SETTING.HEADROOM) ? b = 16 : b = 85
		if (0 < $("#sidebar").length) {
			(new SidebarFollow()).init({
				element: jQuery('.sidebar-2'),
				prevElement: jQuery('.sidebar-1'),
				distanceToTop: b
			});
		}
	},
	QiPao: function () {
		if (CUTEEN_SETTING.QIPAO) {
			$('#hero').circleMagic({
				radius: 10,
				density: .2,
				color: 'rgba(255,255,255,.4)',
				clearOffset: 0.99
			});
		}
	},
	owo: function () {
		if ($(".OwO666").length > 0) {
			new OwO({
				logo: 'OwO666',
				container: document.getElementsByClassName('OwO')[0],
				target: document.getElementsByClassName('textarea')[0],
				api: CUTEEN_SETTING.STATIC_PATH + 'Static/Func/OwO/OwO.json',
				position: 'down',
				width: '100%',
				maxHeight: '250px'
			})
		};
	},
	SearchModel: function () {
		if ($("#searchbox").length > 0) {
			if (!CUTEEN_SETTING.IS_MOBILE) {
				$('#searchbox').iziModal({
					title: '搜索内容',
					headerColor: 'var(--mlv)',
					background: '#fff',
					width: '50%',
				})
			} else {
				$('#searchbox').iziModal({
					title: '搜索内容',
					headerColor: 'var(--mlv)',
					background: '#fff',
					width: '100%',
				})
			}
		};
	},
	Entersearch: function (item) {
		var event = window.event || arguments.callee.caller.arguments[0];
		if (event.keyCode == 13) {
			CuteenFunc.startSearch(item);
			$('#searchbox').iziModal('close')
		}
	},

	startSearch: function (item) {
		var c = $(item).val();
		$(item).val('');
		$(item).blur();
		if (!c || c == '') {
			$(item).attr('placeholder', '你还没有输入任何信息');
			return;
		}
		var t = CUTEEN_SETTING.SITE_URL + c;
		if (CUTEEN_SETTING.PJAX) {
			$.pjax({
				url: t,
				container: '#pjax',
				fragment: '#pjax',
				timeout: 8000,
			});
		} else {
			window.open(t, '_self');
		}
	},
	TopPost: function () {
		if ($(".top-top").length > 0) {
			new tns({
				container: '.top-top',
				items: 1,
				axis: 'vertical',
				controls: false,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayButtonOutput: false
			});
		};
	},
	BackTop: function () {
		$("#btn").hide();
		$(function () {
			$(window).scroll(function () {
				if ($(window).scrollTop() > 50) {
					$("#btn").fadeIn(200);
				} else {
					$("#btn").fadeOut(200);
				}
			});
			$("#btn").click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 500);
				return false;
			});
		});
		$(function () {
			$("#say").click(function () {
				$('body,html').animate({
					scrollTop: $('html, body').get(0).scrollHeight
				}, 500);
				return false;
			});
		})
	},
	Toc: function () {
		if ($("#right-menu").length > 0) {
			var headerEl = 'h2,h3,h4,h5', content = '.duta';
			tocbot.init({
				tocSelector: '#MENU',
				contentSelector: content,
				headingSelector: headerEl,
				headingsOffset: 70
			});
		}
	},
	NoCopy: function () {
		if (CUTEEN_SETTING.NOPA) {
			((function () {
				var callbacks = [], timeLimit = 50, open = false; setInterval(loop, 1);
				return {
					addListener: function (fn) { callbacks.push(fn); },
					cancleListenr: function (fn) { callbacks = callbacks.filter(function (v) { return v !== fn; }); }
				}
				function loop() {
					var startTime = new Date(); debugger;
					if (new Date() - startTime > timeLimit) {
						if (!open) { callbacks.forEach(function (fn) { fn.call(null); }); }
						open = true; window.stop(); alert('大佬别再扒了！赶紧买一份吧ヽ(￣ω￣(￣ω￣〃)ゝ'); document.body.innerHTML = "";
					} else {
						open = false;
					}
				}
			})()).addListener(function () { window.location.reload(); });
		}
	},
	NavBgFix: function () {
		if (CUTEEN_SETTING.HERO_IMG) {
			(function () {
				$(document).on('scroll', function () {
					if ($(document).scrollTop() <= 60) {
						$('.nav').addClass('nobg p1').removeClass('hasbg p2');
					} else {
						$('.nav').removeClass('nobg p1').addClass('hasbg p2');
					}
				});
			})();
		}
	},
	AjaxNext: function () {
		if (CUTEEN_SETTING.AJAX_PAGE || CUTEEN_SETTING.IS_MOBILE) {
			$('.next:not(.shangyiye):not(.xiayiye)').click(function () {
				var href = $('.next').attr('href');
				if (href != undefined) {
					$.ajax({
						url: href,
						type: 'get',
						beforeSend: function () {
							$(".next").hide();
						},
						error: function () { },
						success: function (data) {
							$('.next').show().text('点击查看更多');
							var $res = $(data).find('.ajaxcard');
							$('.cuteup').append($res.fadeIn(500));
							var newhref = $(data).find('.next').attr('href');
							if (newhref != undefined) {
								$('.next').attr('href', newhref);
							} else {
								$('.next').remove();
							}
						}
					});
				}
				return false;
			});
		}
	},
	Acc: function () {
		if ($(".allpost").length > 0) {
			$(".allpost .accordion-thumb").last().addClass("lastyj");
			$(".allpost .accordion-thumb").first().addClass("firstyj");
			$(".allpost .accordion-item").first().addClass("open");
		};
		$(".accordion > .accordion-item.open").children(".accordion-panel").slideDown();
		$(".accordion  .accordion-thumb").click(function () {
			$(this).parent().siblings(".accordion-item").removeClass("open").children(".accordion-panel").slideUp();
			$(this).parent().toggleClass("open").children(".accordion-panel").slideToggle("ease-out");
		});
	},
	Tab: function () {
		$(".tabs-wrap").each(function () {
			$(".tabs-item:nth-of-type(1)").addClass("active");
			$(".tabs-content:nth-of-type(1)").addClass("active");
			$(".tabs-item").click(function () {
				$(this).addClass("active");
				$(this).siblings().removeClass("active");
				$(this).siblings(".tabs-content").eq($(this).index()).addClass("active");
			});
		});
	},
	DarkModeChecked: function () {
		if (CUTEEN_SETTING.THEME_COLOR == '2') {
			$("html").addClass("DarkMode");
			$(":root").css("--darkmode", "#475669");
			return;
		}
		else if (CUTEEN_SETTING.THEME_COLOR == '1') {
			$("html").removeClass("DarkMode");
			$(":root").css("--darkmode", "#eff2f7");
			return;
		}
		if (CUTEEN_SETTING.THEME_COLOR == '0' && document.cookie.replace(/(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/, "$1") === '') {
			if (new Date().getHours() >= 20 || new Date().getHours() < 6) {
				$("html").addClass("DarkMode");
				$(":root").css("--darkmode", "#475669");
				document.cookie = "DarkMode=1;path=/";
				console.log('夜间模式开启');
			} else {
				$("html").removeClass("DarkMode");
				$(":root").css("--darkmode", "#eff2f7");
				document.cookie = "DarkMode=0;path=/";
				console.log('夜间模式关闭');
			}
		} else {
			var DarkMode = document.cookie.replace(/(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
			if (DarkMode == '0') {
				$("html").removeClass("DarkMode");
				$(":root").css("--darkmode", "#eff2f7");
			} else if (DarkMode == '1') {
				$("html").addClass("DarkMode");
				$(":root").css("--darkmode", "#475669");
			}
		}
	},
	SwitchDarkMode: function () {
		$('<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"><svg class="icon yueliang" aria-hidden="true"><use xlink:href="#icon-moon_"></use></svg><svg class="icon taiyang" aria-hidden="true"><use xlink:href="#icon-sun1"></use></svg></div></div>').appendTo($("body"))
		$(".DarkMode").length > 0 ? ($('.yueliang').css('display', 'block'), $('.taiyang').css('display', 'none')) : ($('.taiyang').css('display', 'block'), $('.yueliang').css('display', 'none')), setTimeout(function () {
			var DarkMode = document.cookie.replace(/(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
			if (DarkMode == '0') {
				setTimeout("$('html').addClass('DarkMode');$(':root').css('--darkmode', '#475669');$('.taiyang').css('display','none'),$('.yueliang').css('display','block')", 900), document.cookie = "DarkMode=1;path=/", console.log('夜间模式开启'), $('#modeicon').attr("xlink:href", "#icon-sun")
			} else {
				setTimeout("$('html').removeClass('DarkMode');$(':root').css('--darkmode', '#eff2f7');$('.yueliang').css('display','none'),$('.taiyang').css('display','block')", 900), document.cookie = "DarkMode=0;path=/", console.log('夜间模式关闭'), $('#modeicon').attr("xlink:href", "#icon-_moon")
			};
			setTimeout(function () {
				$(".Cuteen_DarkSky").fadeOut(1e3, function () {
					$(this).remove()
				})
			}, 2e3)
		}), 50
	},
	upstar: function () {
		a = $('.like').attr('data-pid');
		i = $.cookie('upstar');
		if (i == a) return $('.like').addClass("done"),
			iziToast.show({
				title: "您已经点过赞啦",
				class: 'noshadow',
				position: 'topRight',
				backgroundColor: 'var(--mzi)',
				titleColor: 'var(--bai)',
				iconColor: '#ffffff',
				progressBarColor: '#ffffff',
				icon: 'fa fa-grin-alt',
				timeout: 5000
			}); $.post('action/like', { cid: a },
				function () {
					$.cookie('upstar', a, { expires: 7 });
					$('.like').find('span.likeCount').text(parseInt($('.like').find('span.likeCount').text()) + 1)
					iziToast.show({
						title: "点赞成功！感谢支持~",
						class: 'noshadow',
						position: 'topRight',
						backgroundColor: 'var(--mlv)',
						titleColor: 'var(--bai)',
						iconColor: '#ffffff',
						progressBarColor: '#ffffff',
						icon: 'fa fa-check',
						timeout: 5000
					});
				}
			);
	},
	MobileBarAcc: function () {
		$(".mobfl").click(function () {
			$(this).next('.mobzkcon').slideToggle(300);
			$(this).toggleClass('active');
		});
	},
	MobileMenu: function () {
		$("#mobar").toggleClass("leftopen");
		$("body").toggleClass("mobile-nav-open");
	},
	MobileCloseBar: function () {
		if ($('.mobile-nav-open').length > 0) {
			CuteenFunc.MobileMenu();
		}
		if ($('.rightopen').length > 0) {
			$('body').toggleClass('rightopen');
		}
	},
	
	randomString: function (len) {
		len = len || 32;
		let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let res = "";
		for (let i = 0; i < len; i++) {
			res += chars.charAt(Math.floor(Math.random() * chars.length));
		}
		return res;
	},

	getCodeFromBlock: function (block) {
		var codeOfBlocks = {};
		if (codeOfBlocks[block.id] != undefined) {
			return codeOfBlocks[block.id];
		}
		let lines = $(".hljs-ln-code", block);
		let res = "";
		for (let i = 0; i < lines.length - 1; i++) {
			res += lines[i].innerText;
			res += "\n";
		}
		res += lines[lines.length - 1].innerText;
		codeOfBlocks[block.id] = res;
		return res;
	},
	highlightJsRender: function () {
		if (typeof (hljs) == "undefined") {
			return;
		}
		$(".duta pre code").each(function (index, block) {
			if ($(block).hasClass("no-hljs")) {
				return;
			}
			$(block).parent().attr("id", CuteenFunc.randomString());
			hljs.highlightBlock(block);
			hljs.lineNumbersBlock(block, { singleLine: true });
			$(block).parent().addClass("hljs-codeblock");
			$(block).attr("hljs-codeblock-inner", "");
			let copyBtnID = "copy_btn_" + CuteenFunc.randomString();
			$(block).parent().append(`<div class="hljs-control hljs-title">
			<div class="hljs-control-btn hljs-control-toggle-break-line">
						<i class="fa fa-align-left"></i>
					</div>
					<div class="hljs-control-btn hljs-control-copy" id=` + copyBtnID + `>
						<i class="fa fa-clipboard"></i>
					</div>
				</div>`);
			let clipboard = new ClipboardJS("#" + copyBtnID, {
				text: function (trigger) {
					return CuteenFunc.getCodeFromBlock($(block).parent()[0]);
				}
			});
			clipboard.on('success', function (e) {
				iziToast.show({
					title: '复制成功',
					message: "代码已复制到剪贴板",
					class: 'noshadow',
					position: 'topRight',
					backgroundColor: 'var(--mlv)',
					titleColor: '#ffffff',
					messageColor: '#ffffff',
					iconColor: '#ffffff',
					progressBarColor: '#ffffff',
					icon: 'fa fa-check',
					timeout: 5000
				});
			});
			clipboard.on('error', function (e) {
				iziToast.show({
					title: '复制失败',
					message: "请手动复制到剪贴板",
					class: 'noshadow',
					position: 'topRight',
					backgroundColor: '#f5365c',
					titleColor: '#ffffff',
					messageColor: '#ffffff',
					iconColor: '#ffffff',
					progressBarColor: '#ffffff',
					icon: 'fa fa-close',
					timeout: 5000
				});
			});
		});
	},
	CodeToolBar: function () {
		$(document).on("click", ".hljs-control-toggle-break-line", function () {
			let block = $(this).parent().parent();
			block.toggleClass("hljs-break-line");
		});
	},
	FixSidebarHeight: function () {
		var g = $('#qjcbl').outerHeight(true);
		var j = $('#BLOG_CARD').outerHeight(true);
		if (j < g) {
			$('#BLOG_CARD').css('min-height', g)
		}
	},

	FixSomeStyle: function () {
		$(".sidebar-2").css("width", $(".widthhhh").width());
		if (0 < $('.sidebar-2').prev().length) {
			$('.sidebar-2').css('position', 'static').prev().remove();
		}
		if (CUTEEN_SETTING.HEADROOM) {
			var myElement = document.querySelector(".nav");
			var headroom = new Headroom(myElement);
			headroom.init();
		}
	}
};

Cuteen = {
	init: function () {
		CuteenFunc.SearchModel(); CuteenFunc.MobileBarAcc();
		CuteenFunc.owo(); CuteenFunc.FixSomeStyle(); CuteenFunc.QiPao();
		CuteenFunc.Toc(); CuteenFunc.NoCopy(); CuteenFunc.NavBgFix();
		CuteenFunc.Acc(); CuteenFunc.Tab(); CuteenFunc.sidebar();
		CuteenFunc.DarkModeChecked(); CuteenFunc.FixSidebarHeight();
		CuteenFunc.highlightJsRender(); CuteenFunc.AjaxNext(); CuteenFunc.BackTop();
	},

	loading: function () {
		$(window).preloader({
			selector: "#page-loading",
			delay: 0
		});
	}
};

$(document).ready(function () {
	Cuteen.init(); Cuteen.loading(); CuteenFunc.TopPost(); CuteenFunc.CodeToolBar();
})

function before_pjax() {
	$('body').append('<div id="page-loading" ><div class="circle"></div></div>');
	CuteenFunc.MobileCloseBar();
}
function after_pjax() {
	Cuteen.loading();
	CuteenFunc.TopPost();
	CuteenFunc.CodeToolBar();
}
function end_pjax() {
	Cuteen.init();
	AjaxComment();

}
MathJax = {
	options: {
		renderActions: { addMenu: [0, '', ''] }
	},
	tex: {
		inlineMath: [['$', '$'], ['\\(', '\\)']]
	},
	svg: {
		fontCache: 'global'
	}
}

function AjaxComment() {
	$('#comment-form').submit(function () {

		$.ajax({
			url: $(this).attr('action'),
			type: $(this).attr('method'),
			data: $(this).serializeArray(),
			beforeSend: function () {
				$("#comment-submit-button").attr("disabled", "disabled").text('提交中……');
			},
			error: function () {
				iziToast.error({ title: '评论失败', message: '参数提交错误，请刷新后重试', position: 'topRight', })
				$("#comment-submit-button").removeClass('lv').addClass('hong').text('提交失败');
				return false;
			},
			success: function (data) {
				$("#comment-submit-button").removeAttr("disabled", "disabled").text('提交评论');
				var error = /<title>Error<\/title>/;
				if (error.test(data)) {
					var text = data.match(/<div(.*?)>(.*?)<\/div>/i);
					var str = '回传参数错误，请刷新后重试';
					if (text != null) str = text[2];
					iziToast.error({ title: '评论失败', message: str, position: 'topRight' })
				} else {
					//评论框复位
					$('#textarea').val('');
					$('#textarea').css('height', '');
					//评论框复位（取消回复）
					if ($('#cancel-comment-reply-link').css('display') != 'none') $('#cancel-comment-reply-link').click();
					var target = '#comments',
						parent = true;
					$.each($(this).serializeArray(), function (i, field) {
						if (field.name == 'parent') parent = false;
					});
					//获取新ID
					if ($('.All_Pagination .prev').length && !parent) {
						var dd = $(".prev a").attr("href"); //获取上页地址
						$(".prev a").attr("href", ""); //将地址清空
						dd = dd.replace(/comment-page-(.*?)#comments/, "comment-page-1#comments"); //将获取的地址页码改为1
						$(".prev a").attr("href", dd); //将地址放回去
						$('.prev a').get(0).click(); //点击这个超链接
					} else {
						new_id = '';
					} //判断当前评论列表是否在第一页,并且只会在母评论时候才会生效 */
					new_id = $(".comment-list", data).html().match(/id=\"?comment-\d+/g).join().match(/\d+/g).sort(function (a, b) {
						return a - b
					}).pop();
					$('#commentcontent').html($('#commentcontent', data).html()); //更新评论列表
					//下面是重载函数以及评论成功提示
					iziToast.success({ title: '评论成功', message: '您的留言已收到', position: 'topRight' })
					//跳转到新ID
					if (new_id) {
						var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
						$body.animate({
							scrollTop: $('#comment-' + new_id).offset().top - 100
						}, 500);
					} else {
						$body.animate({
							scrollTop: $('#comments').offset().top - 100
						}, 500);
					}
				}
			}
		});
		return false;
	});
} AjaxComment()

