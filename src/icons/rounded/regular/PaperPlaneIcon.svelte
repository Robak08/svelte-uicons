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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.119.882a2.966 2.966 0 0 0-2.8-.8l-16 3.37a4.995 4.995 0 0 0-2.853 8.481l1.718 1.717a1 1 0 0 1 .293.708v3.168a2.965 2.965 0 0 0 .3 1.285l-.008.007.026.026A3 3 0 0 0 5.157 20.2l.026.026.007-.008a2.965 2.965 0 0 0 1.285.3h3.168a1 1 0 0 1 .707.292l1.717 1.717A4.963 4.963 0 0 0 15.587 24a5.049 5.049 0 0 0 1.605-.264 4.933 4.933 0 0 0 3.344-3.986l3.375-16.035a2.975 2.975 0 0 0-.792-2.833ZM4.6 12.238l-1.719-1.717a2.94 2.94 0 0 1-.722-3.074 2.978 2.978 0 0 1 2.5-2.026L20.5 2.086 5.475 17.113v-2.755a2.978 2.978 0 0 0-.875-2.12Zm13.971 7.17a3 3 0 0 1-5.089 1.712l-1.72-1.72a2.978 2.978 0 0 0-2.119-.878H6.888L21.915 3.5Z"/></svg>
  