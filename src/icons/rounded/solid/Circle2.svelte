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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm3 18H9.838a1.818 1.818 0 0 1-1.666-1.062 1.84 1.84 0 0 1 .272-1.983c.634-.748 1.569-1.257 2.559-1.797 1.906-1.037 3.058-1.777 2.994-3.29-.043-1.029-.939-1.867-1.997-1.867-1.103 0-2 .897-2 2a1 1 0 1 1-2 0c0-2.206 1.794-4 4-4 2.151 0 3.906 1.662 3.995 3.783.122 2.866-2.281 4.175-4.035 5.131-.673.366-1.315.716-1.742 1.086h4.781a1 1 0 1 1 0 2Z"/></svg>
  