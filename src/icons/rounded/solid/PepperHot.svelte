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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 11c.323 6.893-5.045 12.9-11.775 13C5.13 23.987-.187 18.489 0 11a2 2 0 0 1 4 0c.905 3.936 3.923 4 4.515 4 2 0 3.466-1.662 3.485-3.952a6.143 6.143 0 0 1 1.234-3.615 4.982 4.982 0 0 0 9.548-.052A6 6 0 0 1 24 11ZM9 6.692A1.019 1.019 0 1 0 11 7a4.47 4.47 0 0 0-1.293-3.429A2.4 2.4 0 0 1 9 1.864V1a1 1 0 0 0-2 0v.864a4.386 4.386 0 0 0 1.293 3.122A2.394 2.394 0 0 1 9 6.692ZM14 2c1.169 0 2.684.351 2.954 3.1a5.81 5.81 0 0 0-1.935.713c-.159 4.216 6.139 4.2 5.961-.011a6.064 6.064 0 0 0-2.015-.7C18.622.688 15.753 0 14 0a1 1 0 0 0 0 2ZM4.294 6.293A2.434 2.434 0 0 1 5 8a1 1 0 0 0 1 1c2-.29.622-3.264-.293-4.121A2.463 2.463 0 0 1 5 2.994a1 1 0 0 0-2 .012 4.423 4.423 0 0 0 1.294 3.287ZM12.225 24Z"/></svg>
  