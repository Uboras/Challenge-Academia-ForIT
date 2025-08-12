import React from 'react'
import Header from '../components/header.jsx';
import Formtask from '../components/task/formTask.jsx';
import Fondo from '../assets/fondo.avif';
import Footer from '../components/footer.jsx';  
export default function CreateTask() {

  return (
    <div >
      <Header />
      <div className="background background--active"
              style={{ backgroundImage: `url(${Fondo})`, backgroundRepeat: "no-repeat", backgroundSize: 'contain', zIndex: -1, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.3 }}>
            </div>
      <Formtask />
      <Footer></Footer>
    </div>
  );
}