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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 18a3.009 3.009 0 0 0-1 .171V18a1 1 0 0 1 1-1 .985.985 0 0 1 .75.339 1 1 0 1 0 1.5-1.322A3 3 0 0 0 11 18v3a3 3 0 0 0 5.544 1.589 3.054 3.054 0 0 0 .121-3.009A2.942 2.942 0 0 0 14 18Zm.849 3.529A1 1 0 1 1 14 20a.954.954 0 0 1 .866.455 1.068 1.068 0 0 1-.017 1.074ZM21 15a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3Zm1 6a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0Zm-10-8H8a1 1 0 0 1 0-2h3V7a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1ZM24 3v3a3 3 0 0 1-3 3h-3a1 1 0 0 1 0-2h2.637A9.991 9.991 0 1 0 8.364 21.318a1 1 0 0 1-.728 1.864A12 12 0 1 1 22 5.374V3a1 1 0 0 1 2 0Z"/></svg>
  