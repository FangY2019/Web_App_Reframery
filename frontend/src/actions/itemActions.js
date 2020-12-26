import Axios from 'axios';

import {

  ITEM_LIST_FAIL,
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,

  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
  ITEM_DETAILS_FAIL,

} from '../constants/itemConstants';

// fetch item list from backend
export const listItems = () => async (dispatch) => {
    dispatch({type: ITEM_LIST_REQUEST});
    try {
        // const { data } = await Axios.get(`/api/${mainCategory}`);
        const { data } = await Axios.get('/api/items');
      dispatch({ type: ITEM_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ITEM_LIST_FAIL, payload: error.message });
    }
  };

  // fetch item details from backend
export const detailsItem = (itemID) => async(dispatch) => {
  dispatch({type: ITEM_DETAILS_REQUEST, payload: itemID});
  try{
    const {data} = await Axios.get(`/api/items/${itemID}`);
    dispatch({type: ITEM_DETAILS_SUCCESS, payload: data});
  }catch(error){
    dispatch({type:ITEM_DETAILS_FAIL, payload: error.message});
  }
}

  