import React from "react";
import ConditionalOutputIfElse
  from "./ConditionalOutputIfElse";
import ConditionalOutputInline
  from "./ConditionalOutputInline";
import Exam from "./Exam";
const ConditionalOutput = () => {
 return(
   <>
     <ConditionalOutputIfElse/>
     <ConditionalOutputInline/>
     <Exam/>
   </>
 );
};
export default ConditionalOutput;