/**
 * Created by chhaichivon on 8/27/17.
 */

import React, { Component } from 'react';
/*import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);*/




/*
import { connect } from 'react-redux';
import { fetchData } from './../actions/action';
*/



import {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
} from 'react-native';


var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;



class App extends React.Component {

    getInitialState(){
        return {
                dataSource: new ListView.DataSource({
                    rowHasChanged: (row1, row2) => row1 !== row2,
                }),
                loaded: false,
        }
    }
    componentDidMount() {
        this.fetchData();
    }

     fetchData() {
        fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
            loaded: true,
        });
        })
        .done();
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
        }


    renderMovie(movie) {
        return (
            <View style={styles.container}>
            <Image
                source={{uri: movie.posters.thumbnail}}
                style={styles.thumbnail}
            />
            <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
            </View>
            </View>
        );
    }

	render(){


        var styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F5FCFF',
            },
            rightContainer: {
                flex: 1,
            },
            title: {
                fontSize: 20,
                marginBottom: 8,
                textAlign: 'center',
            },
            year: {
                textAlign: 'center',
            },
            thumbnail: {
                width: 53,
                height: 81,
            },
            listView: {
                paddingTop: 20,
                backgroundColor: '#F5FCFF',
            },
        });

        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

		return(
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderMovie}
                    style={styles.listView}
                />
		);
	}
}


export default App;

/*
function mapStateToProps(state) {
	return {
		fetchData : state.fetchData
    }
}
function mapDispatchToProps(dispatch) {
	return {
		fetchData: () => dispatch(fetchData())
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App)*/
