//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
// create a component
const Home = ({navigation}) => {
  const [activeSections, setActiveSections] = React.useState([]);
  const [SECTIONS, setSECTIONS] = React.useState([]);
  useEffect(() => {
    fetch('https://api.jsonbin.io/b/60e7f4ebf72d2b70bbac2970')
      .then(responce => responce.json())
      .then(res => {
        setSECTIONS(res.data);
        // setListState(res.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const img =
    'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  _renderSectionTitle = section => {
    return <View style={styles.content}></View>;
  };

  _renderHeader = (section, i, isActive) => {
    return (
      <View style={[styles.dropdownBody, {justifyContent: 'space-between'}]}>
        <View style={styles.dropdownView}>
          <Image style={styles.listImageStyle} source={{uri: img}} />
          <Text style={styles.dropdownText}>{section.title}</Text>
        </View>
        {!isActive ? (
          <Image
            style={styles.listIconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/57/57055.png',
            }}
          />
        ) : (
          <Image
            style={styles.listIconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6850/6850778.png',
            }}
          />
        )}
      </View>
    );
  };

  _renderContent = section => {
    return section.data.map(item => {
      return (
        <TouchableOpacity style={styles.dropdownListStyle}>
          <Text style={{fontSize: 16, color: '#000'}}>{item.title}</Text>
        </TouchableOpacity>
      );
    });
  };

  _updateSections = activeSections => {
    setActiveSections(activeSections);
  };
  ///
  const searchHandale = () => {
    navigation.navigate('SearchBar');
  };
  return (
    <View>
      <View style={styles.headerBody}>
        <Text style={styles.headerText}>Approved Foods List</Text>
      </View>
      <TouchableOpacity
        style={[styles.dropdownBody]}
        onPress={() => searchHandale()}>
        <Image
          style={[styles.listIconStyle, {marginRight: 10}]}
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png',
          }}
        />
        <Text>Try Searching fat,success name...</Text>
      </TouchableOpacity>
      <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        renderSectionTitle={_renderSectionTitle}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        underlayColor={false}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  listIconStyle: {
    height: 20,
    width: 20,
  },
  listImageStyle: {
    height: 35,
    width: 35,
    borderRadius: 10,
  },
  dropdownBody: {
    width: '90%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginLeft: 20,
    marginTop: 15,
    paddingVertical: 8,
    borderRadius: 12,
    height: 50,
  },
  dropdownView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
  dropdownListStyle: {
    alignItems: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#ffffff',
    marginLeft: 20,
    justifyContent: 'center',
  },
  headerText: {fontSize: 25, color: '#000', fontWeight: 'bold'},
  headerBody: {width: '100%', alignItems: 'center', marginTop: 10},
});

//make this component available to the app
export default Home;

// const SECTIONS = [
//     {
//       title: 'First',
//       image:
//         'https://images.pexels.com/photos/12108913/pexels-photo-12108913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       content: 'Lorem ipsum...',
//       data: [
//         {
//           id: 1,
//           title: 'abc',
//         },
//         {
//           id: 2,
//           title: 'abcsdf',
//         },
//       ],
//     },

//     {
//       title: 'Second',
//       image:
//         'https://images.pexels.com/photos/12108913/pexels-photo-12108913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       content: 'Lorem ipsum...',
//       data: [
//         {
//           id: 1,
//           title: 'abc',
//         },
//         {
//           id: 2,
//           title: 'abcsdf',
//         },
//       ],
//     },
//   ];
// require('../../asset/image/dropdown.png')
