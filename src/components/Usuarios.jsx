import React, { useState } from 'react';

const Usuarios = () => {
  // Estado inicial para cada campo del formulario
  const [formData, setFormData] = useState({
    TypeID: '',
    NumberID: '',
    Name: '',
    Apellidos: '',
    Direccion: '',
    Telefono: '',
    usuario: '',
    contraseña: '',
    PerfilID: ''
  });

  // Función para manejar el cambio en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer la lógica para enviar los datos al servidor o backend
    console.log(formData);
  };

  return (
    <div>
      <h2>Registro de Usuarios</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>TypeID</label>
          <input
            type="number"
            name="TypeID"
            value={formData.TypeID}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>NumberID</label>
          <input
            type="text"
            name="NumberID"
            value={formData.NumberID}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Apellidos</label>
          <input
            type="text"
            name="Apellidos"
            value={formData.Apellidos}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Dirección</label>
          <input
            type="text"
            name="Direccion"
            value={formData.Direccion}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Teléfono</label>
          <input
            type="text"
            name="Telefono"
            value={formData.Telefono}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Usuario</label>
          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Contraseña</label>
          <input
            type="password"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>PerfilID</label>
          <input
            type="number"
            name="PerfilID"
            value={formData.PerfilID}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Usuarios;
