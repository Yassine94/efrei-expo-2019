import React, { useState, useEffect } from 'react';
import {useQuery} from '@apollo/react-hooks';
import * as queries from '../apollo/queries';
import {Text, FlatList, ListItem, Image} from 'react-native';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';

const Screen = ({ navigation }) => {
const {loading, error, data} = useQuery(queries.GET_GENERIC_MODELS);
  return (
    <>
      {loading && <Text>{'Loading...'}</Text>}
      {error && <Text>{error.message}</Text>}
      {!loading && !error && (
         <div className={classes.root}>
         <GridList cellHeight={180} className={classes.gridList}>
           <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
             <ListSubheader component="div">December</ListSubheader>
           </GridListTile>
           {tileData.map(tile => (
             <GridListTile key={tile.img}>
               <img src={tile.img} alt={tile.title} />
               <GridListTileBar
                 title={tile.title}
                 subtitle={<span>by: {tile.author}</span>}
                 actionIcon={
                   <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                     <InfoIcon />
                   </IconButton>
                 }
               />
             </GridListTile>
           ))}
         </GridList>
       </div>
      )}
    </>
  );
}
Screen.navigationOptions = {
  title: 'Accueil'
}
export default Screen;
