import { useEffect, useState } from "react";
import Page from "../layouts/Page";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const EditReservation = () => {
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [cancha, setCancha] = useState('');
    const [usuario, setUsuario] = useState('');
    const { id } = useParams();

    const getReservation = async () => {
        try {
            const response = await axios.get(`https://wc.sirees.online/api/v2/reservas/${id}`);
            if (response.status === 200) {
                const reserva = response.data.data;
                setFecha(reserva.fecha);
                setHora(reserva.hora);
                setCancha(reserva.cancha);
                setUsuario(reserva.usuario);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getReservation();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://wc.sirees.online/api/v2/reservas/${id}`, {
                fecha,
                hora,
                cancha,
                usuario
            });
            if (response.status === 200) {
                Swal.fire('Reserva actualizada', 'La reserva se ha actualizado correctamente', 'success');
            }
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'No se pudo actualizar la reserva', 'error');
        }
    }

    return (
        <Page>
            <div className="card">
                <div className="card-header">
                    <h2>Editar Reserva</h2>
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
                                    Actualizar
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

export default EditReservation;
