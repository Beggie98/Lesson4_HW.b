let amount = +prompt('Введите количество примеров')

function result(min, max){
    let rand = Math.floor(Math.random() * (max - min) + min)
    return rand
}
function operator(){
    let x = Math.floor(Math.random()*(4+1-1)+1);
    return x
}

for(i = 0; i < amount; i++){
    let a = result(1, 10);
    let b = result(1, 10);
    let n = operator();
    if(n==1){
        let answer = +prompt(a + ' + ' + b + ' =?')
        if(answer == a+b){
            console.log('Ваш ответ верный: '+ answer);
        }else{
            console.log('Ваш ответ не верный: '+ answer + ', Правильный ответ: '+(a+b));
        }
    }
    else if(n==2){
        let answer = +prompt(a + ' - ' + b + ' =?')
        if(answer == a-b){
            console.log('Ваш ответ верный: '+ answer);
        }else{
            console.log('Ваш ответ не верный: '+ answer + ', Правильный ответ: '+(a-b));
        }
    }
    else if(n==3){
        let answer = +prompt(a + ' * ' + b + ' =?')
        if(answer == a*b){
            console.log('Ваш ответ верный: '+ answer);
        }else{
            console.log('Ваш ответ не верный: '+ answer + ', Правильный ответ: '+(a*b));
        }
    }
    else if(n==4){
        let answer = +prompt(a + ' / ' + b + ' =?')
        if(answer == a/b){
            console.log('Ваш ответ верный: '+ answer);
        }else{
            console.log('Ваш ответ не верный: '+ answer + ', Правильный ответ: '+(a/b));
        }
    }
}
