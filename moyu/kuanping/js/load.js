$(document).ready(function(){$.fn.scroll_({arrows:false,mouseWheelSpeed:30,verticalGutter:15});$("#ZhiYe_nr").PictureSwitching({bigpic_w:"937","other_w":"158"});setTimeout(function(){$('#Introduction .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:300,mode:"none"})},150);$("#GameIntr").jieshao();$("#Floatingbar").Floatingbar();$.fn.wowanimate_list();$.fn.hovers();})
$.fn.wowanimate_list=function(){if(typeof(WOW)=='undefined'){return;}
if((/msie [6|7|8|9]/i.test(navigator.userAgent))){return;}
var m1=$("#m1");if(m1.length>0)
{m1.find("._xh").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":0+"ms"})
m1.find("._title").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":100+"ms"})
m1.find("#quicklink").css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":1.2+"s","data-wow-delay":400+"ms"})
m1.find("#video").css("visibility","hidden").addClass("wow fadeInRight").attr({"data-wow-offset":0,"data-wow-duration":1.2+"s","data-wow-delay":200+"ms"})}
var m2=$("#m2");if(m2.length>0)
{m2.find("._xh").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":0+"ms"})
m2.find("._title").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":100+"ms"})
m2.find("#Introduction").css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":1.2+"s","data-wow-delay":400+"ms"})
m2.find("#GameIntr").css("visibility","hidden").addClass("wow fadeInRight").attr({"data-wow-offset":0,"data-wow-duration":1.2+"s","data-wow-delay":200+"ms"})}
var ZhiYe=$("#ZhiYe");if(ZhiYe.length>0)
{ZhiYe.find("._xh").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":0+"ms"})
ZhiYe.find("._title").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":100+"ms"})
ZhiYe.find("#ZhiYe_nr").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":1.2+"s","data-wow-delay":400+"ms"})}
var kefu=$("#kefu");if(kefu.length>0)
{kefu.find(".btn_backtop").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":0+"ms"})
kefu.find(".weixinhao").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":100+"ms"})
kefu.find(".qqlist li").each(function(index,element){$(this).css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":(index+1)*0.2+"s","data-wow-delay":200*(index+1)+"ms"})});}
if(!(/msie [6|7|8|9]/i.test(navigator.userAgent))){if(typeof(WOW)!='undefined')
{new WOW().init();}};}
$.fn.Floatingbar=function(){var self=$(this);self.find("li").bind("mouseenter",function(){$(this).siblings().find("._box").stop(true,false).animate({"opacity":0,"right":"100px"},400)
$(this).find("._box").css({"display":"block","opacity":0,"right":"40px"}).stop(true,false).animate({"opacity":1,"right":"80px"},400)});self.bind("mouseleave",function(){$(this).find("._box").hide();});self.find("#backtop").bind("click",function(){$("html,body").animate({scrollTop:0},1000)});};$.fn.jieshao=function(){var self=$(this);self.find(".jieshao").each(function(index,element){var h=$(this).find("em").outerHeight();$(this).find("em").css("margin-top",-h/2)});};$.fn.hovers=function(){$("#btn_play").one("click",function(){var videourl=$(this).attr("data-file")
var autoplay=$(this).attr("data-autoplay")
var playobj=$(this).attr("data-playobj")
if($(playobj).length==0)return false;if(videourl)
{var w=$(playobj).outerWidth()
var h=$(playobj).outerHeight()
var writehtml='<object class id="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+w+'" height="'+h+'">'
writehtml+='<param name="movie" value="flash/Flvplayer.html">'
writehtml+='<param name="quality" value="high">'
writehtml+='<param value="transparent" name="wmode">'
writehtml+='<param name="allowFullScreen" value="true">'
writehtml+='<param name="FlashVars" value="vcastr_file='+videourl+'&BufferTime=3&IsAutoPlay='+autoplay+'">'
writehtml+='<embed src="flash/Flvplayer.swf" wmode="Opaque" allowfullscreen="true" flashvars="vcastr_file='+videourl+'&IsAutoPlay='+autoplay+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed>'
writehtml+='</object>'
$(this).stop(true,false).animate({opacity:0},500,function(){$(playobj).html(writehtml)})}})
$("#yy_weixin ._weixin").hover_animate({aniobj:[["self","","margin-top:-5px;","margin-top:0;","300","300"]]});$("#yy_weixin ._yy").hover_animate({aniobj:[["self","","margin-top:-5px;","margin-top:0;","300","300"]]});$("#video").hover_animate({aniobj:[["img","","opacity:0.8;","opacity:1;","300","300"]]});$("#menu li").append('<div class="_bg"></div>')
$("#menu li:not('.change')").hover_animate({aniobj:[["._bg","","bottom:0;","bottom:100%;","300","300"],["a","","height:70px;padding-top:5px;","padding-top:17px;height:60px;","300","300"]]})
$(".btn_payment").hover_animate({aniobj:[["._icon_guan","left:-750px;","left:355px;","","1900","800"]]})
$("#kefu").find(".btn_backtop").bind("click",function(){$("html,body").animate({scrollTop:0},1000)
return false;});$("#kefu .weixinhao .erweima,#kefu .qqlist .btn_qq,#kefu .qqlist .btn_qqqun").append('<span class="border_top"></span><span class="border_right"></span><span class="border_bottom"></span><span class="border_left"></span>')
$("#kefu .weixinhao,#kefu .qqlist li").hover_animate({aniobj:[[".border_top","","width:100%;left:0;","width:0px;left:50%;","600","300"],[".border_bottom","","width:100%;left:0;","width:0px;left:50%;","600","300"],[".border_left","","height:100%;top:0;","height:0px;top:50%;","600","300"],[".border_right","","height:100%;top:0;","height:0px;top:50%;","600","300"]]})}
$.fn.PictureSwitching=function(config){var self=$(this);var indexs=0;if(self.length==0)return false;self.find("ul li:first").addClass("first");self.find("ul li:last").addClass("last");self.find("ul li").bind("mouseenter",function(){var liobj=$(this)
indexs=liobj.index()
liobj.addClass("changes").stop().animate({width:config.bigpic_w},{duration:800,easing:'easeOutCirc'}).siblings("li").removeClass("changes").stop().animate({width:config.other_w},{duration:800,easing:'easeOutCirc'});}).bind("mouseleave",function(){$(this).eq(indexs).stop().animate({width:config.bigpic_w},{duration:800,easing:'easeOutCirc'});})}
$.fn.scroll_=function(config){var scrollobj=$("[data-scroll]");if(scrollobj.length==0){return;}
scrollobj.each(function(index,element){var self=$(this),parentobj=self.parent(),parent_h=0,parent_w=0;if(self.length==0){return;}
var h=self.attr("data-scroll-height"),w=self.attr("data-scroll-width"),bfb=0,color=self.attr("data-scroll-color");if(h.indexOf("%")!=-1){h=parseInt(h);parent_h=parentobj.outerHeight();h=parent_h*(h/100);}else{h=parseInt(h);}
if(w.indexOf("%")!=-1){w=parseInt(w);parent_w=parentobj.outerWidth();w=parent_w*(w/100)-30;}else{w=parseInt(w);}
self.css({"width":"100%"}).wrap('<div class="container1" style="width:'+w+'px"></div>').wrap('<div class="div_scroll"></div>');self.parents('.div_scroll').css({height:h}).scroll_absolute(config);self.find("img").load(function(){self.parents('.div_scroll').scroll_absolute(config);})
if(typeof(color)!="undefined")
{setTimeout(function(){self.parents(".container1").find(".scroll_drag").css({"background":color})},500);}});};$.fn.Tab=function(config){var self=$(this);var select_=0;var classname=config.labselect.replace(".","")
if(self.length==0)return false;if(self.find(config.lilab).length==0)return false;self.each(function(index,element){self=$(this);if(self.find(config.labselect).length==0)
{self.find(config.lilab+":eq(0)").addClass(classname);}
self.find(config.lilab).each(function(index,element){if(!$(this).is(config.labselect))
{self.siblings(config.Tabname+":eq("+index+")").hide();}});self.find(config.lilab).bind(config.labaction+".action",function(){var index=$(this).index();if(self.siblings(config.Tabname+":visible").is(":animated")){return false;}
if($(this).is(config.labselect))return false;var index2=$(this).siblings(config.labselect).index()
$(this).addClass(classname).siblings().removeClass(classname);config.animate(index,index2,config.animatename)
return config.labaction=="click"?false:true;})
config.animate=function(index,index2,active){switch(active)
{case "fade":self.siblings(config.Tabname+":visible").hide();self.siblings(config.Tabname+":eq("+index+")").fadeIn(config.animateTime);break;case "scroll_x":self.parent().css({"position":"relative","overflow":"hidden"});var selfs=self.siblings(config.Tabname+":visible")
var dr="100%",dr2="100%"
if(index2>index)
{dr="100%";dr2="-100%"}
else
{dr="-100%";dr2="100%"}
var top=selfs.position().top
if(config.mode=="delay")
{selfs.css({"position":"relative","width":"100%"}).stop(true,false).animate({"left":dr,"opacity":0},config.animateTime,function(){$(this).css({"position":"static","left":"auto","opacity":1,"display":"none"})})
setTimeout(function(){self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0}).stop(true,false).animate({"left":0,"opacity":1},config.animateTime,function(){$(this).css({"top":0,"position":"static"})})},config.animateTime)}
else
{selfs.css({"position":"absolute","width":"100%","left":selfs.position().left,"top":selfs.position().top}).stop(true,false).animate({"left":dr,"opacity":0},config.animateTime,function(){$(this).css({"position":"relative","top":"auto","left":"auto","opacity":1,"display":"none"})})
self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0}).stop(true,false).animate({"left":0,"opacity":1},config.animateTime,function(){$(this).css({"top":0,"position":"relative"})})}
break;case "none":self.siblings(config.Tabname+":visible").hide();self.siblings(config.Tabname+":eq("+index+")").show();break;}}});}
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});$.fn.hover_animate=function(obj){var time_delay=null,runlist=[],runlist_end=[],create_var=[],set_var=[],self=$(this);if(self.length===0||obj.aniobj.length===0){return}if(obj.set_class===""||typeof(obj.set_class)==="undefined"){$.extend(obj,{set_class:"hover"})}if(typeof(obj.delaytime)!=="number"||typeof(obj.delaytime)==="undefined"){$.extend(obj,{delaytime:100})}var fn={csschange:function(val){val=$.trim(val);if(val===""){return""}if(val.indexOf("{")<0||val.indexOf("}")<0){val=$.trim(val);var last_fh=val.lastIndexOf(";");if(last_fh+1===val.length){val=val.substring(0,last_fh);val="{'"+val.replace(/\:/g,"':'").replace(/\;/g,"','")+"'}"}else{val="{'"+val.replace(/\:/g,"':'").replace(/\;/g,"','")+"'}"}}return $.trim(val)}};$.each(obj.aniobj,function(index,val){if(val.length<6){return}var setobj=val[0],setobj_=setobj.replace(/\.|\ |\>/g,""),animate_css=fn.csschange(val[1]),animate_start=fn.csschange(val[2]),animate_end=fn.csschange(val[3]),animate_easing=val[4],animate_easing2=val[5],animate_delay=val[6],animate_delay2=val[7],run="",run_end="";if(typeof(animate_delay)==="undefined"){animate_delay=0}if(typeof(animate_delay2)==="undefined"){animate_delay2=0}if(animate_css!==""){animate_css_=".css("+animate_css+")"}else{animate_css_=""}if(setobj===""){return}create_var.push("var _"+setobj_+"");if(setobj==="self"){set_var.push("_"+setobj_+"=[self]")}else{set_var.push("_"+setobj_+'=[self].find("'+setobj+'")')}if(animate_start!==""){run="_"+setobj_+animate_css_+".stop(true,false).delay("+animate_delay+").animate("+animate_start+","+animate_easing+")"}else{run="_"+setobj_+animate_css}if(animate_css_!==""||animate_start!==""){runlist.push(run)}if(animate_end!==""){run_end="_"+setobj_+".stop(true,false).delay("+animate_delay2+").animate("+animate_end+","+animate_easing2+")";runlist_end.push(run_end)}});var selfobj=null;self.off(".s");$.each(create_var,function(index,val){eval(val)});self.on("mouseenter.s",function(){selfobj=$(this);$.each(set_var,function(index,val){eval(val.replace("[self]","selfobj"))});clearTimeout(time_delay);time_delay=setTimeout(function(){if(!selfobj.is(":animated")){selfobj.addClass(obj.set_class);$.each(runlist,function(index,val){eval(val)})}},obj.delaytime)}).on("mouseleave.s",function(){clearTimeout(time_delay);if(selfobj.is("."+obj.set_class)){$.each(runlist_end,function(index,val){eval(val)});selfobj.removeClass(obj.set_class)}})};