import styled from "@emotion/styled";
import InputDate from "../InputData";
import InputCategory from "../InputCategory";
import InputCharacteristic from "../InputCharacteristic";
import ResultBox from "../ResultBox";

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, auto);
`;
const ContentsContainer = styled.div``;

const NewFunctionDataBox = () => {
  return (
    <Container>
      <ContentsContainer>
        <InputDate />
        <InputCategory />
        <InputCharacteristic></InputCharacteristic>
      </ContentsContainer>
      <ResultBox />
    </Container>
  );
};

export default NewFunctionDataBox;
