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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-up {customClass}"><path d="M12.99 24h-1.98C8.8 24 7 22.22 7 20.03V13H4.94c-1.23 0-2.28-.71-2.75-1.85-.47-1.13-.22-2.38.65-3.25l6.33-6.72c1.57-1.57 4.09-1.57 5.64-.02l6.37 6.77c.85.84 1.1 2.09.63 3.22A2.956 2.956 0 0 1 19.07 13h-2.06v7.03c0 2.19-1.8 3.97-4.01 3.97ZM12 2c-.51 0-1.01.19-1.4.58L4.27 9.3a1 1 0 0 0-.24 1.09c.06.14.3.61.9.61h3.05c.55 0 1 .45 1 1v8.03c0 1.09.9 1.97 2.01 1.97h1.98c1.11 0 2.01-.89 2.01-1.97V12c0-.55.45-1 1-1h3.06c.6 0 .84-.47.9-.61a.96.96 0 0 0-.21-1.07l-6.34-6.75c-.38-.38-.88-.57-1.38-.57Z"/></svg>
  