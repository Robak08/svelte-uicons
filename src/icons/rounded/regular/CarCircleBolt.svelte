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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8 11H2.792l2.191-6.025A3.008 3.008 0 0 1 7.802 3h8.396c1.257 0 2.39.793 2.819 1.975l1.589 4.367a1 1 0 1 0 1.879-.684l-1.589-4.367A5.013 5.013 0 0 0 16.198.999H7.802A5.016 5.016 0 0 0 3.103 4.29L.402 11.718A6.657 6.657 0 0 0 0 14v1c0 1.632.786 3.084 2 3.998V21c0 1.654 1.346 3 3 3s3-1.346 3-3v-2a1 1 0 0 0-1-1H5c-1.654 0-3-1.346-3-3v-1c0-.338.036-.672.108-1H4v1a1 1 0 0 0 2 0v-1h2a1 1 0 0 0 0-2Zm-4 8.899c.323.066.658.101 1 .101h1v1c0 .551-.449 1-1 1s-1-.449-1-1v-1.101ZM17 10c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7Zm-5 7c0-2.5 1.845-4.578 4.245-4.943 0 0-2.154 3.789-2.175 3.861a1.623 1.623 0 0 0 .249 1.43c.304.409.788.652 1.297.652h2.095l-2.166 3.783A5.009 5.009 0 0 1 12.001 17Zm5.757 4.943 1.975-3.453A1.604 1.604 0 0 0 18.395 16h-2.1l2.161-3.783A5.009 5.009 0 0 1 22 17a5.009 5.009 0 0 1-4.243 4.943Z"/></svg>
  