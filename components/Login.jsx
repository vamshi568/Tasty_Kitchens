import React from "react"
import ContentLoader from "react-content-loader"

const MyResturant = (props) => (
  <div className="flex justify-center items-center w-screen">

  
  <div className="h-screen  max-w-[1040px] w-11/12">

  <ContentLoader 
    speed={2}
    width={1040}
    height={800}
    viewBox="0 0 1040 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#d4d3d3"
    {...props}
  >
    <circle cx="39" cy="39" r="23" /> 
    <rect x="80" y="30" rx="2" ry="2" width="240" height="17" /> 
    <rect x="394" y="32" rx="2" ry="2" width="240" height="17" /> 
    <rect x="25" y="95" rx="0" ry="0" width="1040" height="249" /> 
    <rect x="31" y="392" rx="0" ry="0" width="244" height="158" /> 
    <rect x="299" y="401" rx="0" ry="0" width="165" height="26" /> 
    <rect x="300" y="439" rx="0" ry="0" width="139" height="24" /> 
    <rect x="303" y="476" rx="0" ry="0" width="105" height="23" /> 
    <rect x="31" y="589" rx="0" ry="0" width="244" height="158" /> 
    <rect x="299" y="598" rx="0" ry="0" width="165" height="26" /> 
    <rect x="299" y="636" rx="0" ry="0" width="139" height="24" /> 
    <rect x="302" y="674" rx="0" ry="0" width="105" height="23" /> 
    <rect x="547" y="393" rx="0" ry="0" width="244" height="158" /> 
    <rect x="815" y="402" rx="0" ry="0" width="165" height="26" /> 
    <rect x="816" y="440" rx="0" ry="0" width="139" height="24" /> 
    <rect x="819" y="477" rx="0" ry="0" width="105" height="23" /> 
    <rect x="547" y="590" rx="0" ry="0" width="244" height="158" /> 
    <rect x="815" y="599" rx="0" ry="0" width="165" height="26" /> 
    <rect x="815" y="637" rx="0" ry="0" width="139" height="24" /> 
    <rect x="818" y="675" rx="0" ry="0" width="105" height="23" />
  </ContentLoader>
  </div>
  </div>
)

export default MyResturant