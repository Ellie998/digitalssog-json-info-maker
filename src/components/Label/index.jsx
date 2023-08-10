import styled from "@emotion/styled";

const Container = styled.label`
  display: block;
`;

const Label = ({ htmlFor, children }) => {
  return <Container htmlFor={htmlFor}>{children}</Container>;
};

export default Label;
