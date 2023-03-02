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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm3.5 8a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0-3ZM7 18c-3.236-.358-1.8-3.862-.458-5.385C7.561 11.524 9.039 15.109 9 16a2 2 0 0 1-2 2Zm1.5-7a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3Zm9.246 6.666a1 1 0 0 1-1.41.081A7.519 7.519 0 0 0 12 16a1 1 0 0 1 0-2 9.454 9.454 0 0 1 5.666 2.254 1 1 0 0 1 .08 1.412Z"/></svg>
  