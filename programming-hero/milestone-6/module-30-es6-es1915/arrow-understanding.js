// function persion(){
//     this.age = 0;
//     setInterval(()=> {
//         this.age++; this refers to the person object
//     }, 1000);
// }

// const p = new persion(10);
// console.log(p);

function person (){
    this.age = 0;
    setInterval(function(){
        this.age ++; //this refers to the global object, not the person object    
        }, 1000);
}

const p = new person();
// console.log(p);

