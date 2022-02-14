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
     var headerTitle=document.getElementById('header-title');
     var headerMenu=document.getElementById('main-header');
     console.log(header);
     /*
     console.log(headerTitle);
     headerTitle.textContent='changes the h1 text content';
     headerTitle.innerText="this also changes the h1 content";//pays atension to element styling
    headerTitle.innerHTML="<h3>this also change content of h1<h3>";//puts this elment inside the target elmt
    */
   //CHANGE STYLES
   headerMenu.style.borderBottom='solid 3px black';//NB u cant use border-bottom we use camelCase instead
    //GETELEMENT BY CLASS NAME :
    /*
    var items=document.getElementsByClassName('list-group-item');
    console.log(items);//returns collection
    console.log(items[1]); // to access one item
    items[1].textContent ="Hello";
    items[1].style.fontWeight='bold';
    items[1].style.backgroundColor='yellow';
    //items.style.backgroundColor='#f4f4f4'; //gives error-do Not work, b/c its a collection and we need to loop to add style
    for(let i=0;i<items.length;i++){
        items[i].style.backgroundColor='#f4f4f4';
    }
*/
    //GETELEMENT BY TAG NAME
    /*
    var li=document.getElementsByTagName('li');//grabs all the li elements
    console.log(li);
    console.log(li[1]); // to access one item
    li[1].textContent ="Hello";
    li[1].style.fontWeight='bold';
    li[1].style.backgroundColor='yellow';
    for(let i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
    }
    */
   //QUERY SELECTOR: works l ike jquery but only grabs the first item it finds
   /*
   let headr=document.querySelector('#main-header');
   headr.style.borderRight='solid 4px grey';
   let input= document.querySelector('input');
   input.value="Hello world";
   let submit=document.querySelector('input[type="submit"]');
   submit.value='Add Item';
   let itm=document.querySelector('.list-group-item');
   itm.style.color='red'; //affects only the first item it finds
   let lastitem=document.querySelector('.list-group-item:last-Child');
   lastitem.style.color='blue';
   let secondItem=document.querySelector('.list-group-item:nth-child(2)');
   secondItem.style.color='coral';
    */
   //QUERYSELECTOR ALL// : grabs all elements specified
   /*
   let titles=document.querySelectorAll('.title');
   console.log(titles);
   titles[0].textContent="Eehhehhe";
    //alternet items selection
    let odd=document.querySelectorAll('li:nth-child(odd');
    for(let w in odd){
        odd[w].style.background='#f4f4f4';
    }
    */
   //TRAVERSING THE DOM:moving up and down.looking parent node,child node and siblings
   let itemList= document.querySelector('#items');
   //parentNode
   /*
   console.log(itemList.parentNode);//returns the parentNode of current element
   itemList.parentNode.style.background='#ccc';
   console.log(itemList.parentNode.parentNode.parentNode);// we can find granparents as well
    */
   //ParentElement// : same as parentNode
   /*
   console.log(itemList.parentElement);//returns the parentNode of current element
   itemList.parentElement.style.background='#ccc';
   console.log(itemList.parentElement.parentElement.parentElement);// we can find granparents as well w/c in this case gives body tag
    */
   //childNode
   /*
   /console.log(itemList.childNodes);//returns NodeList/array of child elements
        // NB, in this collection white space/line brake take a place as text element, so becareful when using it
    */
        //children: solves the above problem in childNodes
    /*
    console.log(itemList.children);
    console.log(itemList.children[1]);
    itemList.children[1].style.background='yellow';
    */
   //firstChild property
   /*
   console.log(itemList.firstChild); //returns text for white space as firstchild if there is space before first element
   */
   //firstElementChild: solves firstChild prolem
   /*
   console.log(itemList.firstElementChild);
   itemList.firstElementChild.textContent='content added with firstElementChild proeprty';
    */
   //lastChild property
   /*
   console.log(itemList.firstChild); //returns text for white space as lastchild if there is space after last element
   */
    //lastElementChild: like firstElementChild this one solves the problem of lastchild which grabs white spaces
    /*
    console.log(itemList.lastElementChild);
    itemList.lastElementChild.textContent='content added with lastElementChild proeprty';
    */
   //nextSiblings
        // console.log(itemList.nextSibling);//gives text node for whitespace if there is space
    //nextElementSiblings
        //console.log(itemList.nextElementSibling);
    //previousSiblings
        //console.log(itemList.previousSibling);//gives text node for whitespace if there is space
   //priviousElementSiblings
        /*console.log(itemList.previousElementSibling);
         itemList.previousElementSibling.style.color='green';
        */
    //createElement
    let newDiv=document.createElement('div')   //creates div


   