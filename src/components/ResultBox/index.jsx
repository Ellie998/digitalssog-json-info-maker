import styled from "@emotion/styled";
import { useContext } from "react";
import { DataContext } from "../../page/MakerBox";

const Container = styled.textarea`
  width: 100%;
  height: 300px;
`;

const ResultBox = ({ result_function }) => {
  const {
    date,
    functionName,
    appList,
    characteristic,
    isSubmitClicked,
    methodAppName,
    methodNum,
    methodTitle,
    methodContents,
  } = useContext(DataContext);

  const result = result_function
    ? `
"date": "${date}", 
"name": "${functionName}", 
"app":${appList},
"characteristic": "${characteristic}",
`
    : `{
"date": "${date}", 
"methodAppName": "${methodAppName}",
"howto": [
  {
    "methodNum": ${methodNum},
    "methodTitle": "${methodTitle}",
    "methodContent": [${methodContents
      .filter((item) => item !== undefined && item !== "")
      .map((item) => `"${item}"`)}]
  }
]
}
`;

  return <Container defaultValue={isSubmitClicked ? result : ""}></Container>;
};

export default ResultBox;
