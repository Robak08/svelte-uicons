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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M3.771 13.38a.998.998 0 0 1-1.407.134A6.482 6.482 0 0 1 .001 8.499 6.506 6.506 0 0 1 6.5 2h5C15.084 2 18 4.916 18 8.5S15.084 15 11.5 15a1 1 0 1 1 0-2c2.481 0 4.5-2.019 4.5-4.5S13.981 4 11.5 4h-5A4.505 4.505 0 0 0 2 8.5a4.49 4.49 0 0 0 1.637 3.472 1 1 0 0 1 .134 1.408Zm17.866-2.895a1 1 0 1 0-1.274 1.543A4.488 4.488 0 0 1 22 15.5c0 2.481-2.019 4.5-4.5 4.5h-5C10.019 20 8 17.981 8 15.5s2.019-4.5 4.5-4.5a1 1 0 1 0 0-2C8.916 9 6 11.916 6 15.5S8.916 22 12.5 22h5c3.584 0 6.5-2.916 6.5-6.5a6.485 6.485 0 0 0-2.363-5.015Z"/></svg>
  