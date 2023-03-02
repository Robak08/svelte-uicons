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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 23H5c-2.2 0-4-1.79-4-4v-9c0-1.23.7-2.3 1.84-2.77s2.39-.23 3.27.64l1.47 1.48 7.18-7.18c1.51-1.51 4.14-1.51 5.66 0l1.41 1.41c.76.75 1.17 1.76 1.17 2.83s-.42 2.07-1.17 2.83l-7.17 7.17 1.47 1.47c.87.88 1.12 2.13.64 3.27-.47 1.14-1.54 1.84-2.77 1.84Zm-9-2h9c.62 0 .86-.47.92-.62.06-.14.22-.65-.21-1.09l-2.18-2.18a.996.996 0 0 1 0-1.41l7.88-7.88a1.983 1.983 0 0 0 0-2.82L19 3.59c-.76-.76-2.07-.76-2.83 0l-7.88 7.88a.996.996 0 0 1-1.41 0L4.7 9.29a.976.976 0 0 0-1.08-.21c-.14.06-.62.3-.62.92v9c0 1.1.9 2 2 2Z"/></svg>
  