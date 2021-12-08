// *** 패키지 import
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// *** 액션 타입
const GET_POST = "GET_POST";
const SET_POST = "SET_POST";

// *** 액션 생성 함수
const setPost = createAction(SET_POST, (postList) => ({ postList }));
const getPost = createAction(GET_POST, (postList) => ({ postList }));

// *** 초기값
const initialState = {
  postId: null,
  title: null,
  content: null,
  comments: [
    {
      commentId: null,
      comment: null,
      createdAt: null,
    },
  ],
};

// *** 미들웨어
const randomPostFB = () => {
  return function (dispatch, getState, { history }) {
    console.log("게시물 조회");
    const token = localStorage.getItem("user_token");

    axios
      .get("http://3.37.36.119/api/posts", {
        headers: { Authorization: token },
      })
      .then((response) => {
        console.log(response.data);

        if (response.data === "") {
          history.replace("/");
          window.alert("게시물이 없습니다.");
          return;
        }
        dispatch(getPost(response.data));
        console.log("게시물 조회 성공");
      })
      .catch((err) => {
        console.log("게시물 조회 실패", err);
      });
  };
};

const myPostFB = (postId) => {

  return function (dispatch, getState, { history }) {
    console.log("내가 작성한 게시물 조회");
    const token = localStorage.getItem("user_token");

    axios
      .get("http://3.37.36.119/api/posts/" + postId, {
        headers: { Authorization: token },
      })
      .then((response) => {
        console.log("내가 작성한 게시물 조회 성공");
        dispatch(getPost(response.data));
      })
      .catch((err) => {
        console.log("내가 작성한 게시물 조회 실패", err);
      });
  };
};

const myCommentFB = (commentId) => {
  return function (dispatch, getState, { history }) {
    console.log("내가 댓글을 작성한 게시물 조회");
    const token = localStorage.getItem("user_token");

    axios
      .get(
        "http://3.37.36.119/api/comments/" + commentId,
        { commentId: commentId },
        {
          headers: { Authorization: token },
        }
      )
      .then((response) => {
        console.log(response);
        console.log("내가 댓글을 작성한 게시물 조회 성공");

        dispatch(getPost(response.data));
      })
      .catch((err) => {
        console.log("내가 댓글을 작성한 게시물 조회 실패", err);
      });
  };
};

const deletePostFB = () => {
  return function (dispatch, getState, { history }) {
    console.log("게시물 삭제");
  };
};

// *** 리듀서
export default handleActions(
  {
    [SET_POST]: (state, action) => {
      produce(state, (draft) => {});
    },
    [GET_POST]: (state, action) => {
      return produce(state, (draft) => {
        draft.postId = action.payload.postList.postId;
        draft.title = action.payload.postList.title;
        draft.content = action.payload.postList.content;
        draft.comments = { ...action.payload.postList.comments };
      });
    },
  },
  initialState
);

// *** 액션 생성 함수 export
const actionCreators = {
  setPost,
  getPost,
  randomPostFB,
  deletePostFB,
  myPostFB,
  myCommentFB,
};

export { actionCreators };
