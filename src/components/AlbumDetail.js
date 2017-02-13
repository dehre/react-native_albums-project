import React, {Component} from "react";
import {View, Text, Image} from "react-native";

import Card from "./Card";
import CardSection from "./CardSection";

const AlbumDetail = ({album})=>{
    let {title,artist,thumbnail_image, image} = album;
    let {
      thumbnailStyle,
      headerContentStyle,
      headerTextStyle,
      thumbnailContainerStyle,
      imageStyle
    } = styles;
    return(
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: thumbnail_image}}/>
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>Title: {title}</Text>
            <Text>Artist: {artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style={imageStyle}
            source={{uri: image}}/>
        </CardSection>
      </Card>
    )

}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetail;
