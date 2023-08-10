import styled from "@emotion/styled";
import InputDate from "../InputDate";

import ResultBox from "../ResultBox";
import InputText from "../InputText";
import { useContext } from "react";
import { DataContext } from "../../page/MakerBox";
import Options from "../Options";

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, auto);
`;
const ContentsContainer = styled.ul`
  margin-top: 20px;
  margin-left: 20px;
`;
const Li = styled.li`
  margin-top: 10px;
`;

const NewFunctionDataBox = () => {
  const {
    setFunctionName,
    functionName,
    setCharacteristic,
    characteristic,
    setAppList,
    appList,
  } = useContext(DataContext);
  return (
    <Container>
      <ContentsContainer>
        <h2>Function Data Maker</h2>
        <Li>
          <InputDate />
        </Li>
        <Li>
          <InputText
            onChange={setFunctionName}
            value={functionName}
            label={"functionName"}
          />
        </Li>
        <Li>
          <InputText
            onChange={setCharacteristic}
            value={characteristic}
            label={"characteristic"}
          />
        </Li>
        <Li>
          <Options
            onChange={(e) => {
              const optionClicked = appList.find(
                (item) => item === e.target.value
              );
              !optionClicked && setAppList(`${[...appList, e.target.value]}`);
            }}
            value={appList}
            label="appList"
            options={["기본", "카카오톡"]}
          />
        </Li>
      </ContentsContainer>
      <ResultBox result_function />
    </Container>
  );
};

export default NewFunctionDataBox;
