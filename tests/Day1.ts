class Student
{
    name: String;
    age:number;
    rollNo:number;
    static schoolName:String="Sunshine High School";

    constructor(sname: string, sage: number, srollNo: number)
    {
        this.name = sname;
        this.age = sage;
        this.rollNo = srollNo;
       // this.schoolName = sschoolName;
    }
       

    display():void
    {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Roll No: " + this.rollNo);
        console.log("School Name: ", Student.schoolName);
    }
     static Cschoolname(newName:string):void{
         Student.schoolName = newName;
     }

    

}

Student.Cschoolname("Greenwood Academy"); // Changing the static property

let s1=new Student("John Doe", 16, 101);
s1.display();
let s2=new Student("Jane Smith", 15, 102);
s2.display();
let s3=new Student("Alice Johnson", 17, 103);
s3.display();



