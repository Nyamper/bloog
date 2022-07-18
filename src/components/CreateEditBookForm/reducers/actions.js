export const showCreateEditModalAction = (state) => {
  state.show = true;
};

export const hideCreateEditModalAction = (state) => {
  state.show = false;
};

export const setTitleAction = (state, action) => {
  state.title = action.payload;
};

export const getBookIdAction = (state, action) => {
  state.bookId = action.payload;
};

export const createModalAction = (state) => {
  state.isCreate = true;
};

export const editModalAction = (state) => {
  state.isCreate = false;
};

export const createBookPendingAction = (state) => {
  state.loading = true;
  state.error = null;
};

export const createBookFulfilledAction = (state, action) => {
  state.loading = false;
  state.book = action.payload;
};

export const createBookRejectedAction = (state) => {
  state.loading = false;
  state.error = true;
};

export const editBookPendingAction = (state) => {
  state.loading = true;
  state.error = null;
};

export const editBookFulfilledAction = (state, action) => {
  state.loading = false;
  state.book = action.payload;
};

export const editBookRejectedAction = (state) => {
  state.loading = false;
  state.error = true;
};
