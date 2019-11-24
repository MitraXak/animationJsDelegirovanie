let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');
//animation kvadrat
function animation(){
    let pos = 0;

    let id = setInterval(frame, 10);
    //Изменяет координаты
    function frame() {
        if(pos == 500-125){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', animation);

let btnBlock = document.querySelector('.boxBtn'),
    btns = document.querySelector('button');
//click all btn
btnBlock.addEventListener('click', function(e){
    if(event.target && event.target.tagName == 'BUTTON'){
        console.log('hello');
    }
})