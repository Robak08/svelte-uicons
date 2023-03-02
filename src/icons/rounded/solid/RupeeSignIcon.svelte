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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 7.5C15 3.364 11.636 0 7.5 0H5C2.243 0 0 2.243 0 5v18c.006 1.308 1.995 1.307 2 0v-8h5.412l4.714 8.485a1 1 0 0 0 1.748-.97l-4.335-7.804C12.686 13.82 15 10.928 15 7.5ZM7.5 13H2V5c0-1.654 1.346-3 3-3h2.5c7.27.232 7.265 10.77 0 11ZM24 21c0 1.654-1.346 3-3 3h-2.268a3.01 3.01 0 0 1-2.598-1.499 1 1 0 1 1 1.73-1.002c.179.31.511.501.867.501h2.268c.997.065 1.443-1.548.356-1.76l-3.041-.507c-3.501-.651-2.748-5.753.685-5.733h2.268a3.01 3.01 0 0 1 2.598 1.499 1 1 0 1 1-1.73 1.002 1.003 1.003 0 0 0-.867-.501H19c-.998-.065-1.443 1.55-.355 1.761l3.04.507A2.76 2.76 0 0 1 24 21Z"/></svg>
  