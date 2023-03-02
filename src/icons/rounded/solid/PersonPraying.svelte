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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 2.468a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm8.663 7.28-3.207 2.843a.775.775 0 0 1-.112.086 1.935 1.935 0 0 1-2.66-.5l-1.261-1.813-3.385 7.673 4.355 3.272c.52.383.732 1.053.53 1.666a1.486 1.486 0 0 1-1.415 1.024H4.983a1 1 0 0 1 0-2h7.976l-5.51-4.062c-1.458-1.187-1.791-2.477-1.057-3.974l2.649-6.169a3.154 3.154 0 0 1 2.019-1.69 3.04 3.04 0 0 1 2.074.184c.928.34 1.736 1.055 2.223 1.992l1.918 2.685 3.062-2.714a.999.999 0 1 1 1.326 1.496Z"/></svg>
  