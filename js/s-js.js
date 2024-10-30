
$(document).ready(function () {
	$("html,body").animate(
		{
			scrollTop: 0,
		}
	);
    
	$(".s-start").click(function(){
        $(this).fadeTo(300,0)
		$(this).hide(300);
		$("body").css("overflow","visible");
		$(".s-nav-item").addClass('animate__fadeIn');
	});	

    $(".s-web-btn img").mouseenter(function(){
        $(this).fadeTo(300,1)
	});
    $(".s-web-btn img").mouseleave(function(){
        $(this).fadeTo(300,0.8)
	});
    
	let bg_ps = $('.s-id-img').css('background-position');
	$(window).scroll(function () {
		let a = parseFloat(bg_ps)+5;
	});
	//當前項目
	$('.j-filter-btn a').click(function () {
		$('.j-filter-btn a').removeClass('active');
		$('.j-filter-btn button').removeClass('active');
		$(this).addClass('active');
	});

	//清單頁
	$('.j-filter .j-filter-item').addClass('j-type-all').addClass('j-filter-scale');
	var selectedClass = 'j-type-all';
	$('.j-filter-btn a').click(function () {
		selectedClass = $(this).attr('data-rel');
		$('.j-filter').fadeTo(100, 0.1);
		$('.j-filter .j-filter-item').not('.' + selectedClass).fadeOut().removeClass('j-filter-scale');
		setTimeout(function () {
			$('.' + selectedClass).fadeIn().addClass('j-filter-scale');
			$('.j-filter').fadeTo(300, 1);
		}, 300);
		return false;
	});
});