import styled from "@emotion/styled";
import { useContext } from "react";
import { DataContext } from "../../page/MakerBox";
import Label from "../Label";
import Input from "../Input";

const Container = styled.main``;

const InputNumber = ({ onChange, value, id, label }) => {
  const { isResetClicked } = useContext(DataContext);
  return (
    <Container>
      <Label htmlFor={id ? id : label}>{label}</Label>
      <Input
        type={"number"}
        id={id ? id : label}
        onChange={onChange}
        value={!isResetClicked ? value : ""}
      />
    </Container>
  );
};

export default InputNumber;
