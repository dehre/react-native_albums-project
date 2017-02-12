import React, {Component} from "react";
import {Text, View} from "react-native";
import axios from "axios";

import AlbumDetail from "./AlbumDetail";

export default class AlbumList extends Component {

  constructor(props){
    super(props);
    this.state= {
      albums: []
    }
  }

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((res)=>{
        this.setState({
          albums: res.data
        });
      })
  }

  componentDidUpdate(prevProps,prevState){
    if(this.state.albums.length>0){
      console.log('there are some albums', this.state.albums);
    } else {
      console.log('no albums yet')
    }
  }

  render(){
    return(
      <View>
        <Text>AlbumList</Text>
      </View>
    )
  }

}

const styles = {}
