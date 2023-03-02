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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 24c-1.66 0-3-1.34-3-3v-8H5.08c-1.17 0-2.29-.62-2.8-1.67-.57-1.18-.34-2.51.57-3.43l6.32-6.72c1.57-1.57 4.09-1.57 5.64-.02l6.37 6.77c.85.84 1.1 2.09.63 3.22A2.956 2.956 0 0 1 19.07 13h-2.06v8c0 1.66-1.34 3-3 3h-4Z"/></svg>
  