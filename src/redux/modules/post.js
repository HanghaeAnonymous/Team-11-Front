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
  postId: 1,
  title: "강아지",
  content: "우리집 강아지",
  comments: [
    {
      commentId: 1,
      comment: "댓글 내용 1",
      createdAt: "2021-12-09",
    },
    {
      commentId: 2,
      comment: "댓글 내용 2",
      createdAt: "2021-12-01",
    },
    {
      commentId: 3,
      comment: "댓글 내용 3",
      createdAt: "2021-12-02",
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
        if(response.data === ""){
          history.replace('/')
          window.alert("게시물이 없습니다.")
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
        history.replace(`/post/${postId}`);
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
        history.replace("/post");
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
      produce(state, (draft) => {
        draft = action.payload.postList
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
