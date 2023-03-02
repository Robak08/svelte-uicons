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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 21a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v16a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v16a1 1 0 0 1-1 1Zm-13.673-.271a3.346 3.346 0 0 1-1.509-.367A3.26 3.26 0 0 1 1 17.404V6.597a3.26 3.26 0 0 1 1.817-2.958 3.305 3.305 0 0 1 3.46.285l7.368 5.402c.86.631 1.354 1.606 1.354 2.674s-.494 2.043-1.355 2.674l-7.368 5.403a3.28 3.28 0 0 1-1.949.651Z"/></svg>
  