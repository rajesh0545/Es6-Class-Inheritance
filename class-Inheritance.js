class person{
    constructor(name,age,id){
        this.name=name;
        this.age=age;
        this.id=id;
    }
     greet(){
        console.log(`Hellow ${this.name} ${this.age}`);
     }
}
class student extends person{

}
let student1 = new student ('Rajesh', 21);
student1.greet();