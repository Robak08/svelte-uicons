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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 7h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm-3.118 7.787a.998.998 0 0 0 .171-1.403l-.783-1a.997.997 0 0 0-1.403-.171.998.998 0 0 0-.171 1.403l.783 1a.998.998 0 0 0 1.403.171Zm3.108-3.796a1 1 0 0 0-.38-1.362l-.888-.5a.999.999 0 1 0-.982 1.742l.888.5a1 1 0 0 0 1.362-.38Zm-4.789-1.562.454-.874c.373-.72.441-1.539.191-2.31s-.787-1.394-1.474-1.736l-6.159-3.417C7.267-.959 4.302.343 2.887 1.301a1.993 1.993 0 0 0-.883 1.789A1.978 1.978 0 0 0 3.08 4.74l11.097 5.978a2.97 2.97 0 0 0 1.354.326 3.011 3.011 0 0 0 2.671-1.615ZM6.165 8.674.314 19.665a3.014 3.014 0 0 0 1.303 3.997 2.978 2.978 0 0 0 2.314.19 2.958 2.958 0 0 0 1.742-1.492l5.768-10.844-5.276-2.842Z"/></svg>
  