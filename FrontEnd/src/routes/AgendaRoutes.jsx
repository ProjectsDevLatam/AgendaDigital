import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login/Login';
import ProfileUser from '../components/ProfileUser/ProfileUser';
import ContainerUsuarios from '../pages/containerUsuarios/ContainerUsuarios';
import Dashboard from '../pages/dashboard/Dashboard';
import Home from '../pages/home/Home'; 
import NotFound from '../pages/notfound/NotFound';
import RestablecimientoDePass from '../pages/reseteoDePassword/RestablecimientoDePass';
// import EnvioEmail from '../pages/restablecimientoPassword/envioEmail';
import ResetPass from '../pages/restablecimientoPassword/ResetPass';


const AgendaRoutes = () => {

    
    return (
        <>
           
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/login' element={ <Login/> }/>
                <Route path='/login/envioemail' element={ <RestablecimientoDePass/> }/> 
                <Route path='/login/resetpassword/:token' element={ <ResetPass/>}/> 
                {/* <Route path='/dashboard/' element={ <Dashboard/> }/> */}
                <Route path='/usuarios' element={ <ContainerUsuarios/> }/>                
                <Route path='/dashboard' element={ <Dashboard/> }/>
                <Route path='/profile' element={ <ProfileUser/> }/>
                <Route path='/usuarios/all' element={ <ContainerUsuarios pg='all'/> }/>  
                <Route path='/usuarios/add' element={ <ContainerUsuarios pg='add' /> }/>                 
                <Route path='*' element={ <NotFound/> }/>
            </Routes>
            {/* colocar footer*/}
        </>
    );
};

export default AgendaRoutes;