import React, { useState } from 'react'
export default function LoginForm() {
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
     <form action='submit' onSubmit={handleSubmit}> 
          <h1>Benvenue chez nous</h1>
        <br />
        <h2>Connectez-vous</h2>
            <input 
            type='text' 
            value={inputValue} 
            onChange={handleChange}
            placeholder='Entrez votre prenom...' required />
           <button type="submit">Acceder à votre espace</button>
        </form>
  )
}
