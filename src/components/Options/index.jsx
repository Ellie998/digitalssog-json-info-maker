import styled from "@emotion/styled";

import Label from "../Label";

const Container = styled.main``;

const Options = ({ onChange, value, label, id, options }) => {
  return (
    <Container>
      <Label htmlFor={id ? id : label}>{label}</Label>
      <select id={id ? id : label} onChange={onChange}>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Options;
