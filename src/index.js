import Tooltip from './rocket-ui/tooltip';
import Dropdown from './rocket-ui/dropdown';
import Tabs from './rocket-ui/tabs';
import Snackbar from './rocket-ui/snackbar';

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
 tooltip.init();

 // create dropdowns

 const dropdowns = document.querySelectorAll('.dropdown');// returns a nodeList, and we can use forEach() on nodeLists

 dropdowns.forEach((dropdown) => {
     const instance = new Dropdown(dropdown);
     instance.init();
 })


 // create tabs
 const tabs = new Tabs(document.querySelector('.tabs'));
 tabs.init();

 // create snacbar
 const snackbar = new Snackbar();
 snackbar.init();

 const button = document.querySelector('button');
 button.addEventListener('click', () => {
     snackbar.show('you clicked me :)');
 })