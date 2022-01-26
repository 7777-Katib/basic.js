class Student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="bidda";

    }

}

const student1=new Student(12,"katib");
const student2=new Student(14,"piku");
console.log(student1.name,student2.name);
