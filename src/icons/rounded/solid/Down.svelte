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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24c-1.02 0-2.03-.39-2.81-1.16l-6.37-6.77c-.85-.85-1.1-2.09-.63-3.22A2.96 2.96 0 0 1 4.94 11H7V3c0-1.65 1.35-3 3-3h4c1.65 0 3 1.35 3 3v8h2.06c1.23 0 2.28.71 2.75 1.85a2.92 2.92 0 0 1-.65 3.24l-6.35 6.75C14.04 23.61 13.02 24 12 24Z"/></svg>
  