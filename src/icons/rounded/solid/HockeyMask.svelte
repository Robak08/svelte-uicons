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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.935 0 1 4.686 1 10.444 1 15.9 5.619 24 12 24s11-8.1 11-13.556C23 4.686 18.065 0 12 0Zm2 4a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm-4 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm-5 7a2.292 2.292 0 0 1 2.5-2 2.292 2.292 0 0 1 2.5 2 2.292 2.292 0 0 1-2.5 2A2.292 2.292 0 0 1 5 11Zm5 9a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm0-3a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm2-8a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm2 11a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm0-3a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm2.5-4a2.292 2.292 0 0 1-2.5-2 2.292 2.292 0 0 1 2.5-2 2.292 2.292 0 0 1 2.5 2 2.292 2.292 0 0 1-2.5 2Z"/></svg>
  