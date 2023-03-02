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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.833 9a4.988 4.988 0 0 1 4.616 3.077l.321.77a16.158 16.158 0 0 1 .7 2.153H8.526a16.033 16.033 0 0 1 .705-2.154l.32-.769A4.988 4.988 0 0 1 14.167 9Zm6.027 8H21v1a1 1 0 0 1-2 0v-1h-6v1a1 1 0 0 1-2 0v-1H8.14c-.353 1.82-.182 4.173 1.86 4.816V22a2 2 0 0 0 4 0h4a2 2 0 0 0 4 0v-.184c2.043-.644 2.213-2.995 1.86-4.816ZM13.668.5a13.737 13.737 0 0 0-7.336 0A5.9 5.9 0 0 0 2.149 5h15.7A5.9 5.9 0 0 0 13.668.5ZM2 16a3 3 0 0 0 2 2.816V20a1 1 0 0 0 2 0v-1a17.216 17.216 0 0 1 .125-2l.465-2.5c.045-.173.091-.335.137-.5H2Zm12.167-9H2v1a2 2 0 0 0 0 4h5.417l.287-.691A6.983 6.983 0 0 1 14.167 7Z"/></svg>
  