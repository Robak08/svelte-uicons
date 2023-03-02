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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 14v2h-2v-2a1 1 0 0 1 2 0Zm8-2.127V22h1a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2h1V11.873A4.005 4.005 0 0 1 0 8V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h3V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h3V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a4.005 4.005 0 0 1-3 3.873ZM15 14a3 3 0 0 0-6 0v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Z"/></svg>
  