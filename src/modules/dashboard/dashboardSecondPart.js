import React from "react";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const dataAlter = [
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiYjBSd1ZsclJUZUtxNG96c0x6cmQifQ==,signature:468f4c0bb44a445416f62a7a942baaaeb09bf2f14364367eaddb285ba2ba66d0/b0RwVlrRTeKq4ozsLzrd",
    title:"The Graph",
    desc:"Hosted Service - Miscellaneous: Explorer Issue is resolved on Aug 20, 2022.",
    quality:"Performance",
    date:"Aug 22, 2022"
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoibTFDOTJTMWRSOWVNSHJZQ1M5ZGcifQ==,signature:c48b9625b97964ea29758ab59508182a327a204df08ca6b37bf5e19093b6d978/m1C92S1dR9eMHrYCS9dg",
    title:"Fantom",
    desc:"Service CoinGecko API incident has been resolved on 21 Aug",
    quality:"Managed Apis",
    date:"Aug 22, 2022"
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoibTFDOTJTMWRSOWVNSHJZQ1M5ZGcifQ==,signature:c48b9625b97964ea29758ab59508182a327a204df08ca6b37bf5e19093b6d978/m1C92S1dR9eMHrYCS9dg",
    title:"Fantom",
    desc:"Service CoinGecko API incident has been resolved on 21 Aug",
    quality:"Managed Apis",
    date:"Aug 22, 2022"
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoibTFDOTJTMWRSOWVNSHJZQ1M5ZGcifQ==,signature:c48b9625b97964ea29758ab59508182a327a204df08ca6b37bf5e19093b6d978/m1C92S1dR9eMHrYCS9dg",
    title:"Fantom",
    desc:"Service CoinGecko API incident has been resolved on 21 Aug",
    quality:"Managed Apis",
    date:"Aug 22, 2022"
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiWXlUT05QU1Fxa21aSTFvZWl5UEEifQ==,signature:f9a54a06dd6fa663121e874d85df97c9c03894a07046c2ed58e5275c3b8b58d0/YyTONPSQqkmZI1oeiyPA",
    title:"Klaytn",
    desc:"Issue impacting use of KAS APIs was down for 31minutes",
    quality:"Managed Apis",
    date:"Aug 22, 2022"
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiWXlUT05QU1Fxa21aSTFvZWl5UEEifQ==,signature:f9a54a06dd6fa663121e874d85df97c9c03894a07046c2ed58e5275c3b8b58d0/YyTONPSQqkmZI1oeiyPA",
    title:"Klaytn",
    desc:"Issue impacting use of KAS APIs was down for 31minutes",
    quality:"Managed Apis",
    date:"Aug 22, 2022"
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiY044dDVSOTRTaTZLWk9xVHp4Q1cifQ==,signature:793679d2b8dfa5f6a826cc4bfb5bb047876ca9c59afa0ce916f2c2d05145c217/cN8t5R94Si6KZOqTzxCW",
    title:"Tezos",
    desc:"tezos-node-rpc.mondaynet node is down since 2022-08-15",
    quality:"Network Stats",
    date:"Aug 22, 2022"
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiY044dDVSOTRTaTZLWk9xVHp4Q1cifQ==,signature:793679d2b8dfa5f6a826cc4bfb5bb047876ca9c59afa0ce916f2c2d05145c217/cN8t5R94Si6KZOqTzxCW",
    title:"Tezos",
    desc:"tezos-node-rpc.mondaynet node is down since 2022-08-15",
    quality:"Network Stats",
    date:"Aug 22, 2022"
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoieW5yd21MZ2tUQWk4eEtKMGRsMHgifQ==,signature:c307e3a9b8ff245152f5633debcfd54f8419f16ed601a1ca39f9b1cd40ffc084/ynrwmLgkTAi8xKJ0dl0x",
    title:"Harmony",
    desc:"Frequently occuring and resolved automatically Elevated errors on Multi-Sig Backend multisig.t.hmny.io",
    quality:"Network Stats",
    date:"Aug 22, 2022"
  },
  {
    icon: "https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoieW5yd21MZ2tUQWk4eEtKMGRsMHgifQ==,signature:c307e3a9b8ff245152f5633debcfd54f8419f16ed601a1ca39f9b1cd40ffc084/ynrwmLgkTAi8xKJ0dl0x",
    title:"Harmony",
    desc:"Frequently occuring and resolved automatically Elevated errors on Multi-Sig Backend multisig.t.hmny.io",
    quality:"Network Stats",
    date:"Aug 22, 2022"
  },
];
const protocolData = [
    {
        icon:"https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiVmxiQTdFV1dTcWFTeFRkS1NQSFcifQ==,signature:f47b578701d34a22bc0b9723699bca4faf94d1549016d93ba3e51995bd06c6c2/VlbA7EWWSqaSxTdKSPHW",
        title:"Ethereum",
        progress:"87"
    },
    {
        icon:"https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoielpUekVPM1F1Mlc0UUtCZ214ZzYifQ==,signature:49db1cdd27d042bf9b2fb0516c244ca00405bf84444c330214c4efdf2df2f8f8/zZTzEO3Qu2W4QKBgmxg6",
        title:"Stellar",
        progress:"85"
    },
    {
        icon:"https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiY044dDVSOTRTaTZLWk9xVHp4Q1cifQ==,signature:793679d2b8dfa5f6a826cc4bfb5bb047876ca9c59afa0ce916f2c2d05145c217/cN8t5R94Si6KZOqTzxCW",
        title:"Tezos",
        progress:"84"
    },
]
const recentlyData = [
    {
        icon:"https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoiRXdLa2xPWXBRaTJPbTdEckpvamcifQ==,signature:747b505de6bab5236691f46d1f18ba4467a5fc3a80075f3c319fd43a0d69e2b8/EwKklOYpQi2Om7DrJojg",
        title:"Casper Labs",
        progress:"Aug 12, 2022"
    },
    {
        icon:"https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoid2xrVDJVQ0ZTRFdLejdNcGNkb2wifQ==,signature:ebadcf8e39887711dca8888dbe251549cde10e4725b44b943c4da4e120ced59c/wlkT2UCFSDWKz7Mpcdol",
        title:"Rchain",
        progress:"Aug 12, 2022"
    },
    {
        icon:"https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoibnFWaWJUTFFMU2o5SmUwZkVIS1EifQ==,signature:8279f26439bf1a74ffbd8181dbcf67dd5bc67f896b6d0347f53ec5cd2377c4e6/nqVibTLQLSj9Je0fEHKQ",
        title:"Aion",
        progress:"Aug 09, 2022"
    },
]
export default function DashboardSecondPart() {
  return (
    <div className="row row-div mt-41-px">
      <div className="col-lg-4 sm-mb-2">
        <div className="card p-3 border-0 pb-0 paper-alert div-height">
          <h6 className="title-span">
            <img
              className="mr-12-px"
              src="https://scortik.com/wp-content/themes/Divi/assets/img/alert-icon.svg"
            />
            Alerts
          </h6>
          {dataAlter.map((row) => {
            return (
              <div className="card-paper notify-div">
                <ul className="m-0">
                  <li className="w-15 mr-12">
                    <img src={row?.icon} />
                  </li>
                  <li className="w-100">
                    <p className="mt-6-px">{row?.title}</p>
                    <h6>
                      {row?.desc}
                    </h6>
                  </li>
                  <li className="text-right">
                    <span className="fs-red-color w-100">{row?.quality}</span>
                    <span className="fs-12">{row?.date}</span>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-lg-4 sm-mb-2">
        <div className="card p-3 border-0 pb-0 paper-alert">
          <h6 className="title-span">
            <img
              className="mr-12-px"
              src="https://scortik.com/wp-content/themes/Divi/assets/img/popular-icon.svg"
            />
             Popular Protocols
          </h6>
          {protocolData.map((row)=>{
            return (
                <div className="card-paper">
                <ul className=" m-0">
                  <li className="mr-12-px">
                    <img src={row?.icon} />
                  </li>
                  <li className="w-100 font-600">
                    <a href="#">{row?.title}</a>
                  </li>
                  <li className="text-right progress-li-div">
                    <div className="box progres-div d-flex">
                    <CircularProgressbar
        value={row?.progress}
        styles={buildStyles({
          textColor: "#278E15",
          pathColor: "#278E15",
        //   trailColor: "smokewhite"
        width:"24px"})}
      />
                    <div className="circle-div easyPieChart mt-3-px">
                       {row?.progress}
                    </div>
                    </div>
                  </li>
                </ul>
              </div>
            )
          })}
         
        </div>
      </div>
      <div className="col-lg-4">
      <div className="card p-3 border-0 pb-0 paper-alert">
          <h6 className="title-span">
            <img
              className="mr-12-px"
              src="https://scortik.com/wp-content/themes/Divi/assets/img/recentlyadded-icon.svg"
            />
              Recently Added
          </h6>
          {recentlyData.map((row)=>{
            return (
                <div className="card-paper div-data">
                <ul className="m-0">
                  <li className="w-15 mr-12-px">
                    <img src={row?.icon} />
                  </li>
                  <li className="w-100 font-600 ms-31">
                    <a href="#">{row?.title}</a>
                  </li>
                  <li className="text-right tx-color-7272 fs-12 w-100">
                       {row?.progress}
                  </li>
                </ul>
              </div>
            )
          })}
         
        </div>
      </div>
    </div>
  );
}
