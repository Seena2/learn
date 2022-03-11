//alert("test");
const person={
  name:['Bob','Smith'],
  fullname:{
    first:'Bob',
    middle:'Marley',
    last:'Smith'
  }, //objects as property of another object
  age:32,
  bio:function(){
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  
  introduceYourSelf:function(){
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
  //another way of declaring object method
  maqaGuttu(){
    console.log(`First Name : ${this.fullname.first} 
    Middle Name : ${this.fullname.middle}
    Last Name : ${this.fullname['last']}`);
  }
  
};
const myDataName='height';
  const myDataValue='1.74m';
  person[myDataName]=myDataValue;
  //CONSTRUCTORS
  //function that creates and object by taking argument
  function createPerson(name){
    const obj={};
     obj.name=name;
     obj.introduceSelf=function(){
       console.log(`Hi!, I'm ${this.name}`);
     }
     return obj;
  }
  //now we can create as many objects we want,using the above funtion
  const salva=createPerson('Salva');
  salva.name; //returns Salva
  salva.introduceSelf();

  const frankie= createPerson('Frankie');
  frankie.name;
  frankie.introduceSelf();

  //we can rewrite the above function as constructor
  //NB note constructer is also a function
  function Person(name){
    this.name=name;
    this.introduceSelf=function(){
      console.log(`Hi!,I'm ${this.name}`);
    }
  }


  //creating object using constructor(new keyword)
  const hawii=new Person('Hawii');
  hawii.name;
  hawii.introduceSelf();
  const kamal= new Person('Kamal');
  kamal.name;
  kamal.introduceSelf();
  
