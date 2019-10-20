import React , { useState, useEffect } from 'react';
import LicenseInput from '../inputs/licenseInput'


function Players(props) {
    const [players, setPlayers] = useState([])


    const setValue = (id,value) => {
      const newJson = [...players]
      newJson[id] = value
      setPlayers(newJson)
      props.setData(props.id,{players:newJson})
    }
    useEffect(() => setPlayers(props.players||[]),[])
    const rows = Array.from(Array(players.length+1).keys())

    return (
      <>
        <h3>Joueurs</h3>
        <table style={{width:"100%"}}>
          <thead>
            <tr>
              <td>N°</td>
              <td >NOM PRENOM</td>
              <td >LICENSE</td>
          </tr>
          </thead>
          <tbody>
            {rows.map((e,i) => {
              let player = players[i]
              return (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>
                    <LicenseInput
                      id = {i}
                      value={player}
                      item={'label'}
                      setValue={setValue}
                    />
                  </td>
                  <td>
                    <LicenseInput
                      disabled
                      value={player}
                      setValue={setValue}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>

        </table>
        </>

)
}


export default Players;
