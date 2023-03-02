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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 15.5c0 3.584-2.916 6.5-6.5 6.5h-5C8.916 22 6 19.084 6 15.5S8.916 9 12.5 9a1 1 0 1 1 0 2C10.019 11 8 13.019 8 15.5s2.019 4.5 4.5 4.5h5c2.481 0 4.5-2.019 4.5-4.5a4.49 4.49 0 0 0-1.637-3.472 1 1 0 1 1 1.274-1.543A6.482 6.482 0 0 1 24 15.5ZM3.637 11.972A4.488 4.488 0 0 1 2 8.5C2 6.019 4.019 4 6.5 4h5C13.981 4 16 6.019 16 8.5S13.981 13 11.5 13a1 1 0 1 0 0 2c3.584 0 6.5-2.916 6.5-6.5S15.084 2 11.5 2h-5A6.508 6.508 0 0 0 0 8.5c0 1.946.861 3.774 2.363 5.015a1.002 1.002 0 0 0 1.407-.134 1 1 0 0 0-.134-1.408Z"/></svg>
  