class WorksController extends ClassNameController {
    constructor(ClassObj) {
        super(ClassObj);
    }
    WorksAlbumView(ReObjClassName, ClassName) {
        super.ReClassObj(ReObjClassName);
        super.ClassToggle(ClassName);
    }

    WorksAlbumSwitch(ClassName, ChangeClassName) {
        super.ClassRemove(ClassName);
        super.ClassAdd(ChangeClassName);
    }
    IsWorksAlbumValueViewOpen(ObjClassName, IsOpenOrClose = true) {
        if (IsOpenOrClose) {
            super.ReClassObj(ObjClassName.Album);
            this.WorksAlbumSwitch(ObjClassName.VlaueName, ObjClassName.AlbumName);
            super.ReClassObj(ObjClassName.back);
            this.WorksAlbumSwitch(ObjClassName.backAppear, ObjClassName.backHide);
        }

        if (!IsOpenOrClose) {
            super.ReClassObj(ObjClassName.Album);
            this.WorksAlbumSwitch(ObjClassName.AlbumName, ObjClassName.VlaueName);
            super.ReClassObj(ObjClassName.back);
            this.WorksAlbumSwitch(ObjClassName.backHide, ObjClassName.backAppear);
        }
    }

}



const WorksOperate = new WorksController(".WorksPage-Content");
const Switch = {
    Album: ".Works2",
    AlbumName: "Works-album",
    VlaueName: "Works-value",
    back: ".Works-back",
    backAppear: "Works-back-appear",
    backHide: "Works-back-hide",
    imgCover: "img-cover",
    WorksAlbumView: "WorksAlbum-View",
    WorksPageContent: ".WorksPage-Content",
    WorksPageContentclose: "WorksPage-Content-close",
    //相簿資料
    HtmlDataSetAlbumID: "data-AlbumID",
    //相簿類別資料
    HtmlDataSetAlbumTypeID: "data-AlbumTypeID",
    //顯示列表內容的 div ID
    AjaxWorksPage: "#AjaxWorks-Page",
    //顯示某個相簿內容 div ID
    AjaxWorksAlbum: "#AjaxWorks-album",
    //顯示表單 div ID
    WorksButtonAdd: ".button-Add"
}

const OperateObj = { //取得點擊事件的物件
    WorksBackClick: Doc.querySelector(Switch.back),
    WorksImgCoverClick: Doc.querySelectorAll(`.${Switch.imgCover}`),
    WorksAlbumViewClick: Doc.querySelectorAll(`.${Switch.WorksAlbumView}`),
    WorksButtonAddClick: Doc.querySelector(Switch.WorksButtonAdd)
}

if (OperateObj.WorksBackClick) {
    OperateObj.WorksBackClick.addEventListener("click", () => { //返回相簿
        WorksOperate.IsWorksAlbumValueViewOpen(Switch);
    });
};
if (OperateObj.WorksImgCoverClick) {
    OperateObj.WorksImgCoverClick.forEach(items => { //顯示相簿內容
        items.addEventListener("click", async () => {
            if (items.getAttribute(Switch.HtmlDataSetAlbumID)) await AjaxPage(Switch.AjaxWorksAlbum, "");
            WorksOperate.IsWorksAlbumValueViewOpen(Switch, false);
        });
    });
};

if (OperateObj.WorksAlbumViewClick) {
    OperateObj.WorksAlbumViewClick.forEach(items => {
        items.addEventListener("click", async () => {
            WorksOperate.WorksAlbumView(Switch.WorksPageContent, Switch.WorksPageContentclose);
            if (items.getAttribute(Switch.HtmlDataSetAlbumTypeID)) await AjaxPage(Switch.AjaxWorksPage, "");
        });
    });
};

if(OperateObj.WorksButtonAddClick){
    OperateObj.WorksButtonAddClick.addEventListener("click", async () => {
        
    });
};
