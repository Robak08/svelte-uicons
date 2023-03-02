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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7.942 20c.034.162.058.328.058.5a2.5 2.5 0 1 1-5 0c0-.172.024-.338.058-.5h4.884Zm8.115 0a2.424 2.424 0 0 0-.058.5 2.5 2.5 0 1 0 5 0c0-.172-.024-.338-.058-.5h-4.885Zm7.942-5v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1a4 4 0 0 1 4-4 1 1 0 0 0 0-2c-.591 0-1.16.089-1.699.249l1.525-4.021A5 5 0 0 1 8.501 2h3.835c1.635 0 3.167.799 4.102 2.141L19.825 9H18a1 1 0 0 0 0 2h2a4 4 0 0 1 4 4ZM13.808 9.846A1.603 1.603 0 0 0 12.395 9h-2.067l1.523-2.476a.998.998 0 0 0-.328-1.375.997.997 0 0 0-1.375.328S8.094 8.836 8.069 8.918c-.147.487-.055 1.021.249 1.43s.788.653 1.297.653h2.068l-1.533 2.473a1 1 0 0 0 1.7 1.054l1.881-3.037a1.602 1.602 0 0 0 .077-1.645Z"/></svg>
  