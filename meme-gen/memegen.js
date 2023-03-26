const link = document.querySelector('#link');
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const submit = document.querySelector('.submit');


submit.addEventListener('click',function(){

let memeBox = document.createElement('div');
memeBox.classList.add('memeBox');


let textTop = document.createElement('h3');
textTop.classList.add('textTop');
textTop.innerText = `${text1.value}`;
memeBox.append(textTop);

let img = document.createElement('img');
img.classList.add('img')
img.src = `${link.value}`
memeBox.append(img);

let textBtm = document.createElement('h3');
textBtm.classList.add('textBtn');
textBtm.innerText = `${text2.value}`
memeBox.append(textBtm);

container2.append(memeBox)

if (text1.value === "" || text2.value === "" || link.value === ""){
  alert('please Enter a Task');
} else {
  container2.append(memeBox)
}

text1.value = "";
text2.value = "";
link.value = "";


memeBox.addEventListener('click',function(){

    if (container2.contains(memeBox)){
    container2.remove(memeBox)
  } else{
    container2.append(memeBox)
  }

})

})






