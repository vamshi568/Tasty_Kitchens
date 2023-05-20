import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <div className="flex justify-center items-center w-screen">

  
  <div className="h-screen  max-w-[1040px] w-11/12">

 
  <ContentLoader 
    speed={2}
    width={1080}
    height={600}
    viewBox="0 0 1080 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#d4d3d3"
    {...props}
  >
    <circle cx="46" cy="34" r="20" /> 
    <rect x="95" y="26" rx="2" ry="2" width="158" height="16" /> 
    <rect x="806" y="26" rx="0" ry="0" width="169" height="15" /> 
    <rect x="26" y="264" rx="0" ry="0" width="139" height="22" /> 
    <rect x="25" y="292" rx="0" ry="0" width="218" height="12" /> 
    <rect x="776" y="291" rx="0" ry="0" width="285" height="13" /> 
    <rect x="24" y="62" rx="0" ry="0" width="1040" height="181" /> 
    <rect x="33" y="342" rx="0" ry="0" width="147" height="85" /> 
    <rect x="198" y="347" rx="0" ry="0" width="120" height="17" /> 
    <rect x="198" y="375" rx="0" ry="0" width="97" height="12" /> 
    <rect x="200" y="395" rx="0" ry="0" width="70" height="11" /> 
    <rect x="414" y="344" rx="0" ry="0" width="147" height="85" /> 
    <rect x="589" y="349" rx="0" ry="0" width="120" height="17" /> 
    <rect x="589" y="375" rx="0" ry="0" width="97" height="12" /> 
    <rect x="589" y="397" rx="0" ry="0" width="70" height="11" /> 
    <rect x="776" y="344" rx="0" ry="0" width="147" height="85" /> 
    <rect x="941" y="349" rx="0" ry="0" width="120" height="17" /> 
    <rect x="941" y="375" rx="0" ry="0" width="97" height="12" /> 
    <rect x="943" y="397" rx="0" ry="0" width="70" height="11" />
  </ContentLoader>
  </div>
  </div>
)

export default MyLoader