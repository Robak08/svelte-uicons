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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-object-exclude {customClass}"><path d="M19 8h-3V5c0-2.76-2.24-5-5-5H5C2.24 0 0 2.24 0 5v6c0 2.76 2.24 5 5 5h3v3c0 2.76 2.24 5 5 5h6c2.76 0 5-2.24 5-5v-6c0-2.76-2.24-5-5-5Zm3 11c0 1.65-1.35 3-3 3h-6c-1.65 0-3-1.35-3-3v-4c0-.55-.45-1-1-1H5c-1.65 0-3-1.35-3-3V5c0-1.65 1.35-3 3-3h6c1.65 0 3 1.35 3 3v4c0 .55.45 1 1 1h4c1.65 0 3 1.35 3 3v6ZM11.87 9.03c.28.48.11 1.09-.36 1.37-.47.27-.86.67-1.13 1.15-.18.33-.52.51-.88.51-.16 0-.33-.04-.48-.13-.48-.27-.66-.88-.39-1.36.44-.79 1.09-1.45 1.87-1.91.48-.28 1.09-.11 1.37.36Zm3.46 4.47c-.44.76-1.07 1.39-1.83 1.83-.16.09-.33.13-.5.13-.35 0-.68-.18-.87-.5-.28-.48-.11-1.09.36-1.37.46-.26.84-.64 1.1-1.1.28-.48.89-.64 1.37-.37.48.28.64.89.37 1.37Z"/></svg>
  