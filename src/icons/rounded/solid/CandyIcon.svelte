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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.788 3.725A8.157 8.157 0 0 0 20.294.212a2.327 2.327 0 0 0-3.276 2.134v1.566C9.5-.084-.081 9.51 3.912 17.018H2.346a2.327 2.327 0 0 0-2.134 3.276 8.157 8.157 0 0 0 3.513 3.494A2.326 2.326 0 0 0 7 21.654v-1.573C14.593 24.155 24.07 14.276 20.1 7h1.556a2.326 2.326 0 0 0 2.132-3.275Zm-9.143 11.764c-1.845 1.523-4.345 2.122-6.245.768a1 1 0 0 1 1.2-1.594c.863.65 2.507.345 3.751-.7a1 1 0 0 1 1.294 1.526Z"/></svg>
  