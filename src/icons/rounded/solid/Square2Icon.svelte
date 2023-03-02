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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm-4 18H9.838a1.818 1.818 0 0 1-1.666-1.062 1.841 1.841 0 0 1 .272-1.983c.634-.749 1.569-1.258 2.559-1.797 1.905-1.038 3.057-1.778 2.994-3.29C13.953 8.838 13.058 8 12 8c-1.103 0-2 .897-2 2a1 1 0 0 1-2 0c0-2.206 1.794-4 4-4 2.15 0 3.905 1.662 3.995 3.783.121 2.867-2.281 4.175-4.035 5.131-.673.367-1.315.717-1.742 1.086h4.781a1 1 0 1 1 0 2Z"/></svg>
  