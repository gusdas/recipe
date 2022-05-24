import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import ModalPopup from 'ui/molecules/ModalPopup';
import HeaderWrapper from 'ui/atoms/HeaderWrapper';

import MoreButton from 'ui/organisms/MoreButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const HeaderBar = ({type}) => {
  const navigate = useNavigate();
  const [modal, setModal] = React.useState(false);
  const [shareModal, setShareModal] = React.useState(false);
  const [delModal, setDelModal] = React.useState(false);

  const onClickBack = () => {
    navigate(-1);
  };
  switch (type) {
    case 'recipe':
      return (
        <HeaderWrapper>
          <ArrowBackIosIcon onClick={() => setModal(true)} fontSize="small" />
          <BookmarkIcon />
          {modal && (
            <ModalPopup
              isOn={false}
              content="레시피 등록을 정말 그만두시겠어요?"
              closeEvent={setModal}
              yesEvent={onClickBack}></ModalPopup>
          )}
        </HeaderWrapper>
      );
    case 'party':
      return (
        <HeaderWrapper>
          <ArrowBackIosIcon onClick={onClickBack} fontSize="small" />

          <MoreButton setShareModal={setShareModal} setDelModal={setDelModal} />
          {shareModal && (
            <ModalPopup
              isOn={false}
              content="나눔완료로 변경하시겠어요? 변경시 더 이상 상태를 수정할 수 없어요"
              closeEvent={setShareModal}
              yesEvent={() => {}}></ModalPopup>
          )}

          {delModal && (
            <ModalPopup
              isOn={false}
              content="게시물을 정말 삭제하시겠어요?"
              closeEvent={setDelModal}
              yesEvent={() => {}}></ModalPopup>
          )}
        </HeaderWrapper>
      );
    case 'writeParty':
      return (
        <HeaderWrapper>
          <ArrowBackIosIcon onClick={() => setModal(true)} fontSize="small" />
          {modal && (
            <ModalPopup
              isOn={false}
              content="게시글 등록을 정말 그만두시겠어요?"
              closeEvent={setModal}
              yesEvent={onClickBack}></ModalPopup>
          )}
        </HeaderWrapper>
      );
    default:
      return (
        <HeaderWrapper>
          <ArrowBackIosIcon onClick={onClickBack} fontSize="small" />
        </HeaderWrapper>
      );
  }
};

export default HeaderBar;
