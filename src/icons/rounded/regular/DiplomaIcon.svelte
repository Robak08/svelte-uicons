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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 12a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm6-3a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1zM8 6h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2zm12 13.444v3.833a.721.721 0 0 1-1.231.51L18 23.019l-.769.768a.721.721 0 0 1-1.231-.51v-3.833A3.987 3.987 0 0 1 18 12a3.939 3.939 0 0 1 1 .142V5a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h5a1 1 0 0 1 0 2H8a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h8a5.006 5.006 0 0 1 5 5v8.382a3.95 3.95 0 0 1-1 6.062zM20 16a2 2 0 1 0-2 2 2 2 0 0 0 2-2z"/></svg>
  