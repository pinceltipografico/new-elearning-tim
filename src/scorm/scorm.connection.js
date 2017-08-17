/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
/* eslint-disable one-var */
/* eslint-disable space-unary-ops */

var Score = function () {
  var that = this
  this.childrens = {
    raw: ['cmi.core.score.raw', 'readWrite'],
    min: ['cmi.core.score.min', 'readWrite'],
    max: ['cmi.core.score.max', 'readWrite']
  }
  
  this.values = {
    raw: 0,
    min: 0,
    max: 100
  }
  
  function getParams (command) {
    for (var st in this.childrens) {
      that.values[st] = command(that.childrens[st][0])
    }
    return that.values
  }
  
  function setParams (command, attrs) {
    for (var st in that.childrens) {
      command(that.childrens[st][0], attrs[st])
    }
  }
  
  return {
    getParams: getParams,
    setParams: setParams
  }
}

var Core = function () {
  
  var that = this
  this.score = new Score()
  this.childrens = {
    student_id: ['readOnly', 'cmi.core.student_id'],
    student_name: ['readOnly', 'cmi.core.student_name'],
    lesson_location: ['readWrite', 'cmi.core.lesson_location'],
    credit: ['readOnly', 'cmi.core.credit'],
    lesson_status: ['readWrite', 'cmi.core.lesson_status'],
    entry: ['readOnly', 'cmi.core.entry'],
    total_time: ['readOnly', 'cmi.core.total_time'],
    lesson_mode: ['readOnly', 'cmi.core.lesson_mode'],
    exit: ['writeOnly', 'cmi.core.exit'],
    session_time: ['writeOnly', 'cmi.core.session_time']
  }
  
  this.values = {
    student_id: '',
    student_name: '',
    lesson_location: '',
    credit: '',
    lesson_status: 'incomplete',
    entry: '',
    total_time: '',
    lesson_mode: '',
    exit: '',
    session_time: '',
    score: null
  }
  
  function updateGetParams (command) {
    for (var st in that.childrens) {
      if (that.childrens[st][0] !== 'writeOnly') {
        that.values[st] = command(that.childrens[st][1])
      }
    }
    that.values.score = that.score.getParams(command)
    return that.values
  }
  
  function updateSetParams (command, attrs) {
    for (var st in that.childrens) {
      if (that.childrens[st][0] !== 'readOnly') {
        command(that.childrens[st][1], attrs[st])
      }
    }
    that.score.setParams(command, attrs.score)
  }
  
  return {
    updateGetParams: updateGetParams,
    updateSetParams: updateSetParams
  }
}

var CMI = function () {
  var that = this
  
  this.core = new Core()
  this.childrens = {
    launch_data: ['readOnly', 'cmi.launch_data'],
    suspend_data: ['readWrite', 'cmi.suspend_data']
  }
  
  this.values = {
    launch_data: 'teste',
    suspend_data: 'teste1',
    core: null
  }
  
  function updateGetParams (command, callback) {
    var mCallback = (callback && typeof(callback) === 'function') ? callback : defaultCallback
    for (var st in that.childrens) {
      that.values[st] = command(that.childrens[st][1])
    }
    that.values.core = that.core.updateGetParams(command)
    mCallback(that.values)
  }
  
  function updateSetParams (command, attr, callback) {
    for (var st in that.childrens) {
      if (that.childrens[st][0] !== 'readOnly') {
        command(that.childrens[st][1], attr[st])
      }
    }
    that.core.updateSetParams(command, attr.core)
  }
  
  function defaultCallback () {
  }
  
  return {
    updateGetParams: updateGetParams,
    updateSetParams: updateSetParams
  }
}

