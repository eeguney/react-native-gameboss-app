import React, { useEffect, useLayoutEffect } from 'react'
import Wrapper from '../components/Wrapper'
import useFetch from '../hooks/useFetch'
import ENV_CONFIG from '../constants/env_config'
import ThreeRow from '../components/ThreeRow/ThreeRow';

export default function TeamsScreen({ navigation }) {
   const teams = useFetch(ENV_CONFIG.API.TEAMS);

   useEffect(() => {
    teams.fetch();
   }, [])

   useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Takımlar",
    });
  }, []);

  return (
    <Wrapper error={teams.error}>
      <ThreeRow label="Takımlar" data={teams.data} />  
    </Wrapper>
  )
}