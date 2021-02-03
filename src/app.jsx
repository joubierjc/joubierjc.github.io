import * as React from 'react';

import { Intro } from './components/intro/intro.jsx';
import { Realisations } from './components/realisations/realisations.jsx';
import { Competences } from './components/competences/competences.jsx';
import { Contacts } from './components/contacts/contacts.jsx';
import { WorkInProgress } from './components/work-in-progress/work-in-progress.jsx';

export function App() {
    
    return <> 
        <Intro/>
        <Realisations/>
        <Competences/>
        <Contacts/>
        <WorkInProgress/>
    </>
}
