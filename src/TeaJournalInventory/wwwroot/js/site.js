// Write your Javascript code.
// Write your Javascript code.

angular.module("slotApp", ['ui.router']);

var slot = angular.module("slotApp");

slot.controller("slotCtrl", slotCtrl);

slot.controller("categoryCtrl", categoryCtrl);

slot.controller("teaitemCtrl", teaitemCtrl);

slot.controller("indexCtrl", indexCtrl);

slot.controller("labelCtrl", labelCtrl);


slot.config(function ($stateProvider, $urlRouterProvider) { //menu

    var slotviewState = {
        name: 'slotview',
        url: 'Home/SlotCRUD',
        templateUrl: 'Home/SlotCRUD'
    }

    var categoryviewState = {
        name: 'categoryview',
        url: 'Home/CategoryCRUD',
        templateUrl: 'Home/CategoryCRUD'
    }

    var teaitemviewState = {
        name: 'teaitemview',
        url: 'Home/TeaItemCRUD',
        templateUrl: 'Home/TeaItemCRUD'
    }

    var homeviewState = {
        name: '#',
        url: 'Home/Index',
        templateUrl: 'Home/Index'
    }

    $stateProvider.state(slotviewState);

    $stateProvider.state(categoryviewState);

    $stateProvider.state(teaitemviewState);

    $stateProvider.state(homeviewState);
    
    var labelsearchviewState = {
        name: 'labelsearchview',
        url: 'Label/PrintLabel',
        templateUrl: 'Label/PrintLabel'
    }

    $stateProvider.state(labelsearchviewState);

});

var rootUrl = "Home/";

function slotCtrl($http, $scope) {

    $scope.errMsg = "";

    $scope.addSlot = function (SlotNo, SlotName, Description) {

        var req = {

            method: 'POST',

            url: rootUrl+'Create',

            headers: {
                'Content-Type': 'application/json'
            },

            data: { 'SlotNo': SlotNo, 'SlotName': SlotName, 'Description': Description }

        }

        $http(req).then(

            function (data) {

            }, function (err) {

                $scope.errMsg = "Can not insert slot";

            });

    }

    $scope.getSlot = function () {

        var req = {

            method: 'Get',

            url: rootUrl + 'GetSlot',

            headers: {
                'Content-Type': 'application/json'
            }

        }

        $http(req).then(

            function (data) {
                $scope.Slotlist = data.data;
            },

            function (err) {
                $scope.errMsg = "Can not get slot";

            });
    }

    $scope.getSlot(); //page loaded

    $scope.eachSlot = function (id) {

        var req = {

            method: 'Get',

            url: rootUrl + 'EachSlot?id=' + id,

            headers: {
                'Content-Type': 'application/json'
            }

        }

        $http(req).then(

            function (data) {

                $scope.EachSlotlist = data.data; //Slot

            },

            function (err) {

                $scope.errMsg = "Can not get each slot";

            });
    }

    $scope.updateSlot = function (id, name, desc) {

        var jslot = new localSlot();

        jslot.SlotNo = id;
        jslot.SlotName = name;
        jslot.Description = desc;

        var req = {

            method: 'POST',

            url: rootUrl + 'UpdateSlot',

            data: jslot

        }

        $http(req).then(

            function (data) {

                $scope.EachSlotlist = data.data;

            },

            function (err) {

                $scope.errMsg = "Can not update slot";

            });

    }

    $scope.deleteSlot = function (id) {

        var req = {

            method: 'POST',

            url: rootUrl + 'DeleteSlot?id=' + id,

        }

        $http(req).then(

            function (data) {

            },

            function (err) {

                $scope.errMsg = "Can not delete slot";

            });



    }

    $scope.newId = function () {


        var req = {

            method: 'Get',

            url: rootUrl + 'GetnewId',

        }


        $http(req).then(

            function (data) {
                $scope.nextId = data.data;
            },

            function (err) {

                $scope.errMsg = "Can not get new id";

            });



    }

    $scope.newId();
}

