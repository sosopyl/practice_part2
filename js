"use strict";
///336
// let elem = document.querySelector('#elem')
// let remove = document.querySelector('#remove')

// remove.addEventListener('click', function(event){
//     elem.remove()
//     event.preventDefault()
// })

//337

// let elems = document.querySelectorAll('li')
// for(let elem of elems){
//     let remove = document.createElement('a')
//     remove.href = ''
//     remove.textContent = ' remove'
//     elem.appendChild(remove)
//     remove.addEventListener('click', function(event){
//         elem.remove()
//         event.preventDefault()
//     })
// }

//2

// let table = document.querySelector('#parent')

// let trs = document.querySelectorAll('#table tr');

//     for (let tr of trs) {
//         let td = document.createElement('td');
//         let remove = document.createElement('a')
//         remove.href = ''
//         remove.textContent = ' remove'
//         td.appendChild(remove)
//         remove.addEventListener('click', function(event){
//             tr.remove()
//             event.preventDefault()
//         })

//         tr.appendChild(td);
//   }

//338
//1
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');

// input.value = elem.textContent; 

// input.addEventListener('input', function() {
// 	elem.textContent = this.value;
// });

//2
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		this.remove(); 
// 	});
	
// 	elem.parentElement.appendChild(input);
// });

//339

// let elem = document.querySelector('p')

// elem.addEventListener('click', function func(){
//     let input = document.createElement('input')

//     input.value = elem.textContent
//     elem.textContent = ''
//     elem.appendChild(input)

//     input.addEventListener('blur', function(){
//          elem.textContent = this.value
//          elem.addEventListener('click', func);
//     })
//     elem.removeEventListener('click', func);
// })

//340

// let elems = document.querySelectorAll('li')
// for(let elem of elems){
//     elem.addEventListener('click', function func(){
//             let input = document.createElement('input')
        
//             input.value = elem.textContent
//             elem.textContent = ''
//             elem.appendChild(input)
        
//             input.addEventListener('blur', function(){
//                  elem.textContent = this.value
//                  elem.addEventListener('click', func);
//             })
//             elem.removeEventListener('click', func);
//         })
// }

//2

// let elems = document.querySelectorAll('td')
//  for(let elem of elems){
//     elem.addEventListener('click', function func(){
//             let input = document.createElement('input')
        
//             input.value = elem.textContent
//             elem.textContent = ''
//             elem.appendChild(input)
        
//             input.addEventListener('blur', function(){
//                  elem.textContent = this.value
//                  elem.addEventListener('click', func);
//             })
//             elem.removeEventListener('click', func);
//         })
// }

//341
// let elems = document.querySelectorAll('span')
// for(let elem of elems){
//     elem.addEventListener('click', function func(){
//             let input = document.createElement('input')
        
//             input.value = elem.textContent
//             elem.textContent = ''
//             elem.appendChild(input)
        
//             input.addEventListener('blur', function(){
//                  elem.textContent = this.value
//                  elem.addEventListener('click', func);
//             })
//             elem.removeEventListener('click', func);
//         })
// }
// let elems2 = document.querySelectorAll('p')

// for ( let elem2 of elems2){
//     let remove = document.createElement('a')
//     remove.href = '#'
//     remove.textContent = ' remove'
//     remove.addEventListener('click', function(event){
//     elem2.remove()
//     event.preventDefault()
//     })
//     elem2.appendChild(remove)

// }
