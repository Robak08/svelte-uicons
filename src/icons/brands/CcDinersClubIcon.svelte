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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.64 6.364V17.6a6.026 6.026 0 0 0 3.866-5.617 6.027 6.027 0 0 0-3.866-5.619zm-8.173 5.618a6.027 6.027 0 0 0 3.863 5.615V6.365a6.031 6.031 0 0 0-3.863 5.617zm8.173-5.618V17.6a6.026 6.026 0 0 0 3.866-5.617 6.027 6.027 0 0 0-3.866-5.619zm-8.173 5.618a6.027 6.027 0 0 0 3.863 5.615V6.365a6.031 6.031 0 0 0-3.863 5.617zm8.686-10.355h-2.69C4.724 1.626 0 5.905 0 12.09c0 5.66 4.724 10.31 10.463 10.283h2.69C18.824 22.373 24 17.748 24 12.09c0-6.188-5.176-10.464-10.847-10.463zm-2.667 19.849a9.495 9.495 0 0 1-9.495-9.494 9.497 9.497 0 0 1 9.495-9.497 9.498 9.498 0 0 1 9.496 9.497c-.001 5.244-4.251 9.493-9.496 9.494zM12.64 6.364V17.6a6.026 6.026 0 0 0 3.866-5.617 6.027 6.027 0 0 0-3.866-5.619zm-8.173 5.618a6.027 6.027 0 0 0 3.863 5.615V6.365a6.031 6.031 0 0 0-3.863 5.617z"/></svg>
  