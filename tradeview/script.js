const text1 = document.getElementById('text-1');
const text2 = document.getElementById('text-2');
const btn = document.querySelector('.searchloader')
const section = document.querySelector('section')
const mediabox = document.createElement('div')
const mediacards = [
    {
        title: "Stock",
        id: 'card-1',
        backgroundColor: '#002c5e',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    },
    {
        title: "Crytocurrencies",
        id: 'card-2',
        backgroundColor: '#268FD3',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    },
    {
        title: "Bond",
        id: 'card-3',
        backgroundColor: '#030a16',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"

    },

]

async function animet(){
    await new Promise((resolve,reject)=>{
        resolve(
            setTimeout(()=>{
                text1.classList.remove('hide');
                text2.classList.remove('hide');

            })
        )
    })
    

}
btn.addEventListener('click',(e)=>{
    e.preventDefault();
})
animet().then(()=>{
    setTimeout(()=>{
        btn.classList.remove('hide2');
    },1000)
}).then(()=>{
    setTimeout(()=>{
        mediabox.className = 'mediabox hide'
        section.parentElement.appendChild(mediabox)
        setTimeout(()=>{
            mediabox.classList.remove('hide')

        },200)
       
    },2000)
}).then(()=>{
    setTimeout(()=>{
        mediacards.forEach((card)=>{
            const mcard = document.createElement('div')
            mcard.id = card.id;
            mcard.className = 'mcard';
            mcard.style.color = 'white'
            mcard.style.backgroundColor = card.backgroundColor;
            const header = document.createElement('div');
            header.id = 'mcardHeader';
            header.textContent = card.title;
            const cardbody = document.createElement('div')
            cardbody.id = 'cardbody';
            cardbody.textContent = card.content;
            mcard.append(header,cardbody)
            mediabox.appendChild(mcard);
        },100)
    })
}).then((mcard)=>{
    setTimeout(()=>{
        const cards = document.querySelectorAll('.mcard');

        cards.forEach((card)=>{
            card.style.width = `clamp(300px,${((100/mediacards.length)-5)+'%'},450px)`
            card.style.borderRadius = '10px'
        })
        
        
    },5000)
})
