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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7.87 6.11C6.77 5 6.67 3.29 7.76 1.97 8.3 1.32 9.15 1 9.99 1H19a3.99 3.99 0 0 1 3.99 4s0 8.88 0 8.88c0 1.17-.61 2.3-1.66 2.81-1.18.58-2.52.36-3.45-.56l-1.47-1.47-7.5 7.44a3 3 0 0 1-4.24 0l-2.83-2.83a3 3 0 0 1 0-4.24l7.5-7.45-1.48-1.47Z"/></svg>
  