declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.scss' {
  const content: { [className: string]: string };
  export default content;
}

// Глобальные переменные для аналитики
declare global {
  const __LIBRARY_VERSION__: string;
  
  interface Window {
    __COMPONENT_ANALYTICS__?: any[];
    gtag?: (...args: any[]) => void;
    amplitude?: any;
    mixpanel?: any;
  }
}

export {};