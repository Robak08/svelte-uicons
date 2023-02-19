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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-train-subway-tunnel {customClass}"><path d="M15 6H9c-2.757 0-5 2.243-5 5v6a4.008 4.008 0 0 0 3.113 3.901l-.966 1.577a1 1 0 1 0 1.705 1.044L9.397 21h5.205l1.545 2.522a.999.999 0 1 0 1.705-1.044l-.966-1.577A4.006 4.006 0 0 0 19.999 17v-6c0-2.757-2.243-5-5-5Zm3 5v2h-5V8h2c1.654 0 3 1.346 3 3ZM9 8h2v5H6v-2c0-1.654 1.346-3 3-3Zm7 11H8c-1.103 0-2-.897-2-2v-2h2v1a1 1 0 1 0 2 0v-1h4v1a1 1 0 1 0 2 0v-1h2v2c0 1.103-.897 2-2 2Zm8-7v11a1 1 0 1 1-2 0V12c0-5.514-4.486-10-10-10S2 6.486 2 12v11a1 1 0 1 1-2 0V12C0 5.383 5.383 0 12 0s12 5.383 12 12Z"/></svg>
  