import styled from "@emotion/styled";
import InputDate from "../InputDate";

import ResultBox from "../ResultBox";
import InputText from "../InputText";
import { useContext } from "react";
import { DataContext } from "../../page/MakerBox";

import InputNumber from "../InputNumber";

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

const NewMethodDataBox = () => {
  const {
    setMethodAppName,
    methodAppName,
    setMethodNum,
    methodNum,
    methodTitle,
    setMethodTitle,
    methodContents,
    setMethodContents,
  } = useContext(DataContext);
  return (
    <Container>
      <ContentsContainer>
        <h2>Method Data Maker</h2>
        <Li>
          <InputDate />
        </Li>
        <Li>
          <InputText
            onChange={setMethodAppName}
            value={methodAppName}
            label={"methodAppName"}
          />
        </Li>
        <Li>
          <InputNumber
            onChange={setMethodNum}
            value={methodNum}
            label={"methodNum"}
          />
        </Li>
        <Li>
          <InputText
            onChange={setMethodTitle}
            value={methodTitle}
            label={"methodTitle"}
          />
        </Li>

        <Li>
          <InputText
            onChange={(e) => {
              setMethodContents([
                `${e.target.value}`,
                methodContents[1],
                methodContents[2],
                methodContents[3],
                methodContents[4],
                methodContents[5],
                methodContents[6],
              ]);
            }}
            value={methodContents[0]}
            label={"methodContents1"}
          />
        </Li>
        <Li>
          <InputText
            onChange={(e) => {
              setMethodContents([
                methodContents[0],
                `${e.target.value}`,
                methodContents[2],
                methodContents[3],
                methodContents[4],
                methodContents[5],
                methodContents[6],
                methodContents[7],
                methodContents[8],
                methodContents[9],
              ]);
            }}
            value={methodContents[1]}
            label={"methodContents2"}
          />
        </Li>
        <Li>
          <InputText
            onChange={(e) => {
              setMethodContents([
                methodContents[0],
                methodContents[1],
                `${e.target.value}`,
                methodContents[3],
                methodContents[4],
                methodContents[5],
                methodContents[6],
                methodContents[7],
                methodContents[8],
                methodContents[9],
              ]);
            }}
            value={methodContents[2]}
            label={"methodContents3"}
          />
        </Li>
        <Li>
          <InputText
            onChange={(e) => {
              setMethodContents([
                methodContents[0],
                methodContents[1],
                methodContents[2],
                `${e.target.value}`,
                methodContents[4],
                methodContents[5],
                methodContents[6],
                methodContents[7],
                methodContents[8],
                methodContents[9],
              ]);
            }}
            value={methodContents[3]}
            label={"methodContents4"}
          />
        </Li>
        <Li>
          <InputText
            onChange={(e) => {
              setMethodContents([
                methodContents[0],
                methodContents[1],
                methodContents[2],
                methodContents[3],
                `${e.target.value}`,
                methodContents[5],
                methodContents[6],
                methodContents[7],
                methodContents[8],
                methodContents[9],
              ]);
            }}
            value={methodContents[4]}
            label={"methodContents5"}
          />
        </Li>
        <Li>
          <InputText
            onChange={(e) => {
              setMethodContents([
                methodContents[0],
                methodContents[1],
                methodContents[2],
                methodContents[3],
                methodContents[4],
                e.target.value,
                methodContents[6],
                methodContents[7],
                methodContents[8],
                methodContents[9],
              ]);
            }}
            value={methodContents[5]}
            label={"methodContents6"}
          />
        </Li>
        <Li>
          <InputText
            onChange={(e) => {
              setMethodContents([
                methodContents[0],
                methodContents[1],
                methodContents[2],
                methodContents[3],
                methodContents[4],
                methodContents[5],
                `${e.target.value}`,
                methodContents[7],
                methodContents[8],
                methodContents[9],
              ]);
            }}
            value={methodContents[6]}
            label={"methodContents7"}
          />
        </Li>
        <Li>
          <InputText
            onChange={(e) => {
              setMethodContents([
                methodContents[0],
                methodContents[1],
                methodContents[2],
                methodContents[3],
                methodContents[4],
                methodContents[5],
                methodContents[6],
                `${e.target.value}`,
                methodContents[8],
                methodContents[9],
              ]);
            }}
            value={methodContents[7]}
            label={"methodContents8"}
          />
        </Li>
        <Li>
          <InputText
            onChange={(e) => {
              setMethodContents([
                methodContents[0],
                methodContents[1],
                methodContents[2],
                methodContents[3],
                methodContents[4],
                methodContents[5],
                methodContents[6],
                methodContents[7],
                `${e.target.value}`,
                methodContents[9],
              ]);
            }}
            value={methodContents[8]}
            label={"methodContents9"}
          />
        </Li>
        <Li>
          <InputText
            onChange={(e) => {
              setMethodContents([
                methodContents[0],
                methodContents[1],
                methodContents[2],
                methodContents[3],
                methodContents[4],
                methodContents[5],
                methodContents[6],
                methodContents[7],
                methodContents[8],
                `${e.target.value}`,
              ]);
            }}
            value={methodContents[9]}
            label={"methodContents10"}
          />
        </Li>
      </ContentsContainer>
      <ResultBox />
    </Container>
  );
};

export default NewMethodDataBox;
