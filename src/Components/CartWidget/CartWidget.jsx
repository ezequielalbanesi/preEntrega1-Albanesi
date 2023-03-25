import React from 'react'
import './CartWidget.css';

const Cartwidget = () => {
    const imgCarrito = "https://previews.123rf.com/images/ylivdesign/ylivdesign1709/ylivdesign170902885/85533055-blanco-del-icono-del-carro-de-compras-aislado-en-fondo-verde-ilustraci%C3%B3n-vectorial.jpg"
  return (
    <div className='contenedorCarrito'>
            <img className='imgCarrito' src={imgCarrito} alt="" />
            <strong className="text-white ">10</strong>
    </div>
  )
}

export default Cartwidget