// PostDetail.js

// *** 패키지 import
import React, { useState } from "react";
import { Grid, Button, Text, Input } from "../elements/index";
import { useHistory } from "react-router";

import Header from "../components/Header";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";

const PostDetail = (props) => {
  const [myPost, setMyPost] = useState(true);
  const history = useHistory();
  const user_token = localStorage.getItem("user_token") ? true : false;

  if (!user_token) {
    window.alert("로그인 후 이용 가능합니다.");
    history.replace("/");
  }

  return (
    <React.Fragment>
      <Header></Header>
      <Grid margin="5% 0px 2% 0px">
        <Text border="1px solid" margin="auto" width="50%" height="10vh">게시물 제목입니다.</Text>
       </Grid>
       <Grid margin="1% 0px 2% 0px"> 
        <Text border="1px solid" margin="auto" width="50%" height="50vh">게시물 내용입니다.</Text>
        {myPost ? (
          <Grid margin="3% 0px 1% 0px">
            <Button text="수정" width="5vw" margin="0px 1% 0px 0px"></Button>
            <Button text="삭제" width="5vw" margin="0px 0px 0px 1%"></Button>
          </Grid>
        ) : (
          <Button text="넘기기" width="20vw" margin="0px 0px 0px 28%"></Button>
        )}
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
