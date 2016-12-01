app.controller("ContactsEditCtrl", function($scope, $routeParams, $location, Contact) {

    var defaultValue = function() {
        if ($routeParams.id) {
            $scope.isPrefilled = true;
            $scope.contact = Contact.show({ id: $routeParams.id });
        } else {
            $scope.isPrefilled = false;
            $scope.contact = new Contact();
        }
    };

    defaultValue();

    $scope.submit = function() {
        console.log("submit -->")

        function success(response) {
            console.log("success", response)
            $location.path("/contacts");
        }

        function failure(response) {
            console.log("failure", response)

            _.each(response.data, function(errors, key) {
                if (errors.length > 0) {
                    _.each(errors, function(e) {
                        $scope.form[key].$dirty = true;
                        $scope.form[key].$setValidity(e, false);
                    });
                }
            });
        }

        if ($routeParams.id) {
            console.log("update -->");
            Contact.update($scope.contact, success, failure);
        } else {
            console.log("create -->");
            console.log("contact : " + $scope.contact.firstname);
            Contact.create($scope.contact, success, failure);
        }

    };

    $scope.errorClass = function(name) {
        var s = $scope.form[name];
        return s.$invalid && s.$dirty ? "error" : "";
    };

    $scope.errorMessage = function(name) {
        var s = $scope.form[name].$error;
        result = [];
        _.each(s, function(key, value) {
            result.push(value);
        });
        return result.join(", ");
    };

});
