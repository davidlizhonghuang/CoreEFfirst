
angular.module("slotApp", []);

var slot = angular.module("slotApp");

slot.controller("slotCtrl", slotCtrl);

slot.controller("indexCtrl", indexCtrl);

slot.controller("categoryCtrl", categoryCtrl);


function slotCtrl($http, $scope) {

    $scope.addSlot = function (SlotNo, SlotName, Description) {

        var req = {

            method: 'POST',

            url: 'Create',

            headers: {
                'Content-Type': 'application/json'
            },

            data: {'SlotNo':SlotNo, 'SlotName':SlotName, 'Description':Description}

        }

        $http(req).then(

            function (data) {

            }, function (err) {

            });

    }

    $scope.getSlot = function () {

        var req = {

            method: 'Get',

            url: 'GetSlot',

            headers: {
                'Content-Type': 'application/json'
            }

        }

        $http(req).then(

            function (data)
            {
                $scope.Slotlist = data.data;
            },

            function (err) {

            });
    }

    $scope.getSlot(); //page loaded

    $scope.eachSlot = function (id) {

        var req = {

            method: 'Get',

            url: 'EachSlot?id='+id,

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

            url: 'UpdateSlot',

            data:jslot

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

            url: 'DeleteSlot?id='+id,

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

            url: 'GetnewId',

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

    $scope.addSlot = function (SlotNo, SlotName, Description) {

        var req = {

            method: 'POST',

            url: 'Create',

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

            url: 'GetSlot',

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

            url: 'EachSlot?id=' + id,

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

            url: 'UpdateSlot',

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

            url: 'DeleteSlot?id=' + id,

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

            url: 'GetnewId',

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



function indexCtrl() {

  

}




function localSlot(SlotNo, SlotName, Description) {

    this.SlotNo = SlotNo;

    this.SlotName = SlotName;

    this.Description = Description;
}

