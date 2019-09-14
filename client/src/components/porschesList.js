import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as queries from '../apollo/queries';
import { useQuery } from '@apollo/react-hooks';

const styles = StyleSheet.create({
});

const PorschesList = ({ genericModelId: GenericModelId }) => {
  const { loading, error, data } = useQuery(queries.SEARCH_PORSCHES, {
		variables: { GenericModelId }
	});

  return (
      <View>
      </View>
  );
}

export default PorschesList;
