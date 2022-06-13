const menuSwitchButton = Doc.querySelectorAll(".menu-Switch-Close");
const menuSwitchButtonOpen = Doc.querySelector(".menu-Switch-Open");
const menuObj = Doc.querySelector(".user-content-menu-Mobile");
const menuOp = "user-content-menu-Mobile-open";
const menuCo = "user-content-menu-Mobile-close";
class UserContentSwitchScripts {
    constructor(Obj, ClassNameOpen, ClassNameClose) {
        this.Obj = Obj;
        this.ClassNameOpen = ClassNameOpen;
        this.ClassNameClose = ClassNameClose;
    }
    async open() {
        let mobj = this.Obj.classList, Op = this.ClassNameOpen, Co = this.ClassNameClose;
        if (mobj.contains(Co)) {
            mobj.remove(Co);
            mobj.add(Op);
        }
    }
    async close() {
        let mobj = this.Obj.classList, Op = this.ClassNameOpen, Co = this.ClassNameClose;
        if (mobj.contains(Op)) {
            mobj.remove(Op);
            mobj.add(Co);
        }
    }
}
const SwitchClass = new UserContentSwitchScripts(menuObj, menuOp, menuCo);
menuSwitchButton.forEach(element => {
    element.addEventListener("click", () => {
        SwitchClass.close();
    });
});
menuSwitchButtonOpen.addEventListener("click", () => {
    SwitchClass.open();
});

const callformButton = Doc.querySelector(".CallFormButton");
function CallFormAJAX() {
    if (callformButton.getAttribute("data-formtype")) {
        console.log(callformButton.dataset.formtype);
    } else {
        console.log(callformButton.getAttribute("data-formtype"));

    }
}