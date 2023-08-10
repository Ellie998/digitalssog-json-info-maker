import styled from "@emotion/styled";
import Button from "../../components/Button";

import NewFunctionDataBox from "../../components/NewFunctionDataBox";
import NewMethodDataBox from "../../components/NewMethodDataBox";
import { createContext, useState } from "react";

export const DataContext = createContext({
  date: "",
  category: "",
  characteristic: "",
  functionName: "",
  methodName: "",
  appList: [],
  //
  setDate: null,
  setFunctionName: null,
  setMethodName: null,
  setAppList: null,
  setCategory: null,
  setCharacteristic: null,
  //
  methodAppName: "",
  methodNum: null,
  methodTitle: "",
  methodContents: [],
  //
  setMethodAppName: null,
  setMethodNum: null,
  setMethodTitle: null,
  setMethodContents: null,
  //
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
  const [functionName, setFunctionName] = useState("");
  const [methodName, setMethodName] = useState("");
  const [appList, setAppList] = useState([]);

  const [methodAppName, setMethodAppName] = useState("");
  const [methodNum, setMethodNum] = useState(null);
  const [methodTitle, setMethodTitle] = useState("");
  const [methodContents, setMethodContents] = useState([]);

  const onResetClickHandler = () => {
    setIsSubmitClicked(false);
    setIsResetClicked(true);
    resetContents();
    setTimeout(() => {
      setIsResetClicked(false);
    }, 1000);
  };

  const resetContents = () => {
    setDate("");
    setCategory("");
    setCharacteristic("");
    setFunctionName("");
    setMethodName("");
    setAppList([]);
    setMethodAppName("");
    setMethodNum(null);
    setMethodTitle("");
    setMethodContents([]);
  };

  return (
    <Container id="maker_wrap">
      <DataContext.Provider
        value={{
          date,
          category,
          characteristic,
          functionName,
          methodName,
          appList,
          setDate: (e) => setDate(e.target.value),
          setCategory: (e) => setCategory(e.target.value),
          setCharacteristic: (e) => setCharacteristic(e.target.value),
          setFunctionName: (e) => setFunctionName(e.target.value),
          setMethodName: (e) => setMethodName(e.target.value),
          setAppList: setAppList,
          isSubmitClicked,
          isResetClicked,
          //
          methodAppName,
          methodNum,
          methodTitle,
          methodContents,
          //
          setMethodAppName: (e) => setMethodAppName(e.target.value),
          setMethodNum: (e) => setMethodNum(e.target.value),
          setMethodTitle: (e) => setMethodTitle(e.target.value),
          setMethodContents,
        }}>
        <ContentsContainer>
          <Button
            onClick={() => {
              setIsBtn1Clicked(true);
              setIsBtn2Clicked(false);
              resetContents();
              setIsSubmitClicked(false);
            }}>
            new 기능
          </Button>
          <Button
            onClick={() => {
              setIsBtn1Clicked(false);
              setIsBtn2Clicked(true);
              resetContents();
              setIsSubmitClicked(false);
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
          <Button className={`align-center`} onClick={onResetClickHandler}>
            리셋
          </Button>
        )}
      </DataContext.Provider>
    </Container>
  );
};

export default MakerBox;
