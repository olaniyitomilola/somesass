const text1 = document.getElementById('text-1');
const text2 = document.getElementById('text-2');
const btn = document.querySelector('.searchloader')

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
    },2000)
})
