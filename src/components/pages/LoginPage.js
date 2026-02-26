import { useState } from 'react'

export default function () {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`bonjour ! ${inputValue}`);
        setInputValue('');
    
    }
    const handleChange = (e) => {
        setInputValue(e.target.value);
    } 
  return (
    <div>
        <h1>Benvenue chez nous</h1>
        <br />
        <h2>Connectez-vous</h2>
        <form action='submit' onSubmit={handleSubmit}>
            <input 
            type='text' 
            value={inputValue} 
            onChange={handleChange}
            placeholder='Entrez votre prenom...' required />
           <button type="submit">Acceder à votre espace</button>
        </form>
    </div>
  )
}
