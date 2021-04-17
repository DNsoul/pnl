import React from 'react';

import "./bootstrap-grid.min.css";
import "./style.scss";
import "normalize.css";

import List from '../list';
import ItemInfo from '../item-info';
import FindInput from '../find-input';

const App : React.FC = () => { 

    return (
        <>
            <header>
                <div className="panel">
                    <h1 className="panel__title">Pokemon Lib</h1> 
                    <FindInput/>
                </div>
            </header>
            <section className="container-fluid">
                <List />    
                <ItemInfo />
            </section>
        </>
    );
}

export default App;