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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.861 8H13V2a1.959 1.959 0 0 1 2-2c.083 0 7.746.1 8.861 8ZM6.505 10 4.244 7.457C3.462 6.449.284 4.946 0 7a1 1 0 0 0 1 1 2.34 2.34 0 0 1 1.749.786L4 10.193V11a5.006 5.006 0 0 0 5 5h2.865l-2.608 3.129C5.576 18.113 4.685 23.824 8.5 24a2.506 2.506 0 0 0 2.261-3.551L14 16.562l3.239 3.887A2.506 2.506 0 0 0 19.5 24c3.816-.177 2.923-5.887-.757-4.871L16.135 16H19a5.006 5.006 0 0 0 5-5v-1Z"/></svg>
  