function categoryCtrl($http, $scope) {

    $scope.errMsg = "";

    $scope.addCategory = function (Id, CategoryName, SubSlot, SlotNo) {

        var teaCategory = new localCategory();
        teaCategory.Id = Id;
        teaCategory.CategoryName = CategoryName;
        teaCategory.SubSlot = SubSlot;
        teaCategory.SlotNo = SlotNo;


        var req = {

            method: 'POST',

            url: rootUrl + 'CategoryCreate',

            data: teaCategory

        }

        $http(req).then(

            function (data) {

            }, function (err) {

                $scope.errMsg = "Can not add new category";

            });

    }

    $scope.getCategory = function () {

        var req = {

            method: 'Get',

            url: rootUrl + 'GetCategory',

            headers: {
                'Content-Type': 'application/json'
            }

        }

        $http(req).then(

            function (data) {
                $scope.Categorylist = data.data;
            },

            function (err) {

                $scope.errMsg = "Can not get all category";

            });
    }

    $scope.getCategory(); //page loaded

    $scope.eachCategory = function (id) {

        var req = {

            method: 'Get',

            url: rootUrl + 'EachCategory?id=' + id,

            headers: {
                'Content-Type': 'application/json'
            }

        }

        $http(req).then(

            function (data) {

                $scope.EachCategorylist = data.data; //Slot

            },

            function (err) {

                $scope.errMsg = "Can not get each category";

            });
    }

    $scope.updateCategory = function (id, name, subslot, slotno) {

        var jslot = new localCategory();

        jslot.Id = id;
        jslot.CategoryName = name;
        jslot.SubSlot = subslot;
        jslot.SlotNo = slotno;

        var req = {

            method: 'POST',

            url: rootUrl + 'UpdateCategory',

            data: jslot

        }

        $http(req).then(

            function (data) {

                $scope.EachCategorylist = data.data;

            },

            function (err) {

                $scope.errMsg = "Can not update each category";

            });

    }

    $scope.deleteCategory = function (id) {

        var req = {

            method: 'POST',

            url: rootUrl + 'DeleteCategory?id=' + id,

        }

        $http(req).then(

            function (data) {

            },

            function (err) {
                $scope.errMsg = "Can not delete a category";

            });



    }

    $scope.GetnewId = function () {

        var req = {

            method: 'Get',

            url: rootUrl + 'GetnewCategoryId',

        }


        $http(req).then(

            function (data) {
                $scope.nextId = data.data;
            },

            function (err) {
                $scope.errMsg = "Can not get new category id";

            });



    }

    $scope.GetnewId();
}

function teaitemCtrl($http, $scope) {

    $scope.errMsg = "";

    var teaItem = new localTeaItem();

    $scope.addTeaItem = function (nextId, itemName, categoryId, itemPrice, itemUnit, unitNumber, measureUnit, sizes, itemType, productDate, storageDate, itemTaken, imagepath)
    {
        teaItem.Id = nextId;
        teaItem.ItemName = itemName;
        teaItem.ItemPrice = itemPrice;
        teaItem.CategoryId = categoryId;
        teaItem.ItemUnit = itemUnit;
        teaItem.UnitNumber = unitNumber;
        teaItem.MeasureUnit = measureUnit;
        teaItem.Sizes = sizes;
        teaItem.ItemType = itemType;
        teaItem.ProductDate = productDate;
        teaItem.StorageDate = storageDate;
        teaItem.ItemTaken = itemTaken;
        teaItem.Imagepath = imagepath;

        console.log(teaItem);

        var req = {

            method: 'POST',

            url: rootUrl + 'TeaItemCreate',

            headers: {
                'Content-Type': 'application/json'
            },

            data: teaItem
        }

        $http(req).then(

            function (data) {

            }, function (err) {

                $scope.errMsg = "Can not add tea item";

            });

    }

    $scope.getTeaItem = function () {

        var req = {

            method: 'Get',

            url: rootUrl + 'GetTeaItem',

            headers: {
                'Content-Type': 'application/json'
            }

        }

        $http(req).then(

            function (data) {
                $scope.TeaItemlist = data.data;
            },

            function (err) {

                $scope.errMsg = "Can not get tea item";

            });
    }

    $scope.getTeaItem(); //page loaded

    $scope.eachTeaItem = function (id) {

        var req = {

            method: 'Get',

            url: rootUrl + 'EachTeaItem?id=' + id,

            headers: {
                'Content-Type': 'application/json'
            }

        }

        $http(req).then(

            function (data) {

                $scope.EachItemlist = data.data; //Slot

            },

            function (err) {

                $scope.errMsg = "Can not each tea item";

            });
    }

    $scope.updateTeaItem = function (id, name, categoryid, itemprice, itemunit, unitnumber, measureUnit, sizes, itemType, productDate, storageDate, itemTaken, imagepath) {

        var jslot = new localTeaItem();

        jslot.Id = id;
        jslot.ItemName = name;
        jslot.CategoryId = categoryid;
        jslot.ItemPrice = itemprice;
        jslot.ItemUnit = itemunit;
        jslot.UnitNumber = unitnumber;
        jslot.MeasureUnit = measureUnit;
        jslot.Sizes = sizes;
        jslot.ItemType = itemType;
        jslot.ProductDate = productDate;
        jslot.StorageDate = storageDate;
        jslot.ItemTaken = itemTaken;
        jslot.Imagepath = imagepath;
        
        

        var req = {

            method: 'POST',

            url: rootUrl + 'UpdateTeaItem',

            data: jslot

        }

        $http(req).then(

            function (data) {

                $scope.EachItemlist = data.data;

            },

            function (err) {
                $scope.errMsg = "Can not update tea item";

            });

    }

    $scope.deleteTeaItem = function (id) {

        var req = {

            method: 'POST',

            url: rootUrl + 'DeleteTeaItem?id=' + id,

        }

        $http(req).then(

            function (data) {

            },

            function (err) {
                $scope.errMsg = "Can not delete tea item";

            });



    }

    $scope.GetnewId = function () {

        var req = {

            method: 'Get',

            url: rootUrl + 'GetnewTeaItemId',

        }


        $http(req).then(

            function (data) {

                $scope.nextId = data.data;

            },

            function (err) {
                $scope.errMsg = "Can not new tea item id";

            });



    }

    $scope.GetnewId();
}

