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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-truck-ramp {customClass}"><path d="M20 16V5a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5.006 5.006 0 0 0-5 5v11.279L.684 22.051a1 1 0 0 0 .632 1.9l14.807-4.936A4.017 4.017 0 0 0 20 24c5.274-.138 5.274-7.863 0-8Zm0 6a2 2 0 0 1 0-4 2 2 0 0 1 0 4Z"/></svg>
  