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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4.942 20c.587 3.954-5.472 3.952-4.884 0Zm17.69-12.265A3.994 3.994 0 0 0 18.838 5H16v6h7.716c-.024-.08-1.084-3.265-1.084-3.265ZM16 13v3H1a1 1 0 0 0 0 2h19c2.744-.026 4.3-2.416 4-5Zm-9.942 7c-.587 3.954 5.472 3.952 4.884 0Zm9 0c-.587 3.954 5.472 3.952 4.884 0ZM14 5.5V13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5.5A4.505 4.505 0 0 1 4.5 1h5A4.505 4.505 0 0 1 14 5.5ZM4 5a1 1 0 0 0-2 0v6a1 1 0 0 0 2 0Zm4 0a1 1 0 0 0-2 0v6a1 1 0 0 0 2 0Zm4 0a1 1 0 0 0-2 0v6a1 1 0 0 0 2 0Z"/></svg>
  