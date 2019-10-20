import React , { useState, useEffect } from 'react';
import LicenseInput from '../inputs/licenseInput'
import styled from 'styled-components'
import moment from 'moment'

const Container = styled.div`
  display:flex;

  justify-content:space-between;
  .innerContainerLeft  {

    & > div {
      margin:0.5em;

      box-shadow: 0 2px 4px 2px rgba(153,153,153,0.10);
      @media(min-width:758px){
        // width : 80%
      }
    }
  }
  .innerContainerRight{
    margin:0.5em;
    align-items: center;
    flex-direction: column;
    display: flex;
      box-shadow: 0 2px 4px 2px rgba(153,153,153,0.10);
    justify-content: space-around;
    .container {
      // background-color: green;

    }
  }
  & > div {
    // background-color: blue;
    flex:1;
    & > .container {

    }
  }

  & .p2 {
    margin : 0.5em 1em;
  }


  @media(max-width:758px){
    flex-direction : column;
    & .container {
      // width:100%;
    }
  }
}
`
function GameAvatar({resultA,resultB,sport,division,category,date,setData,id}) {
    const [values, setValue] = useState({resultA,resultB})




    const onChange = (e) => setValue({...values,[e.target.id]:e.target.value})
    const onBlur = () => setData(id,values)

    return (

          <Container>
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
                    {moment(date).format('DD/MM/YYYY')}
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
              <>
                <div className={"container"} style={{justifyContent:'space-around'}} >
                  <div className='p2'>
                    EQUIPE A
                  </div>
                  <div className='p2'>
                    EQUIPE B
                  </div>
                </div>
                <div className={"container wrap"} >
                  <input
                    id = {"resultA"}
                    value={values.resultA}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  -
                  <input
                    id = {"resultB"}
                    value={values.resultB}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                </div>
              </>
            </div>
          </Container>

)
}






export default GameAvatar;
