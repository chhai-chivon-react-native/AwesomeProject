/**
 * Created by chhaichivon on 8/27/17.
 */
import { API_ENDPOINT , CONFIG } from './../api/headers';




export function getUsers(action) {
    try{
        const response = fetch(API_ENDPOINT, action);
        if(!response==undefined){

        }
    }catch(error){

    }
}
 function fetchData() {
    fetch(
        API_ENDPOINT,
            {
                method:  'GET',
                headers:CONFIG
            }
        )
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                loaded: true,
            });
        })
        .done();
}