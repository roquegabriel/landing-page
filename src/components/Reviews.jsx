import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
    return (
        <div className='p-8 flex flex-col gap-8 bg-gray-100'>
            <h1 className='text-[40px] text-center font-black'>
                Let's hear what they say
            </h1>
            <div className='flex justify-center gap-4'>
                <RiDoubleQuotesL className='text-5xl text-primary' />
                <p className='max-w-2xl text-gray-500 leading-10 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at amet voluptatum, dolor magni reiciendis mollitia illo itaque provident voluptas odio quas quo praesentium adipisci. Ut dolor facilis saepe maiores.
                    Enim, corporis repellat.
                </p>
                <RiDoubleQuotesR className='text-5xl text-primary' />
            </div>
            <div className=' flex flex-col gap-8 items-center justify-center'>
                <div className='flex items-center justify-center gap-8 md:gap-12'>
                    <img src="https://img.freepik.com/foto-gratis/hermosa-mujer-negocios-cabello-corto-oscuro-camisa-blanca-sosteniendo-carpeta-negra-manos-mientras-mira-alegremente-camara-sobre-fondo-azul_574295-3492.jpg" alt="Business woman" className='h-8 w-8 md:h-14 md:w-14 rounded-full object-cover' />
                    <img src="https://img.freepik.com/foto-gratis/retrato-exitosa-mujer-negocios-sonriente-mirando-camara-sentada-restaurante-mujer-negocios-peinado-elegante-viste-traje-elegante-reunion-negocios-aspecto-atractivo_8353-12611.jpg" alt="" className='md:h-16 md:w-16 w-10 h-10 rounded-full object-cover' />
                    <img src="https://img.freepik.com/foto-gratis/hombre-negocios-confiado-que-sostiene-tableta-digital-sonriente-pie_1258-26615.jpg" alt="Bussinessman" className='md:h-20 md:w-20 w-12 h-12 rounded-full object-cover ring-4 ring-primary p-1 bg-white' />
                    <img src="https://img.freepik.com/foto-gratis/retrato-mujer-feliz-gerente-tocar-cara_1262-3808.jpg" alt="" className='md:h-16 md:w-16 w-10 h-10 rounded-full object-cover' />
                    <img src="https://img.freepik.com/foto-gratis/empresario-sosteniendo-portatil-apuntando-arriba-sobre-fondo-blanco_114579-28447.jpg" alt="" className='h-8 w-8 md:h-14 md:w-14 rounded-full object-cover' />
                </div>
                <div className='text-center'>
                    <h3 className='text-[24px] font-bold'>Ricky Ricon</h3>
                    <h5 className='text-[20px] text-gray-500'>CEO Stark Industries</h5>
                </div>
            </div>
        </div>
    )
}

export default Reviews