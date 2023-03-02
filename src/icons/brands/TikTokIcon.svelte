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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.465 9.866a9.809 9.809 0 0 1-5.74-1.846v8.385c0 4.188-3.407 7.594-7.594 7.594a7.548 7.548 0 0 1-4.352-1.376 7.59 7.59 0 0 1-3.242-6.218c0-4.188 3.407-7.595 7.595-7.595.348 0 .688.029 1.023.074v4.212a3.426 3.426 0 0 0-1.023-.16 3.472 3.472 0 0 0-3.468 3.469 3.47 3.47 0 0 0 3.469 3.468 3.47 3.47 0 0 0 3.462-3.338L12.598 0h4.126a5.752 5.752 0 0 0 5.74 5.741v4.125z"/></svg>
  