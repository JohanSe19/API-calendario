"use-restrict";
module.exports = Object.freeze({
  //Response app success_codes
  COD_RESPONSE_SUCCESS: 0,

  //Response app error codes
  COD_RESPONSE_ERROR_CREATE: 1001,
  COD_RESPONSE_ERROR_UPDATE: 1002,
  COD_RESPONSE_ERROR_DELETE: 1003,
  COD_RESPONSE_ERROR_LIST: 1004,

  //HTTP Response codes
  COD_RESPONSE_HTTP_OK: 200,
  COD_RESPONSE_HTTP_CREATED: 201,
  COD_RESPONSE_HTTP_BAD_REQUEST: 400,
  COD_RESPONSE_HTTP_UNAUTHORIZED: 401,
  COD_RESPONSE_HTTP_FORBIDDEN: 403,
  COD_RESPONSE_HTTP_NOT_FOUND: 404,
  COD_RESPONSE_HTTP_ERROR: 500,
  COD_RESPONSE_HTTP_ACCEPTED: 202,

  //ACTION SCHEDULE CODES
  COD_SCHEDULE_ACTION_GIVE_LECTURE: "621b91f049a6ef492cdca684",
  COD_SCHEDULE_ACTION_ATTEND_MEETING: "621b923249a6ef492cdca685",
  COD_SCHEDULE_ACTION_GET_FILES: "621b926549a6ef492cdca687",
  COD_SCHEDULE_ACTION_OTHER: "621b92a849a6ef492cdca688"

});