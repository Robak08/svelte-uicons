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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.581 2.14 12.316.051a1 1 0 0 0-.632 0L5.418 2.14A4.993 4.993 0 0 0 2 6.883V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 0 0 .812 0C12.8 23.74 22 19.563 22 12V6.883a4.993 4.993 0 0 0-3.419-4.743ZM12 19a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm1.928-6.443A1.987 1.987 0 0 0 13 14a1 1 0 0 1-2 0 3.953 3.953 0 0 1 1.963-3.195 1.994 1.994 0 0 0 1-2.124 2.024 2.024 0 0 0-1.6-1.6A2 2 0 0 0 10 9.052a1 1 0 0 1-2 0 4 4 0 0 1 1.429-3.065 4 4 0 1 1 4.5 6.57Z"/></svg>
  