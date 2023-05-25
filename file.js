function destroyer(arr) {
    var valuesToRemove = Array.from(arguments).slice(1);
  
    var filteredArray = arr.filter(function(element) {
      for (var i = 0; i < valuesToRemove.length; i++) {
        if (element === valuesToRemove[i]) {
          return false;
        }
      }
      return true;
    });
  
    return filteredArray;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  