const mediacomt = document.querySelector('#imageviewport');

const navleft = document.getElementById('navleft');
const navright = document.getElementById('navright');
const images = document.querySelectorAll('#images')
const boxwidth =  images[0].getBoundingClientRect().width
const mediaWidth = mediacomt.scrollWidth;
const extra = mediaWidth - (boxwidth * images.length)
const offs = extra/images.length
const theLeft = mediacomt.getClientRects()

navleft.addEventListener('click',()=>{
    mediacomt.scrollBy(-(boxwidth + offs),0)
})
navright.addEventListener('click',()=>{
    mediacomt.scrollBy(boxwidth + offs,0)
})
if(images[0].getBoundingClientRect().left === 0){
    navleft.removeEventListener('click',()=>{
        mediacomt.scrollBy(-(boxwidth + offs),0)
    });
}
