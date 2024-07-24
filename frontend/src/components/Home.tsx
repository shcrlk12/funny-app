import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const MainView = styled.ScrollView`
  background-color: #f2f5fa;
  min-height: 100%;
`;

const Banner = styled.View`
  height: 200px;
`;

const BannerIamge = styled.Image`
  width: 100%;
  height: 100%;
`;

const AnnouncementContainer = styled.View`
  height: 120px;
  padding: 15px;
`;

const AnnouncementInner = styled.View`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-color: #fff;
`;

const AnnouncementTitle = styled.Text`
  color: #08689b;
  font-weight: 500;
  font-size: 14px;
  padding: 10px;
`;

const AnnouncementDetail = styled.Text`
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
`;

const ContentsContainer = styled.View`
  padding: 15px;
`;
const ContentsTitleInner = styled.View`
  height: 35px;
`;

const ContentsTitle = styled.Text`
  font-weight: 600;
  color: #0b24cb;
  font-size: 18px;
`;

const ContentsButtonContainer = styled.View<{
  rowGap: number;
  columnGap: number;
}>`
  flex-wrap: wrap;
  row-gap: ${props => props.rowGap}px;
  column-gap: ${props => props.columnGap}px;
  flex-direction: row;
`;

const ContentsButton = styled.TouchableOpacity<{width: number; height: number}>`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  border-bottom-color: #16a6f3;
  border-bottom-width: 2px;
`;

const ContentsButtonText = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

const Home = ({navigation}: any) => {
  const innerPadding = 15;

  const cardNumberInline = 3;
  const cardWidthRatio = 7.5; // card ratio
  const cardVerticalRatio = 0.85; // card ratio

  const screenWidth = Dimensions.get('window').width;
  const cradWidth = (screenWidth * (cardWidthRatio / 10)) / cardNumberInline;
  const cradHeight = cradWidth * cardVerticalRatio;

  const cardColumnGap =
    (screenWidth - cradWidth * cardNumberInline - innerPadding * 2) /
    (cardNumberInline - 1);

  const cardRowGap = cardColumnGap;
  console.log('test1234');
  return (
    <>
      <MainView>
        <Banner>
          <BannerIamge source={require('@images/testBanner.jpg')} />
        </Banner>
        <AnnouncementContainer>
          <AnnouncementInner>
            <AnnouncementTitle>공지사항</AnnouncementTitle>
            <AnnouncementDetail>
              내일은 어떠 어떠한 업데이트가 있을 예정입니다. 다들 이용하시는데
              참고 부탁드립니다.
            </AnnouncementDetail>
          </AnnouncementInner>
        </AnnouncementContainer>
        <ContentsContainer>
          <ContentsTitleInner>
            <ContentsTitle>Contents</ContentsTitle>
          </ContentsTitleInner>
          <ContentsButtonContainer
            rowGap={cardRowGap}
            columnGap={cardColumnGap}>
            <ContentsButton width={cradWidth} height={cradHeight}>
              <ContentsButtonText>Work</ContentsButtonText>
            </ContentsButton>
            <ContentsButton
              width={cradWidth}
              height={cradHeight}
              onPress={() => {
                navigation.navigate('language-best');
              }}>
              <ContentsButtonText>Language</ContentsButtonText>
            </ContentsButton>
            <ContentsButton width={cradWidth} height={cradHeight}>
              <ContentsButtonText>K-Pop</ContentsButtonText>
            </ContentsButton>
            <ContentsButton width={cradWidth} height={cradHeight}>
              <ContentsButtonText>Food</ContentsButtonText>
            </ContentsButton>
            <ContentsButton width={cradWidth} height={cradHeight}>
              <ContentsButtonText>Drama</ContentsButtonText>
            </ContentsButton>
          </ContentsButtonContainer>
        </ContentsContainer>
      </MainView>
    </>
  );
};

export default Home;
