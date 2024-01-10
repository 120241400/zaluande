$(function () {

	// 时装
	var DATA_FASHION = window['DATA_FASHION'] || [];
	// 幻魂
	var DATA_WEAPON = window['DATA_WEAPON'] || [];
	// 坐骑
	var DATA_MOUNT = window['DATA_MOUNT'] || [];
	// 头像
	var DATA_PROFILE = window['DATA_PROFILE'] || [];

	var KINDS = [{
		name: 'fashion',
		data: DATA_FASHION,
	}, {
		name: 'weapon',
		data: DATA_WEAPON,
	}, {
		name: 'mount',
		data: DATA_MOUNT,
	}, {
		name: 'profile',
		data: DATA_PROFILE,
	}];

	layui.element.on('tab(tab1)', function () {
		resizeCurrentImages();
	});

	initPage();

	$(window).resize(function () {
		resizeCurrentImages();
	});

	function initPage() {
		KINDS.forEach(function (kind) {
			createImg(kind);
		});
	}

	function resizeCurrentImages() {
		$('.layui-tab-item:visible').find('.wrapper-inner>img').each(function () {
			fillImage(this);
		});
	}

	function createImg(kind) {

		var type = kind.name;
		var id = type + '-images-list';
		var imgListDiv = $('#' + id).empty();
		var list = kind.data;

		list.forEach((item) => {

			var img = $('<img>').attr({
				'layer-src': './images/' + type + '/' + item,
				'src': './images/' + type + '/thumb/' + item,
				'alt': item,
				'onClick': 'showImage(this)',
				'onload': 'fillImage(this)'
			});

			var container = $('<div class="layui-col-xs6 layui-col-sm3 layui-col-md2 container-image">');
			var wrapper = $('<div class="layui-panel wrapper-image">').appendTo(container);
			var wrapper_inner = $('<div class="wrapper-inner">').appendTo(wrapper);

			img.appendTo(wrapper_inner);

			$('<div class="image-name">').text(item).appendTo(wrapper);

			container.appendTo(imgListDiv);

		});

	}

	window.showImage = function (img) {
		layer.photos({
			photos: '#' + $(img).closest('.layui-row').attr('id'),
			anim: 5
		});
	}

	window.fillImage = function (img) {
		var $img = $(img);
		var parent = $img.parent();

		var w = parent.width();
		var h = parent.height();

		var wi = img.naturalWidth;
		var hi = img.naturalHeight;

		if (wi / hi > w / h) {

			var scale = h / hi;
			var realWi = wi * scale;

			$img.css({
				'width': 'auto',
				'height': '100%',
				'left': - (realWi - w) / 2
			});
		} else {

			var scale = w / wi;
			var realHi = hi * scale;

			$img.css({
				'width': '100%',
				'height': 'auto',
				'top': - (realHi - h) / 2
			});
		}
	}

})