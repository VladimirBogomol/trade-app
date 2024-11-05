import React from "react";

export default (props) => {
  return (
    <td className="table-2-2">
      <ul className="table-2-2-list">
        <li className="table-2-2-item">Участник №{props.i}</li>
        <li className="table-2-2-item">Название компании</li>
        <li className="table-2-2-item">Данные компании</li>
        <li className="table-2-2-item">Адрес компании</li>
      </ul>
    </td>
  );
};
