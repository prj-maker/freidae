var bgcount = 57;
function changebg() {
    var num =  Math.ceil( Math.random() * bgcount );
    document.body.style.background = 'url(/freidae/data/backgrounds/BackgroundImage'+num+'.jpg)';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '100% 100%';
    document.body.style.backgroundOrigin = 'border-box';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'center center';
}