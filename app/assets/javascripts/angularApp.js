(function(){
  "use strict";

  angular.module("angularApp", ["chart.js"])

    // Optional configuration
    .config(['ChartJsProvider', function (ChartJsProvider) {
      // Configure all charts
      ChartJsProvider.setOptions({
        chartColors: ['#FF5252', '#FF8A80'],
        responsive: true
      });
      // Configure all line charts
      ChartJsProvider.setOptions('line', {
        showLines: true
      });
    }])

}());