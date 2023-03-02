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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7 5a5 5 0 0 1 10 0 2 2 0 0 1-2 2h-2.8l1.63-2.445a1 1 0 0 0-1.664-1.11L9.8 7H9a2 2 0 0 1-2-2zm12-3h-.674A6.987 6.987 0 0 1 19 5a4 4 0 0 1-4 4H8.466l.008-.013A3.79 3.79 0 0 1 5 5.215 7.432 7.432 0 0 1 5.747 2H5a5 5 0 0 0-5 5v12a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z"/></svg>
  