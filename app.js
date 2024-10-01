let obj = {
    age: "",
    setAge(newAge){
        obj.age = newAge;
        //console.log(newAge);
    },
    getYearsBeforeRetirement(retireAge){
        retireAge = 65 - `${this.age}`;
        if(retireAge <= 0){
            console.log("pensiya alır");
        }else{
             console.log("Pensiya yaşına qalan il:" + " " + retireAge);
        }
    }
}
obj.setAge(70);
obj.getYearsBeforeRetirement();