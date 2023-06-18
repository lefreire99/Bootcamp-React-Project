import React, {useContext, useEffect} from 'react';
import { actionContext, actionStateContext, showContext,stateContext } from './Context';
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ExclamationCircle } from 'react-bootstrap-icons';
import Card from "./Card";
import Form2 from "./Form2";

function Form1(props) {

  const valueState = useContext(stateContext);
  const valueShow = useContext(showContext);

  const tipo_identificacion = [
    {value: "cedula", label: "Cédula"},
    {value: "ruc", label: "RUC"},
    {value: "pasaporte", label: "Pasaporte"},
  ]

  const schema = yup.object({
    nombre: yup.string().required('Nombre required'),
    apellido: yup.string().required('Apellido required'),
    email: yup.string().required('Email required'),
    numero: yup.string().required('Número required'),
    identificacion: yup.string().required('Identificación required'),
    tipo: yup.string().required('Tipo de Identificación required'),
  }).required();

  const { register, handleSubmit, getValues, control, reset, formState: { errors } } = useForm({
    defaultValues: {
        nombre:'',
        apellido:'',
        email:'',
        numero:'',
        identificacion:'',
        tipo:''
      },
      resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    //console.log(data)
    valueState({
        type:"next",
        index:1,
        data:data
    })
    //valueState(previousInputs => ({ ...previousInputs, show1: false }))
    //valueState(previousInputs => ({ ...previousInputs, show2: true }))
  };

  const handleSiguiente = () => {
    const data = getValues()
    console.log(data);
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
    const client_form = valueShow.general_form.cliente;
    if(Object.keys(client_form).length!=0){
      reset({
        nombre:client_form.nombre,
        apellido:client_form.apellido,
        email:client_form.email,
        numero:client_form.numero,
        identificacion:client_form.identificacion,
        tipo:client_form.tipo
      })
    }
  },[valueShow.general_form.cliente])

  return (
    <>
    
        <Card>   
            <h5 className="card-title">Datos del Cliente</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Formulario del Cliente</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row mt-3'>
                <div className="col-6">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" {...register("nombre")} placeholder="Nombre" style={inputStyle(errors.nombre)}/>
                    <ErrorMessage errors={errors.nombre}/>
                </div>
                <div className="col-6">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="apellido" {...register("apellido")} placeholder="Apellido" style={inputStyle(errors.apellido)}/>
                    <ErrorMessage errors={errors.apellido}/>
                </div>
            </div>
            <div className='row mt-3'>
                <div className="col-6">
                    <label htmlFor="email" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="email" {...register("email")} placeholder="Correo" style={inputStyle(errors.email)}/>
                    <ErrorMessage errors={errors.email}/>
                </div>
                <div className="col-6">
                    <label htmlFor="numero" className="form-label">Número de Contacto</label>
                    <input type="text" className="form-control" id="numero" {...register("numero")} placeholder="Celular" style={inputStyle(errors.numero)}/>
                    <ErrorMessage errors={errors.numero}/>
                </div>
            </div>
            <div className='row mt-3'>
                <div className="col-6">
                    <label htmlFor="identificacion" className="form-label">Identificación Fisical</label>
                    <input type="text" className="form-control" id="identificacion" {...register("identificacion")} placeholder="Cédula/RUC" style={inputStyle(errors.identificacion)}/>
                    <ErrorMessage errors={errors.identificacion}/>
                </div>
                <div className='col-6'>
                    <label htmlFor="tipo" className="form-label">Tipo de Identificación</label>
                    <select className="form-select" name='tipo' id='tipo' aria-label="Default select" {...register("tipo")} placeholder='Tipo de Identificación' style={inputStyle(errors.tipo)}>
                        {tipo_identificacion.map((elem) => {
                        return <option key={elem.value} value={elem.value}>{elem.label}</option>
                        })}
                    </select>
                    <ErrorMessage errors={errors.tipo}/>
                </div>
            </div>
            <div className='d-flex mt-4 justify-content-end'>
                <button type="submit" className="btn btn-primary ms-2">Siguiente</button>
            </div>       
            </form>
        </Card>
    </>
  );
}

export default Form1;
