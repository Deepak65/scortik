import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../assests/dashboardFrthComponent.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const tableData = [
  {
    no: "1",
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiVmxiQTdFV1dTcWFTeFRkS1NQSFcifQ==,signature:f47b578701d34a22bc0b9723699bca4faf94d1549016d93ba3e51995bd06c6c2/VlbA7EWWSqaSxTdKSPHW",
    name: "Ethereum",
    progress: "87",
    count: "4,290",
    text: "Easy",
  },
  {
    no: "2",
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiVmxiQTdFV1dTcWFTeFRkS1NQSFcifQ==,signature:f47b578701d34a22bc0b9723699bca4faf94d1549016d93ba3e51995bd06c6c2/VlbA7EWWSqaSxTdKSPHW",
    name: "Tezos",
    progress: "87",
    count: "4,290",
    text: "Easy",
  },
  {
    no: "3",
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoielpUekVPM1F1Mlc0UUtCZ214ZzYifQ==,signature:49db1cdd27d042bf9b2fb0516c244ca00405bf84444c330214c4efdf2df2f8f8/zZTzEO3Qu2W4QKBgmxg6",
    name: "Stellar",
    progress: "85",
    count: "48",
    text: "Easy",
  },
  {
    no: "4",
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiY044dDVSOTRTaTZLWk9xVHp4Q1cifQ==,signature:793679d2b8dfa5f6a826cc4bfb5bb047876ca9c59afa0ce916f2c2d05145c217/cN8t5R94Si6KZOqTzxCW",
    name: "Tezos",
    progress: "84",
    count: "403",
    text: "Easy",
  },
  {
    no: "5",
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiR2gxZXdhMTBRbmliUk1KZEMyY2IifQ==,signature:f800ffe451c8ebe72d9351de5437f5693b3d19ff7868f3c0c37a92f96ed19315/Gh1ewa10QnibRMJdC2cb",
    name: "Avalanche",
    progress: "83",
    count: "1262",
    text: "Easy",
  },
  {
    no: "6",
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiUlB2Q2IwZlNUWGkyNW5ub3BMYU8ifQ==,signature:ff6fd42a3d2b6630bcc83188f22eb9cf0eebf6c6cf8e0ed66b9f6adeca01f29e/RPvCb0fSTXi25nnopLaO",
    name: "Polkadot",
    progress: "82",
    count: "297",
    text: "Easy",
  },
  {
    no: "7",
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiZW5rZDd1WHJTbW15eUpDZ29yM0cifQ==,signature:96780bc2f5fa62c7006795bacff79f8437c367f4a7926710199a361431682d4b/enkd7uXrSmmyyJCgor3G",
    name: "Celo",
    progress: "82",
    count: "297",
    text: "Easy",
  },
  {
    no: "8",
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoidlRvT2lFcDZURE9MS2w1aVo2bkgifQ==,signature:8600a6f3962da3f2757253f37d5764bb4d138b701dea920de1b0487c66080c45/vToOiEp6TDOLKl5iZ6nH",
    name: "Near",
    progress: "82",
    count: "297",
    text: "Easy",
  },
  {
    no: "9",
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiSkZrTDRmbTFTN3FUckNyNjFFb0cifQ==,signature:b54069cac4f5d5f0da4825a39604d0135a8818f522756e5b23a1984f6760d59b/JFkL4fm1S7qTrCr61EoG",
    name: "Solana",
    progress: "82",
    count: "297",
    text: "Easy",
  },
  {
    no: "10",
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoibTFDOTJTMWRSOWVNSHJZQ1M5ZGcifQ==,signature:c48b9625b97964ea29758ab59508182a327a204df08ca6b37bf5e19093b6d978/m1C92S1dR9eMHrYCS9dg",
    name: "Fantom",
    progress: "82",
    count: "297",
    text: "Easy",
  },
];
const liveData = [
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiUlB2Q2IwZlNUWGkyNW5ub3BMYU8ifQ==,signature:ff6fd42a3d2b6630bcc83188f22eb9cf0eebf6c6cf8e0ed66b9f6adeca01f29e/RPvCb0fSTXi25nnopLaO",
    title: "Polkadot",
    average: "Write Speed",
    speed: "2,844 Ms",
    time: "17 minutes ago",
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiUGtvNjFhT3BSd0N2S3BsNlpIV0sifQ==,signature:7741d0a213515ad00d7b5ba10189d5388a32cb110bd8cf65238c055ac5a9e93d/Pko61aOpRwCvKpl6ZHWK",
    title: "Vechain",
    average: "Gas Fee",
    speed: "42,773",
    time: "17 minutes ago",
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiVmxiQTdFV1dTcWFTeFRkS1NQSFcifQ==,signature:f47b578701d34a22bc0b9723699bca4faf94d1549016d93ba3e51995bd06c6c2/VlbA7EWWSqaSxTdKSPHW",
    title: "Ethereum",
    average: "384,830 Gwei",
    speed: "42,773",
    time: "17 minutes ago",
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiVmxiQTdFV1dTcWFTeFRkS1NQSFcifQ==,signature:f47b578701d34a22bc0b9723699bca4faf94d1549016d93ba3e51995bd06c6c2/VlbA7EWWSqaSxTdKSPHW",
    title: "Ethereum",
    average: "384,830 Gwei",
    speed: "42,773",
    time: "17 minutes ago",
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiY044dDVSOTRTaTZLWk9xVHp4Q1cifQ==,signature:793679d2b8dfa5f6a826cc4bfb5bb047876ca9c59afa0ce916f2c2d05145c217/cN8t5R94Si6KZOqTzxCW",
    title: "Tezos",
    average: "Gas Fee",
    speed: "2,844 Ms",
    time: "17 minutes ago",
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiY044dDVSOTRTaTZLWk9xVHp4Q1cifQ==,signature:793679d2b8dfa5f6a826cc4bfb5bb047876ca9c59afa0ce916f2c2d05145c217/cN8t5R94Si6KZOqTzxCW",
    title: "Tezos",
    average: "Write Speed",
    speed: "2,844 Ms",
    time: "17 minutes ago",
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiNXYzTURYS1VUUHFXUXRZY0tuSVkifQ==,signature:0393c18a9d731c8c1b192bace5869e3f52b617c0d78c7ec84c95de0835189c80/5v3MDXKUTPqWQtYcKnIY",
    title: "Cronos",
    average: "Write Speed",
    speed: "2,844 Ms",
    time: "17 minutes ago",
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiNXYzTURYS1VUUHFXUXRZY0tuSVkifQ==,signature:0393c18a9d731c8c1b192bace5869e3f52b617c0d78c7ec84c95de0835189c80/5v3MDXKUTPqWQtYcKnIY",
    title: "Cronos",
    average: "Gas Fee",
    speed: "2,844 Ms",
    time: "17 minutes ago",
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoia1lFU1RtYkxUMHlLVFY3Zk9yTmMifQ==,signature:f8293b3d9ae69870926393e96647f3272a1e6649904ff3018096d18d41b84ce5/kYESTmbLT0yKTV7fOrNc",
    title: "Algorand",
    average: "Gas Fee",
    speed: "2,844 Ms",
    time: "17 minutes ago",
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoia1lFU1RtYkxUMHlLVFY3Zk9yTmMifQ==,signature:f8293b3d9ae69870926393e96647f3272a1e6649904ff3018096d18d41b84ce5/kYESTmbLT0yKTV7fOrNc",
    title: "Algorand",
    average: "Gas Fee",
    speed: "2,844 Ms",
    time: "17 minutes ago",
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoicWd3RnFHTXJUdVM3ZE85UVZiQUMifQ==,signature:e1d87989a069ec328c1133d59b823a8e417fce34eaa898e511c06bbed40d67dc/qgwFqGMrTuS7dO9QVbAC",
    title: "Binance",
    average: "Gas Fee",
    speed: "2,844 Ms",
    time: "17 minutes ago",
  },
];
export default function DashboardForthComponent() {
  return (
    <div className="row mb-5 align-items-center-des">
      <div className="col-lg-8 protocol_table sm-mb-2">
        <div className="card shadow border-0">
          <div className="table-responsive table-div">
            <div
              className="data-tables-div dt-bootstrap4 no-footer"
              id="table-wrapper"
            >
              <table
                id="main-table"
                class="main-table-style table align-items-center table-flush"
              >
                <thead className="">
                  <tr className="thead">
                    <th scope="col" className="w-40-px sorting sort-ascendingg">
                      Rank
                    </th>
                    <th scope="col" className="sorting w-176-px">
                      Protocol
                    </th>
                    <th scope="col" className="pl-42-mob sorting w-142-px">
                      Ecosystem Score
                    </th>
                    <th
                      className="no-sort text-center pl-42-mob sorting_disabled"
                      scope="col"
                    >
                      Write Speed
                    </th>
                    <th scope="col" className="pl-42-mob sorting">
                      Public Nodes
                    </th>
                    <th scope="col" className="pl-42-mob sorting">
                      Ease of Grant
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => {
                    return (
                      <tr>
                        <td className="sorting_1">{row?.no}</td>
                        <td scope="row">
                          <a
                            href=""
                            className="protocol_logo rounded-circle mr-3"
                          >
                            <img
                              src={row?.icon}
                              className="protocol_logo rounded-circle mr-3"
                            />
                            <span>{row?.name}</span>
                          </a>
                        </td>
                        <td className="dropdown pop-up">
                          <div className="box">
                            <div className="chart easyPieChart">
                              <CircularProgressbar
                                value={row?.progress}
                                text={`${row?.progress}`}
                                styles={buildStyles({
                                  textColor: "#278E15",
                                  pathColor: "#278E15",
                                  //   trailColor: "smokewhite"
                                })}
                              />
                              {/* {row?.progress} */}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="graphcanvas align-cnter-graph">
                            <LineChart
                              width={100}
                              height={50}
                              data={data}
                              margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                              }}
                            >
                              <Line
                                type="linear"
                                dot={false}
                                dataKey="uv"
                                stroke="#82ca9d"
                                strokeWidth={2}
                              />
                            </LineChart>
                          </div>
                        </td>
                        <td>{row?.count} </td>
                        <td className="text-right1">
                          <p className="text-green-color mb-0">{row?.text}</p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="bottom">
                <div className="tables-div-filter"></div>
                <div
                  className="tables-div-length bs-select"
                  id="main-table-length"
                >
                  <label>
                    Show{" "}
                    <select
                      name="main-table-length"
                      aria-controls="main-table"
                      className="custom-select custom-select-sm form-control form-control-sm"
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </label>
                </div>
                <div
                  className="tables-div-paginate page-number"
                  id="main-table-paginate"
                >
                  <ul className="pagination">
                    <li
                      className="paginate-btn page-item previous disabled"
                      id="main-table-prev"
                    >
                      <a
                        href="#"
                        aria-controls="main-table"
                        data-dt-idx="0"
                        tabindex="0"
                        className="page-link"
                      >
                        <span className="pagination-default">Prev</span>
                        <span className="pagination-fa">
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </a>
                    </li>
                    <li className="paginate-btn page-item active">
                      <a
                        href="#"
                        aria-controls="main-table"
                        data-dt-idx="1"
                        tabindex="0"
                        className="page-link"
                      >
                        1
                      </a>
                    </li>
                    <li className="paginate-btn page-item ">
                      <a
                        href="#"
                        aria-controls="main-table"
                        data-dt-idx="2"
                        tabindex="0"
                        className="page-link"
                      >
                        2
                      </a>
                    </li>
                    <li className="paginate-btn page-item ">
                      <a
                        href="#"
                        aria-controls="main-table"
                        data-dt-idx="3"
                        tabindex="0"
                        className="page-link"
                      >
                        3
                      </a>
                    </li>
                    <li className="paginate-btn page-item ">
                      <a
                        href="#"
                        aria-controls="main-table"
                        data-dt-idx="4"
                        tabindex="0"
                        className="page-link"
                      >
                        4
                      </a>
                    </li>
                    <li
                      className="paginate-btn page-item next"
                      id="main-table-next"
                    >
                      <a
                        href="#"
                        aria-controls="main-table"
                        data-dt-idx="5"
                        tabindex="0"
                        className="page-link"
                      >
                        <span className="pagination-default">Next</span>
                        <span className="pagination-fa">
                          <i className="fa fa-chevron-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 montioring-div">
        <div className="card p-3 border-0">
          <h6 className="h6-heading">
            <img
              src="https://scortik.com/wp-content/themes/Divi/assets/img/live-monitoring.svg"
              className="mr-12-px"
            />
            Live Monitoring
          </h6>
          {liveData.map((row,index) => {
            return (
              <>
              <div className="montioring-item">
                <ul className={liveData.length - 1 === index ? "mb-borderBottom m-0" : "m-0"}>
                  <li className="w-15 mr-2">
                    <img src={row?.icon} />
                  </li>
                  <li className="w-100">
                    <span className="d-block montioring-title">
                      {row?.title}
                    </span>
                    <span className="fs-12">{row?.average}</span>
                  </li>
                  <li className="text-right w-100">
                    <p>{row?.speed}</p>
                    <span className="fs-12">{row?.time}</span>
                  </li>
                </ul>
              </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
