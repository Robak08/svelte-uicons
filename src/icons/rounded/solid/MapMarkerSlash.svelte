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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.707 22.293-3.732-3.732A10.919 10.919 0 0 0 23 11c0-2.938-1.144-5.701-3.222-7.778A10.931 10.931 0 0 0 12 0C9.16 0 6.49 1.078 4.439 3.025L1.707.293A.999.999 0 1 0 .293 1.707l22 22a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414ZM3.158 7.321a1.002 1.002 0 0 0-1.662.41C.281 11.648 1.325 15.88 4.25 18.804l3.943 3.643c1.023 1.001 2.375 1.552 3.807 1.552s2.784-.551 3.787-1.533l.545-.503a.997.997 0 0 0 .028-1.441L3.158 7.321Z"/></svg>
  