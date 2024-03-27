import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import CalendarioEventos from '../components/Dashboard/CalendarioEventos';
import PanelResumen from '../components/Dashboard/PanelResumen';
import Metricas from '../components/Dashboard/Metricas';
import RecientesActividades from '../components/Dashboard/RecientesActividades';
import MensajeBienvenida from '../components/Dashboard/MensajeBienvenida';
const navbarHeight= 60
const Dashboard = () => {
  return (
    <div className="flex flex-grow overflow-hidden  " >
        <div className='w-64 bg-gray-900 text-white overflow-y-auto'>

      <Sidebar />
        </div>
      <div className="flex-grow bg-gray-100 p-4 overflow-y-auto" style={{ maxHeight: `calc(100vh - ${navbarHeight}px)` }}>
        <div className="flex justify-between p-4">
          <MensajeBienvenida />
          <Metricas />
        </div>
        <div className="flex justify-between p-4">
          <RecientesActividades />
          <PanelResumen />
        </div>
        <div className="p-4">
          <CalendarioEventos />
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;


{/* <div className="flex flex-grow overflow-y-auto   ">
<Sidebar />
<div className="flex flex-col w-full ml-64">
  <div className="flex justify-between p-4">
    <MensajeBienvenida />
    <Metricas />
  </div>
  <div className="flex justify-between p-4">
    <RecientesActividades />
    <PanelResumen />
  </div>
  <div className="p-4">
    <CalendarioEventos />
  </div>
  
</div>
</div> */}