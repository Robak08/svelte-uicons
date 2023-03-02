<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.983 21.926a32.651 32.651 0 0 0-.608-5.545A3 3 0 0 0 20.439 14h-2.1s-.343-4.126-.346-4.147l.436-.033c.949-.138 1.682-.181 2.139-1.025a3.02 3.02 0 0 0 .156-2.71C19.084 2.559 14.786 0 10.5 0A10.512 10.512 0 0 0 0 10.5a39.043 39.043 0 0 0 .587 5.155 4.99 4.99 0 0 0 3.457 3.989c.514.161 1.02.311 1.519.458A21.1 21.1 0 0 1 9.3 21.569a4.073 4.073 0 0 0 1.821.431 3.975 3.975 0 0 0 2.779-1.123L15 20h1.834l.071.855a2.978 2.978 0 0 0 2.137 2.631 25.208 25.208 0 0 0 2.937.514 2.013 2.013 0 0 0 2-2.074ZM9 18a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm11.439-2a.994.994 0 0 1 .977.783c.061.3.138.709.215 1.217h-2.964l-.167-2Zm-8.353-3.74a2.854 2.854 0 0 1 2.338-2.142L16 10c0 .027.329 4 .329 4H12.2a2.864 2.864 0 0 1-.114-1.74Zm2.9 5.74-1.437-2H16.5l.166 2Zm4.614 3.567a.99.99 0 0 1-.707-.878l-.06-.689h3.034c.053.608.094 1.277.113 2a11.842 11.842 0 0 1-2.38-.433Z"/></svg>
  