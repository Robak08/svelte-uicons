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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7.006 21.623A6.8 6.8 0 0 0 8.612 24H5.5c-3.764.121-5.5-4-5.5-7-.081-4.193 3.85-6.149 4-10V5a1 1 0 1 1 .142-2 4 4 0 0 1 6.713-1.771A3 3 0 0 0 9.184 5H6v2a8.989 8.989 0 0 1-1.8 5h3.256a10.242 10.242 0 0 0-.45 9.623ZM24 17c.006 3-1.733 7.122-5.5 7h-5c-3.763.122-5.506-4-5.5-7-.081-4.193 3.85-6.149 4-10V5a1 1 0 1 1 .142-2 3.994 3.994 0 0 1 7.716 0A1 1 0 1 1 20 5v2c.15 3.852 4.081 5.807 4 10Zm-4.2-5A8.981 8.981 0 0 1 18 7V5h-4v2a8.989 8.989 0 0 1-1.8 5ZM17 17a1 1 0 0 0-2 0 1 1 0 0 0 2 0Zm2 3a1 1 0 0 0-2 0 1 1 0 0 0 2 0Zm2-3a1 1 0 0 0-2 0 1 1 0 0 0 2 0Z"/></svg>
  