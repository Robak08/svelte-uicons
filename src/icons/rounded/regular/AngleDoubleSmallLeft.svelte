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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10.48 19a1 1 0 0 1-.7-.29l-4.59-4.59a3 3 0 0 1 0-4.24l4.59-4.59a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L6.6 11.29a1 1 0 0 0 0 1.42l4.59 4.58a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z"/><path d="M17.48 19a1 1 0 0 1-.7-.29l-6-6a1 1 0 0 1 0-1.42l6-6a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L12.9 12l5.29 5.29a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z"/></svg>
  