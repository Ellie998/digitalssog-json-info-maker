import styled from "@emotion/styled";

const Container = styled.input`
  display: block;
`;

const Input = ({ id, type, onChange, value }) => {
  return <Container type={type} id={id} onChange={onChange} value={value} />;
};

export default Input;
