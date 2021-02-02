// Primero tener elementos a los que se les aplica innerHTML
// Luego los elementos a los que les aplico eventos

const memeTopText = document.getElementById('memeTopText');
const memeBottomText = document.getElementById('memeBottomText')
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const topCheck = document.getElementById('topCheck');
const bottomCheck = document.getElementById('bottomCheck');
const font = document.getElementById('font');
const fontSize = document.getElementById('fontSize');
const leftAlign = document.getElementById('leftAlign');
const centerAlign = document.getElementById('centerAlign');
const rightAlign = document.getElementById('rightAlign');
const textColor = document.getElementById('textColor');
const backColor = document.getElementById('backColor');
const transparent = document.getElementById('transparent');
const outlineNone = document.getElementById('outlineNone');
const outlineWhite = document.getElementById('outlineWhite');
const outlineBlack = document.getElementById('outlineBlack');
const spacing = document.getElementById('spacing');
const lineSpacing = document.getElementById('lineSpacing');
const url = document.getElementById('url');
const memeBox = document.getElementById('memeBox');

topText.addEventListener('keyup', () =>{
    memeTopText.innerHTML = topText.value;
})

bottomText.addEventListener('keyup', () =>{
    memeBottomText.innerHTML = bottomText.value;
})

topCheck.addEventListener('click', () =>{
    if(topCheck.checked){
        memeTopText.style.display = 'none'
        memeBox.style.height = '55vh';
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
    memeBottomText.style.fontFamily = `${font.value}`;
})

fontSize.addEventListener('keyup', () =>{
    memeTopText.style.fontSize = `${fontSize.value}px`;
    memeBottomText.style.fontSize = `${fontSize.value}px`;
})

leftAlign.addEventListener('click', (e) =>{
    e.preventDefault();
    memeTopText.style.textAlign = 'left';
    memeBottomText.style.textAlign = 'left';
})

centerAlign.addEventListener('click', (e) =>{
    e.preventDefault();
    memeTopText.style.textAlign = 'center';
    memeBottomText.style.textAlign = 'center';
})

rightAlign.addEventListener('click', (e) =>{
    e.preventDefault();
    memeTopText.style.textAlign = 'right';
    memeBottomText.style.textAlign = 'right';
})

textColor.addEventListener('input', () =>{
    memeTopText.style.color = `${textColor.value}`;
    memeBottomText.style.color = `${textColor.value}`;
})

backColor.addEventListener('input', () =>{
    memeTopText.style.backgroundColor = `${backColor.value}`;
    memeBottomText.style.backgroundColor = `${backColor.value}`;
})

transparent.addEventListener('click', () =>{
    if(transparent.checked){
        memeTopText.style.backgroundColor = 'transparent';
        memeBottomText.style.backgroundColor = 'transparent';
    } else{
        memeTopText.style.backgroundColor = `${backColor.value}`;
        memeBottomText.style.backgroundColor = `${backColor.value}`;
    }
})

outlineNone.addEventListener('click', (e) =>{
    e.preventDefault();
    outlineNone.checked = memeTopText.style.textShadow = "none";
    outlineNone.checked = memeBottomText.style.textShadow = "none";
})

outlineWhite.addEventListener('click', (e) =>{
    e.preventDefault();
    outlineWhite.checked = memeTopText.style.textShadow = "2px 2px 0 #ffffff, 2px -2px 0 #ffffff, -2px 2px 0 #ffffff, -2px -2px 0 #ffffff, 2px 0px 0 #ffffff, 0px 2px 0 #ffffff, -2px 0px 0 #ffffff, 0px -2px 0 #ffffff";
    outlineWhite.checked = memeBottomText.style.textShadow = "2px 2px 0 #ffffff, 2px -2px 0 #ffffff, -2px 2px 0 #ffffff, -2px -2px 0 #ffffff, 2px 0px 0 #ffffff, 0px 2px 0 #ffffff, -2px 0px 0 #ffffff, 0px -2px 0 #ffffff";
})

outlineBlack.addEventListener('click', (e) =>{
    e.preventDefault();
    outlineBlack.checked = memeTopText.style.textShadow = "2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000, -2px 0px 0 #000000, 0px -2px 0 #000000";
    outlineBlack.checked = memeBottomText.style.textShadow = "2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000, -2px 0px 0 #000000, 0px -2px 0 #000000";
})

spacing.addEventListener('keyup', () => {
    memeTopText.style.padding = `${spacing.value}px`;
    memeBottomText.style.padding = `${spacing.value}px`;
})

lineSpacing.addEventListener('change', () =>{
    memeTopText.style.lineHeight = `${lineSpacing.value}`;
    memeBottomText.style.lineHeight = `${lineSpacing.value}`;
})

url.addEventListener('keyup', (e) =>{
    const urlImg = url.value;
    memeBox.style.backgroundImage = `url('${urlImg}')`;
    memeBox.style.backgroundPosition = 'center';
    memeBox.style.backgroundRepeat = "no-repeat";
    memeBox.style.backgroundSize = 'contain';
})