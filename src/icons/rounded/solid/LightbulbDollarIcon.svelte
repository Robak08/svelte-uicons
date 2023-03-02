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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8.001 19.998h8v.31a3.694 3.694 0 0 1-3.69 3.69h-.619a3.694 3.694 0 0 1-3.69-3.69v-.31Zm13-11a8.991 8.991 0 0 1-3.068 6.763c-.739.648-1.275 1.413-1.594 2.237H7.564a6.84 6.84 0 0 0-1.695-2.417C3.72 13.58 2.702 10.751 3.076 7.82 3.591 3.78 6.905.515 10.957.057a9.044 9.044 0 0 1 7.038 2.227 9.015 9.015 0 0 1 3.006 6.714ZM16 11c0-1.36-.974-2.51-2.315-2.733l-3.041-.507A.768.768 0 0 1 10 7c0-.551.448-1 1-1h2.268c.356 0 .688.192.867.5a.998.998 0 1 0 1.73-1.001 3.009 3.009 0 0 0-2.598-1.5h-.268v-1a1 1 0 1 0-2 0v1c-1.654 0-3 1.346-3 3 0 1.36.974 2.51 2.315 2.733l3.041.507a.768.768 0 0 1 .644.76c0 .551-.448 1-1 1h-2.268c-.356 0-.688-.192-.867-.5a.996.996 0 0 0-1.366-.365.998.998 0 0 0-.364 1.366 3.008 3.008 0 0 0 2.598 1.499H11v1a1 1 0 1 0 2 0v-1c1.654 0 3-1.346 3-3Z"/></svg>
  