document.addEventListener('DOMContentLoaded', function () {
  	/*MENU MOBILE */
    const  bodyEl = document.body;
	  const menuButton = document.querySelector('#menu-toggle');
	  const menuNav = document.querySelector('#menu-wrapper');
   
     function closeMobileMenu(){
        menuButton.classList.remove('active');
        bodyEl.classList.remove('lock');
        menuNav.classList.remove('active');
      }
      function openMobileMenu(){
        menuButton.classList.add('active');
        bodyEl.classList.add('lock');
        menuNav.classList.add('active');
      }
     menuButton.addEventListener('click', function(){
      if( menuButton.classList.contains('active')){
        closeMobileMenu();
      }else{
         openMobileMenu();
      }
     });
      
  const button = document.querySelector('.form-open');
  const anchor = document.querySelector('.form-open-anchor');

  if (!button || !anchor) return;

  function toggleFloatButton() {
    const { top } = anchor.getBoundingClientRect();
	console.log(top);
    button.classList.toggle('float-button', top < 290);
  }

  window.addEventListener('scroll', toggleFloatButton, { passive: true });
  window.addEventListener('resize', toggleFloatButton);
  toggleFloatButton();
  //popup
	const popupBtns = document.querySelectorAll('[data-popup-btn]');
	
	if(popupBtns.length >0){
		const  popups = document.querySelectorAll('[data-popup]');
		
		
		popupBtns.forEach(btn=>{
			btn.addEventListener('click', ()=>{
				const  popupIsOpen = document.querySelector('.popup-open');
				if(popupIsOpen ){
					popupIsOpen.classList.remove('popup-open');
					console.log(555);				
				}
				const btnData = btn.getAttribute('data-popup-btn');
				console.log(btnData);
				popups.forEach(pop=>{
					const popupData = pop.dataset.popup;
					if(btnData == popupData){
						pop.classList.add('popup-open');	
					}
				})
			})
		})
	}
});