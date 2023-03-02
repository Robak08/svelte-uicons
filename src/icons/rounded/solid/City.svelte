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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6.365 3.773a2.646 2.646 0 0 0-3.731 0L.685 5.722A2.339 2.339 0 0 0 0 7.376v11.623a5 5 0 0 0 5 5h4V7.377a2.34 2.34 0 0 0-.686-1.655L6.365 3.773ZM5 19H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm0-4H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm0-4H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM19 0h-3a5 5 0 0 0-5 5v19h8a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5Zm-3 19h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm4 12h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Z"/></svg>
  