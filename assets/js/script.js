const hamburger = document.querySelector('.hamburger')

function toggleHamburger(e){
    hamburger.classList.toggle('active')

    if(hamburger.classList.contains('active')) document.body.style.overflowY = 'hidden'
    else document.body.style.overflowY = 'auto'
}

hamburger.addEventListener('click', (e)=>{
    toggleHamburger(e)
})

//Scroll
const headerContainer = document.querySelector('.headerContainer') 

function changHeader(){
    const scroll = window.pageYOffset

    if(scroll === 0){
        headerContainer.classList.add('fullTop')
        return
    }
    headerContainer.classList.remove('fullTop')
}

window.addEventListener('scroll', ()=>{
    changHeader()
})