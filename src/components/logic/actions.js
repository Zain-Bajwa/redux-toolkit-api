import {performApiCall} from '../../utils/actionHandlers'
import {getCityFail, getCitySuccess, isLoading} from './slice'
import {getCityHelper} from './helpers'

export const getCity = (requestData) => (dispatch) =>
  dispatch(
    performApiCall(
      getCityHelper,
      requestData,
      isLoading,
      getCitySuccess,
      getCityFail,
      null,
      {unit: requestData.units, searchKeyword: requestData.q},
      {searchKeyword: requestData.q},
      null,
    )
  );
