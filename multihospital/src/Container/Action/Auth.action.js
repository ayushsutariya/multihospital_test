import React from 'react';
import { GetAuthData, PostAuthData } from '../Common/Auth.api';

export const Get_Auth_Data = () => (dispatch) => {

  try {

    GetAuthData()

      // .then((data) => console.log(data.data))
      .then((data) =>
        dispatch({ type: 'GET_AUTH_DATA', payload: data.data }),
      )
      .catch(error => dispatch(Error_Data(error.message)));

    // setTimeout(function () {
    //   return fetch(BASE_URL + "medicines")
    //     .then(
    //       (response) => {
    //         if (response.ok) {
    //           return response;
    //         } else {
    //           var error = new Error(
    //             "Error " + response.status + ": " + response.statusText
    //           );
    //           error.response = response;
    //           throw error;
    //         }
    //       },
    //       (error) => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //       }  
    //     )
    //     .then((response) => response.json())
    //     .then((medicines) =>
    //       dispatch({ type: 'GET_MEDICINES', payload: medicines })
    //     )
    //     .catch( error => dispatch(error_medicines(error.message)));
    // }, 2000);
  } catch (error) {
    dispatch(Error_Data(error.message))
    console.log(error);
  }
};

export const Add_Auth_Data = (data) => (dispatch) => {
  try {

    PostAuthData(data)

      // .then((data) => console.log(data.data))
      .then((data) =>
        dispatch({ type: 'ADD_AUTH_DATA', payload: data.data }),
      )
      .catch(error => dispatch(Error_Data(error.message)));

    // setTimeout(function () {
    //   return fetch(BASE_URL + "medicines")
    //     .then(
    //       (response) => {
    //         if (response.ok) {
    //           return response;
    //         } else {
    //           var error = new Error(
    //             "Error " + response.status + ": " + response.statusText
    //           );
    //           error.response = response;
    //           throw error;
    //         }
    //       },
    //       (error) => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //       }  
    //     )
    //     .then((response) => response.json())
    //     .then((medicines) =>
    //       dispatch({ type: 'GET_MEDICINES', payload: medicines })
    //     )
    //     .catch( error => dispatch(error_medicines(error.message)));
    // }, 2000);
  } catch (error) {
    dispatch(Error_Data(error.message))
    console.log(error);
  }
}

export const Error_Data = (error) => (dispatch) => {
  dispatch({ type: 'ERROR_DATA', payload: error })
}

export const Loading_Data = () => (dispatch) => {
  dispatch({ type: 'LOADING_DATA' })
}
