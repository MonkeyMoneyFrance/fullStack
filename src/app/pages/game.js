import React , { useState, useEffect } from 'react';
import {Container,Button} from './layout'
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
import {requestFetchResult} from '../redux/actions';

function mapStateToProps(state,props){
  return {
    default : (state.results)
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({requestFetchResult},dispatch)
}
function Game(props) {
  const [data , setData] = useState({})
  const setJson = (id,value) => setData({...data,[id]:{...data[id],...value}})
  useEffect(()=> {
    if (!props.game) props.requestFetchResult({_id:props.match.params.gameId})
  }, [])
  const defaultProps = props.default || {}
  if (!props.default) return null
  return (
    <div style={{padding:"0.5em"}}>
      <GameAvatar
        {...defaultProps}
      />
        <Container >
          <Coach
            id={'teamA'}
            {...defaultProps.teamA}
            setData={setJson}
          />
          <Coach
            id={'teamB'}
            {...defaultProps.teamB}
            setData={setJson}
          />
        </Container>
        <Container>
          <div>
            <Player
              players={(defaultProps.teamA||{}).players}
              setData={setJson}
            />
        </div>
          <div>
            <Player
              players={(defaultProps.teamB||{}).players}
              setData={setJson}
            />
          </div>
        </Container>
        <ScheduleGame
          id={'general'}
          setData={setJson}
        />
        <Referee
          id={'referee'}
          {...defaultProps.main}
          setData={setJson}
        />
        <p>Réclamations, reserves et observations AVANT, PENDANT et APRES la recontre</p>
        <div className={"container wrap"}>
          <div style={{flex:1,width:"100%"}}>
            <h5>Equipe A</h5>
            <Remarks
              id={'teamA'}
              {...defaultProps.teamA}
              setData={setJson}
            />
          </div>
          <div style={{flex:1,width:"100%"}}>
            <h5>Equipe B</h5>
            <Remarks
              id={'teamB'}
              {...defaultProps.teamB}
              setData={setJson}
            />
          </div>
        </div>
        <p>SINATURES OBLIGATOIRES</p>
        <Signatures />
        <Container>
          <Button
            type="submit"
            >
              Enregistrer
            </Button>
        </Container>
      </div>
)
}


export default connect(mapStateToProps,matchDispatchToProps)(Game);
