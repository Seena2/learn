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
    /*
    let newDiv=document.createElement('div')   //creates div
    console.log(newDiv);
    newDiv.className='hello';//adds class name to the div element
    newDiv.id='hello1'; //add id to div
    newDiv.setAttribute('title','Hello div');//set attribute title to div
    let newDivText= document.createTextNode('I am text content to be added to div via JS'); //creete text node
    newDiv.appendChild(newDivText);
    //add the created element to DOM
    //first point to where it should inserted
    let containerDiv=document.querySelector('header .container');// grabs container class in the header tag
    let h1=document.querySelector('header h1');//gets h1 in the header
    containerDiv.insertBefore(newDiv,h1);//inserts newDiv before h1 inside div with class name container 
    newDiv.style.fontSize='30px'; //adding style 
    */
   //EVENT LISTENER
    /*
   let button= document.getElementById('button'); //grab an element
   button.addEventListener('click',buttonClick);
   function buttonClick(e){
      
       console.log('Button clicked');
       document.getElementById('header-title').textContent='changed with button click';
        document.querySelector('#main').style.background='#ccc';
       console.log(e.target); //returns where the event is fired from
       console.log(e.target.id);//gets the id of element the event fired from
       console.log(e.target.className); //returns all the class Names 
       //add effect to page/DOM on the Go
       let output=document.getElementById('output');
       output.innerHTML='<h3>'+e.target.id+'</h3>';
         console.log(e.type);//returns what type of event it is
         console.log(e.clientX);// horizontal position where the button is clicked from left browser window
         console.log(e.clientY);// vertical position where the button is clicked from top of browser window

         console.log(e.offsetX);// horizontal position where the button is clicked from start of the element
         console.log(e.offsetY);
        
       console.log(e.altKey);// check if alt key is hold while clicking
       console.log(e.ctrlKey);//
       console.log(e.shiftKey);

    }
    */
   // OTHER EVENT TYPES
   let button= document.getElementById('button'); //grab an element
   let box= document.getElementById('box'); //grab an element
   function whichEvent(e){
       console.log('Event Type :'+e.type);
       /*
       //lets grap x & y coordinet when mouse move in grey box and display the location in div with class name otput
       let output=document.getElementById('output');
       output.innerHTML='<h3>MouseX: '+e.offsetX+ ' </h3> <h3>MouseY:'+e.offsetY+'</h3>';
        */
       //or on mouse move we can change the background of the box
       //box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";

       //grap what key is pressed on the keynoard and place it in the output div
       let opt= document.getElementById('output');
       opt.innerHTML="<h3>"+e.target.value+"</h3>";

      
       
    }
    // button.addEventListener('click',whichEvent); //runs when click event is triggered on button element
    //button.addEventListener('dblclick',whichEvent); //double click event
    //button.addEventListener('mousedown',whichEvent); //mouse pressed against, does not wiat for mouse to be lifted
    //button.addEventListener('mouseup',whichEvent); //runs when mouse is released from being pressed state

    //box.addEventListener('mouseenter',whichEvent);//treagered when mouse enters the area of target element
    //box.addEventListener('mouseleave',whichEvent);

    //box.addEventListener('mouseover',whichEvent); //same to mouseenter but it is for inner element 
    //box.addEventListener('mouseout',whichEvent);

    //box.addEventListener('mousemove',whichEvent);// when mouse move  inside target elt
   
    //keyboard and input Events
    let itemInput=document.querySelector('input[type="text"]');//grabs input
    let form=document.querySelector('form');//gets the form

    //itemInput.addEventListener('keydown',whichEvent);//runs when key is pressed on the keyboard
    //itemInput.addEventListener('keyup',whichEvent);//runs when key is released after pressing
    //itemInput.addEventListener('keypress',whichEvent);

    //itemInput.addEventListener('focus',whichEvent);//when clicked inside input
   // itemInput.addEventListener('blur',whichEvent); //when clicked outsied the input

    //itemInput.addEventListener('cut',whichEvent); //when cut is happen on element
    //itemInput.addEventListener('paste',whichEvent);

    //itemInput.addEventListener('input',whichEvent);//when data inserted or removed from input field

    //fire event when the state change, eg, select obtion from selct input
    //let select=document.querySelector('select');
    //select.addEventListener('change',whichEvent);
    //select.addEventListener('input',whichEvent);

    //form.addEventListener('submit',whichEvent);


    //PROJECT: add items to page when the submit button is clicked
    let frm=document.getElementById('addForm'); //grab the form
    let itemLst=document.getElementById('items');//grab list items containing input text
    //create form submit event
    frm.addEventListener('submit',addItem);
    //addItem function which runs when submit button is clicked
    function addItem(e){
        e.preventDefault(); //avoids form default form submition behaviours(?)
        //console.log('dude'); //test
        //get value entered to input field
        let newItem=document.getElementById("itemToAdd").value;//grab input field that recieves value
        //create new <li> element and add the value to the list
        let newLi= document.createElement('li');
        // Add class that make this li similar to others in style
        newLi.className="list-group-item";
        //console.log(newLi);//test if class is added correctly
       
        //create and add text node representing recieved value from input fied to list
        newLi.appendChild(document.createTextNode(newItem));
        

         //create delete button
         let deleteBtnX=document.createElement('button');
         // add classes of del button similar to the on used for other delete btn
         deleteBtnX.className='btn btn-danger btn-sm float-right delete'
         //append text node with text "X" to the button
         deleteBtnX.appendChild(document.createTextNode('X'));

         //append the button to li
         newLi.appendChild(deleteBtnX);
         //append li to the Ul list
         itemList.appendChild(newLi);
 
    }
        // Delete(remove) item by when delete("X") is clicked
        itemList.addEventListener('click',removeItem);//grab list and add listener to it
        //removeItem function declaration, takes event object "e"
        function removeItem(e){
            //console.log(1);//test if function works, NB this works on entire li section,
            // so make sure it works only when only delete button is clicked
            if(e.target.classList.contains('delete')){ //since btn have class delete, this verifies it 
                //console.log(2);// test if we grab the btn
                if(confirm('Are you sure, Do want to remove the item?')){ //simple confirmation popup
                    let liTobeRemoved=e.target.parentElement; //get the li containing the target del btn
                    itemList.removeChild(liTobeRemoved);
                }
            }
        }
        //Filter Event
        let filter=document.getElementById('filter');
        filter.addEventListener('keyup',filterItems);
        //filter Item function
        function filterItems(e){
            //convert all to lowerCase for comparision
            let txt=e.target.value.toLowerCase();
            // console.log(txt); //test input value conveersion
            //grab all the li with in the itemlist(ul)
            let itms=itemList.getElementsByTagName('li');
            //convert this html collection to array to get all array methods
            Array.from(itms).forEach(function(item){
                let itemName=item.firstChild.textContent;
                if(itemName.toLowerCase().indexOf(txt)!= -1){ //if match found
                    item.style.display='block';
                }else{
                    item.style.display='none';
                }
            });

        }
