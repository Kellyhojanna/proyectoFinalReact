import { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { NavLink } from "react-router-dom";
import Page from "../layouts/Page";

const Reservation = () => {
  const url = "https://tuapi.com/api/v2/reservas"; // Cambia por la URL real de tu API
  const [reservations, setReservations] = useState();
  const MessageSwal = withReactContent(Swal);

  // Obtener todas las reservas
  const getReservations = async () => {
    try {
      const response = await axios.get(url);
      setReservations(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getReservations();
  }, []);

  // Eliminar una reserva
  const handleDelete = (reservationId) => {
    const urlDelete = `https://tuapi.com/api/v2/reservas/${reservationId}`;
    MessageSwal.fire({
      title: 'Eliminar Reserva',
      text: '¿Desea eliminar esta reserva?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00AAFF',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(urlDelete).then(response => {
          if (response.status === 200) {
            MessageSwal.fire('Reserva Eliminada', 'La reserva se ha eliminado correctamente', 'success');
          }
          getReservations();
        });
      }
    });
  }

  return (
    <Page>
      <div className="card">
        <div className="card-header">
          <h2>Reservas de Canchas</h2>
          <NavLink className="btn btn-primary" to="/create-reservation">
            Crear Reserva
          </NavLink>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cancha</th>
                  <th>Usuario</th>
                  <th>Fecha Reserva</th>
                  <th>Hora Inicio</th>
                  <th>Hora Fin</th>
                  <th>Estado</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  reservations ? (
                    reservations.map((reservation) => (
                      <tr key={reservation.ReservaID}>
                        <td>{reservation.ReservaID}</td>
                        <td>{reservation.cancha.NombreCancha}</td>
                        <td>{reservation.usuario.Name}</td>
                        <td>{reservation.FechaReserva}</td>
                        <td>{reservation.HoraInicio}</td>
                        <td>{reservation.HoraFin}</td>
                        <td>{reservation.EstadoReserva}</td>
                        <td>
                          <div className="d-flex justify-content-between">
                            <NavLink to={`/edit-reservation/${reservation.ReservaID}`} className="btn btn-info">Editar</NavLink>
                            <button className="btn btn-danger" onClick={() => handleDelete(reservation.ReservaID)}>Eliminar</button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8">No hay reservas disponibles</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Reservation;
