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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 14a2 2 0 0 0 0 4 2 2 0 0 0 0-4ZM8 11a4 4 0 0 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 0 1 0-4 2 2 0 0 1 0 4Z"/><path d="M21.589 6.7 13.751.849A4.959 4.959 0 0 0 8.043.96 19.887 19.887 0 0 0 1.1 10.569a1.08 1.08 0 0 0-.032.156 5.083 5.083 0 0 0-.283.669 13.86 13.86 0 0 0 0 9.213A5 5 0 0 0 5.525 24h3.624a2.039 2.039 0 0 0 1.922-1.457 1.509 1.509 0 0 1 2.858 0A2.039 2.039 0 0 0 15.851 24H19a5.006 5.006 0 0 0 5-5v-7.493A6.026 6.026 0 0 0 21.589 6.7ZM9.24 2.562a2.941 2.941 0 0 1 3.359-.08L19.989 8H5.526a4.975 4.975 0 0 0-1.156.135 18.189 18.189 0 0 1 4.87-5.573ZM22 19a3 3 0 0 1-3 3l-3.166-.066A3.511 3.511 0 0 0 9.149 22H5.525a3 3 0 0 1-2.843-2.038 11.869 11.869 0 0 1 0-7.923A3.006 3.006 0 0 1 5.526 10H21.7a4 4 0 0 1 .3 1.507Z"/></svg>
  