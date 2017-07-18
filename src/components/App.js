import React from 'react'

const App = () => (
    <div>
        <div className="mdl-grid">
            <div className="mdl-cell">
                <label
                    className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
                    for="checkbox-1">
                    <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input"/>
                    <span className="mdl-checkbox__label">Todo 1</span>
                </label>
            </div>
        </div>
        <div className="mdl-grid">
            <div className="mdl-cell">
                <label
                    className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
                    for="checkbox-2">
                    <input type="checkbox" id="checkbox-2" className="mdl-checkbox__input"/>
                    <span className="mdl-checkbox__label">Todo 2</span>
                </label>
            </div>
        </div>
        <div className="mdl-grid">
            <div className="mdl-cell">
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" type="text" id="sample1"/>
                    <label className="mdl-textfield__label" for="sample1">add item</label>
                </div>
                <button
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                    Add
                </button>
            </div>
        </div>
    </div>
)

export default App