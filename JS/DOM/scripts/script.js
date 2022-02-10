//alert("testing JS file linkage");
//grab the div containter with id of container
const container=document.querySelector('#container');
// create another div to be inserted to DOM later
const content=document.createElement('div');
//give this new div a class 
content.classList.add('content');
content.textContent='This is New content added to the DOM via JS';
// insert the new div inside the container div we have grabed at the beggingi
container.appendChild(content);
//add paragraph to DOM
const para= document.createElement('p');
para.textContent=`Hey I'm red`;
para.style.cssText='color:red';
container.appendChild(para);

//add h3 element  having attributes
const h3Title= document.createElement('h3');
h3Title.textContent=`I'm blue h3 tag`;
h3Title.setAttribute('style','color:blue');
container.appendChild(h3Title);

// add div having children of its on to DOM with JS
const diver= document.createElement('div');
diver.style.cssText='border:2px black;background:pink';
//add create elemnts and add it ot above div as children 
const header= document.createElement('h1');
header.textContent=`I'm in Div`;
const par=document.createElement('p');
par.textContent=`ME TOO`;
diver.appendChild(header);
diver.appendChild(par);


container.appendChild(diver);

//Even't listener method two
const btn =document.querySelector('#btn');
btn.onclick=()=>alert("I am from Method 2");

const btn3=document.querySelector('#btn3');
//btn3.addEventListener('click',()=>{alert("Howdy, third method");});
btn3.addEventListener('click',function(e){
    console.log(e.target);
});
btn3.addEventListener('click',function(e){
    e.target.style.background='blue';
});

