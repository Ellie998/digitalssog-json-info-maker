import styled from "@emotion/styled";
import Button from "../../components/Button";

import NewFunctionDataBox from "../../components/NewFunctionDataBox";
import NewMethodDataBox from "../../components/NewMethodDataBox";
import { createContext, useState } from "react";

export const DataContext = createContext({
  date: "",
  category: "",
  characteristic: "",
  setDate: null,
  setCategory: null,
  setCharacteristic: null,
  isSubmitClicked: false,
  isResetClicked: false,
});

const Container = styled.main`
  border: 0.1px solid gray;
  border-radius: 10px;
  padding: 10px;
  width: 1000px;
  margin: 40px auto 10px auto;
  padding: 40px;
`;
const ContentsContainer = styled.div``;

const MakerBox = () => {
  const [isBtn1Clicked, setIsBtn1Clicked] = useState(false);
  const [isBtn2Clicked, setIsBtn2Clicked] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [isResetClicked, setIsResetClicked] = useState(false);

  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [characteristic, setCharacteristic] = useState("");

  return (
    <Container id="maker_wrap">
      <DataContext.Provider
        value={{
          date,
          category,
          characteristic,
          setDate: (e) => setDate(e.target.value),
          setCategory: (e) => setCategory(e.target.value),
          setCharacteristic: (e) => setCharacteristic(e.target.value),
          isSubmitClicked,
          isResetClicked,
        }}>
        <ContentsContainer>
          <Button
            onClick={() => {
              setIsBtn1Clicked(true);
              setIsBtn2Clicked(false);
            }}>
            new 기능
          </Button>
          <Button
            onClick={() => {
              setIsBtn1Clicked(false);
              setIsBtn2Clicked(true);
            }}>
            new method
          </Button>
        </ContentsContainer>

        {isBtn1Clicked && <NewFunctionDataBox />}
        {isBtn2Clicked && <NewMethodDataBox />}
        {(isBtn1Clicked || isBtn2Clicked) && (
          <Button
            className={`align-center`}
            onClick={() => setIsSubmitClicked(true)}>
            생성
          </Button>
        )}
        {(isBtn1Clicked || isBtn2Clicked) && (
          <Button
            className={`align-center`}
            onClick={() => {
              setIsSubmitClicked(false);
              setIsResetClicked(true);
              setDate("");
              setCategory("");
              setCharacteristic("");
              setTimeout(() => {
                setIsResetClicked(false);
              }, 1000);
            }}>
            리셋
          </Button>
        )}
      </DataContext.Provider>
    </Container>
  );
};

export default MakerBox;
