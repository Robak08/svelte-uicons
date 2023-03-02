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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 9C9.519 9 7.5 6.981 7.5 4.5S9.519 0 12 0s4.5 2.019 4.5 4.5S14.481 9 12 9Zm10.204 2.162c-1.141-.953-2.629-1.348-4.157-1.069l-1.764.432A4 4 0 0 0 13 14.461v7.467a6.91 6.91 0 0 1-2 0v-7.467c0-1.934-1.381-3.589-3.226-3.923l-1.88-.457A4.999 4.999 0 0 0-.001 15v2.792a4.999 4.999 0 0 0 4.105 4.919l6.285 1.143a8.991 8.991 0 0 0 3.218 0l6.285-1.143a4.998 4.998 0 0 0 4.105-4.919V15a4.983 4.983 0 0 0-1.796-3.838Z"/></svg>
  