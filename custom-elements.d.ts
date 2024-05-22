// types/custom-elements.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src: string;
        alt?: string;
        'auto-rotate'?: boolean;
        'camera-controls'?: boolean;
        ar?: boolean;
        'ar-modes'?: string;
        poster?: string;
        'shadow-intensity'?: string;
        'tone-mapping'?: string;
      },
      HTMLElement
    >;
  }
}
