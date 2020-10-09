import React from 'react';
import Button from './buttons';
import './styles.css'

function App() {
        return (
            <main>
                <h1>Buttons</h1>
                <div>
                    <Button className= "default" text= "Default" />
                    <Button className= "default" text= "Default" />
                </div>
                <div>
                    <Button className= "outline" variant="outline" text= "Default" />
                    <Button className= "outline" variant="outline" text= "Default" />
                </div>
                <div>
                    <Button className= "text" variant="text" text= "Default" />
                    <Button className= "text" variant="text" text= "Default" />
                </div>
                <div>
                    <Button className= "disabled-shadow" text= "Default" />
                </div>
                <div>
                    <Button className= "disabled default" text= "Default" />
                    <Button className= "disabled text" variant="text" text= "Default" />
                </div>
                <div>
                    <Button className= "disabled-shadow start-icon" text= "Default" />
                    <Button className= "disabled-shadow end-icon" text= "Default" />
                </div>
                <div>
                    <Button className= "disabled-shadow sm" text= "Default" />
                    <Button className= "disabled-shadow md" text= "Default" />
                    <Button className= "disabled-shadow lg" text= "Default" />
                </div>
            </main>
        )
}

export default App