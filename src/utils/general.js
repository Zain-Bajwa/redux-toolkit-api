export const objectToQueryParams = (params) => {
    const paramList = [];
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined && params[key] !== null) {
        paramList.push(`${key}=${encodeURIComponent(params[key])}`);
      }
    });
  
    return paramList.join('&');
  };
  
  export const getUrlWithParams = (requestUrl, params) => {
    const queryString = objectToQueryParams(params);
    return queryString
      ? `${requestUrl}?${queryString}&_=${Date.now()}`
      : `${requestUrl}?_=${Date.now()}`;
  };