// Primero tener elementos a los que se les aplica innerHTML
// Luego los elementos a los que les aplico eventos

const memeTopText = document.getElementById('memeTopText');
const memeBottomText = document.getElementById('memeBottomText')
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const topCheck = document.getElementById('topCheck');
const bottomCheck = document.getElementById('bottomCheck');
const font = document.getElementById('font');

topText.addEventListener('keyup', () =>{
    memeTopText.innerHTML = topText.value;
})

bottomText.addEventListener('keyup', () =>{
    memeBottomText.innerHTML = bottomText.value;
})

topCheck.addEventListener('click', () =>{
    if(topCheck.checked){
        memeTopText.style.display = 'none'
    } else{
        memeTopText.style.display = 'block'
    }
})

bottomCheck.addEventListener('click', () =>{
    if(bottomCheck.checked){
        memeBottomText.style.display = 'none'
    } else{
        memeBottomText.style.display = 'block'
    }
})

font.addEventListener('change', () =>{
    memeTopText.style.fontFamily = `${font.value}`;
})

font.addEventListener('change', () =>{
    memeBottomText.style.fontFamily = `${font.value}`;
})