import React from 'react';
import Button from './buttons';
import './styles.css'

function App() {
    const btnAttr = [
        {
            variant: "outline",
        },
        {
            variant: "text",
        }
    ]
    return (
        <main>
            <h1>Buttons</h1>
            <div>
                <Button variant={btnAttr.variant} />
                <Button />
            </div>
            <div>
                <Button />
                <Button />
            </div>
            <div>
                <Button />
                <Button />
            </div>
            <div>
                <Button />
            </div>
            <div>
                <Button />
                <Button />
            </div>
            <div>
                <Button />
                <Button />
            </div>
            <div>
                <Button />
                <Button />
                <Button />
            </div>
            <div>
                <Button />
                <Button />
                <Button />
                <Button />
            </div>
            <div>
                <Button />
                <Button />
                <Button />
                <Button />
            </div>
        </main>
    )
}

export default App