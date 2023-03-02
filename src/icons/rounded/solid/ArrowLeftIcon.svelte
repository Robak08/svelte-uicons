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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4.943 5.606 1.024 9.525a3.585 3.585 0 0 0 0 4.95l3.919 3.919a1.5 1.5 0 1 0 2.121-2.121l-2.779-2.781 18.25-.023a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5L4.3 10.492l2.764-2.765a1.5 1.5 0 0 0-2.121-2.121Z"/></svg>
  