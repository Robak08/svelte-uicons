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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5 23a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Zm14 0a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Zm-6-5v-4a1 1 0 0 0-.348-.758l-2.287-1.965a.986.986 0 0 1-.348-.744.967.967 0 0 1 .273-.708l1.964-1.563a1.008 1.008 0 0 1 1.418.067l2.6 2.4a1 1 0 0 0 .679.266H20a1 1 0 0 0 0-2h-2.66l-2.277-2.102a2.973 2.973 0 0 0-4.105-.153L8.994 8.3a3 3 0 0 0 .068 4.491L11 14.459V18a1 1 0 0 0 2 0Zm3.5-17A2.5 2.5 0 1 0 19 3.5 2.5 2.5 0 0 0 16.5 1Z"/></svg>
  