import React from 'react';
import styled from 'styled-components';
import KakaoIcon from 'assets/imgs/KakaoIcon.png';
import GoogleIcon from 'assets/imgs/GoogleIcon.png';
import LoginIcon from 'common/icons/LoginIcon';
import Kakao from 'common/icons/KakaoIcon';
import HeaderBar from 'ui/templates/header/HeaderBar';
import Wrapper from 'ui/atoms/Wrapper';
import Typography from 'ui/atoms/Typography';
import LoginButton from 'ui/atoms/LoginButton';
const Login = () => {
  return (
    <React.Fragment>
      <HeaderBar type="back" />
      <Wrapper
        display="flex"
        direction="column"
        justify="center"
        align="center">
        <Wrapper padding="7.8125rem 5.8125rem 0 5.8125rem ">
          <Typography fontSize="20px" fontWeight="600" margin="0 0 16px 0 ">
            Potluck 시작하기
          </Typography>
        </Wrapper>
        <Typography fonstSize="14px" fontWeight="400">
          쉽고 재미있게 요리하고
        </Typography>
        <Typography fonstSize="14px" fontWeight="400">
          이웃들과 즐거움을 나눠보세요!
        </Typography>

        <Wrapper padding="3.625rem 4rem">
          <LoginButton
            background="#fee500"
            src={KakaoIcon}
            href="http://justpotluck.shop/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/auth/profil"
            margin="0 0 8px 0">
            카카오로 시작하기
          </LoginButton>

          <LoginButton
            background="white"
            border="1px solid #4285f4"
            src={GoogleIcon}
            href="http://www.justpotluck.shop/oauth2/authorization/google?redirect_uri=http://localhost:3000/auth/profil"
            margin="0 0 11.9rem 0">
            구글로 시작하기
          </LoginButton>
        </Wrapper>
        <LoginIcon />
      </Wrapper>
    </React.Fragment>
  );
};
const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('${(props) => props.src}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const TextArea = styled.div`
  margin-top: 7.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

// const Kakao = styled.div`
//   height: 49px;

//   background: #fee500;
//   border-radius: 6px;
//   margin-bottom: 0.5rem;

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;

//   padding: 0.9rem 2.375rem;

//   font-weight: 500;
//   font-size: 14px;
//   line-height: 140%;
//   /* identical to box height, or 20px */

//   letter-spacing: 0.15px;

//   color: #191919;
//   cursor: pointer;
//   a {
//     margin-left: 12px;
//     text-decoration: none;
//     color: #191919;
//   }
//   box-sizing: border-box;
// `;

const Google = styled.div`
  height: 49px;

  background: #ffffff;
  border: 1px solid #4285f4;
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.9rem 2.8rem;

  cursor: pointer;

  font-size: 14px;
  line-height: 140%;
  color: #191919;
  letter-spacing: 0.15px;
  a {
    margin-left: 12px;
    text-decoration: none;
    color: #191919;
  }
  box-sizing: border-box;
`;

export default Login;
