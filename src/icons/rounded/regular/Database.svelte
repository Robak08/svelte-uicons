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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 11.5A4.476 4.476 0 0 0 22.294 8 4.481 4.481 0 0 0 19.5 0h-15a4.481 4.481 0 0 0-2.794 8 4.443 4.443 0 0 0 0 7A4.481 4.481 0 0 0 4.5 23h15a4.481 4.481 0 0 0 2.794-8A4.476 4.476 0 0 0 24 11.5zm-22-7A2.5 2.5 0 0 1 4.5 2H5v1a1 1 0 0 0 2 0V2h2v1a1 1 0 0 0 2 0V2h8.5a2.5 2.5 0 0 1 0 5h-15A2.5 2.5 0 0 1 2 4.5zm20 14a2.5 2.5 0 0 1-2.5 2.5h-15a2.5 2.5 0 0 1 0-5H5v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h8.5a2.5 2.5 0 0 1 2.5 2.5zM4.5 14a2.5 2.5 0 0 1 0-5H5v1a1 1 0 0 0 2 0V9h2v1a1 1 0 0 0 2 0V9h8.5a2.5 2.5 0 0 1 0 5z"/></svg>
  