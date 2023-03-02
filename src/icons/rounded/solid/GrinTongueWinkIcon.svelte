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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 16h2v.6c-.062 1.839-1.939 1.837-2 0Zm13-4a12.013 12.013 0 0 1-12 12C-3.9 23.4-3.893.6 12 0a12.013 12.013 0 0 1 12 12ZM7 11h3a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Zm10 4a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h1v.6c.133 4.495 5.87 4.49 6 0V16h1a1 1 0 0 0 1-1Zm1-5a2 2 0 0 0-4 0c0 1 .895 1 2 1s2 0 2-1Z"/></svg>
  