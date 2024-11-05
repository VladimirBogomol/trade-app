import React, { useState, useEffect } from "react";
import { Participants, ParTime } from "./constants";
import Tr1 from "./components/Timer";
import Tr2 from "./components/CompanyInfo";
import Tr3 from "./components/QualityStandards";
import Tr4 from "./components/ProductionTime";
import Tr5 from "./components/Guarantee";
import Tr6 from "./components/TermsOfPayment";
import Tr7 from "./components/Price";
import Tr8 from "./components/Actions";

const Structure = () => {
  const [time, setTime] = useState(0);
  const [showIndicator, setShowIndicator] = useState(
    Array(Participants).fill(false)
  );
  
  let tr1 = [],
    tr2 = [],
    tr3 = [],
    tr4 = [],
    tr5 = [],
    tr6 = [],
    tr7 = [],
    tr8 = [];

  const timer = () => {
    const indicator = Array(Participants).fill(false);
    const circleCount = Date.now() / (Participants * ParTime * 1000);
    const elapsedTime =
      (circleCount - Math.trunc(circleCount)) * Participants * ParTime;
    for (let i = 0; i < Participants; i++) {
      if (ParTime * i < elapsedTime && elapsedTime < ParTime * (i + 1)) {
        const minutes = Math.trunc((ParTime * (i + 1) - elapsedTime) / 60);
        let seconds = Math.trunc(
          ParTime * (i + 1) - elapsedTime - minutes * 60
        );
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
        indicator[i] = true;
        setShowIndicator(indicator);
        setTime(`${minutes}:${seconds}`);
      }
    }
  };

  const timerID = setInterval(timer);
  clearInterval(timerID);
  useEffect(() => {
    const timerId = setInterval(timer, 100);
    return () => clearInterval(timerId);
  });

  for (let i = 1; i <= Participants; i++) {
    const propsTR1 = {
      show: showIndicator[i - 1],
      time,
    };
    const propsTR2 = {
      i,
    };
    tr1.push(<Tr1 key={i} {...propsTR1} />);
    tr2.push(<Tr2 key={i} {...propsTR2} />);
    tr3.push(<Tr3 key={i} />);
    tr4.push(<Tr4 key={i} />);
    tr5.push(<Tr5 key={i} />);
    tr6.push(<Tr6 key={i} />);
    tr7.push(<Tr7 key={i} />);
    tr8.push(<Tr8 key={i} />);
  }

  return (
    <div className="container">
      <div className="container-header">
        <div className="header-action">Ход торгов</div>
        <div className="header-lot">
          Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020 07:00)
        </div>
      </div>
      <hr />
      <div className="container-content">
        <div className="content-notation">
          Уважаемые участники, во время вашего хода вы можете изменить параметры
          торгов, указанных в таблице:
        </div>
        <div className="content-table">
          <table className="table">
            <tbody>
              <tr>
                <td className="table-1-1">ХОД</td>
                {tr1.map((item) => {
                  return item;
                })}
              </tr>
              <tr>
                <td className="table-1-2">ПАРАМЕТРЫ И ТРЕБОВАНИЯ</td>
                {tr2.map((item) => {
                  return item;
                })}
              </tr>
              <tr className="table-row">
                <td className="table-1-3">
                  Наличие комплекса мероприятий, повышающих стандарты качества
                  изготовления
                </td>
                {tr3.map((item) => {
                  return item;
                })}
              </tr>
              <tr className="table-row">
                <td className="table-1-3">Срок изготовления лота, дней</td>
                {tr4.map((item) => {
                  return item;
                })}
              </tr>
              <tr className="table-row">
                <td className="table-1-3">Гарантийные обязательства, мес</td>
                {tr5.map((item) => {
                  return item;
                })}
              </tr>
              <tr className="table-row">
                <td className="table-1-3">Условия оплаты</td>
                {tr6.map((item) => {
                  return item;
                })}
              </tr>
              <tr className="table-row">
                <td className="table-1-3">
                  Стоимость изготовления лота, руб (без НДС)
                </td>
                {tr7.map((item) => {
                  return item;
                })}
              </tr>
              <tr className="table-row">
                <td className="table-1-3">Действия:</td>
                {tr8.map((item) => {
                  return item;
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Structure;
