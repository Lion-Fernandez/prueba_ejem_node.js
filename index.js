let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

let f = ()=> {for (let entry of iterable) {
  console.log(entry[1]);
}};

f();


const immediately = (()=>console.log("WORK NOW"))()

immediately;

(()=>console.log("WORK NOW!!!"))()

// ******************************
var arr= [1,2,5,8,10,100];

let sumByCond = (array,control)=>{
  if(array){
    var total = 0;
    for (var el in array){
      if(control(array[el]))total+= array[el];
    }
   console.log (total)
  }else console.log("debe pasar un array valido")
  return total;
}

let control = (num)=> num<10;

sumByCond(arr,control)

// fibonacci con funciones generadoras y recursividad

function* fibonacci(){
   yield console.log(0);
   yield console.log(1);

   let firstNum = 0;
   let secondNum = 1;

   while(true){
    const value = secondNum + firstNum;
    yield console.log(value);
    firstNum = secondNum;
    secondNum = value;        
   }
}
const generateF = fibonacci();

generateF.next();
generateF.next();
generateF.next();
generateF.next();
generateF.next();
generateF.next();

class  MiClase {
  nombre = "x";
  edad= "0";
  static lugar = "Mar del Plata"
}
const alum1 = new  MiClase;

console.log(MiClase.lugar)
console.log("👉🏾", alum1)




