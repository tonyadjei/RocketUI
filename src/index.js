import Tooltip from './rocket-ui/tooltip';
import Dropdown from './rocket-ui/dropdown';

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
 tooltip.init();

 // create dropdowns

 const dropdowns = document.querySelectorAll('.dropdown');// returns a nodeList, and we can use forEach() on nodeLists

 dropdowns.forEach((dropdown) => {
     const instance = new Dropdown(dropdown);
     instance.init();
 })
