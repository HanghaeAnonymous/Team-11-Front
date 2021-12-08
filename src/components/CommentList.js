// CommentList.js

// *** 패키지 import
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

import { Grid, Button, Text, Input } from "../elements/index";

const CommentList = (props) => {

  const myCommentInfo = useSelector((state) => state.post.comments);
  const check = myCommentInfo.commentId ? true : false
  const commentInfo = useSelector((state)=>state.feed.myPosts);

  if(check){ // 내 게시물 조회일 경우
    console.log("게시물게시물 조회")
    return (
      <React.Fragment> 
        {myCommentInfo.map((p) => {
          return <CommentItem key={p.commentId} {...p}></CommentItem>;
        })}
      </React.Fragment>
    );
  }else{ // 랜덤한 게시물 조회일 경우
    return (
      <React.Fragment> 
        {commentInfo.map((p) => {
          return <CommentItem key={p.commentId} {...p}></CommentItem>;
        })}
      </React.Fragment>
    );
  }
};

const CommentItem = (props) => {
  const { commentId, comment, createdAt } = props;
  return (
    <React.Fragment>
      <Grid is_flex margin="auto" width="70%">
        <Grid>
          <Text bold>익명</Text>
        </Grid>
        <Grid>
          <Text margin="0px">{comment}</Text>
        </Grid>
        <Grid>
          <Text margin="0px">{createdAt}</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

CommentItem.defaultProps = {
  commentId: 1,
  comment: "기본 댓글 내용",
  createdAt: "날짜",
};

export default CommentList;
