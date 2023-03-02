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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.848 16a2 2 0 0 0-1.527.708l-.247.292H9.925l-.246-.292A2 2 0 0 0 8.151 16H2.5A2.5 2.5 0 0 0 0 18.5 2.5 2.5 0 0 0 2.5 21h19a2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5ZM3 14h5.151a3.993 3.993 0 0 1 2.649 1h2.4a4 4 0 0 1 2.647-1H21a4.909 4.909 0 0 1 1 .11V8a5.006 5.006 0 0 0-5-5H7a5.006 5.006 0 0 0-5 5v6.11A4.909 4.909 0 0 1 3 14Z"/></svg>
  