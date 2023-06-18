import React, {useContext, useEffect} from 'react';
import { actionContext, actionStateContext, showContext,stateContext } from './Context';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ExclamationCircle } from 'react-bootstrap-icons';
import Card from "./Card";

function Form3(props) {

    const valueState = useContext(stateContext);
    const valueShow = useContext(showContext);

    const services = [
        {value:1, label:"Cambio de aceite"}, 
        {value:2, label:"Cambio de frenos"}, 
        {value:3, label:"Alineación y balanceo"},
        {value:4, label:"Diagnóstico general"}, 
        {value:5, label:"Revisión sistema eléctrico"},
        {value:6, label:"Revisión de la suspensión"}
    ]

    const schema = yup.object({
        servicios: yup.array().compact().min(1,'Servicios required').required('Servicios required')
    }).required();

    const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm({
        defaultValues: {
            servicios:[]
        },
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        //console.log(data)
        valueState({
            type:"next",
            index:3,
            data:data
        })
    };

    const handleBack = () => {
        const data = getValues()
        //console.log(data);
        valueState({
            type:"back",
            index:1,
            data:data
        })
    }

    function ErrorMessage ({errors}){
        return(
        <>
            {errors && (<div className="text-danger align-middle">{errors.message} <ExclamationCircle/></div>)}
        </>
        );
    }

    const inputStyle = (errors) => {
        return {
            borderColor: errors ? 'red' : 'grey',
        }
    }

    return (
        <Card>   
            <h5 className="card-title">Servicios del Vehículo</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Formulario de Servicios</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row mt-3 justify-content-center'>
                    {services.map((e,index) => {
                        return <ListCheck key={e.value} elem={e} index={index}/>
                    })}
                </div>
                <ErrorMessage errors={errors.servicios}/>
                <div className='d-flex mt-4 justify-content-end'>
                    <button type="button" className="btn btn-danger ms-2" onClick={handleBack}>Atrás</button>
                    <button type="submit" className="btn btn-primary ms-2">Siguiente</button>
                </div>       
            </form>
        </Card>
    );

  function ListCheck({elem,index}){
    return(
        <div className='col-6 mt-3'>
            <div className="form-check">
                <input className="form-check-input" {...register(`servicios.${index}`)} type="checkbox" value={elem.label} id={elem.value} style={inputStyle(errors.servicios)}/>
                <label className="form-check-label" htmlFor={elem.value}>
                    {elem.label}
                </label>
            </div>
        </div>
    );
  }

}

export default Form3;