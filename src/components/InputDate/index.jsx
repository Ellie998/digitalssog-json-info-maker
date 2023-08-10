import styled from "@emotion/styled";
import { DataContext } from "../../page/MakerBox";
import { useContext } from "react";
import Label from "../Label";
import Input from "../Input";

const Container = styled.div`
  /* display: flex; */
`;

const InputDate = () => {
  const { setDate, isResetClicked, date } = useContext(DataContext);
  return (
    <Container>
      <Label htmlFor="date">생성일</Label>
      <Input
        type="date"
        id="date"
        onChange={setDate}
        value={!isResetClicked ? date : ""}
      />
    </Container>
  );
};

export default InputDate;
