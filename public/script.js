

const imageViewPort = document.querySelector('#imageviewport');
const adViewPort = document.querySelector('#advertviewport')

//navigators
const navleft = document.querySelector('.mediabox #navleft');
const navright = document.querySelector('.mediabox #navright');
const adnavleft = document.querySelector('.adbox #navleft')
const adnavright = document.querySelector('.adbox #navright')
let adpages;
let adwidth;
let adviewportwidth;
let extra;

//width of image box and adpage box
const images = document.querySelectorAll('#images')


//size of boxes
const boxwidth =  images[0].getBoundingClientRect().width
const mediaWidth = imageViewPort.scrollWidth;
const offs = (mediaWidth - (boxwidth * images.length))/images.length




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
        const vadoswrapper = document.createElement('div');
        const vados_left = document.createElement('div');
        const vados_right = document.createElement('div');
        const vados_left_head = document.createElement('div')
        const vados_left_para = document.createElement('div');
        const vados_left_link = document.createElement('a');
        const vados = document.createElement('div');
        vados.className = 'vados';


        vadoswrapper.className = 'vados-wrapper';
        vados_left.className = 'vados-left';
        vados_right.className = 'vados-right';
        vados_left_head.id = "vados-left-head";
        vados_left_para.id = "vados-left-para";
        vados_left_link.href = "#";

        vados_left_head.textContent = content.header;
        vados_left_para.textContent = content["header-text"];
        vados_left_link.innerHTML = content["button-text"]+"<span><ion-icon name='arrow-forward'></ion-icon></span>";
        vados_left_link.style.color = content.color;
        vados_left_link.style.border = `solid 1px ${content.color}`
        vados_left.append(vados_left_head,vados_left_para,vados_left_link);
        vadoswrapper.append(vados_left,vados_right);
        vados.appendChild(vadoswrapper);
        vados.style.backgroundColor = content.background;
        vados.style.color = content.color;

        adViewPort.appendChild(vados);

    })
}).then(()=>{
     adpages = document.querySelectorAll('.vados')
     adwidth = adpages[0].getBoundingClientRect().width;
     adviewportwidth = adViewPort.scrollWidth;
     extra = (adviewportwidth-(adwidth*adpages.length))/adpages.length
})




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