// Write your Javascript code.
// Write your Javascript code.

angular.module("slotApp", ['ui.router']);

var slot = angular.module("slotApp");

slot.controller("slotCtrl", slotCtrl);

slot.controller("categoryCtrl", categoryCtrl);

slot.controller("teaitemCtrl", teaitemCtrl);

slot.controller("indexCtrl", indexCtrl);

slot.controller("labelCtrl", labelCtrl);

var rootUrl = "Home/";

function slotCtrl($http, $scope) {


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

            });



    }

    $scope.newId();
}

function categoryCtrl($http, $scope) {

    $scope.addCategory = function (Id, CategoryName, ParentId, SlotNo) {

        var teaCategory = new localCategory();
        teaCategory.Id = Id;
        teaCategory.CategoryName = CategoryName;
        teaCategory.ParentId = ParentId;
        teaCategory.SlotNo = SlotNo;


        var req = {

            method: 'POST',

            url: rootUrl + 'CategoryCreate',

            data: teaCategory

        }

        $http(req).then(

            function (data) {

            }, function (err) {

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

            });
    }

    $scope.updateCategory = function (id, name, parentid, slotno) {

        var jslot = new localCategory();

        jslot.Id = id;
        jslot.CategoryName = name;
        jslot.ParentId = parentid;
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

            });



    }

    $scope.GetnewId();
}

function teaitemCtrl($http, $scope) {

    var teaItem = new localTeaItem();



    $scope.addTeaItem = function (nextId, itemName, categoryId, itemPrice, itemUnit, unitNumber) {

        teaItem.id = nextId;
        teaItem.ItemName = itemName;
        teaItem.ItemPrice = itemPrice;
        teaItem.CategoryId = categoryId;
        teaItem.ItemUnit = itemUnit;
        teaItem.UnitNumber = unitNumber;


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

            });
    }

    $scope.updateTeaItem = function (id, name, categoryid, itemprice, itemunit, unitnumber) {

        var jslot = new localTeaItem();

        jslot.id = id;
        jslot.ItemName = name;
        jslot.CategoryId = categoryid;
        jslot.ItemPrice = itemprice;
        jslot.ItemUnit = itemunit;
        jslot.UnitNumber = unitnumber;

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

            });



    }

    $scope.GetnewId();
}

function indexCtrl($http, $scope) {

    var injector = angular.injector(['ng', 'myModule']);

    var greeter = injector.get('greeter');


}

function localSlot(SlotNo, SlotName, Description) {

    this.SlotNo = SlotNo;

    this.SlotName = SlotName;

    this.Description = Description;
}

function localCategory(Id, CategoryName, ParentId, SlotNo) {

    this.SlotNo = SlotNo;

    this.CategoryName = CategoryName;

    this.ParentId = ParentId;

    this.Id = Id;
}

function localTeaItem(id, ItemName, CategoryId, ItemPrice, ItemUnit, UnitNumber) {
    this.id = id;
    this.ItemName = ItemName;
    this.CategoryId = CategoryId;
    this.ItemPrice = ItemPrice;
    this.ItemUnit = ItemUnit;
    this.UnitNumber = UnitNumber;
}

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
    


});

function indexCtrl($scope) {

 
};

function labelCtrl($scope, $http) {
    //worked on the label
    $scope.getLabel = function () {

        var req = {

            method: 'Get',

            url: 'Label/GetLabels',

            headers: {
                'Content-Type': 'application/json'
            }

        }

        $http(req).then(

            function (data) {
                $scope.labelList = data.data;
            },

            function (err) {

            });
    }
 
    $scope.getLabel();
    
    $scope.printDiv = function () {

        var printContents = document.getElementById("printTable").innerHTML;
        var popupWin = window.open('', '_blank', 'width=300,height=300');
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
        popupWin.document.close();
    }

}

