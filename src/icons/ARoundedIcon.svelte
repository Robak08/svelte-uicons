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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-a {customClass}"><path d="m23.931 22.634-7.787-19.82c-1.288-3.718-7-3.717-8.288 0L.069 22.634a1 1 0 1 0 1.861.731l2.501-6.366h15.137l2.501 6.366a1 1 0 0 0 1.861-.731ZM5.217 15l4.5-11.455c.924-2.104 3.641-2.104 4.565 0L18.782 15H5.217Z"/></svg>
  