import createElement from './createElement'

declare global {
    interface Window {
        createElement: any;
    }
}

window.createElement = createElement;