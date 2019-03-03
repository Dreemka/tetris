let tetris = document.createElement('div');
tetris.classList.add('tetris');

for (let i=1; i<181; i++){
  let excel = document.createElement('div');
  excel.classList.add('excel');
  tetris.appendChild(excel);
}

let mine = document.getElementsByClassName('mine')[0];
mine.appendChild(tetris);

let excel = document.getElementsByClassName('excel');
let i = 0;
for (let y = 18; y>0; y-- ){
  for (let x = 1; x < 11; x++) {
    excel[i].setAttribute('posX' , x);
    excel[i].setAttribute('posY' , y);
    i++;
  }
}
