import React from 'react'
import CardsMainPage from './CardsMainPage'
import cardimg from '../img/main-img.jpg'


const MainPage = () => {
    return (
        <div className="container mt-5">
            <CardsMainPage
                titulo={'Nuestros Servicios'}
                descripcion={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis itaque doloribus incidunt. Maxime, a perspiciatis iure neque quod deleniti modi, ducimus sint iusto libero odit incidunt animi explicabo? Eligendi, maiores eum? Quam nostrum facere tempore obcaecati doloremque suscipit iure, dolore qui laborum molestias omnis! Maxime porro placeat ut. Quod.'}
                imagen={cardimg}
                url={'servicios'}
            />
            
            <CardsMainPage
                titulo={'Refugio'}
                descripcion={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis itaque doloribus incidunt. Maxime, a perspiciatis iure neque quod deleniti modi, ducimus sint iusto libero odit incidunt animi explicabo? Eligendi, maiores eum? Quam nostrum facere tempore obcaecati doloremque suscipit iure, dolore qui laborum molestias omnis! Maxime porro placeat ut. Quod.'}
                imagen={cardimg}
                url={'refugio'}
            />
            
            <CardsMainPage
                titulo={'Conoce +Wellness'}
                descripcion={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis itaque doloribus incidunt. Maxime, a perspiciatis iure neque quod deleniti modi, ducimus sint iusto libero odit incidunt animi explicabo? Eligendi, maiores eum? Quam nostrum facere tempore obcaecati doloremque suscipit iure, dolore qui laborum molestias omnis! Maxime porro placeat ut. Quod.'}
                imagen={cardimg}
                url={'wellness'}
            />

            <CardsMainPage
                titulo={'Calendario de Vacunacion'}
                descripcion={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis itaque doloribus incidunt. Maxime, a perspiciatis iure neque quod deleniti modi, ducimus sint iusto libero odit incidunt animi explicabo? Eligendi, maiores eum? Quam nostrum facere tempore obcaecati doloremque suscipit iure, dolore qui laborum molestias omnis! Maxime porro placeat ut. Quod.'}
                imagen={cardimg}
            />

            <CardsMainPage
                titulo={'Informacion Util'}
                descripcion={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis itaque doloribus incidunt. Maxime, a perspiciatis iure neque quod deleniti modi, ducimus sint iusto libero odit incidunt animi explicabo? Eligendi, maiores eum? Quam nostrum facere tempore obcaecati doloremque suscipit iure, dolore qui laborum molestias omnis! Maxime porro placeat ut. Quod.'}
                imagen={cardimg}
            />
        </div>
    )
}

export default MainPage
