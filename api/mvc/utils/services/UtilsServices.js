var q  =  require('q');

function UtilsServices(){

  function StoreSession(data,message,req){
    var deferred = q.defer();
    return deferred.promise;
  };
  function SuccessResp(data,message) {
    var deferred = q.defer();
    var resp = {
      success:true,
      message:message,
      data:data
    };
    deferre.resolve(resp);
    return deferred.promise;
  };

  function ErrorResp(data,message) {
    var deferred = q.defer();
    var resp = {
      success:false,
      message:message,
      data:data
    };
    deferred.reject(resp);
    return deferred.promise;
  };

  return {
    StoreSession:StoreSession,
    ErrorResp:ErrorResp,
    SuccessResp:SuccessResp
  }
};
module.exports = UtilsServices();
