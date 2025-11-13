import React from 'react'
import  StageOneRemapping from "../components/Service/Diagnostics/StageOneRemapping"
import EngineSystemSolutions from "../components/Service/Diagnostics/EngineSystemSolutions"
import ExtraServicesOffered from "../components/Service/Diagnostics/ExtraServicesOffered"
const Diagnostics = () => {
    return (
        <div>
           <StageOneRemapping />
           <EngineSystemSolutions />
           <ExtraServicesOffered />
        </div>
    )
}

export default Diagnostics
