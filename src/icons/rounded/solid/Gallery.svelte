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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 10v4a4.977 4.977 0 0 1-2 3.974V15a7.009 7.009 0 0 0-7-7H5c-.2 0-.4.013-.592.03A5.006 5.006 0 0 1 9 5h6a5.006 5.006 0 0 1 5 5zm-8.406 8.577a2 2 0 0 1-2.83 0l-.476-.48-5.909 5.128A4.956 4.956 0 0 0 5.026 24h6a5.006 5.006 0 0 0 5-5v-4a4.983 4.983 0 0 0-.081-.8zm3.551-6.4-4.962 4.994-.475-.479A1.993 1.993 0 0 0 7 16.578L.922 21.843A4.962 4.962 0 0 1 .026 19v-4a5.006 5.006 0 0 1 5-5h6a5 5 0 0 1 4.119 2.175zM5 14.1a1 1 0 1 0-1 1 1 1 0 0 0 1-1zM19 0h-6a4.994 4.994 0 0 0-4.579 3.029C8.612 3.014 8.805 3 9 3h6a7.009 7.009 0 0 1 7 7v2.974A4.977 4.977 0 0 0 24 9V5a5.006 5.006 0 0 0-5-5z"/></svg>
  