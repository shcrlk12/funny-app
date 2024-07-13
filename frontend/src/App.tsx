/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';

const App = () => (
  <View style={{backgroundColor: '#F2F5FA', minHeight: '100%'}}>
    <View
      style={{
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#16A6F3',
        flexDirection: 'row',
        position: 'relative',
      }}>
      <Text style={{color: '#ffffff', fontSize: 12}}>Everything in Korea</Text>
      <TouchableOpacity
        style={{position: 'absolute', right: 10, width: 25, height: 25}}>
        <Image
          source={require('./assets/hamburger.png')}
          style={{width: '100%', height: '100%'}}
        />
      </TouchableOpacity>
    </View>
    <View style={{height: 250}}>
      <Text>2</Text>
    </View>
    <View style={{height: 100, padding: 10}}>
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
        <Text style={{color: '#08689B', fontWeight: 500, fontSize: 12}}>
          공지사항
        </Text>
        <Text style={{fontSize: 12}}>
          내일은 어떠 어떠한 업데이트가 있을 예정입니다. 다들 이용하시는데 참고
          부탁드립니다.
        </Text>
      </View>
    </View>
    <View style={{padding: 10}}>
      <View style={{height: 35}}>
        <Text style={{fontWeight: 600, color: '#0B24CB', fontSize: 14}}>
          Contents
        </Text>
      </View>
      <View
        style={{
          flexWrap: 'wrap',
          rowGap: 20,
          columnGap: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: 50,
            width: 87,
            justifyContent: 'center',
            alignItems: 'center', // 수평 중앙 정렬 추가
            backgroundColor: '#fff',
            borderRadius: 2,
            borderBottomColor: '#16A6F3',
            borderBottomWidth: 2,
          }}>
          <Text>Work</Text>
        </View>
        <View
          style={{
            height: 50,
            width: 87,
            justifyContent: 'center',
            alignItems: 'center', // 수평 중앙 정렬 추가
            backgroundColor: '#fff',
            borderRadius: 2,
            borderBottomColor: '#16A6F3',
            borderBottomWidth: 2,
          }}>
          <Text>Language</Text>
        </View>
        <View
          style={{
            height: 50,
            width: 87,
            justifyContent: 'center',
            alignItems: 'center', // 수평 중앙 정렬 추가
            backgroundColor: '#fff',
            borderRadius: 2,
            borderBottomColor: '#16A6F3',
            borderBottomWidth: 2,
          }}>
          <Text>Language</Text>
        </View>
        <View
          style={{
            height: 50,
            width: 87,
            justifyContent: 'center',
            alignItems: 'center', // 수평 중앙 정렬 추가
            backgroundColor: '#fff',
            borderRadius: 2,
            borderBottomColor: '#16A6F3',
            borderBottomWidth: 2,
          }}>
          <Text>Language</Text>
        </View>
        <View
          style={{
            height: 50,
            width: 87,
            justifyContent: 'center',
            alignItems: 'center', // 수평 중앙 정렬 추가
            backgroundColor: '#fff',
            borderRadius: 2,
            borderBottomColor: '#16A6F3',
            borderBottomWidth: 2,
          }}>
          <Text>Language</Text>
        </View>
      </View>
    </View>
  </View>
);

export default App;
