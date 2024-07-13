/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TouchableOpacity, Dimensions} from 'react-native';
import {Image} from 'react-native';

const Home = ({navigation}: any) => {
  const innerPadding = 15;

  const cardNumberInline = 3;
  const cardWidthRatio = 7.5; // card ratio
  const cardVerticalRatio = 0.85; // card ratio

  const screenWidth = Dimensions.get('window').width;
  7;
  const cradWidth = (screenWidth * (cardWidthRatio / 10)) / cardNumberInline;
  const cradHeight = cradWidth * cardVerticalRatio;

  const cardColumnGap =
    (screenWidth - cradWidth * cardNumberInline - innerPadding * 2) /
    (cardNumberInline - 1);

  const cardRowGap = cardColumnGap;

  console.log(cardColumnGap);

  console.log('widht' + screenWidth);
  return (
    <ScrollView style={{backgroundColor: '#F2F5FA', minHeight: '100%'}}>
      <View style={{height: 200}}>
        <Image
          source={require('../assets/testBanner.jpg')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={{height: 120, padding: innerPadding}}>
        <View
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 5,
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            elevation: 3,
            shadowOpacity: 0.22,
          }}>
          <Text
            style={{
              color: '#08689B',
              fontWeight: 500,
              fontSize: 14,
              padding: 10,
            }}>
            공지사항
          </Text>
          <Text style={{fontSize: 14, paddingLeft: 10, paddingRight: 10}}>
            내일은 어떠 어떠한 업데이트가 있을 예정입니다. 다들 이용하시는데
            참고 부탁드립니다.
          </Text>
        </View>
      </View>
      <View style={{padding: innerPadding}}>
        <View style={{height: 35}}>
          <Text style={{fontWeight: 600, color: '#0B24CB', fontSize: 18}}>
            Contents
          </Text>
        </View>
        <View
          style={{
            flexWrap: 'wrap',
            rowGap: cardRowGap,
            columnGap: cardColumnGap,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Work</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}
            onPress={() => navigation.navigate('language-best')}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>K-Pop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Drama</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: cradHeight,
              width: cradWidth,
              justifyContent: 'center',
              alignItems: 'center', // 수평 중앙 정렬 추가
              backgroundColor: '#fff',
              borderRadius: 4,
              borderBottomColor: '#16A6F3',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Food</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
