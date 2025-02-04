import React from "react";
import { NavLink } from "react-router";

import { FintechSVG } from "../../assets/FintechSVG";
import summary from "../../assets/icons/resumo.svg";
import sales from "../../assets/icons/vendas.svg";
import webhooks from "../../assets/icons/webhooks.svg";
import settings from "../../assets/icons/configuracoes.svg";
import contact from "../../assets/icons/contato.svg";
import exit from "../../assets/icons/sair.svg";

export const Sidenav: React.FC = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech Logo" />
      <ul>
        <li>
          <span>
            <img src={summary} alt="" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={sales} alt="" />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a>Webhooks</a>
        </li>
        <li>
          <span>
            <img src={settings} alt="" />
          </span>
          <a>Configurações</a>
        </li>
        <li>
          <span>
            <img src={contact} alt="" />
          </span>
          <a>Contato</a>
        </li>
        <li>
          <span>
            <img src={exit} alt="" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
};
