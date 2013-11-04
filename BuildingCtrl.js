function BuildingCtrl($scope, $http) {

  $http({method: 'GET', url: 'http://data.carbonculture.net/cardiff-council'}).
    success(function(data, status, headers, config) {
      $scope.buildings = data.places;
    }).
    error(function(data, status, headers, config) {
      alert('Unable to pull in list of Cardiff Council buildings');
    });

    $scope.loadBuilding = function(building, type) {
      queryUrl = "http://data.carbonculture.net/cardiff-council/"+ building +"/" + type;
      $http({method: 'GET', url: queryUrl}).
        success(function(data, status, headers, config) {
          $scope.selectedBuilding = data.results;
          $scope.chart = nil;
        }).
        error(function(data, status, headers, config) {
          alert('Unable to pull in Cardiff Council building');
        });
    }

  }