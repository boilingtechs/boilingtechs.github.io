$(document).ready(function(m){var c;var d=window.location.pathname;var f=m("html").attr("lang");function p(e,a,t){var o="";if(t){var n=new Date;n.setTime(n.getTime()+t*24*60*60*1e3);o="; expires="+n.toUTCString()}document.cookie=e+"="+a+o+"; path=/"}function i(e){var a=e+"=";var t=document.cookie.split(";");for(var o=0;o<t.length;o++){var n=t[o];while(n.charAt(0)===" ")n=n.substring(1,n.length);if(n.indexOf(a)===0)return n.substring(a.length,n.length)}return null}function r(e){var a=RegExp("[?&]"+e+"=([^&]*)").exec(window.location.search);return a&&decodeURIComponent(a[1].replace(/\+/g," "))}m(function(){m(".video-play[data-magnific]").magnificPopup({type:"iframe",iframe:{patterns:{youtube:{index:"youtube.com/",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1&rel=0"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"}}}});m(".smooth-scroll").click(function(){var e=m(this);m("html, body").animate({scrollTop:m(e.attr("href")).offset().top},500)});m(window).scroll(function(){var e=m(".navbar");if(m(window).scrollTop()===0&&e.hasClass("min-header")){e.removeClass("min-header");m("#scroll-nav-logo").hide();m(".fixed-top-no-nav").addClass("fixed-top-margin")}else{e.addClass("min-header");m("#scroll-nav-logo").show();m(".fixed-top-no-nav").removeClass("fixed-top-margin")}});if(m(window).scrollTop()>0){m(".navbar").addClass("min-header")}m(document).on("click",".read-more-trigger",function(){var e=m(this);e.hide();$readmore=e.closest(".read-more-boundary").find(".read-more").fadeIn()});m(".navbar .dropdown").on("show.bs.dropdown",function(){var e=m(this);var a=e.find(".dropdown-menu");var t=e.find(".dropdown-menu .dropdown-item");TweenMax.set(a,{height:"auto",ease:Expo.easeOut});TweenMax.from(a,.5,{height:0});TweenMax.staggerTo(t,.5,{autoAlpha:1,ease:Back.easeOut,delay:.3},.1)}).on("hide.bs.dropdown",function(){var e=m(this);var a=e.find(".dropdown-menu");var t=e.find(".dropdown-menu .dropdown-item");TweenMax.staggerTo(t,.5,{autoAlpha:0,ease:Back.easeOut},-.1);TweenMax.to(a,.5,{height:0,ease:Expo.easeOut,delay:.3})});m(".fp-session").click(function(e){e.preventDefault();var a=m(this).attr("href");window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:"gaEvent",eventCategory:"Session",eventAction:"Click",eventLabel:"Initiate"});setTimeout(function(){window.location=a},300)});m(".mform-next").click(function(){var e=m(this);var a=m(this).closest("fieldset");var t=a.find("h3").text();window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:"gaEvent",eventCategory:"Session",eventAction:"Click",eventLabel:"eventLabel"})});m("[href*='tel:'], [href*='mailto:']").click(function(e){e.preventDefault();var a=m(this).attr("href");if(a.toLowerCase().indexOf("tel:")>=0){eventCategory="Call";eventLabel=a.replace("tel:","")}if(a.toLowerCase().indexOf("mailto:")>=0){eventCategory="Email";eventLabel=a.replace("mailto:","")}window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:"gaEvent",eventCategory:eventCategory,eventAction:"Click",eventLabel:eventLabel});setTimeout(function(){window.location=a},300)});function e(){var e=r("gclid");if(e){p("gclid",e,365)}}e();if(typeof ouibounce!=="undefined"&&m("#promo-popup").length>0){var a=ouibounce(false,{sensitivity:10,aggressive:true,callback:function(){var e="fp_promo_popup";var a="1";var t=7;if(i(e)!=a){m.magnificPopup.open({items:{src:"#promo-popup",type:"inline"},callbacks:{open:function(){p(e,a,t);window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:"gaEvent",eventCategory:"Exit Popup",eventAction:"Show",eventLabel:"Free eBook (Popup)"})}}})}}})}m(document).on("click",".mp-close-popup",function(e){e.preventDefault();m.magnificPopup.close()});m(".open-popup-link").magnificPopup({type:"inline"});if(m(".floating-form").length>0){var t=function(e){var a=e;a.fadeIn(300);a.find(".float-close").click(function(){a.fadeOut(150)})};t(m(".floating-form"))}window.Parsley.addValidator("websiteCheck",{validateString:function(e){return e.indexOf(window.location.hostname.replace("www.",""))===-1?e:false},requirementType:"string",messages:{en:"Please enter your website, not ours :)"}});m(".quote-form form").on("keyup keypress",function(e){var a=e.keyCode||e.which;if(a===13){e.preventDefault();return false}}).parsley();m(".form-continue").click(function(){var e=m(this);var a=e.closest(".form-step");var t=e.closest(".form-space");var o=a.next(".form-step");var n=a.find("input[required]");if(n.length>0){n.parsley().validate();if(n.parsley().isValid()){m(".banner-img-mb ").css("margin-bottom","60px");t.find(".form-hide").fadeOut("fast");a.fadeOut("fast",function(){o.fadeIn("fast")});m("html, body").animate({scrollTop:0},"slow")}}else{t.find(".form-hide").fadeOut("fast");a.fadeOut("fast",function(){o.fadeIn("fast")})}});m(".home .form-continue, .page-content-removal-australia .form-continue").click(function(){m("html, body").animate({scrollTop:0},"slow")});m(document).on("click",'form.fp-form button[type="submit"]',function(){var i=m(this);var r=i.closest("form.fp-form");if(r.length>0){r.parsley().validate();if(r.parsley().isValid()){var s=r.find(".form-step:visible");var l=r.find(".form-thankyou");i.html('Generating... <i class="fa fa-spinner fa-spin"></i>');m.ajax({url:"https://www.firstpage.hk/action/hubspot/submit.php",type:"post",dataType:"json",data:r.serialize()+"&lead_sitename=firstpage",success:function(e){i.html('Redirecting... <i class="fa fa-spinner fa-spin"></i>');var a=e.result;window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:"formSubmissionSucess",eventCategory:"Form Submission",eventAction:c,eventLabel:"Submitted-"+d});if(r.find("input[name=lead_producttype]").val()=="traffic"){var t="fp_float_form";var o="1";var n=180;p(t,o,n)}if(!!r.attr("action")){window.location.href=r.attr("action");if(f==="en-US"){window.location.replace(r.attr("action"))}else if(f==="zh-HK"){window.location.replace("/zh/thank-you")}}else if(l.length>0){s.fadeOut("fast",function(){l.fadeIn()});if(typeof gaIdLabel!=="undefined"&&typeof gtag!=="undefined"){gtag("event","conversion",{send_to:gaIdLabel})}}return false}});return false}}});m(document).on("keyup keypress",".proposal-popup form",function(e){var a=e.keyCode||e.which;if(a===13){e.preventDefault();return false}});tippy(".show-popup-form",{html:".embed-popup-form",trigger:"click",interactive:true,arrow:true,placement:"bottom",flip:false,animation:"shift-toward",inertia:true,distance:15,arrowTransform:"scaleX(1.5)"});tippy(".show-popup-form-2",{html:".embed-popup-form-2",trigger:"click",interactive:true,arrow:true,placement:"bottom",flip:false,animation:"shift-toward",inertia:true,distance:15,arrowTransform:"scaleX(1.5)"});tippy(".show-popup-form-3",{html:".embed-popup-form-3",trigger:"click",interactive:true,arrow:true,placement:"bottom",flip:false,animation:"shift-toward",inertia:true,distance:15,arrowTransform:"scaleX(1.5)"});tippy(".show-proposal-popup",{html:"#proposal-popup-form",trigger:"click",interactive:true,arrow:true,placement:"bottom",flip:false,animation:"shift-toward",inertia:true,distance:15,arrowTransform:"scaleX(1.5)"});tippy(".show-orm-popup",{html:"#orm-popup-form",trigger:"click",interactive:true,arrow:true,placement:"bottom",flip:false,animation:"shift-toward",inertia:true,distance:15,arrowTransform:"scaleX(1.5)"});tippy(".show-pcw-popup",{html:"#pcw-popup-form",trigger:"click",interactive:true,arrow:true,placement:"bottom",flip:false,animation:"shift-toward",inertia:true,distance:15,arrowTransform:"scaleX(1.5)"});tippy(".show-reseller-popup",{html:"#reseller-popup-form",trigger:"click",interactive:true,arrow:true,placement:"bottom",flip:false,animation:"shift-toward",inertia:true,distance:15,arrowTransform:"scaleX(1.5)"});m(document).on("submit",".proposal-popup form",function(e){var a=m(this);a.find('button[type="submit"]').html('Submit <i class="fa fa-spinner fa-spin"></i>');a.parsley().validate();if(a.parsley().isValid()){return true}a.find('button[type="submit"]').html("Submit");return false});m(".btn-comment-reply").click(function(){var e=m(this);e.closest(".blog-comment").children(".comment-box").fadeToggle("fast","linear")});if(m(".countdown-cont").length>0){function l(e,a,t){var o=e;var n=o.find(".countdown-bar > span");var i=o.find(".countdown-timer");var r=a*60+t;n.stop(true,false).css("width",r/300*100+"%").animate({width:"0%"},r*1e3,"linear");var s=setInterval(function(){if(r<=10){setTimeout(function(){l(o,3,30)},1e3);clearInterval(s);return}var e=Math.floor(r/60);var a=r%60;if(a<10)a="0"+a;var t=e+":"+a;i.html(t);r--},1e3)}l(m(".countdown-cont"),4,30)}if(m(".mform").length>0){var o;var n=function(i,r,s){i.removeClass("shown");r.show();i.animate({opacity:0},{step:function(e,a){var t,o,n;if(s){n=1-(1-e)*.2;t=e*50+"%";o=1-e;i.css({transform:"scale("+n+")"});r.css({left:t,opacity:o})}else{n=.8+(1-e)*.2;t=(1-e)*50+"%";o=1-e;i.css({left:t});r.css({transform:"scale("+n+")",opacity:o})}},duration:800,complete:function(){i.hide().css({transform:"scale(1)"});r.addClass("shown");o=false;var e=m(window).width();if(e<768){m("html, body").animate({scrollTop:m(".mform-progressbar").offset().top-25},500)}},easing:"easeInOutBack"})};m(".mform-next").click(function(){if(o)return false;o=true;current=m(this).closest("fieldset");destination=current.next();m(".mform-progressbar li").eq(m(".mform fieldset").index(destination)).addClass("active");n(current,destination,true)});m(".mform-prev").click(function(){if(o)return false;o=true;var e=m(this).closest("fieldset");var a=e.prev();m(".mform-progressbar li").eq(m(".mform fieldset").index(e)).removeClass("active");n(e,a,false)});m(document).on("click",".mform-progressbar li.active",function(){var e=m(this);if(!e.next("li").hasClass("active"))return false;if(o)return false;o=true;current=m(".mform fieldset.shown");destination=m(".mform fieldset").eq(m(".mform-progressbar li").index(e));e.nextAll().removeClass("active");n(current,destination,false)});m(".mform-selection .mform-select").click(function(){var e=m(this);var a=e.closest(".mform-selection");if(a.hasClass("single-select")){e.addClass("selected");e.siblings().removeClass("selected")}else{e.toggleClass("selected");$selectedItems=a.find(".selected");a.next(".mform-btn-nav").prop("disabled",$selectedItems.length==0)}return false});m('.mform input[type="range"]').rangeslider({polyfill:false,onInit:function(){var e=m(".rangeslider__handle",this.$range);e[0].textContent="$"+this.value}}).on("input",function(e){var a=m(".rangeslider__handle",e.target.nextSibling);a[0].textContent="$"+this.value+(this.value==25e4?"+":"")});if(m("#session-booking-form").length>0){m("#session-booking-form").parsley().on("form:submit",function(){var e=m("#date_booking1").val();var a=m("select[name=rangetime1] option:selected").val();var t=a.substr(0,a.indexOf(" - "));var o=moment(e+" "+t,"DD.MM.YYYY HH:mm").format("MMMM DD YYYY HH:mm:ss");var n=moment(e,"DD.MM.YYYY").format("DD MMMM YYYY");var i={lead_name:m("#lead_name").val(),lead_lname:m("#lead_lname").val(),lead_email:m("#lead_email").val(),lead_phone:m("#lead_phone").val(),lead_company:m("#lead_company").val(),lead_website:m("#lead_website").val(),lead_formname:m("#lead_formname").val(),lead_language:m("#lead_language").val(),lead_formtype:"hs_booking_form",lead_booking_date:o,lead_booking_time:t,lead_booking_date_text:n,lead_booking_time_text:a,lead_sitename:wpSiteName};var r=m(".mform-selection");for(var s=0;s<r.length;s++){var l=m(r[s]);var c=l.find(".selected .mform-select-value").map(function(){return m.trim(m(this).text())}).get();i[l.attr("data-field")]=c.join(", ")}if(!!e){m.ajax({type:"POST",url:wpSiteUrl+"/action/hubspot/submit.php",data:i}).done(function(){})}window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:"sessionSubmissionSucess"});m(".wpbc_structure_form input[name=name1]").val(i.wpg_name);m(".wpbc_structure_form input[name=lastname1]").val(i.wpg_lname);m(".wpbc_structure_form input[name=email1]").val(i.wpg_email1);m(".wpbc_structure_form input[name=phone1]").val(i.wpg_phone);m(".wpbc_structure_form input[name=company1]").val(i.wpg_company);m(".wpbc_structure_form input[name=website1]").val(i.wpg_website);m(".wpbc_structure_form input[name=marketing_used1]").val(i.wpg_marketing_used);m(".wpbc_structure_form input[name=describe_me1]").val(i.wpg_describe_me);var d=document.getElementById("booking_form1");mybooking_submit(d,1,"en_AU");return false})}}if(m("#new-session-form").length>0){m("#new-session-form").parsley().on("form:submit",function(){var a=m(this)[0].$element;var e="https://www.firstpage.hk";a.find(".mform-btn-submit").append(' <i class="fa fa-spinner fa-spin"></i>');var t={lead_name:m("#lead_name").val(),lead_email:m("#lead_email").val(),lead_phone:m("#lead_phone").val(),lead_company:m("#lead_company").val(),lead_website:m("#lead_website").val(),lead_message:m("#lead_message").val(),lead_formname:m("#lead_formname").val(),lead_language:m("#lead_language").val(),lead_formtype:"hs_booking_form",lead_sitename:wpSiteName};var o=m(".mform-selection");for(var n=0;n<o.length;n++){var i=m(o[n]);var r=i.find(".selected .mform-select-value").map(function(){return m.trim(m(this).text())}).get();t[i.attr("data-field")]=r.join(", ")}m.ajax({type:"POST",url:e+"/action/hubspot/submit.php",data:t}).done(function(){var e=t.result;window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:"sessionSubmissionSucess"});if(!!a.attr("action")){window.location.href=a.attr("action")}});return false})}});m(window).on("resize",function(){if(m(window).width()<992){m(".navbar-nav .dropdown").click(function(e){e.stopPropagation();m(this).children(".dropdown-toggle").hide();m("#goBackMain").show();m(".navbar-nav .nav-item-main").not(this).hide();m(this).children(".dropdown-menu").addClass("show").css("height","auto")});m(".megamenu-li>.dropdown-toggle").click(function(){m(".mega-dropdown-menu").hide()});m(".megamenu-heading:not(.megamenu-heading-results)").click(function(e){e.stopPropagation();m(this).next(".mega-dropdown-menu").show();m(".megamenu-heading").hide();m("#goBackServices").show();m("#goBackMain").hide()});m("#goBackMain").click(function(e){e.stopPropagation();m(".navbar-nav .nav-item-main").show();m(".nav-link").show();m(".dropdown-menu").removeClass("show").css("height","0");m(this).hide()});m("#goBackServices").click(function(e){e.stopPropagation();m(".megamenu .megamenu-heading").show();m(".mega-dropdown-menu").hide();m(this).hide();m("#goBackMain").show()});m(".navbar-collapse").on("show.bs.collapse",function(){console.log("shown")});m(".navbar-collapse").on("hidden.bs.collapse",function(){console.log("hidden");m(".mobile-go-back").hide();m(".nav-item-main").show();m(".dropdown-toggle").show();m(".dropdown-menu").removeClass("show").css("height","0")})}else{m(".navbar-nav .dropdown-menu").removeClass("show");m("#goBackMain").hide();m(".mobile-go-back").hide()}});m(document).ready(function(){m(window).trigger("resize")});m(function(){var e=window.location.href;m(".megamenu .dropdown-item").each(function(){if(m(this).attr("href")==e){m(this).addClass("link-active")}});console.log(e)});jQuery(function(t){t("#filter").submit(function(){var a=t("#filter");t.ajax({url:a.attr("action"),data:a.serialize(),type:a.attr("method"),beforeSend:function(e){a.find("button").text("Processing...")},success:function(e){a.find("button").text("Apply filter");t("#response").html(e)}});return false})});m(document).ready(function(e){m(".input-category-filter").on("change",function(e){m("#applyFilter").click();var a=m(this).val();console.log(this);if(this.checked==true){m("#posts-pagination").hide();m(".category-filter-button."+a).show();m(this).prop("checked",true)}else{m(".category-filter-button."+a).hide();m(this).prop("checked",false)}var t=m(".input-category-filter:checked");if(t.length===0){m(".select-to-filter").hide();location.reload()}else{m(".select-to-filter").show()}});m(".category-filter-button").click(function(){var e=m(this).attr("id");m(".input-category-filter."+e).prop("checked",false);m(".custom-control-label."+e).removeClass("checked");m(this).hide();m("#applyFilter").click();var a=m(".input-category-filter:checked");if(a.length===0){m(".select-to-filter").hide();location.reload()}else{m(".select-to-filter").show()}});m(".clear-all-filters").click(function(){m(".select-to-filter").hide();location.reload();m(".input-category-filter").prop("checked",false);m(".custom-control-label").removeClass("checked")});m(".custom-control-label").click(function(){console.log(this);m(this).toggleClass("checked")})});m("input[name=lead_phone]").live("keypress",function(e){if(e.charCode<48||e.charCode>57)return false});m(function(){m('[data-toggle="popover"]').popover()});function e(e){m(location).attr("href",e)}m(document).ready(function(e){m(".dropdown-parent-link").click(function(){var e=m(".dropdown-parent-link").siblings(".dropdown-menu").first();console.log(e)})});m(document).ready(function(){m("#comparison_fp_read_more_btn").click(function(){m("#comparison_fp_hide_content").removeClass("d-none");m("#comparison_fp_read_more_btn").removeClass("d-block");m("#comparison_fp_read_more_btn").addClass("d-none");m("#comparison_fp_read_less_btn").removeClass("d-none");m("#comparison_fp_read_less_btn").addClass("d-block d-md-none")});m("#comparison_other_read_more_btn").click(function(){m("#comparison_other_hide_content").removeClass("d-none");m("#comparison_other_read_more_btn").removeClass("d-block");m("#comparison_other_read_more_btn").addClass("d-none");m("#comparison_other_read_less_btn").removeClass("d-none");m("#comparison_other_read_less_btn").addClass("d-block d-md-none")});m("#comparison_fp_read_less_btn").click(function(){m("#comparison_fp_read_less_btn").removeClass("d-block");m("#comparison_fp_read_less_btn").addClass("d-none");m("#comparison_fp_read_more_btn").removeClass("d-none");m("#comparison_fp_read_more_btn").addClass("d-block");m("#comparison_fp_hide_content").removeClass("d-block");m("#comparison_fp_hide_content").addClass("d-none")});m("#comparison_other_read_less_btn").click(function(){m("#comparison_other_read_less_btn").removeClass("d-block");m("#comparison_other_read_less_btn").addClass("d-none");m("#comparison_other_read_more_btn").removeClass("d-none");m("#comparison_other_read_more_btn").addClass("d-block");m("#comparison_other_hide_content").removeClass("d-block");m("#comparison_other_hide_content").addClass("d-none")})});function a(e){console.log("read more:"+e);m("#toggle-content-"+e).removeClass("d-none");m("#read-more-toggle-btn-"+e).removeClass("d-block");m("#read-more-toggle-btn-"+e).addClass("d-none");m("#read-less-toggle-btn-"+e).removeClass("d-none");m("#read-less-toggle-btn-"+e).addClass("d-block d-md-none")}function t(e){console.log("read less:"+e);m("#read-less-toggle-btn-"+e).removeClass("d-block");m("#read-less-toggle-btn-"+e).addClass("d-none");m("#read-more-toggle-btn-"+e).removeClass("d-none");m("#read-more-toggle-btn-"+e).addClass("d-block");m("#toggle-content-"+e).removeClass("d-block");m("#toggle-content-"+e).addClass("d-none")}m(".buttonFormClick").click(function(){c=m(this).attr("data-title");m(".form-type").each(function(e){console.log("form path: "+c);m(".form-type")[e].value=c})});function o(){gtag("event","conversion",{send_to:"AW-377531324/LjLSCJXh_PACELzXgrQB"})}m(function(){m(document).on("click","a.open-popup-callback",function(){m("html").attr("style","")});if(m("#primal-callback-form").length>0){m(document).on("click",'form.form-callback button[type="submit"]',function(){var a=m("#primal-callback-form");var e=a.closest("form.form-callback");if(e.length>0){e.parsley().validate();if(e.parsley().isValid()){a.find(".mform-btn-submit").append(' <i class="fa fa-spinner fa-spin"></i>');a.find(".mform-btn-submit").attr("disabled","disabled");var t={lead_name:m("#callback_name").val(),lead_email:m("#callback_email").val(),lead_website:m("#callback_url").val(),lead_phone:m(".iti__selected-dial-code").text()+" "+m("#callback_phone").val(),lead_message:m("#callback_message").val(),lead_formname:m("#callback_formname").val(),lead_language:m("#callback_language").val(),lead_formtype:m("#callback_formtype").val()};m.ajax({type:"POST",url:"/action/hubspot/submit.php",data:t}).done(function(){var e=t.result;window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:"callFormSubmit"});if(!!a.attr("action")){window.location.href=a.attr("action")}});return false}}})}});m(function(){m(".open-popup-callback").magnificPopup({items:{src:"#get-callback-popup"},type:"inline",removalDelay:500,callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr("data-effect")},open:function(){jQuery("html").attr("style","")}},midClick:true,disableOn:768})})});