import ReactDOM from 'react-dom';
import { DetailMovie } from '../pages/detail/DetailMovie';
import { DetailSerie } from '../pages/detail/DetailSerie';

export const GlobalWindowOpener =  ( ) => {

    const openNewWindow = ({ type }) => {
    const component = type === 'movies' ? <DetailMovie /> : <DetailSerie />;
    const container = window.open('', '_blank', 'width=600,height=400');
    ReactDOM.render(component, container.document.body);
  };

  return (
    <>
          <button onClick={() => openNewWindow}></button>
          
    </>
  );
};