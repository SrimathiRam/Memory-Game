const selectors={
    boardcontainer : document.querySelector('.board-container'),
    board : document.querySelector('.board')
    moves :document.querySelector('.moves'),
    timer : document.querySelector('.timer'),
    start : document.querySelector('.button'),
    win :document.querySelector('.win')

};

const state={

    gamestarted :false;
    flippedcards: 0;
    totalflips:0;
    totaltime:0;
    loop:null;
}

const shuffle=array => {
    const clonedArray=[...array];

    for(let i=clonedArray.length-1;i>0;i--)
    {
    const randomIndex=Math.floor(Math.random()*(i+1));
    const original=clonedArray[i];
    clonedArray[i]=clonedArray[randomIndex];
    clonedArray[randomIndex]=original;

    }

    return clonedArray;
}
const pickRandom=(array,items) => {
    const clonedArray=[...array];
    const randomPicks=[];
    for(let  i=0;i<items;i++)
     {
        const randomIndex=Math.floor(Math.random()*clonedArray.length);
        randomPicks.push(clonedArray[randomIndex]);
        clonedArray.splice(randomIndex,1);
     }
     return randomPicks;
}
const generateGame =() =>{
    const dimension=selectors.board.getAttribute('data-dimension');

    if(dimension % 2 !==0){
        throw new Error("The dimension of the  board must be an even number")
    }
    const emojies =['❤','💛','💚','💙','🖤','🤍','🤎','💜','❣','💗']
    const picks=pickRandom(emojies,(dimension*dimension)/2);
    const items=shuffle([...picks,...picks]);
    const cards =
    <div class ="board" style="grid-template-columns:repeat(${dimension},auto)">
            ${items.map(item=>'
               <div class="card">
                 <div class="card-front"></div>
                 <div class="card-back">${item}</div>
                </div>   
            ').join('')}
        </div>
    '

    const parser=new DOMParser().parseFromString(cards,'text/html');
    selectors.board.replaceWith(parser.querySelector('.board'))
};

const startGme=() => {
    state.gameStarted =true;
    selectors.start.classList.add('disabled');

    state.loop=setInterval(()=>{
        state.totalTime++;

        selectors.moves.innerText = '${state.totalFlips} moves';

    })
}


        
    
