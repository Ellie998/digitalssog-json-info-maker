import styled from "@emotion/styled";
import { useContext } from "react";
import { DataContext } from "../../page/MakerBox";
import Label from "../Label";

const Container = styled.main``;

const InputText = ({ onChange, value, id, label }) => {
  const { isResetClicked } = useContext(DataContext);
  return (
    <Container>
      <Label htmlFor={id ? id : label}>{label}</Label>
      <textarea
        id={id ? id : label}
        onChange={onChange}
        value={!isResetClicked ? value : ""}
      />
    </Container>
  );
};

export default InputText;
