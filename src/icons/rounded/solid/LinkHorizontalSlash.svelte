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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M3.771 13.38a.998.998 0 0 1-1.407.134A6.482 6.482 0 0 1 .001 8.499c0-.602.083-1.198.245-1.772a.996.996 0 0 1 1.234-.689c.532.15.84.702.69 1.234a4.516 4.516 0 0 0 1.468 4.7 1 1 0 0 1 .134 1.408ZM15 20h-2.5a4.505 4.505 0 0 1-4.01-6.545 1.001 1.001 0 0 0-1.782-.91 6.523 6.523 0 0 0-.709 2.955c0 3.584 2.916 6.5 6.5 6.5h2.5a1 1 0 1 0 0-2Zm8.707 2.293a.999.999 0 1 1-1.414 1.414l-22-22A.999.999 0 1 1 1.707.293l2.232 2.232A6.533 6.533 0 0 1 6.5 2h5C15.084 2 18 4.916 18 8.5a6.523 6.523 0 0 1-2.766 5.32l5.141 5.141C21.401 18.11 22 16.85 22 15.5s-.597-2.613-1.637-3.472a1 1 0 0 1 1.273-1.543 6.482 6.482 0 0 1 2.363 5.015 6.48 6.48 0 0 1-2.206 4.88l1.913 1.913ZM5.52 4.106l5.154 5.154A6.473 6.473 0 0 1 12.5 9a1 1 0 1 1 0 2h-.085l1.374 1.374A4.514 4.514 0 0 0 16 8.499c0-2.481-2.019-4.5-4.5-4.5h-5c-.335 0-.662.036-.98.106Z"/></svg>
  