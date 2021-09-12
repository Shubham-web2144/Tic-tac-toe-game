const btnX = document.querySelector('.btnX'), 
btnO = document.querySelector('.btnO'),
game_board = document.querySelector('.gameBoard'),
playX = document.querySelector('.playX'),
playO = document.querySelector('.playO'),
inp_box = document.querySelectorAll('.inpBox')
x_turn = 'X',
o_turn = 'O',
game_play = document.querySelector('.gamePlay'),
game_player = document.querySelector('.gamePlayer'),
btn = document.querySelector('.btn');
/* let b1 = document.querySelector('.b1').innerHTML ,
b2 = document.querySelector('.b2').innerHTML ,
b3 = document.querySelector('.b3').innerHTML ,
b4 = document.querySelector('.b4') ,
b5 = document.querySelector('.b5') ,
b6 = document.querySelector('.b6') ,
b7 = document.querySelector('.b7') ,
b8 = document.querySelector('.b8') ,
b9 = document.querySelector('.b9');
*/
let result_box = document.querySelector('.result-box');
let result = document.querySelector('#res');
let player_info = document.querySelector('.playerInfo'),
restart_btn = document.querySelector('.restart'),
body = document.querySelector('body');

restart_btn.addEventListener('click',()=>{
    window.location.reload();
});


let playerO_sign = 'O';
let playerX_sign = 'X';


/*function run(){
    startGame();
}

restart_btn.addEventListener('click', ()=>{
   //game_board.style.display = 'block';
   result_box.style.display = 'none';
    player_info.style.display = 'block';
    
  //  run();
});
*/


btnX.addEventListener('click',()=>{
    game_board.style.display = 'block';
   
    playO.classList.add('active');
    playTurn();
    });

 

btnO.addEventListener('click', () => {
    game_board.style.display = 'block';
    
    playX.classList.add('active');
    playTurn();
    
});


/*
for(let j = 0; j<inp_box.length; j++ ){
    inp_box[j].addEventListener('click', ()=>{
       setTimeout(autoBot,600);
       
    });
}
function autoBot(){
    let arr = [1,2,3,4,5,6,7,8,9];
    for(let i = 0; i< arr.length; i++){
        if(inp_box[i].childElementCount !== 0){
            arr.push(i);
            //console.log(arr);
     }
    }
    let random_box = arr[Math.floor(Math.random() * 8)];
   console.log(random_box);
    if (arr.length > 0) {
        if (playX.classList.contains('active')) {
            inp_box[random_box].innerHTML = 'X';
            playO.classList.add('active');
            playX.classList.remove('active'); 
        }
        else {
            inp_box[random_box].innerHTML = 'O';
            playX.classList.add('active');
            playO.classList.remove('active'); 
        }
    }
   inp_box[random_box].style.pointerEvents= 'none';
    
}

*/

function playTurn(){
    for(let i=0; i<inp_box.length; i++){ 
        inp_box[i].addEventListener('click',()=>{
            if (playO.classList.contains('active')) {
                  
                   inp_box[i].innerHTML = 'O';
                   playX.classList.add('active');
                   playO.classList.remove('active');
                   inp_box[i].style.pointerEvents = 'none';
               inp_box[i].setAttribute('id', playerO_sign);
               
              
            //  getWinner();
             
            }
            else {
            player_sign = 'X';    
             inp_box[i].innerHTML = 'X';
             playO.classList.add('active');
             playX.classList.remove('active');
             inp_box[i].style.pointerEvents = 'none';
            inp_box[i].setAttribute('id',player_sign);
         //   getWinner();
        
      }
      
      getWinner(); 
   });
   
}

}


function getWinner(){
    for (let i = 0; i < inp_box.length; i++) {
        if(inp_box[0].id == 'X' && inp_box[1].id == 'X' && inp_box[2].id == 'X' || inp_box[0].id == 'O' && inp_box[1].id == 'O' && inp_box[2].id == 'O') {
           // console.log('winner ' + inp_box[i].id);
            result_box.style.display ='block';
            game_board.style.display = 'none';
            result.innerHTML = inp_box[1].id;
            break;
        }
        else if(inp_box[3].id == 'X' && inp_box[4].id == 'X' && inp_box[5].id == 'X' || inp_box[3].id == 'O' && inp_box[4].id == 'O' && inp_box[5].id == 'O'){
            result_box.style.display ='block';
            game_board.style.display = 'none';
            result.innerHTML = inp_box[4].id;
            
            break;
        }
        else if(inp_box[6].id == 'X' && inp_box[7].id == 'X' && inp_box[8].id == 'X' || inp_box[6].id == 'O' && inp_box[7].id == 'O' && inp_box[8].id == 'O'){
            result_box.style.display ='block';
            game_board.style.display = 'none';
            result.innerHTML = inp_box[7].id;
            
            break;
        }
        else if (inp_box[0].id == 'X' && inp_box[4].id == 'X' && inp_box[8].id == 'X' || inp_box[0].id == 'O' && inp_box[4].id == 'O' && inp_box[8].id == 'O') {
            result_box.style.display ='block';
            game_board.style.display = 'none';
            result.innerHTML = inp_box[4].id;
            
            break;
        }
        else if (inp_box[2].id == 'X' && inp_box[4].id == 'X' && inp_box[6].id == 'X' || inp_box[2].id == 'O' && inp_box[4].id == 'O' && inp_box[6].id == 'O') {
            result_box.style.display ='block';
            game_board.style.display = 'none';
            result.innerHTML = inp_box[4].id;
            
            break;
        }
        else if (inp_box[0].id == 'X' && inp_box[3].id == 'X' && inp_box[6].id == 'X' || inp_box[0].id == 'O' && inp_box[3].id == 'O' && inp_box[6].id == 'O') {
            result_box.style.display ='block';
            game_board.style.display = 'none';
            result.innerHTML = inp_box[3].id;
            
            break;
        }
        else if (inp_box[1].id == 'X' && inp_box[4].id == 'X' && inp_box[7].id == 'X' || inp_box[1].id == 'O' && inp_box[4].id == 'O' && inp_box[7].id == 'O') {
            result_box.style.display ='block';
            game_board.style.display = 'none';
            result.innerHTML = inp_box[4].id;
            
            break;
        }
        else if (inp_box[2].id == 'X' && inp_box[5].id == 'X' && inp_box[8].id == 'X' || inp_box[2].id == 'O' && inp_box[5].id == 'O' && inp_box[8].id == 'O') {
            result_box.style.display ='block';
            game_board.style.display = 'none';
            result.innerHTML = inp_box[5].id;
            
            break;
        }
        else{
            
        }
    }
}


