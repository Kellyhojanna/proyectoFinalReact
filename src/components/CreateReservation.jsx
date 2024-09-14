import { NavLink } from "react-router-dom";
import Page from "../layouts/Page";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const CreateReservation = () => {
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [cancha, setCancha] = useState('');
    const [usuario, setUsuario] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Guardar reserva',
            text: '¿Deseas guardar esta reserva?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, deseo guardarlo'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.post("https://wc.sirees.online/api/v2/reservas", {
                        fecha,
                        hora,
                        cancha,
                        usuario
                    });
                    if(response.status === 201){
                        Swal.fire('Reserva creada', 'La reserva se ha creado correctamente', 'success');
                        setFecha('');
                        setHora('');
                        setCancha('');
                        setUsuario('');
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire('Error', 'No se pudo crear la reserva', 'error');
                }
            }
        });

    }

    return (
        <Page>
            <div className="card">
                <div className="card-header">
                    <h2>Crear Reserva</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="fecha">Fecha</label>
                                    <input value={fecha} onChange={(e) => setFecha(e.target.value)} id="fecha" type="date" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="hora">Hora</label>
                                    <input value={hora} onChange={(e) => setHora(e.target.value)} id="hora" type="time" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cancha">Cancha</label>
                                    <input value={cancha} onChange={(e) => setCancha(e.target.value)} id="cancha" type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="usuario">Usuario</label>
                                    <input value={usuario} onChange={(e) => setUsuario(e.target.value)} id="usuario" type="text" className="form-control" required />
                                </div>
                                <button type="submit" className="btn btn-success mt-2">
                                    Guardar
                                </button>
                                <NavLink className="btn btn-info mt-2 ms-2" to="/reservations">Volver</NavLink>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}

export default CreateReservation;
