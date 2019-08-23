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
      props.setData(props.id,{coachPresent})
    }
    useEffect(() => setPresent(props.coachPresent||false),[])
    return (
        <div className={"horizontalcontainer"}>
          <input
            type="checkbox"
            id="coachPresent"
            name="coachPresent"
            checked={coachPresent}
            onChange={onSwitch}
           />
          <label htmlFor="coachPresent">Coach</label>


          <div className='p2' >Fait par :</div>
          <div className={"containerwrap"} >
            <LicenseInput
              id = {"coachId"}
              defaultValue={props.coachId}
              setValue={setValue}
            />
            <LicenseInput
              id = {"coachTeamId"}
              defaultValue={props.coachTeamId}
              setValue={setValue}
            /></div>
        </div>
    )
  }


export default Coach;
