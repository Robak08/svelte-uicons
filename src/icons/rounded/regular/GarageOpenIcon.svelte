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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m21.8 5.579-7-4.724a4.981 4.981 0 0 0-5.6 0l-7 4.724A4.993 4.993 0 0 0 0 9.724V19a5.006 5.006 0 0 0 5 5 1 1 0 0 0 1-1v-8h12v8a1 1 0 0 0 1 1 5.006 5.006 0 0 0 5-5V9.724a5 5 0 0 0-2.2-4.145ZM6 13a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Zm16 6a3.006 3.006 0 0 1-2 2.829V13a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v8.829A3.006 3.006 0 0 1 2 19V9.724a3 3 0 0 1 1.322-2.487l7-4.723a2.979 2.979 0 0 1 3.356 0l7 4.723A3 3 0 0 1 22 9.724Z"/></svg>
  