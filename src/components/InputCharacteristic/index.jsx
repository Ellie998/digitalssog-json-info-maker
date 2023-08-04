import styled from "@emotion/styled";
import { useContext } from "react";
import { DataContext } from "../../page/MakerBox";

const Container = styled.main``;

const InputCharacteristic = () => {
  const { setCharacteristic, isResetClicked, characteristic } =
    useContext(DataContext);
  return (
    <Container>
      <textarea
        onChange={setCharacteristic}
        value={!isResetClicked ? characteristic : ""}
      />
    </Container>
  );
};

export default InputCharacteristic;
