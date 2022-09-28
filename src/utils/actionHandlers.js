import { STATUS_CODES } from "../constants/statusCodes";

export const performApiCall =
  (
    helperMethod,
    requestData,
    initAction,
    successAction,
    errorAction,
    initData = {},
    successData = {},
    errorData = {},
    successCallback = null,
    errorCallBack = null
  ) =>
  (dispatch) => {
    if (initAction) {
      dispatch(initAction(initData));
    }
    return helperMethod(requestData)
      .then((response) => {
        if (
          response.status >= STATUS_CODES.HTTP_200_OK &&
          response.status < STATUS_CODES.HTTP_300_MULTIPLE_CHOICES
        ) {
          if (successAction) {
            dispatch(
              successAction({
                ...response,
                data: response.data,
                successData,
              })
            );
          }
          if (successCallback) {
            successCallback();
          }
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          error.errorData = errorData;

          if (errorAction) {
            dispatch(errorAction(error));
          }
          if (errorCallBack) {
            errorCallBack();
          }
        }
      })
      .catch((error) => {
        let callback = null;
        if (error.response) {
          console.log(error.response);
        }

        if (errorAction) {
          dispatch(
            errorAction({
              error: error,
              errorData,
            })
          );
        }
        // checking if return type is object then passing data to error callback
        // else showing toaster
        const returnedData = error?.response?.data;
        if (errorCallBack) {
          if (typeof returnedData === "object" && returnedData !== null) {
            // errorCallBack(convertToCamelCase(returnedData));
          } else {
            errorCallBack();
          }
        } else if (!callback) {
          // todo: apply .replace(/<[^>]*>/g, '') for network errors
          //showErrorAlert(returnedData || ERROR_MESSAGES.SOMETHING_WENT_WRONG);
        }

        if (callback) {
          callback();
        }
      });
  };
