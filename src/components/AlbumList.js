import React, {Component} from "react";
import {Text, View} from "react-native";

import AlbumDetail from "./AlbumDetail";

export default class AlbumList extends Component {

  render(){
    return(
      <View>
        <Text>AlbumList</Text>
        <AlbumDetail/>
      </View>
    )
  }

}

const styles = {}
