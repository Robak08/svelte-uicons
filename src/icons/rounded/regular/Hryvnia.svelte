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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6.885 15H21a1 1 0 1 0 0-2h-8.819l5.333-2H21a1 1 0 1 0 0-2h-.885A5.144 5.144 0 0 0 21 6.123c0-1.878-.998-3.594-2.605-4.479A13.32 13.32 0 0 0 12-.001C6.647 0 3.428 3.158 3.293 3.293A1 1 0 0 0 4.706 4.71C4.733 4.683 7.506 2 12.001 2c2.389 0 4.272.76 5.431 1.396.968.533 1.569 1.578 1.569 2.727A3.165 3.165 0 0 1 17.133 9H3a1 1 0 1 0 0 2h8.817l-5.333 2H3a1 1 0 1 0 0 2h.927A5.306 5.306 0 0 0 3 17.986c0 2.012 1.159 3.88 2.952 4.76C7.647 23.578 9.682 24 12 24c5.272 0 9.426-3.069 9.6-3.2a1 1 0 0 0-1.198-1.6c-.038.028-3.812 2.801-8.401 2.801-2.01 0-3.748-.353-5.167-1.049a3.318 3.318 0 0 1-1.833-2.965c0-1.276.747-2.442 1.885-2.986Z"/></svg>
  