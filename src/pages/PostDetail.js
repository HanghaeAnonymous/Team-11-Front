// PostDetail.js

// *** 패키지 import
import React, { useState } from "react";
import { Grid, Button, Text, Input } from "../elements/index";
import { useHistory, useParams } from "react-router-dom";

import Header from "../components/Header";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";

const PostDetail = (props) => {
  const history = useHistory();
  const user_token = localStorage.getItem("user_token") ? true : false;
  const params = useParams();

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
            게시물 제목입니다.
          </Text>
        </Grid>
        <Grid margin="1% 0px 0% 0px">
          <Text border="1px solid" margin="auto" width="50%" height="50vh">
            게시물 내용입니다.
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
          게시물 제목입니다.
        </Text>
      </Grid>
      <Grid margin="1% 0px 2% 0px">
        <Text border="1px solid" margin="auto" width="50%" height="50vh">
          게시물 내용입니다.
        </Text>
      </Grid>
      <Grid margin="1% 0px 1% 0px">
        <Button text="넘기기" width="20vw" margin="auto"></Button>
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
