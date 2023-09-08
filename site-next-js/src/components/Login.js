import { useState } from "react";

export default function Login () {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Usuario: ', usuario);
    console.log('Password: ', password);
  };

  const handleReset = () => {
    setUsuario('');
    setPassword('');
  };

  const handleUserChange = (event) => {
    setUsuario(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="card-login">
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="form-group">
          <label>Usuario</label>
          <input type="text" value={usuario} onChange={handleUserChange} />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="form-group">
          <button type="submit">Enviar</button>
          <button type="reset">Limpiar</button>
        </div>
      </form>
    </div>
  );
}