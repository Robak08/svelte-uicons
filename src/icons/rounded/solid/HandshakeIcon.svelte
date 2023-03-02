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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m12.056 11.211 8.039 6.718-5.694 4.271a3.999 3.999 0 0 1-4.8 0l-6.133-4.6a3.003 3.003 0 0 0-1.8-.6h-.667A1 1 0 0 1 0 16V4.937c0-.508.379-.931.884-.988 1.357-.151 2.579-.696 3.829-1.424 1.798-.925 4.157-.595 5.616.772l.617.593-4.007 3.911c-1.073 1.072-1.244 2.767-.398 3.938.52.723 1.461 1.259 2.444 1.259.793 0 1.554-.312 2.104-.863l.967-.925Zm7.898-8.686c-1.69-.845-3.798-.625-5.308.548L8.343 9.225c-.371.372-.455.967-.181 1.347a1.002 1.002 0 0 0 1.527.135l3.618-3.429c.949-.901 2.324.537 1.383 1.445L13.509 9.82l8.593 7.181h.897a1 1 0 0 0 1-1V4.903c0-.49-.358-.895-.841-.982-1.694-.306-3.205-1.395-3.205-1.395Z"/></svg>
  