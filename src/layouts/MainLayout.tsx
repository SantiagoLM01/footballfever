import Header from '../components/Header'
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {

  return (
    <>

   
      <div className='container mx-auto'>

      
        <Header></Header>

        <div className='min-h-[80vh]'>
        <Outlet></Outlet>
        </div>


        <div className='mt-10'>
        <Footer></Footer>
        </div>
      </div>


    </>


  )
}

export default MainLayout