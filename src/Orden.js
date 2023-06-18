import React, {useContext} from 'react';
import { actionContext, actionStateContext, showContext,stateContext } from './Context';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ExclamationCircle } from 'react-bootstrap-icons';
import Card from "./Card";

function Orden(props) {

    const valueState = useContext(stateContext);
    const valueShow = useContext(showContext);

    const someDate = new Date();
    const numberOfDaysToAdd = valueShow.general_form.servicios.servicios.length;
    const result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    const format_result = new Date(result)

    const handleBack = () => {
        //console.log(data);
        valueState({
            type:"back",
            index:2,
        })
    }

    const handleAccept = () => {
        window.location.reload();
    }

    return (
        <Card>   
            <h5 className="card-title">Orden de Trabajo</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Resumen y Aprobación</h6>
            <div className='row justify-content-center mt-3'>
                <div className='col-5'>
                    <h5>Datos del Cliente</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Nombre:</strong> {valueShow.general_form.cliente.nombre} {valueShow.general_form.cliente.apellido}</li>
                        <li className="list-group-item"><strong>Cédula:</strong> {valueShow.general_form.cliente.identificacion} - {valueShow.general_form.cliente.tipo}</li>
                        <li className="list-group-item"><strong>Número:</strong> {valueShow.general_form.cliente.numero}</li>
                        <li className="list-group-item"><strong>Correo:</strong> {valueShow.general_form.cliente.email}</li>
                    </ul>
                </div>
                <div className='col-5'>
                    <h5>Datos del Vehículo</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Marca y Modelo:</strong> {valueShow.general_form.vehiculo.marca} - {valueShow.general_form.vehiculo.modelo}</li>
                        <li className="list-group-item"><strong>Placa:</strong> {valueShow.general_form.vehiculo.placa}</li>
                        <li className="list-group-item"><strong>Gasolina:</strong> {valueShow.general_form.vehiculo.gasolina}%</li>
                        <li className="list-group-item"><strong>Detalles:</strong> {valueShow.general_form.vehiculo.detalles}</li>
                    </ul>
                </div>
                <div className='col-5 mt-3'>
                    <h5>Servicios por realizar</h5>
                    <ul className="list-group list-group-flush">
                        {valueShow.general_form.servicios.servicios.map((e,index) => {
                            return <li key={e} className="list-group-item"><strong>{index+1}.</strong> {e}</li>
                        })}
                    </ul>
                </div>
                <div className='col-5 mt-3'>
                    <h5>Servicios por realizar</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Entrega Estimada:</strong> {format_result.toLocaleDateString()} - {format_result.toLocaleTimeString()}</li>
                    </ul>
                </div>
            </div>
            <div className='d-flex mt-4 justify-content-end'>
                <button type="button" className="btn btn-danger ms-2" onClick={handleBack}>Atrás</button>
                <button type="button" className="btn btn-primary ms-2" onClick={handleAccept}>Aceptar</button>
            </div>  
        </Card>
    );

}

export default Orden;