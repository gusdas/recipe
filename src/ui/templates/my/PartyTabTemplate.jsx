import {Box} from '@mui/material';
import {Black40} from 'assets/colorSet';
import PartyPost from 'ui/organisms/PartyPost';
import React from 'react';

import Typography from 'ui/atoms/Typography';

import {useDispatch, useSelector} from 'react-redux';
import {getMyPost} from 'redux/slices/userSlice';
const PartyTabTemplate = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.user.myPosts);
  React.useEffect(() => {
    dispatch(getMyPost());
  }, [dispatch]);
  return (
    <Box mt={4}>
      {posts.map((v) => (
        <PartyPost
          key={v.postId}
          id={v.postId}
          title={v.title}
          address={v.address}
          category={v.category}
          // Todo: 이미지, expriedAt입력받기
        />
      ))}
      <Typography color={Black40} fontSize="12px">
        2022년 5월 21일
      </Typography>

      <Typography color={Black40} fontSize="12px">
        2022년 5월 20일
      </Typography>
    </Box>
  );
};

export default PartyTabTemplate;
