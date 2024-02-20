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
