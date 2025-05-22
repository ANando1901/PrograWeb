import { useState } from "react";
import Sidebar from "../Componentes/Barra";
import { Table } from "../Componentes/Tabla";
import "../Estilos/vistaAdmin.css"
import { ListaGames } from "../Utils/ListaJuegos";


import "../Estilos/Modal.css"

export default function VistaAdmin() {
  return (
    <div className="layout-container modal-container">
      <Sidebar/>
      <Table/>
    </div>
  )
}