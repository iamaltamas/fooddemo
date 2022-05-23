import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';

// create a component
const SearchBar = () => {
  const [masterData, setMasterData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch('https://api.jsonbin.io/b/60e7f4ebf72d2b70bbac2970')
      .then(responce => responce.json())
      .then(res => {
        setMasterData(res.data);
        setFilterData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    console.log(search);
  }, []);
  function clickSearchHandle(text) {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          backgroundColor: '#ffffff',
          alignItems: 'center',
          paddingHorizontal: 15,
          borderRadius: 10,
          marginTop: 10,
        }}>
        <Image
          style={{height: 20, width: 20}}
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png',
          }}
        />
        <TextInput
          value={search}
          placeholder="Searching fat,success name..."
          onChangeText={text => clickSearchHandle(text)}
        />
      </View>
      <FlatList
        data={filterData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Text>
              {item.id}
              {':'}
              {item.title.toUpperCase()}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  listIconStyle: {
    height: 35,
    width: 35,
    margin: 8,
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
  listIconStyle: {
    height: 20,
    width: 20,
  },
});

//make this component available to the app
export default SearchBar;
{
  /* <Image
          style={[styles.listIconStyle, {marginRight: 10}]}
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png',
          }}
        />
        <Text>Try Searching fat,success name...</Text> */
}
