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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 20c-.212 0-.424-.068-.6-.2l-4-3a.998.998 0 0 1-.4-.8v-3.586L5.121 6.536A3.806 3.806 0 0 1 4 3.829 3.834 3.834 0 0 1 7.828 0h12.344A3.833 3.833 0 0 1 24 3.829a3.806 3.806 0 0 1-1.121 2.707L17 12.415v6.586a1.001 1.001 0 0 1-1 1Zm-5.8-1.6A3.01 3.01 0 0 1 9 16v-2.757L3.707 7.95c-.951-.952-1.505-2.179-1.646-3.497C.842 5.094 0 6.358 0 7.829c0 1.022.398 1.983 1.121 2.707L7 16.414V20a1 1 0 0 0 .4.8l4 3A1.002 1.002 0 0 0 13 23v-2.5l-2.8-2.1Z"/></svg>
  