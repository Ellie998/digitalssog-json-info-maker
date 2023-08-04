import styled from "@emotion/styled";

const Container = styled.button`
  border: none;
  background-color: #d6d6d6;
  padding: 5px;
  margin: 2px;
  cursor: pointer;
  &:hover {
    background-color: antiquewhite;
  }
`;

const Button = ({ children, onClick, className }) => {
  return (
    <Container className={className} onClick={onClick}>
      {children}
    </Container>
  );
};
export default Button;
