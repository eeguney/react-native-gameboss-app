import React, { useEffect, useLayoutEffect } from 'react'
import Wrapper from '../components/Wrapper'
import useFetch from '../hooks/useFetch'
import ENV_CONFIG from '../constants/env_config'
import ThreeRow from '../components/ThreeRow/ThreeRow';

export default function PlayersScreen({ navigation }) {
   const players = useFetch(ENV_CONFIG.API.PLAYERS);

   useEffect(() => {
     players.fetch();
   }, [])

   useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Oyuncular",
    });
  }, []);

  return (
    <Wrapper error={players.error}>
      <ThreeRow label="Oyuncular" data={players.data} />  
    </Wrapper>
  )
}