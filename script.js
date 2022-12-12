let gameBoard = (function(){
    let gameboard = ['','','','','','','','',''];
    function getBoard(){
        return gameboard
    }
    return{
        getBoard
    }
})();

let player = function(name, mark){
    this.name = name
    this.mark = mark
    return{
        name,
        mark
    }
};

let gameController = (function(){  
    let player1
    let player2
    function starting(){
        let startingGame = document.querySelector('.starting-game')
        let startingScreen = document.querySelector('.starting-screen')
        let square = document.querySelectorAll('.square')
        startingGame.addEventListener('click',()=>{
            if(document.getElementById('player1').value == '' ||
               document.getElementById('player2').value == ''){
                alert("Please, enter names")
            }else{
                startingScreen.style.display = 'none'
                for(let i = 0; i < button.length; i++){
                square[i].style.display = 'block'
                } 
                let player1Name = document.getElementById('player1').value
                let player2Name = document.getElementById('player2').value
                player1 = player(player1Name, 'X')
                player2 = player(player2Name, 'O')
                mark = player1.mark
                document.querySelector('.turn').innerHTML=`${player1.name}'s turn`
            }
        })
    }
    starting()
    let button = document.querySelectorAll('.square')
        for (let i = 0; i < button.length; i++){
            button[i].addEventListener('click',()=>{
            button[i].innerHTML = mark
            button[i].disabled=true
            gameBoard.getBoard()[(button[i].dataset.number)-1] = mark
            
            if((gameBoard.getBoard()[0]===player1.mark&&
            gameBoard.getBoard()[1]===player1.mark&&
            gameBoard.getBoard()[2]===player1.mark)||
            (gameBoard.getBoard()[3]===player1.mark&&
            gameBoard.getBoard()[4]===player1.mark&&
            gameBoard.getBoard()[5]===player1.mark)||
            (gameBoard.getBoard()[6]===player1.mark&&
            gameBoard.getBoard()[7]===player1.mark&&
            gameBoard.getBoard()[8]===player1.mark)||
            (gameBoard.getBoard()[0]===player1.mark&&
            gameBoard.getBoard()[4]===player1.mark&&
            gameBoard.getBoard()[8]===player1.mark)||
            (gameBoard.getBoard()[2]===player1.mark&&
            gameBoard.getBoard()[4]===player1.mark&&
            gameBoard.getBoard()[6]===player1.mark)||
            (gameBoard.getBoard()[0]===player1.mark&&
            gameBoard.getBoard()[3]===player1.mark&&
            gameBoard.getBoard()[6]===player1.mark)||
            (gameBoard.getBoard()[1]===player1.mark&&
            gameBoard.getBoard()[4]===player1.mark&&
            gameBoard.getBoard()[7]===player1.mark)||
            (gameBoard.getBoard()[2]===player1.mark&&
            gameBoard.getBoard()[5]===player1.mark&&
            gameBoard.getBoard()[8]===player1.mark)){
                let square = document.querySelectorAll('.square')
                for(let i = 0; i < button.length; i++){
                    square[i].disabled=true
                } 
                let turn = document.querySelector('.turn').style.display='none'
                let whoWin = document.querySelector('.who-win')
                whoWin.style.display='block'
                whoWin.innerHTML=`${player1.name} won`
                let restart = document.querySelector('.restart')
                restart.style.display='block'
                restart.addEventListener('click', ()=>{
                    location.reload()
                    return false
                })
            
            }else if((gameBoard.getBoard()[0]===player1.mark&&
            gameBoard.getBoard()[1]===player2.mark&&
            gameBoard.getBoard()[2]===player2.mark)||
            (gameBoard.getBoard()[3]===player2.mark&&
            gameBoard.getBoard()[4]===player2.mark&&
            gameBoard.getBoard()[5]===player2.mark)||
            (gameBoard.getBoard()[6]===player2.mark&&
            gameBoard.getBoard()[7]===player2.mark&&
            gameBoard.getBoard()[8]===player2.mark)||
            (gameBoard.getBoard()[0]===player2.mark&&
            gameBoard.getBoard()[4]===player2.mark&&
            gameBoard.getBoard()[8]===player2.mark)||
            (gameBoard.getBoard()[2]===player2.mark&&
            gameBoard.getBoard()[4]===player2.mark&&
            gameBoard.getBoard()[6]===player2.mark)||
            (gameBoard.getBoard()[0]===player2.mark&&
            gameBoard.getBoard()[3]===player2.mark&&
            gameBoard.getBoard()[6]===player2.mark)||
            (gameBoard.getBoard()[1]===player2.mark&&
            gameBoard.getBoard()[4]===player2.mark&&
            gameBoard.getBoard()[7]===player2.mark)||
            (gameBoard.getBoard()[2]===player2.mark&&
            gameBoard.getBoard()[5]===player2.mark&&
            gameBoard.getBoard()[8]===player2.mark)){
                let square = document.querySelectorAll('.square')
                for(let i = 0; i < button.length; i++){
                    square[i].disabled=true
                }  
                let turn = document.querySelector('.turn').style.display='none'
                let whoWin = document.querySelector('.who-win')
                whoWin.style.display='block'
                whoWin.innerHTML=`${player2.name} win`
                let restart = document.querySelector('.restart')
                restart.style.display='block'
                restart.addEventListener('click', ()=>{
                    location.reload()
                    return false
                })
            
            }else if(!(gameBoard.getBoard().includes(''))){
                let turn = document.querySelector('.turn').style.display='none'
                let whoWin = document.querySelector('.who-win')
                whoWin.style.display='block'
                whoWin.innerHTML=`Draw`
                let restart = document.querySelector('.restart')
                restart.style.display='block'
                restart.addEventListener('click', ()=>{
                    location.reload()
                    return false
                })
            }
            
            if(mark===player1.mark){
                mark = player2.mark
                let turn = document.querySelector('.turn').innerHTML=`${player2.name}'s turn`
            }else if(mark===player2.mark){
                mark = player1.mark
                let turn = document.querySelector('.turn').innerHTML=`${player1.name}'s turn`
            }
        })}    
})();