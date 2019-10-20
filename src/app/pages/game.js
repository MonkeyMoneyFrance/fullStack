import React , { useState, useEffect } from 'react';
import {Container,Button,Row,SeparateContainer} from './layout'
import GameAvatar from '../components/avatars/game';
import Player from '../components/forms/players';
import Coach from '../components/forms/coach';
import ScheduleGame from '../components/forms/scheduleGame';
import Signatures from '../components/forms/signatures';
import Remarks from '../components/forms/remarks';
import Referee from '../components/forms/referee';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import "./styles.scss"
import styled from 'styled-components'
import {requestFetchGame,requestFetchResult} from '../redux/actions';
const ResultContainer = styled.div`
  padding : 0.5em;
  display:flex;
  flex-direction:column;
  min-height : 100vh;
  background-color:white;
}
`
let mochaGame = {
  "date": "2018-03-22T04:06:07.000Z",
  "status": 0,
  "division": "BCUGEDFJED",
  "_id": "5d4ad4341c9d4400007ff577"
}
let mochaResult = {
  "general" : {
    "refPresent": true,
    "resultA" : 3,
    "resultB": 1
  },
  "signatures": {
    "teamA": [
      {
        "_id": "GHKHJGJ",
        "date": "2019-03-22T04:06:07.000Z"
      }
    ],
    "teamB": [],
    "referee": []
  },
  "teamA": {
    "before": "PLEIN DE REMARQUES",
    "coachPresent": true,
    "players": ["XAVI2", "GEO3"]
  },
  "teamB": {
    "players": []
  },
  "_id": "5d4ad4341c9d4400007ff577"
}


function mapStateToProps(state,props){
  return {
    result : (state.results||[]).find(g => g._id == props.match.params.gameId) || mochaResult,
    game : (state.games||[]).find(g => g._id == props.match.params.gameId) || mochaGame
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({requestFetchResult,requestFetchGame},dispatch)
}
function Game(props) {
  const [data , setData] = useState({...props.result})
  const setJson = (id,value) => setData({...data,[id]:{...data[id],...value}})
  useEffect(()=> {
    props.requestFetchResult({_id:props.match.params.gameId})
    props.requestFetchGame({_id:props.match.params.gameId})
  }, [])
  const Submit = () => {
    console.log(data)
    // props.requestFetchResult({_id:props.match.params.gameId})
  }
  const defaultGame =  props.game || props.defaultProps
  const defaultResult =  data
  if (!props.game) return null
  // return null
  return (
    <ResultContainer>
      <div style={{flexGrow:1}}>
      <GameAvatar
        id={'general'}
        {...defaultGame}
        {...defaultResult.general}
        setData={setJson}
      />
        <Container >
          <SeparateContainer>
            <Row>
              <Coach
                id={'teamA'}
                {...defaultResult.teamA}
                setData={setJson}
              />
              <Player
                id={'teamA'}
                players={(defaultResult.teamA||{}).players}
                setData={setJson}
              />
            </Row>
          </SeparateContainer>
          <SeparateContainer>
            <Row>
              <Coach
                id={'teamB'}
                {...defaultResult.teamB}
                setData={setJson}
              />
              <Player
                id={'teamB'}
                players={(defaultResult.teamB||{}).players}
                setData={setJson}
              />
            </Row>
          </SeparateContainer>

        </Container>
        <Row>
          <ScheduleGame
            id={'general'}
            setData={setJson}
          />
        </Row>
        <Row>
          <Referee
            id={'general'}
            {...defaultResult.general}
            setData={setJson}
          />
        </Row>
        <Row>
        <p>Réclamations, reserves et observations AVANT, PENDANT et APRES la recontre</p>
        <div className={"container wrap"}>
          <div style={{flex:1,width:"100%"}}>
            <h5>Equipe A</h5>
            <Remarks
              id={'teamA'}
              {...defaultResult.teamA}
              setData={setJson}
            />
          </div>
          <div style={{flex:1,width:"100%"}}>
            <h5>Equipe B</h5>
            <Remarks
              id={'teamB'}
              {...defaultResult.teamB}
              setData={setJson}
            />
          </div>
        </div>
        </Row>

        </div>
        <p>SINATURES OBLIGATOIRES</p>
        <Signatures />
        <Container>
          <Button
            onClick = {Submit}
            type="submit"
            >
              Enregistrer
            </Button>
        </Container>
    </ResultContainer>
)
}


export default connect(mapStateToProps,matchDispatchToProps)(Game);
