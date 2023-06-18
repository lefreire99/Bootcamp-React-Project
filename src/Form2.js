import React, {useContext,useEffect} from 'react';
import { actionContext, actionStateContext, showContext,stateContext } from './Context';
import Select from 'react-select'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ExclamationCircle } from 'react-bootstrap-icons';
import Card from "./Card";

function Form2(props) {

  const valueState = useContext(stateContext);
  const valueShow = useContext(showContext);

  const schema = yup.object({
    marca: yup.string().required('Marca required'),
    modelo: yup.string().required('Modelo required'),
    placa: yup.string().required('Placa required'),
    gasolina: yup.string().required('Gasolina required'),
    detalles: yup.string().required('Detalles required')
  }).required();

  const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm({
    defaultValues: {
        marca:'',
        modelo:'',
        placa:'',
        gasolina:'',
        detalles:''
      },
      resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    //console.log(data)
    valueState({
        type:"next",
        index:2,
        data:data
    })
  };

  const handleBack = () => {
    const data = getValues()
    //console.log(data);
    valueState({
        type:"back",
        index:0,
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

  useEffect(() => {
    const vehiculo_form = valueShow.general_form.vehiculo;
    if(Object.keys(vehiculo_form).length!=0){
      reset({
        marca:vehiculo_form.marca,
        modelo:vehiculo_form.modelo,
        placa:vehiculo_form.placa,
        gasolina:vehiculo_form.gasolina,
        detalles:vehiculo_form.detalles
      })
    }
  },[valueShow.general_form.vehiculo])

  return (
    <Card>   
        <h5 className="card-title">Datos del Vehículo</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Formulario del Vehículo</h6>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row mt-3'>
            <div className="col-6">
                <label htmlFor="marca" className="form-label">Marca</label>
                <input type="text" className="form-control" id="marca" {...register("marca")} placeholder="Marca" style={inputStyle(errors.marca)}/>
                <ErrorMessage errors={errors.marca}/>
            </div>
            <div className="col-6">
                <label htmlFor="modelo" className="form-label">Modelo</label>
                <input type="text" className="form-control" id="modelo" {...register("modelo")} placeholder="Modelo" style={inputStyle(errors.modelo)}/>
                <ErrorMessage errors={errors.modelo}/>
            </div>
        </div>
        <div className='row mt-3'>
            <div className="col-6">
                <label htmlFor="placa" className="form-label">Placa</label>
                <input type="text" className="form-control" id="placa" {...register("placa")} placeholder="Placa" style={inputStyle(errors.placa)}/>
                <ErrorMessage errors={errors.placa}/>
            </div>
            <div className="col-6">
                <label htmlFor="gasolina" className="form-label">Nivel de Gasolina</label>
               <input type="text" className="form-control" id="gasolina" {...register("gasolina")} placeholder="Nivel de Gasolina" style={inputStyle(errors.gasolina)}/>
                <ErrorMessage errors={errors.gasolina}/>
            </div>
        </div>
        <div className='row mt-3'>
            <div className="col-12">
                <label htmlFor="detalles" className="form-label">Detalles del Vehículo</label>
                <textarea className="form-control" id="detalles" {...register("detalles")} placeholder="Detalles como abolladuras, rayones,etc..." style={inputStyle(errors.detalles)}/>
                <ErrorMessage errors={errors.detalles}/>
            </div>
        </div>
        <div className='d-flex mt-4 justify-content-end'>
          <button type="button" className="btn btn-danger ms-2" onClick={handleBack}>Atrás</button>
          <button type="submit" className="btn btn-primary ms-2">Siguiente</button>
        </div>       
        </form>
    </Card>
  );
}

export default Form2;