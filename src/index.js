import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainTemplate from './Templates/MainTemplate';
import Header from './Components/Header';
import CyberBoard from './Pages/CyberBoard/CyberBoard';
import ProjectManager from './Pages/ProjectManagement/ProjectManager';
import CreateProject from './Pages/CreateProject/CreateProject';
import Releases from './Pages/Releases/Releases';
import IssuesFilters from './Pages/IssuesFilters/IssuesFilters';
import Pages from './Pages/Pages/Pages';
import Reports from './Pages/Reports/Reports';
import Components from './Pages/Components/Components';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<MainTemplate />}>
        <Route index element={<CyberBoard/>}></Route>
        <Route path='/project-management' element={<ProjectManager/>}></Route>
        <Route path='/create-project' element={<CreateProject/>}></Route>
        <Route path='/releases' element={<Releases/>}></Route>
        <Route path='/issues-and-filters' element={<IssuesFilters/>}></Route>
        <Route path='/pages' element={<Pages/>}></Route>
        <Route path='/reports' element={<Reports/>}></Route>
        <Route path='/component' element={<Components/>}></Route>
      </Route>
    <Route path="*" element={<Navigate to="/" />} />

    </Routes>

  </BrowserRouter>
);

