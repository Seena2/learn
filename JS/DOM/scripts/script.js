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
//DOM revision
console.log(Node.ELEMENT_NODE); //logs 1,one is anumeric code value for element nodes
    //log all node types and there values
    /*
    for (var key in Node){
        console.log(key,'='+Node[key]);

    }
    */
    //JS-DOM -Traversy Media Video code along
    //EXAMINE THE DOCUMENT OBJECT
    /*console.log(document);
    console.log(document.domain); //logs the domain we are running on. in this case localhost
    console.log(document.URL);//access the url of our page
    console.log(document.title);// logs title of the page
    document.title="tile setfrom JS"; //sets or cahnge title of page on the run(Go)
    console.log(document.doctype);// logs the doc type
    console.log(document.head);//grabs the head elemnt and its constituency
    console.log(document.body);//grabs body element
    console.log(document.all); //logs array like html colection of every thing in the DOM
    console.log(document.all[10]);//access element via its index
    document.all[10].textContent='Helo from JS'; //select element via index and change contetn
    //this is not recommended b/c when another item is added before the target item the index will change along
    console.log(document.forms);// logs all forms on the page as a collection
    console.log(document.links);//returns all the links
    console.log(document.images);
      */
     //SELECTORS -to query the DOM
     //GETELEMENT BY ID
     console.log(document.getElementById('header-tile'));