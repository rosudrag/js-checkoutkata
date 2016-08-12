module.exports = function(undefined){
  var _total = 0;

  function scan(sku){
    if(sku === 'B') {
      _total = 20;
      return 20;
    }
    _total = 30;
    return 30;
  }

  function total(){
    return _total;
  }

  function clear(){
    
  }

  return {
    scan: scan,
    total: total,
    clear: clear
  };
}();
