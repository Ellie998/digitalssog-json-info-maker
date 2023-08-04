import styled from "@emotion/styled";
import { DataContext } from "../../page/MakerBox";
import { useContext } from "react";

const Container = styled.main``;

const InputDate = () => {
  const { setDate, isResetClicked, date } = useContext(DataContext);
  return (
    <Container>
      <label htmlFor="date">생성일</label>
      <input
        type="date"
        id="date"
        onChange={setDate}
        value={!isResetClicked ? date : ""}
      />
    </Container>
  );
};

export default InputDate;
