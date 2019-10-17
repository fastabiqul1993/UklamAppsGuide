import axios from 'axios';

export const getAllPackage = email => {
  return {
    type: 'GET_ALL_PACKAGE',
    payload: axios.get(
      `http://54.235.224.136:5000/api/packages/?guide=${email}`,
    ),
  };
};

export const getPackage = id => {
  return {
    type: 'GET_PACKAGE',
    payload: axios.get(`http://54.235.224.136:5000/api/packages/`, {
      params: {id},
    }),
  };
};

export const postPackage = (name, type, description, guide, price, photo) => {
  let realPrice = Number(price);

  return {
    type: 'POST_PACKAGE',
    payload: axios.post(`http://54.235.224.136:5000/api/packages/`, {
      name,
      type,
      description,
      guide,
      price: realPrice,
      photo,
    }),
  };
};

export const patchPackage = (
  name,
  type,
  description,
  guide,
  price,
  photo,
  id,
) => {
  return {
    type: 'PATCH_PACKAGE',
    payload: axios.patch(`http://54.235.224.136:5000/api/packages/?id=${id}`, {
      name,
      type,
      description,
      guide,
      price,
      photo,
    }),
  };
};

export const deletePackage = id => {
  return {
    type: 'DELETE_PACKAGE',
    payload: axios.delete(`http://localhost:5000/api/packages/?id=${id}`),
  };
};
