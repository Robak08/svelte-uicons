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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5.868 15.583a8.938 8.938 0 0 1-2.793-7.761 9 9 0 1 1 14.857 7.941A5.741 5.741 0 0 0 16.338 18H13v-7.184A3 3 0 0 0 15 8a1 1 0 0 0-2 0 1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 2 2.816V18H7.563a6.839 6.839 0 0 0-1.695-2.417zM8 20v.31A3.694 3.694 0 0 0 11.69 24h.62A3.694 3.694 0 0 0 16 20.31V20z"/></svg>
  