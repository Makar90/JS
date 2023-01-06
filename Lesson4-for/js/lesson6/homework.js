console.log('JS Pattern commited');

function fooTask1() {
    let out = document.querySelector('.out1_1');
    out.innerHTML = 'Стрілкова функція';

    let double = n => n * 2;
    // те ж саме, що і: let double = function(n) { return n * 2 }    
    out.innerHTML += `
    ****************************************
        let double = n => n * 2;   
        out.innerHTML +=double(3);
            // те ж саме, що і: 
            let double = function(n) { return n * 2 } 
        out.innerHTML +=(double(3);  
    _______________________________________
    => ${double(3)}
    `;


    let age = 19;
    let welcome = (age < 18) ?
        () => `Привіт` :
        () => `Вітання!`;
    //() => out.innerHTML += (`Вітання!`);
    //welcome();
    out.innerHTML += `
    ****************************************
        let age = 18;
        let welcome = (age < 18) ?
            () => "Привіт" :
            () => "Вітання!";
            //() => out.innerHTML += ("Вітання!"); -відпрацює зовсім інше
        welcome();  
    _______________________________________
    => ${welcome()}    
    `;

}
fooTask1();


