import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { PrimeReactProvider } from 'primereact/api';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';       
import AlumniPage from './pages/AlumniPage';
import {CloudinaryProvider} from './context/CloudinaryContext';

function App() {
    return(
        <ChakraProvider>
        <PrimeReactProvider>
        <CloudinaryProvider>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' element={</>} /> */}
                    {/* <Route path='/login' element={</>} /> */}
                    {/* <Route path='/signup' element={</>} /> */}
                    {/* <Route path='/reset-password' element={</>} /> */}
                    {/* <Route path='/dashboard/alumni' element={</>} /> */}
                    <Route path='/dashboard/alumni' element={<AlumniPage/>} />
                    {/* <Route path='/dashboard/student' element={</>} /> */}
                    {/* <Route path='' element={</>} /> */}
                    {/* <Route path='' element={</>} /> */}
                    {/* <Route path='' element={</>} /> */}
                    {/* <Route path='' element={</>} /> */}
                    {/* <Route path='' element={</>} /> */}
                    {/* <Route path='' element={</>} /> */}
                </Routes>
            </BrowserRouter>
        </CloudinaryProvider>
        </PrimeReactProvider>
        </ChakraProvider>
    );
}

export default App;
