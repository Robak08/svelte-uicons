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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M1 24a1 1 0 0 1-1-1V4c0-2.206 1.794-4 4-4h17.998c1.6-.055 2.604 1.958 1.598 3.203L20.359 7.5l3.237 4.297c1.007 1.245.003 3.258-1.598 3.203H2v8a1 1 0 0 1-1 1Z"/></svg>
  