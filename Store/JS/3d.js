

export function startRotate(event){
  const cardItem = this.querySelector('.additional-div')
  const halfHeight = cardItem.offsetHeight / 2
  const halfWidth = cardItem.offsetWidth / 2 
  cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 15 +'deg) rotateY('+ (event.offsetX - halfWidth) / 10 + 'deg)'
}
export function stopRotate(event){
  const cardItem = this.querySelector('.additional-div')
  cardItem.style.transform = 'rotate(0)'
}

// const cards = document.querySelectorAll('.product');

// for(let i=0; i <cards.length; i++){
// const card=cards[i]
// card.addEventListener('mousemove',startRotate)
// card.addEventListener('mouseout',stopRotate)
// }


// function startRotate(event){
//     const cardItem = this.querySelector('.additional-div')
//     const halfHeight = cardItem.offsetHeight / 2
//     const halfWidth = cardItem.offsetWidth / 2 
//     cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 15 +'deg) rotateY('+ (event.offsetX - halfWidth) / 10 + 'deg)'
//   }


//   function stopRotate(event){
//     const cardItem = this.querySelector('.additional-div');
//     cardItem.style.transform = 'rotate(0)';
//   }
