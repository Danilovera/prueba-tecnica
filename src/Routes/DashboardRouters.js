import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BusquedadMonitorias from '../components/BusquedadMonitorias';

import Inicio from '../components/Inicio';

import Monitores from '../components/Monitores';
import Monitorias from '../components/Monitorias';
import Navbar from '../components/Navbar';


const DashboardRouters = () => {
    return (
        <>
            <Navbar />
            <Routes>
            
            <Route path="/" element={<Inicio/>}/>
            <Route path='/BusquedadMonitorias' element={<BusquedadMonitorias/>}/>
            <Route path='/monitores' element={<Monitores/>}/>
            <Route path='/monitorias' element={<Monitorias/>}/>

            </Routes>
        </>
    );
};

export default DashboardRouters;