import './css/style.css';
import TaskTracker from './js/TaskTracker';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.tracker-container');
    new TaskTracker(container);
});