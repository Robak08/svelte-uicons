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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.22 5.743-3.011-4.068A4.005 4.005 0 0 0 16.955 0h-9.91A4 4 0 0 0 3.8 1.656L.735 5.753a3.993 3.993 0 0 0 .123 4.784L9.65 22.865A2.985 2.985 0 0 0 12 24a3.006 3.006 0 0 0 2.378-1.175L23.1 10.634a4 4 0 0 0 .12-4.891zm-4.628-2.892 3.018 4.078c.016.022.02.048.036.071h-4.892l-1.428-5h1.629a2.012 2.012 0 0 1 1.637.851zM12 19.118 9.3 9h5.4zM9.326 7l1.428-5h2.492l1.428 5zM5.417 2.837A2.007 2.007 0 0 1 7.045 2h1.629L7.246 7H2.318c.014-.022.018-.049.034-.07zM2.448 9.325A1.9 1.9 0 0 1 2.263 9h4.969l2.994 11.23zM13.771 20.24l3-11.24h4.986a2.1 2.1 0 0 1-.243.421z"/></svg>
  