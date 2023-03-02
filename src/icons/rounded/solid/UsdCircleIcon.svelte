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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.383 0 0 5.383 0 12c.603 15.898 23.4 15.894 24 0 0-6.617-5.383-12-12-12Zm1 17v1c-.005 1.308-1.995 1.307-2 0v-1h-.268a3.01 3.01 0 0 1-2.598-1.499 1 1 0 1 1 1.73-1.002c.179.31.511.501.867.501h2.268c.997.065 1.443-1.55.356-1.76l-3.041-.507C6.812 12.084 7.566 6.98 10.999 7V6c.006-1.308 1.995-1.307 2 0v1h.268c1.067 0 2.063.575 2.598 1.5a1 1 0 1 1-1.73 1.001 1.004 1.004 0 0 0-.867-.5H11c-.997-.065-1.442 1.55-.356 1.76l3.041.507c3.502.649 2.748 5.753-.685 5.733Z"/></svg>
  