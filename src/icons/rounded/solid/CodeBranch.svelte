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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 4c0-2.206-1.794-4-4-4s-4 1.794-4 4a4.007 4.007 0 0 0 3 3.873V8c0 1.654-1.346 3-3 3H8a4.98 4.98 0 0 0-3 1.002V7.873A4.007 4.007 0 0 0 8 4c0-2.206-1.794-4-4-4S0 1.794 0 4a4.007 4.007 0 0 0 3 3.873v8.253a4.007 4.007 0 0 0-3 3.873c0 2.206 1.794 4 4 4s4-1.794 4-4a4.007 4.007 0 0 0-3-3.873v-.127c0-1.654 1.346-3 3-3h8c2.757 0 5-2.243 5-5v-.127a4.007 4.007 0 0 0 3-3.873Z"/></svg>
  