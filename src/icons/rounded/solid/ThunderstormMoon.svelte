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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 6a1 1 0 0 1 2 0 1 1 0 0 1-2 0Zm-5 3.1V9a6.421 6.421 0 0 1 2.6-5.13 2.124 2.124 0 0 0-.947-3.595A10 10 0 0 0 7.778.117 9.351 9.351 0 0 0 .051 8.272a9.3 9.3 0 0 0 3.867 8.544l.022.016a9.029 9.029 0 0 0 1 .578A5.434 5.434 0 0 1 6 16.253a8.221 8.221 0 0 1 .229-2.168A8.01 8.01 0 0 1 10 9.1Zm12 .9a1 1 0 0 0 0-2 1 1 0 0 0 0 2Zm-2-6a1 1 0 0 0 0-2 1 1 0 0 0 0 2Zm.306 10.172s-.613-.14-.744-.425c-2.438-5.675-10.274-4.372-11.387.812-.426.955.274 2.321-.591 3.015a3.5 3.5 0 0 0 1.162 6.347 3.689 3.689 0 0 0 .683.079h4.385l1.87-3h-2.069a1.614 1.614 0 0 1-1.546-2.082 1.014 1.014 0 0 1 .106-.235l1.973-3.207a1 1 0 0 1 1.7 1.048L14.328 19H16.4a1.6 1.6 0 0 1 1.336 2.489L16.176 24h3.214a4.066 4.066 0 0 0 1.9-.42 5.172 5.172 0 0 0 2.577-3.408 5.013 5.013 0 0 0-3.561-6Z"/></svg>
  