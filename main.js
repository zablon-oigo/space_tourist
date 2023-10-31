// // Image 
// function updateImageBasedOnScreenSize() {
//     // Get the screen width
//     let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
//     const desktopImage = 'assets/home/background-home-desktop.jpg';
//     const mobileImage = 'assets/home/background-home-mobile.jpg';
//     const tabletImage = 'assets/home/background-home-mobile.jpg';

    
  
    
//     if (screenWidth < 768) {
//         image.src = mobileImage;
//         console.log("Small screen detected.");
//     } else if (screenWidth < 1024) {
//         image.src = desktopImage,tabletImage;
//         console.log("Medium screen detected.");
//     } else {
//         image.src = desktopImage;
//         console.log("Large screen detected.");
//     }
// }

// // Call the function initially
// updateImageBasedOnScreenSize();

// // Set up an interval to check and update the screen size every 1 seconds
// setInterval(updateImageBasedOnScreenSize, 1000); 

// Toggle Menu

const initApp=()=>{
   const open=document.querySelector('#openBtn')
   const close=document.querySelector('#closeBtn')
   const menu=document.querySelector('#menu')

   const toggleMenu=()=>{
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
   }

   open.addEventListener('click',toggleMenu)
   close.addEventListener('click',toggleMenu)


}

document.addEventListener('DOMContentLoaded', initApp)