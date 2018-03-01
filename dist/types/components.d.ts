/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  ComparsionsSlider as ComparsionsSlider
} from './components/comparsions-slider/comparsions-slider';

declare global {
  interface HTMLComparsionsSliderElement extends ComparsionsSlider, HTMLStencilElement {
  }
  var HTMLComparsionsSliderElement: {
    prototype: HTMLComparsionsSliderElement;
    new (): HTMLComparsionsSliderElement;
  };
  interface HTMLElementTagNameMap {
    "comparsions-slider": HTMLComparsionsSliderElement;
  }
  interface ElementTagNameMap {
    "comparsions-slider": HTMLComparsionsSliderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "comparsions-slider": JSXElements.ComparsionsSliderAttributes;
    }
  }
  namespace JSXElements {
    export interface ComparsionsSliderAttributes extends HTMLAttributes {
      after?: string;
      before?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
