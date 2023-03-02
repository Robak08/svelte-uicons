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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 7.23c0-.352.184-.677.485-.857L10.347.456a3.203 3.203 0 0 1 3.307 0l9.861 5.917a1 1 0 0 1 0 1.714l-9.861 5.917a3.208 3.208 0 0 1-3.306 0L.485 8.088A1 1 0 0 1 0 7.231ZM23 19h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Zm-10.485 2.914-11-6.6a1 1 0 1 0-1.029 1.715l11 6.6a.998.998 0 1 0 1.029-1.714Zm9.971-11.167-10.485 6.291-10.486-6.291a1 1 0 1 0-1.029 1.715l11 6.6a1 1 0 0 0 1.03 0l11-6.6a1 1 0 1 0-1.029-1.715Z"/></svg>
  