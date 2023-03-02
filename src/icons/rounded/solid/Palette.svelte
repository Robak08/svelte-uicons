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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m20.057 16.8.1.1a1.912 1.912 0 0 0 1.769.521 1.888 1.888 0 0 0 1.377-1.177 11.924 11.924 0 0 0 .777-4.544A12.155 12.155 0 0 0 12.5.007 12 12 0 0 0 .083 12a12.014 12.014 0 0 0 12 12c.338 0 .67-.022 1-.05a1 1 0 0 0 .916-1l-.032-3.588a3.567 3.567 0 0 1 6.09-2.562Zm-2.942-8.75a1.5 1.5 0 1 1-1.065 1.835 1.5 1.5 0 0 1 1.065-1.835Zm-9.23 8.9a1.5 1.5 0 1 1 1.065-1.835 1.5 1.5 0 0 1-1.065 1.835Zm0-6A1.5 1.5 0 1 1 8.95 9.115a1.5 1.5 0 0 1-1.065 1.835Zm5-3a1.5 1.5 0 1 1 1.065-1.835 1.5 1.5 0 0 1-1.065 1.835Z"/></svg>
  