export const FETCH_EVENTS   = 'FETCH_EVENTS';
export const FETCH_FAVS   = 'FETCH_FAVS';
export const FETCH_USER   = 'FETCH_USER';

export const fetchProductsBegin = () => ({
    type: FETCH_EVENTS
});
  

export const fetchFavs = () => ({
    type: FETCH_FAVS
});

export const fetchUser = () => ({
  type: FETCH_USER
});