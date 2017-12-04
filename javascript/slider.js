var slider

	var sliderInnerContainer=document.querySelector('.slider-wrapper');
	var slider=document.querySelector('.slider');
	var sliderIndicator=document.querySelectorAll('.indicators> span');
	var carouselID;
	var sliderIndex=0;

	window.addEventListener("load",startCarousel());

	function startCarousel(){
		carouselID=setInterval("next()",3000);

		slider.addEventListener("mouseover",function(){
			clearInterval(carouselID);
		});
		slider.addEventListener("mouseout",function(){
			carouselID=setInterval("next()",3000);
		});
	}

	function indicate(index){
		sliderInnerContainer.style.cssText='left:'+index+'00%;';
		sliderIndex=index;
		setIndicator();
	}

	function setIndicator(){
		for (var i = 0; i < sliderIndicator.length; i++) {
			if(sliderIndex==i){
				sliderIndicator[i].className='active-indicator';
			}else{
				sliderIndicator[i].className='indicator';
			}	
		}
	}

	function disableButtons(){
		document.querySelector('.slider .previous').disabled=false;
		document.querySelector('.slider .next').disabled=false;
	}

	function switchSliderItems(){

	}

	function next() {
		document.querySelector('.slider .previous').disabled=true;
		document.querySelector('.slider .next').disabled=true;
		if(sliderIndex==0){
			sliderInnerContainer.style.cssText='animation: 1s slide1;';
			sliderInnerContainer.addEventListener('animationend',function(){
				sliderInnerContainer.style.cssText='left: 100%;';
				disableButtons();
			},{once:true});
			sliderIndex++;
		}else if(sliderIndex==1){
			sliderInnerContainer.style.cssText='animation: 1s slide2;';
			sliderInnerContainer.addEventListener('animationend',function(){
				sliderInnerContainer.style.cssText='left: 200%;';
				disableButtons();
			},{once:true});
			sliderIndex++;
		}else if(sliderIndex==2){
			sliderInnerContainer.style.cssText='animation: 1s slide3;';
			sliderInnerContainer.addEventListener('animationend',function(){
				sliderInnerContainer.style.cssText='left: 300%;';
				disableButtons();
			},{once:true});
			sliderIndex++;
		}
		else if(sliderIndex==3){
			sliderInnerContainer.style.cssText='animation: 1s slide4;';
			sliderInnerContainer.addEventListener('animationend',function(){
				sliderInnerContainer.style.cssText='left: 400%;';
				disableButtons();
			},{once:true});
			sliderIndex++;
		}
		else{
			sliderInnerContainer.style.cssText='animation: 1s slide5;';
			sliderInnerContainer.addEventListener('animationend',function(){
				sliderInnerContainer.style.cssText='left: 0%;';
				disableButtons();
			},{once:true});
			sliderIndex=0;
		}
		setIndicator();
	}

	function previous() {
		disableButtons();
		if(sliderIndex==0){
			sliderInnerContainer.style.cssText='animation: 1s slide5 reverse';
			sliderInnerContainer.addEventListener('animationend',function(){
				sliderInnerContainer.style.cssText='left: 400%;';
				disableButtons();
			},{once:true});
			sliderIndex=4;
		}else if(sliderIndex==1){
			sliderInnerContainer.style.cssText='animation: 1s slide1 reverse;';
			sliderInnerContainer.addEventListener('animationend',function(){
				sliderInnerContainer.style.cssText='left: 0%;';
				disableButtons();
			},{once:true});
			sliderIndex--;
		}else if(sliderIndex==2){
			sliderInnerContainer.style.cssText='animation: 1s slide2 reverse;';
			sliderInnerContainer.addEventListener('animationend',function(){
				sliderInnerContainer.style.cssText='left: 100%;';
				disableButtons();
			},{once:true});
			sliderIndex--;
		}
		else if(sliderIndex==3){
			sliderInnerContainer.style.cssText='animation: 1s slide3 reverse;';
			sliderInnerContainer.addEventListener('animationend',function(){
				sliderInnerContainer.style.cssText='left: 200%;';
				disableButtons();
			},{once:true});
			sliderIndex--;
		}
		else{
			sliderInnerContainer.style.cssText='animation: 1s slide4 reverse;';
			sliderInnerContainer.addEventListener('animationend',function(){
				sliderInnerContainer.style.cssText='left: 300%;';
				disableButtons();
			},{once:true});
			sliderIndex--;
		}
		setIndicator();
	}