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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10.384 12.468h1.583l-.836-1.35-1.537 2.439h-.7l1.87-2.926a.445.445 0 0 1 .727-.005l1.875 2.931h-.699l-.329-.545h-1.602l-.349-.543m7.263.542V10.47h-.594v2.792c0 .078.032.153.088.208a.299.299 0 0 0 .216.09h2.7l.352-.545h-2.766m-9.818-.458a1.044 1.044 0 0 0 0-2.088H5.231v3.087h.593v-2.54h1.967a.5.5 0 0 1 0 1H6.118l1.772 1.541h.861l-1.19-.999h.267m-6.245.999h1.794a1.544 1.544 0 0 0 0-3.086H1.583a1.544 1.544 0 0 0-.08 3.086h.08m1.754-.544H1.623a.998.998 0 0 1 0-1.997h1.714a.999.999 0 1 1 0 1.997m11.268.544h1.831l.347-.543h-2.137a.999.999 0 1 1-.001-1.997h1.74l.351-.545h-2.131a1.544 1.544 0 0 0-.08 3.086l.08-.001m7.256-.544a1 1 0 0 1-.962-.727h2.536l.349-.544H20.9a.997.997 0 0 1 .962-.727h1.741l.348-.545h-2.129a1.544 1.544 0 0 0 0 3.086h1.831l.347-.544h-2.14"/></svg>
  