import { useEffect, useRef, useState } from "react";
import { CSVLink } from "react-csv";
import xlsxLibrary from "./xlsx/xlsxLibrary";

function App() {
  const header = [
    {label: "날짜", key: "date" },
    {label: "팀", key: "team" },
    {label: "파트", key: "part" },
    {label: "사원명", key: "name" },
    {label: "로그인아이디", key: "loginID" },
    {label: "근로일구분", key: "isWorkingday" }, /* weekend, holiday, weekday */
    {label: "대면구분", key: "workType" },
    {label: "근무시작시간", key: "startTime" },
    {label: "근무종료시간", key: "EndTime" },
  ];

  const data = [
    {날짜: "1", 팀:"2", 파트:"3", 사원명:"4", 로그인아이디:"5", 근로일구분:"6", 대면구분:"7", 근무시작시간:"8", 근무종료시간:"9"},
    {날짜: "1", 팀:"2", 파트:"3", 사원명:"4", 로그인아이디:"5", 근로일구분:"6", 대면구분:"7", 근무시작시간:"8", 근무종료시간:"9"},
    {날짜: "1", 팀:"2", 파트:"3", 사원명:"4", 로그인아이디:"5", 근로일구분:"6", 대면구분:"7", 근무시작시간:"8", 근무종료시간:"9"},
    {날짜: "1", 팀:"2", 파트:"3", 사원명:"4", 로그인아이디:"5", 근로일구분:"6", 대면구분:"7", 근무시작시간:"8", 근무종료시간:"9"},
    {날짜: "1", 팀:"2", 파트:"3", 사원명:"4", 로그인아이디:"5", 근로일구분:"6", 대면구분:"7", 근무시작시간:"8", 근무종료시간:"9"},
  ]

  const [excelData, setExcelDate] = useState([]);

  const csvLink = useRef(null);

  useEffect(()=>{
    if(excelData.length>0){
      csvLink?.current?.link.click();
      setExcelDate([]);
    }
  },[excelData])


  return (
    <>
    <button >
      <CSVLink data={data} header={header}>react-csv 라이브러리 엑셀 다운로드</CSVLink>
    </button>
    </>
  );
}

export default App;