function localSlot(SlotNo, SlotName, Description) {

    this.SlotNo = SlotNo;

    this.SlotName = SlotName;

    this.Description = Description;
}

function localCategory(Id, CategoryName, SubSlot, SlotNo) {

    this.SlotNo = SlotNo;

    this.CategoryName = CategoryName;

    this.SubSlot = SubSlot;

    this.Id = Id;
}

function localTeaItem(Id, ItemName, CategoryId, ItemPrice, ItemUnit, UnitNumber,MeasureUnit,Sizes,ItemType,ProductDate,StorageDate ,ItemTaken,Imagepath 
) {
    this.Id = Id;
    this.ItemName = ItemName;
    this.CategoryId = CategoryId;
    this.ItemPrice = ItemPrice;
    this.ItemUnit = ItemUnit;
    this.UnitNumber = UnitNumber;

    this.MeasureUnit = MeasureUnit;
    this.Sizes = Sizes;
    this.ItemType = ItemType;
    this.ProductDate = ProductDate;
    this.StorageDate = StorageDate;
    this.ItemTaken = ItemTaken;
    this.Imagepath = Imagepath;
}

function indexCtrl($scope) {
     
};

function labelCtrl($scope, $http) {

    var rootUrl = "Label/";

    $scope.errMsg = "";

    $scope.getLabel = function () {

        var req = {

            method: 'Get',

            url: rootUrl+'GetLabels',

            headers: {
                'Content-Type': 'application/json'
            }

        }

        $http(req).then(

            function (data) {

                $scope.labelList = data.data;

            },

            function (err) {
                $scope.errMsg = "Can not get label";

            });
    }
 
    $scope.printDiv = function () {

        var printContents = document.getElementById("printTable").innerHTML;//printloop printTable
        var popupWin = window.open('', '_blank', 'width=300,height=300');
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
        popupWin.document.close();
    }

    $scope.searchclick = false;

    $scope.searchLabel = function (ItemName, SlotName, CategoryName) {

        $scope.searchclick = true;

        var para = new SearchPara();

        para.CategoryName = CategoryName;
        para.ItemName = ItemName;
        para.SlotName = SlotName;

        var req = {
            method: 'post',
            url: rootUrl+'SearchLabel',
            data:para
        };

        $http(req).then(
            function (data)
            {
                $scope.searchList = data.data;

                $scope.searchclick = false; //after data loaded, disappear

            },
            function (err) {

                $scope.errMsg = "Can not search label";

            }
            );

    }

}

function SearchPara(ItemName, SlotName, CategoryName) {
    this.ItemName = ItemName;
    this.SlotName = SlotName;
    this.CategoryName = CategoryName;
}
