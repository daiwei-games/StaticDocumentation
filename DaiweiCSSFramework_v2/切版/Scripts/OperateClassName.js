class ClassNameController {
    constructor(ClassObj) {
        this.ClassObj = document.querySelector(ClassObj);
    }
    ReClassObj(ClassName) {
        this.ClassObj = document.querySelector(ClassName);
    }
    ClassContains(ClassName) {
        let Obj = this.ClassObj.classList;
        return Obj.contains(ClassName);
    }
    ClassToggle(ClassName) {
        let Obj = this.ClassObj.classList;
        Obj.toggle(ClassName);
    }
    ClassRemove(ClassName) {
        let Obj = this.ClassObj.classList;
        Obj.remove(ClassName);
    }
    ClassAdd(ClassName) {
        let Obj = this.ClassObj.classList;
        Obj.add(ClassName);
    }
}
