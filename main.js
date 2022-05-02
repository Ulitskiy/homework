function switchImage(img = '.image', switchButton = '.switch-btn'){
    let image = document.querySelectorAll(img);
    let switchBtn = document.querySelectorAll(switchButton);
    if(image.length <= 0){
        console.error('Элемент image не существует');
        return;
    }
    if(switchBtn.length <= 0){
        console.error('Элемента switchBtn не существует');
        return;
    }
    
    for(let i = 0; i < switchBtn.length; i++){
        image[i].style.display = "none";
        image[0].style.display = "block";
        switchBtn[i].addEventListener('click', () => {

            if(image[i].style.display = "none"){
                image[i].style.display = "block";
            }else{
                image[i].style.display = "none";
            }

            for(let j = 0; j < switchBtn.length; j++){
                if (i != j){
                    image[j].style.display = "none";
                }
            }
        })
    }
}
switchImage('.image', '.switch-btn')