/* Solias Styles */
import './scss/index.scss';

window.soliasCoreService.version()
    .then((data: any) => console.log(data.toString()))
    .catch((err: any) => console.log(err))