

// const bob = document.querySelectorAll('.bob') 
// document.querySelector('table').addEventListener('click',(event) => {
  



//     if(event.target.tagName !== 'TD') return false;
//     // console.log(event.target)
//     let data = [...event.target.parentNode.children]
//     console.log(data)
//     let text = getDataFrom(data)
//     // console.log(text)
//     textOut();
// })

// const getDataFrom = (tdArr) => {
// return tdArr.map((item,index,array) => item.innerHTML)
// }

// const textOut = (text) => {
//     text.forEach((item,index,array) => bob[index].innerHTML = item)
// }




const span = document.querySelectorAll('ul>li>span');

document.querySelector('table').onclick = function (event) {

    if (event.target.tagName !== 'TD') return false;
    // console.log(event.target);
    let data = [...event.target.parentNode.children];
    let text = getDataFromTd(data);
    // console.log(text);
    outText(text);
}

function getDataFromTd(tdArr) {
    return tdArr.map(item => item.innerHTML);
}

function outText(text) {
    text.map((item, index) => span[index].innerHTML = item);
}