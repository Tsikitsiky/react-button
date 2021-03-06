import React from 'react';
import Button from './buttons';
import './styles.css'

function App() {
        return (
            <main>
                <h1>Buttons</h1>
                <div>
                    <Button >Default</Button> 
                </div>
                <div>
                    <Button variant="outline" >Default</Button>
                </div>
                <div>
                    <Button variant="text" >Default</Button>
                </div>
                <div>
                    <Button disabledShadow color= "primary" >Default</Button>
                </div>
                <div>
                    <Button disabled >Disabled</Button>
                    <Button variant="text" disabled >Disabled</Button>
                </div>
                <div>
                    <Button startIcon= "start-icon" color= "primary" >Default</Button>
                    <Button endIcon= "end-icon" color= "primary" >Default</Button>
                </div>
                <div>
                    <Button size= "sm" color="primary" >Default</Button>
                    <Button size= "md" color= "primary" >Default</Button>
                    <Button size= "lg" color= "primary" >Default</Button>
                </div>
                <div>
                    <Button >Default</Button>
                    <Button color= "primary" size= "md" >Default</Button>
                    <Button size= "md" color= "secondary" >Secondary</Button>
                    <Button size= "md" color= "danger" >Danger</Button>
                </div>
            </main>
        )
}

export default App