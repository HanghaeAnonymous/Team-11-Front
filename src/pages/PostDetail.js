// PostDetail.js

// *** 패키지 import
import React, { useState } from "react";
import { Grid, Button, Text, Input } from "../elements/index";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import Header from "../components/Header";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import axios from "axios";

const PostDetail = (props) => {
  const history = useHistory();
  const user_token = localStorage.getItem("user_token") ? true : false;
  const params = useParams();

  const dispatch = useDispatch();
  const postInfo = useSelector((state) => state.post);

  React.useEffect(() => {
    if (!postInfo) {
      // 랜덤한 정보를 서버에 요청
      dispatch(postActions.randomPostFB())
      console.log("정보 없음")
    }
  });

  // 넘어가기 버튼 클릭 시 다음 게시물 요청하기
  const nextPost = () => {
    dispatch(postActions.randomPostFB())
    // 또는 페이지 다시 요청하기
    // history.replace('/post')
  }

  if (!user_token) {
    window.alert("로그인 후 이용 가능합니다.");
    history.replace("/");
  }

  if (params.postId) {
    return (
      <React.Fragment>
        <Header></Header>
        <Grid margin="5% 0px 2% 0px">
          <Text border="1px solid" margin="auto" width="50%" height="10vh">
            {postInfo.title}
          </Text>
        </Grid>
        <Grid margin="1% 0px 0% 0px">
          <Text border="1px solid" margin="auto" width="50%" height="50vh">
            {postInfo.contents}
          </Text>
          <Grid margin="2% 0px 1% 0px">
            <Button text="수정" width="5vw" margin="0px 1% 0px 0px"></Button>
            <Button text="삭제" width="5vw" margin="0px 0px 0px 1%"></Button>
          </Grid>
        </Grid>
        <Grid>
          <CommentWrite></CommentWrite>
        </Grid>
        <Grid>
          <CommentList></CommentList>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Header></Header>
      <Grid margin="5% 0px 2% 0px">
        <Text border="1px solid" margin="auto" width="50%" height="10vh">
          {postInfo.title}
        </Text>
      </Grid>
      <Grid margin="1% 0px 2% 0px">
        <Text border="1px solid" margin="auto" width="50%" height="50vh">
          {postInfo.contents}
        </Text>
      </Grid>
      <Grid margin="1% 0px 1% 0px">
        <Button text="넘어가기" width="20vw" margin="auto" _onClick={nextPost}></Button>
      </Grid>
      <Grid>
        <CommentWrite></CommentWrite>
      </Grid>
      <Grid>
        <CommentList></CommentList>
      </Grid>
    </React.Fragment>
  );
};

export default PostDetail;
