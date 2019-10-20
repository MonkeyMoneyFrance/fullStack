import React , { useState, useEffect } from 'react';
import LicenseInput from '../inputs/licenseInput'
import {connect} from 'react-redux'


function Referee({refPresent,id,setData,refId}) {

  const [isRefPresent, setPresent] = useState(refPresent)
  const setValue = (idItem,value) => {
    const newJson = {refPresent,[idItem]:value}
    setData(id,newJson)
  }
  const onSwitch = (e) => {
    setPresent(!isRefPresent)
    setData(id,{refPresent:!isRefPresent})
  }
  return (
    <div style={{flex:1}}>
      <div className={"container"}>
        <div >
          <input
            type="checkbox"
            id="refPresent"
            name="refPresent"
            checked={isRefPresent}
            onChange={onSwitch}
          />
          <label htmlFor="refPresent">Observation de la rencontre</label>
        </div>
      </div>
      <div className={"container"}>
        <div className={'p2'}>
          Fait par :
        </div>
        <div className={"container"} >
          <LicenseInput
            id = {"refId"}
            value={refId}
            item='label'
            disabled={!isRefPresent}
            setValue={setValue}
          />
          <LicenseInput
            id = {"refLicence"}
            value={refId}
            disabled
            setValue={setValue}
          />
        </div>
      </div>
    </div>
  )

}


export default Referee;
