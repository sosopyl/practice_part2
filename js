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

//342

//1 and 2

// let elems = document.querySelectorAll('p')

// for(let elem of elems){
//     let a = document.createElement('a')
//     a.textContent = ' перечернуть'
//     a.href = '#'
//     elem.appendChild(a)
//     a.addEventListener('click', function(){
//         let elem2 = elem.querySelector('span')
//         elem2.classList.add('style')
//         this.remove()
//     })
// }

//3 and 4

// let trs = document.querySelectorAll('#table tr')
// for(let tr of trs){
//     let td = document.createElement('td')
//     let a = document.createElement('a')
//     a.href = "#"
//     a.textContent = "green"
//     a.addEventListener('click', function(){
//         if(tr.matches('.green')== false)
// {        tr.classList.add('green')} else {
//     tr.classList.remove('green')
// }
//     })
//     td.appendChild(a)
//     tr.appendChild(td)
// }

///343
// let elem = document.querySelector('#elem');

// let hide = document.querySelector('#hide');
// hide.addEventListener('click', function() {
//     if(elem.matches('.hidden') == false)
// 	{elem.classList.add('hidden')} else{
//         elem.classList.remove('hidden')
//     }
// });

///344

// let buttons = document.querySelectorAll('button');
// let elems   = document.querySelectorAll('p');

// for (let i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function() {
// 		elems[i].classList.toggle('hidden');
// 	});
// }

//345
// let elems = document.querySelectorAll('li')
// for(let elem of elems){
//     elem.addEventListener('click', function(){
//         if(elem.matches('.active') == false)
//         {elem.classList.add('active')} else {
//             elem.classList.remove('active')
//         }
//     })
// }
