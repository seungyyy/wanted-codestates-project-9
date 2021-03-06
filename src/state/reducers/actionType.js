export const GET_REVIEW_DETAIL_FAILURE = 'GET_REVIEW_DETAIL_FAILURE';
export const GET_REVIEW_DATA = 'GET_REVIEW_DATA';
export const GET_REVIEW_SORT_RECENT = 'GET_REVIEW_SORT_RECENT';
export const GET_REVIEW_SORT_LIKE = 'GET_REVIEW_SORT_LIKE';
export const GET_REVIEW_SORT_BEST = 'GET_REVIEW_SORT_BEST';
export const GET_REVIEW_SORT_RANDOM = 'GET_REVIEW_SORT_RANDOM';
export const POST_REVIEW = 'POST_REVIEW';
export const ADD_REVIEW_DATA = 'ADD_REVIEW_DATA';
export const ADD_COMMIT_DATA = 'ADD_COMMIT_DATA';
export const TOGGLE_LIKE_DATA = 'TOGGLE_LIKE_DATA';

export const toggleLikeData = (id) => { 
  return {
    type: TOGGLE_LIKE_DATA,
    id,
  };
}

export const AddCommitData = (id, commentsId, nickname, regdt, contents) => {
  return {
    type: ADD_COMMIT_DATA,
    id,
    commentsId,
    nickname,
    regdt,
    contents,
  };
};

export const getReviewDetaillFailure = (data) => {
  return {
    type: GET_REVIEW_DETAIL_FAILURE,
    data,
  }
};

export const postReview = (data) => {
  return {
    type: POST_REVIEW,
    data,
  };
};

export const getReviewSortRecent = () => {
  return {
    type: GET_REVIEW_SORT_RECENT,
  }
};

export const getReviewSortLike = () => {
  return {
    type: GET_REVIEW_SORT_LIKE,
  }
};

export const getReviewSortBest = () => {
  return { 
    type: GET_REVIEW_SORT_BEST,
  }
};

export const getReviewSortRandom = () => {
  return {
    type: GET_REVIEW_SORT_RANDOM,
  }
};

export const getReviewData = () => {
  return {
    type: GET_REVIEW_DATA,
  }
};
