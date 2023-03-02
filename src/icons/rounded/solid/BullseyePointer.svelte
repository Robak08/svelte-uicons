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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M.293 23.707a.999.999 0 0 0 1.414 0l1.077-1.077 1.726-1.726 2.786 2.786a1.002 1.002 0 0 0 1.647-.365l3.263-8.969a1.981 1.981 0 0 0-.466-2.097 1.975 1.975 0 0 0-2.096-.464L.676 15.057a1 1 0 0 0-.365 1.647l2.786 2.786-1.726 1.726-1.077 1.077a.999.999 0 0 0 0 1.414Zm14.699-8.703a1 1 0 0 1 .54-1.308C19.529 12.056 18.322 5.989 14 6a3.99 3.99 0 0 0-3.699 2.474.999.999 0 1 1-1.848-.764A5.982 5.982 0 0 1 14 4c6.511.034 8.3 9.03 2.299 11.544a1 1 0 0 1-1.307-.54ZM13 19a1 1 0 0 1 1-1c10.588-.376 10.586-15.626 0-16-4.411 0-8 3.589-8 8a1 1 0 1 1-2 0C4 4.486 8.486 0 14 0c13.248.503 13.245 19.499 0 20a1 1 0 0 1-1-1Z"/></svg>
  