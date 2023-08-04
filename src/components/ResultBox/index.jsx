import styled from "@emotion/styled";
import { useContext } from "react";
import { DataContext } from "../../page/MakerBox";

const Container = styled.textarea`
  width: 100%;
  height: 300px;
`;

const ResultBox = () => {
  const { date, category, characteristic, isSubmitClicked } =
    useContext(DataContext);

  const result = `"date": "${date}", 
"category": "${category}", 
"characteristic": "${characteristic}"
`;

  return <Container defaultValue={isSubmitClicked ? result : ""}></Container>;
};

export default ResultBox;