var ScormConnection = (function (window) {
  
  var Debug = true,
    NoError = 0,
    GeneralException = 101,
    InvalidArgumentError = 201,
    NotInitialized = 301,
    NotImplementedError = 401,
    scormApi = null,
    params = new CMI()
  
  //
  //
  // INICIA A COMUNICAÇÃO
  //
  //
  function Init (callback, errorCallback) {
    var mCallBack = (callback && typeof(callback) === 'function') ? callback : defaultCallback
    var mErrorCallback = (errorCallback && typeof(errorCallback) === 'function') ? errorCallback : defaultErrorCallback
    scormApi = getAPI()
    if (scormApi === null) {
      mErrorCallback()
    } else {
      LMSInitialize()
      callback()
    }
  }
  
  //
  //
  // FAZ UM UPDATE DE TODOS OS PARAMETROS SIMULTANEAMENTE
  //
  //
  function updateParams (type, callback, attrs) {
    var mCallback = (callback && typeof(callback) === 'function') ? callback : defaultCallback
    if (type === 'get') {
      params.updateGetParams(LMSGetValue, mCallback)
    } else if (type === 'set') {
      params.updateSetParams(LMSSetValue, attrs, mCallback)
    }
  }
  
  //
  //
  // CALLBACK PARA O CASO DE NÃO CONSEGUIR ENCONTRAR
  // COMUNICAÇÃO COM O LMS
  //
  //
  function defaultErrorCallback () {}
  
  //
  //
  // CALLBACK PARA PARA CASO ENCONTRE COMUNICAÇÃO COM SCORM
  //
  //
  function defaultCallback () {}
  
  //
  //
  // FUNÇÃO QUE VERIFICA SE LMS ESTÁ DISPONIVEL
  //
  //
  function ApiIsReady () {
  }
  
  //
  //
  // SALVA AS VARIAVEIS DE FIM DE SESSÃO
  //
  //
  function doQuit () {
    LMSSetValue('cmi.core.session_time', '')
    LMSSetValue('cmi.core.exit', 'suspend')
    LMSCommit()
  }
  
  /******************************************************************************************
   **
   ** Function: LMSInitialize()
   ** Inputs:  None
   ** Return:  CMIBoolean true if the initialization was successful, or
   **      CMIBoolean false if the initialization failed.
   **
   ** Description:
   ** Initialize communication with LMS by calling the LMSInitialize
   ** function which will be implemented by the LMS, if the LMS is
   ** compliant with the SCORM.
   **
   ******************************************************************************************/
  function LMSInitialize () {
    scormApi.LMSInitialize('')
  }
  
  /******************************************************************************************
   **
   ** Function LMSFinish()
   ** Inputs:  None
   ** Return:  None
   **
   ** Description:
   ** Close communication with LMS by calling the LMSFinish
   ** function which will be implemented by the LMS, if the LMS is
   ** compliant with the SCORM.
   **
   ******************************************************************************************/
  function LMSFinish () {
    scormApi.LMSFinish('')
  }
  
  /******************************************************************************************
   **
   ** Function LMSGetValue(name)
   ** Inputs:  name - string representing the cmi data model defined category or
   ** element (e.g. cmi.core.student_id)
   ** Return:  The value presently assigned by the LMS to the cmi data model
   ** element defined by the element or category identified by the name
   ** input value.
   **
   ** Description:
   ** Wraps the call to the LMS LMSGetValue method
   **
   ******************************************************************************************/
  function LMSGetValue (name) {
    return scormApi.LMSGetValue(name)
  }
  
  /******************************************************************************************
   **
   ** Function LMSSetValue(name, value)
   ** Inputs:  name - string representing the cmi data model defined category or element
   **      value - the value that the named element or category will be assigned
   ** Return:  None
   **
   ** Description:
   ** Wraps the call to the LMS LMSSetValue method
   **
   ******************************************************************************************/
  function LMSSetValue (name, value) {
    scormApi.LMSSetValue(name, value)
  }
  
  /******************************************************************************************
   **
   ** Function LMSCommit()
   ** Inputs:  None
   ** Return:  None
   **
   ** Description:
   ** Call the LMSCommit function which will be implemented by the LMS,
   ** if the LMS is compliant with the SCORM.
   **
   ******************************************************************************************/
  function LMSCommit () {
    scormApi.LMSCommit('')
  }
  
  /******************************************************************************************
   **
   ** Function LMSGetLastError()
   ** Inputs:  None
   ** Return:  The error code (integer format) that was set by the last LMS function call
   **
   ** Description:
   ** Call the LMSGetLastError function which will be implemented by the LMS,
   ** if the LMS is compliant with the SCORM.
   **
   ******************************************************************************************/
  function LMSGetLastError () {
    return scormApi.LMSGetLastError().toString()
  }
  
  /******************************************************************************************
   **
   ** Function LMSGetErrorString(errorCode)
   ** Inputs:  errorCode - Error Code(integer format)
   ** Return:  The textual description that corresponds to the input error code
   **
   ** Description:
   ** Call the LMSGetErrorString function which will be implemented by the LMS,
   ** if the LMS is compliant with the SCORM.
   **
   ******************************************************************************************/
  function LMSGetErrorString (errorCode) {
    return scormApi.LMSGetErrorString(errorCode).toString()
  }
  
  /******************************************************************************************
   **
   ** Function LMSGetDiagnostic(errorCode)
   ** Inputs:  errorCode - Error Code(integer format), or null
   ** Return:  The vendor specific textual description that corresponds to the input error code
   **
   ** Description:
   ** Call the LMSGetDiagnostic function which will be implemented by the LMS,
   ** if the LMS is compliant with the SCORM.
   **
   ******************************************************************************************/
  function LMSGetDiagnostic (errorCode) {
    return scormApi.LMSGetDiagnostic(errorCode).toString()
  }
  
  /******************************************************************************************
   **
   ** Function findAPI(win)
   ** Inputs:  win - a Window Object
   ** Return:  If an API object is found, it is returned, otherwise null is returned.
   **
   ** Description:
   ** This function looks for an object named API in the supported window hierarchy,
   **
   ******************************************************************************************/
  function findAPI (win) {
    if (win.API !== null && win.API !== undefined) {
      return win.API
    }
    
    for (var i = 0; i < win.length; i++) {
      findAPI(win.frames[i])
    }
    return null
  }
  
  /******************************************************************************************
   **
   ** Function getAPI()
   ** Inputs:  none
   ** Return:  If an API object is found, it is returned, otherwise null is returned.
   **
   ** Description:
   ** This function looks for an object named API, first in the current window's hierarchy,
   ** and then, if necessary, in the current window's opener window hierarchy (if there is
   ** an opener window).
   ******************************************************************************************/
  function getAPI () {
    if (typeof(window.opener) !== 'undefined' && window.opener !== null) {
      return findAPI(window.opener.top)
    } else {
      return findAPI(window.top)
    }
  }
  
  return {
    Init: Init,
    updateParams: updateParams,
    doQuit: doQuit,
    LMSGetValue: LMSGetValue,
    LMSSetValue: LMSSetValue,
    LMSGetLastError: LMSGetLastError,
    LMSCommit: LMSCommit
  }
  
})(window)
