

const imageViewPort = document.querySelector('#imageviewport');
const adViewPort = document.querySelector('#advertviewport')

//navigators
const navleft = document.querySelector('.mediabox #navleft');
const navright = document.querySelector('.mediabox #navright');
const adnavleft = document.querySelector('.adbox #navleft')
const adnavright = document.querySelector('.adbox #navright')


//width of image box and adpage box
const images = document.querySelectorAll('#images')
const adpages = document.querySelectorAll('.vados')

//size of boxes
const boxwidth =  images[0].getBoundingClientRect().width
const mediaWidth = imageViewPort.scrollWidth;
const offs = (mediaWidth - (boxwidth * images.length))/images.length

const adwidth = adpages[0].getBoundingClientRect().width;
const adviewportwidth = adViewPort.scrollWidth;
const extra = (adviewportwidth-(adwidth*adpages.length))/adpages.length


console.log(adviewportwidth);
adnavright.addEventListener('click',()=>{
    adViewPort.scrollBy(adwidth+extra,0)
})
adnavleft.addEventListener('click',()=>{
    adViewPort.scrollBy(-(adwidth+extra),0)
})

//navleft.addEventListener('click',scroller(imageViewPort,-(boxwidth+offs)))
//navright.addEventListener('click',scroller(imageViewPort,boxwidth+offs))



var content_data = [];
datagetting(content_data).then(()=>{
    content_data[0].adcontent.forEach((content)=>{
        const adipage = document.createElement('div');
        adipage.className = 'vados';
        adipage.textcontent = content.header;
        adipage.style.backgroundColor = content.background
        adViewPort.appendChild(adipage)
    })
});




//functions

const scroller = (view,scrolldist)=>{
    view.scrollBy(scrolldist,0)
}

async function datagetting (content_data){
    const content = await fetch ("../adicontent.json")
     let contentdata = await content.json()
    content_data.push(contentdata)
    return content_data;
}