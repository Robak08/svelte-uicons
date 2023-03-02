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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.657 14.858a3.1 3.1 0 0 0-4.282.007l-1.906 1.606a12.786 12.786 0 0 1-6.932-6.945l1.6-1.9a3.1 3.1 0 0 0 .006-4.281S7.292.942 7.261.911A3.081 3.081 0 0 0 2.934.865l-1.15 1c-7.72 8.208 12.2 28.138 20.4 20.3l.912-1.05a3.1 3.1 0 0 0 0-4.376 924.096 924.096 0 0 0-2.439-1.881Zm1.908-2.283c4.991-7.346-3.8-16.123-11.138-11.136a1 1 0 1 0 1.145 1.64c5.472-3.758 12.11 2.883 8.353 8.352a1 1 0 1 0 1.64 1.144Zm-3.858-1.865a1 1 0 0 0 0-1.414L17 7.589V5a1 1 0 0 0-2 0v3a1 1 0 0 0 .293.707l2 2a1 1 0 0 0 1.414 0Z"/></svg>
  