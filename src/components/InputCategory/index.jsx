import styled from "@emotion/styled";
import { useContext } from "react";
import { DataContext } from "../../page/MakerBox";

const Container = styled.main``;
const InputCategory = () => {
  const { setCategory, isResetClicked, category } = useContext(DataContext);
  return (
    <Container>
      <label htmlFor="category">Choose category</label>
      <select
        id="category"
        onChange={setCategory}
        value={!isResetClicked ? category : ""}>
        <option value="전화와 문자">전화와 문자</option>
        <option value="sns">sns</option>
      </select>
    </Container>
  );
};

export default InputCategory;
