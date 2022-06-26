class UserContentSearchForm extends ClassNameController {
    constructor(ClassObj) {
        super(ClassObj);
    }
    FormOpenToggle(ClassName) {
        super.ClassToggle(ClassName);
    }

}
const SearchFormClassName = {
    FormBlock: ".UserContentFormBlock",
    FormBlockDisplayNone: "UserContentFormBlock-DisplayNone",
    OutsourcingMobileSwitch: ".Outsourcing-Mobile-Switch"

}
let SearchFormController = new UserContentSearchForm(SearchFormClassName.FormBlock);
Doc.querySelectorAll(SearchFormClassName.OutsourcingMobileSwitch).forEach(Item => {
    Item.addEventListener("click", () => {
        SearchFormController.FormOpenToggle(SearchFormClassName.FormBlockDisplayNone);
    });
});