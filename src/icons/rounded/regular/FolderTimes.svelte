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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.987 1.975h-6.528c-.154 0-.31-.037-.447-.105L8.856.291a3.015 3.015 0 0 0-1.342-.316H4.987c-2.757 0-5 2.243-5 5v12c0 1.779.958 3.438 2.499 4.33a.999.999 0 1 0 1.002-1.73 3.013 3.013 0 0 1-1.501-2.6v-9h20v9a3.016 3.016 0 0 1-1.501 2.6 1 1 0 1 0 1.002 1.73 5.019 5.019 0 0 0 2.499-4.33v-10c0-2.757-2.243-5-5-5Zm-17 3c0-1.654 1.346-3 3-3h2.527c.154 0 .31.036.447.105l3.156 1.579c.415.206.879.315 1.341.315h6.528c1.302 0 2.402.839 2.816 2H1.987v-1Zm9.991 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7Zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Zm1.707-4.707a.999.999 0 1 1-1.414 1.414l-1-1a.997.997 0 0 1-.293-.707v-2a1 1 0 1 1 2 0v1.586l.707.707Z"/></svg>
  