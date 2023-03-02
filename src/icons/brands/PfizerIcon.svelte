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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.68 19.337 18.412 24C9.428 23.452 0 19.063 0 15.463c0-.267.058-.577.174-1.035l.003-.014 1.091-4.025c.789-2.948 5.52-3.874 12-3.051L12 12c-4.483-.54-8.001-.263-10.027.691 2.409 3.015 10.123 6.103 17.707 6.646z"/><path d="M24 8.537c0 .411-.137.925-.412 1.92l-.857 3.154c-.789 2.948-5.52 3.874-12 3.051L12 12c4.485.54 8.003.265 10.028-.689C19.622 8.295 11.906 5.206 4.32 4.663L5.588 0C14.572.548 24 4.937 24 8.537z"/></svg>
  