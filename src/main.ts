import './style.css';
import { charmander } from './bases/06-decorators2';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello ${ charmander.name } ${ charmander.id }!</h1>
  </div>
`;
