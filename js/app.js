// Primero tener elementos a los que se les aplica innerHTML
// Luego los elementos a los que les aplico eventos

const memeTopText = document.getElementById('memeTopText');
const memeBottomText = document.getElementById('memeBottomText')
const bigBoxMeme = document.getElementById('bigBoxMeme');
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
const download = document.getElementById('download');
const closeText = document.getElementById('closeText');
const asideText = document.getElementById('asideText');
const textButton = document.getElementById('textButton');
const closeImage = document.getElementById('closeImage');
const asideImage = document.getElementById('asideImage');
const imageButton = document.getElementById('imageButton');
const bright = document.getElementById('bright');
const opacity = document.getElementById('opacity');
const contrast = document.getElementById('contrast');
const blurRange = document.getElementById('blurRange');
const grayScale = document.getElementById('grayScale');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue');
const saturation = document.getElementById('saturation');
const invert = document.getElementById('invert');
const restart = document.getElementById('restart');
const memeColor = document.getElementById('memeColor');
const memeFilter = document.getElementById('memeFilter');
const darkButton = document.getElementById('darkCheck');
const header = document.querySelector('.header');
const icons = document.querySelector('.fas');
const body = document.getElementById('body');
const range = document.getElementsByClassName('range');




                // TEXT FUNCTIONS  

topText.addEventListener('keyup', () =>{
    memeTopText.innerHTML = topText.value.replace(/\n/g, "<br>");
})

bottomText.addEventListener('keyup', () =>{
    memeBottomText.innerHTML = bottomText.value.replace(/\n/g, "<br>");
})

topCheck.addEventListener('click', () =>{
    if(topCheck.checked){
        memeTopText.style.display = 'none';
        memeBox.style.backgroundSize = 'auto';
        memeBox.style.height = '55vh';
    } else{
        memeTopText.style.display = 'block'
        memeBox.style.backgroundSize = 'cover';
    }
})

bottomCheck.addEventListener('click', () =>{
    if(bottomCheck.checked){
        memeBottomText.style.display = 'none';
        memeBox.style.backgroundSize = 'auto';
    } else{
        memeBottomText.style.display = 'block';
        memeBox.style.backgroundSize = 'cover';
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
        memeBox.style.backgroundSize = 'auto';
        bigBoxMeme.style.backgroundColor = 'transparent';

    } else{
        memeTopText.style.backgroundColor = `${backColor.value}`;
        memeBottomText.style.backgroundColor = `${backColor.value}`;
        memeBox.style.backgroundSize = 'cover';
        bigBoxMeme.style.backgroundColor = 'black';
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




                  // CLOSE AND OPEN ASIDES

closeText.addEventListener('click', () =>{
    asideText.style.display = 'none';
})

textButton.addEventListener('click', () =>{
    asideText.style.display = 'block';
    asideImage.style.display = 'none';
})

closeImage.addEventListener('click', () =>{
    asideImage.style.display = 'none';
})

imageButton.addEventListener('click', () =>{
    asideImage.style.display = 'block';
    asideText.style.display = 'none';
})




                // IMAGE ASIDE

url.addEventListener('keyup', (e) =>{
    const urlImg = url.value;
    memeBox.style.backgroundImage = `url('${urlImg}')`;
    memeBox.style.backgroundPosition = 'center';
    memeBox.style.backgroundRepeat = "no-repeat";
    memeBox.style.backgroundSize = 'cover';
})

memeColor.addEventListener('input', () =>{
    memeBox.style.backgroundColor = `${memeColor.value}`;
})

memeFilter.addEventListener('change', () =>{
    memeBox.style.mixBlendMode = `${memeFilter.value}`;
})

const filters = () =>{
    memeBox.style.filter = `brightness(${bright.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blurRange.value}px) grayscale(${grayScale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturation.value}%) invert(${invert.value})`;
}

bright.addEventListener('change', () =>{
    return filters();
})

opacity.addEventListener('change', () =>{
    return filters();
})

contrast.addEventListener('change', ()=>{
    return filters();
})

blurRange.addEventListener('change', ()=>{
    return filters();
})

grayScale.addEventListener('change', ()=>{
    return filters();
})

sepia.addEventListener('change', ()=>{
    return filters();
})

hue.addEventListener('change', ()=>{
    return filters();
})

saturation.addEventListener('change', ()=>{
    return filters();
})

invert.addEventListener('change', ()=>{
    return filters();
})

restart.addEventListener('click', (e) =>{
    e.preventDefault();
    bright.value = 1;
    opacity.value = 1;
    contrast.value = 100;
    blurRange.value = 0;
    grayScale.value = 0;
    sepia.value = 0;
    hue.value = 0;
    saturation.value = 100;
    invert.value = 0;
    return filters();
})




                    // DARK AND LIGHT MODE

function lightMode(){
    document.documentElement.style.setProperty('--backgroundHeader', '#E0E0E0');
    document.documentElement.style.setProperty('--generalText', '#4E5665');
    document.documentElement.style.setProperty('--background', '#EEEEEE');
    document.documentElement.style.setProperty('--backgroundAside', '#FAFAFA');
    document.documentElement.style.setProperty('--backgroundMain', 'rgba(0, 0, 0, 0.08)');
    document.documentElement.style.setProperty('--inputsText', '#424242');
}

function darkMode(){
    document.documentElement.style.setProperty('--backgroundHeader', '#303030');
    document.documentElement.style.setProperty('--generalText', '#ffffff');
    document.documentElement.style.setProperty('--background', 'rgba(255, 255, 255, 0.6)');
    document.documentElement.style.setProperty('--backgroundAside', '#424242');
    document.documentElement.style.setProperty('--backgroundMain', 'rgba(0, 0, 0, 0.38)');
    document.documentElement.style.setProperty('--inputsText', '#303030');
}

darkButton.addEventListener('click',() => {    
    if(darkButton.checked){
        lightMode();
    } 
    else{
        darkMode();
    } 
})




                   // DOWNLOAD 

download.addEventListener('click', () =>{
    downloadImage();
})

const downloadImage = () =>{
    domtoimage.toBlob(bigBoxMeme).then(function (blob) {
        saveAs(blob, 'mi-meme.png');
    });
}

