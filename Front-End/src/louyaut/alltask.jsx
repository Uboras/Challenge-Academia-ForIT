import Header from '../components/header';
import TaskList from '../components/task/listTask.jsx';
import Fondo from '../assets/fondo.avif';
import Footer from '../components/footer';
export default function AllTask() {
 
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="background background--active"
                style={{ backgroundImage: `url(${Fondo})`, backgroundRepeat: "no-repeat", backgroundSize: 'contain', zIndex: -1, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.3 }}>
              </div>
        <TaskList  />
      </div>
      <Footer></Footer>
    </div>
  );
}
