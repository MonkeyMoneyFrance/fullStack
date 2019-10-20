import React , { useState, useEffect } from 'react';
import LicenseInput from '../inputs/licenseInput'

function Coach(props) {
    const [coachPresent , setPresent] = useState(false)
    const setValue = (id,value) => {
      const newJson = {coachPresent,[id]:value}
      props.setData(props.id,newJson)
    }
    const onSwitch = (e) => {
      setPresent(!coachPresent)
      props.setData(props.id,{coachPresent:!coachPresent})
    }

    useEffect(() => setPresent(props.coachPresent||false),[])
    return (
      <div style={{flex:1}}>
        <div className={"container"}>
          <div>
            <input
              type="checkbox"
              id="coachPresent"
              name="coachPresent"
              checked={coachPresent}
              onChange={onSwitch}
             />
            <label htmlFor="coachPresent">Coach</label>
          </div>
        </div>
        <div className='p2' >Fait par :</div>
        <div className={"container"}>
            <>
              <LicenseInput
                id = {"coachId"}
                value={props.coachId}
                item={'label'}
                setValue={setValue}
              />
              <LicenseInput
                // id = {"coachTeamId"}
                disabled
                value={props.coachId}
                setValue={setValue}
              />

          </>
        </div>
      </div>
    )
  }


export default Coach;
