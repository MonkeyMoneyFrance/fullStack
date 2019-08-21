import React , { useState, useEffect } from 'react';
import LicenseInput from '../inputs/licenseInput'
import moment from 'moment'


function GameAvatar(props) {
    const [selected, setSelected] = useState([])

    const {sport,division,category,playedAt} = props.game
    const {teamA,teamB} = props
    const setValue = (id,value) => props.setData({[id]:value})

    return (

          <div className={"gameAvatar"}>
            <div className={"innerContainerLeft"} style={{justifyContent:'flex-start'}}>
              <div >
                <div className={'container'} style={{justifyContent: "space-between"}}>
                  <div>
                    <div className='p2'>
                      Sport : {sport}
                    </div>
                  </div>
                  <div>
                    <div className='p2'>
                      Division : {division}
                    </div>
                  </div>
                  <div>
                    <div className='p2'>
                      Categorie : {category}
                    </div>
                  </div>
                </div>
                <div className={'container'} style={{justifyContent: "space-between"}}>
                  <div >
                    <div className='p2'>
                      Date
                    </div>
                    <div className='p2'>
                    {moment(playedAt).format('DD/MM/YYYY')}
                    </div>
                  </div>
                  <div >
                    <div className='p2'>
                      Lieu
                    </div>
                    <div className='p2'>
                      Paris
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"innerContainerRight"}>
              <div className={"container"} >
                <div className='p2'>
                  EQUIPE A
                </div>
                <div className='p2'>
                  EQUIPE B
                </div>
              </div>
              <div className={"container wrap"} >
                <input
                  id = {"resultB"}

                  value={teamB.result}
                />
                -
                <input
                  id = {"resultA"}
                  value={teamA.result}

                />
              </div>
            </div>
        </div>

)
}






export default GameAvatar;
