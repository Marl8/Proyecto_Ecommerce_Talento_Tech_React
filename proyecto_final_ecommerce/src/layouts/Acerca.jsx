import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

const Acerca = () => {
  return (
    <div className='home-container'>
      <Header />
      <div className='home-main'>
        <h1 style={{margin: '2.5rem'}}>Acerca de Nosotros</h1>
        <img className='img-acerca-de'
          src="https://oxefruit.es/wp-content/uploads/2024/12/cocteles-tematicos-ideas-eventos-especiales.png" 
          alt="Imagen cocteles" 
          />
        <div className='acerca-text'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Suscipit saepe similique nisi ullam provident deserunt esse voluptatem odio impedit 
          exercitationem unde, iste ipsa corporis cupiditate vitae atque debitis sit iusto.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Acerca