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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 17H7.329a2.978 2.978 0 0 1-2.122-.879L.052 10.966C.023 11.308 0 11.651 0 12a12.009 12.009 0 0 0 11 11.949V18a1 1 0 0 0-1-1ZM20.436 3.478l-1.79 1.79A2.516 2.516 0 0 1 16.879 6H15.5a.5.5 0 0 0-.5.5v1a2.5 2.5 0 0 1-2.5 2.5.5.5 0 0 0-.5.5v.5a1 1 0 0 0 1 1h3a3 3 0 0 1 3 3v.962a.5.5 0 0 0 .146.353l2.625 2.626a11.949 11.949 0 0 0-1.335-15.463Z"/><path d="M17 15.962V15a1 1 0 0 0-1-1h-3a3 3 0 0 1-3-3v-.5A2.5 2.5 0 0 1 12.5 8a.5.5 0 0 0 .5-.5v-1A2.5 2.5 0 0 1 15.5 4h1.379a.507.507 0 0 0 .353-.146l1.661-1.661A11.974 11.974 0 0 0 .5 8.587l6.12 6.12a1 1 0 0 0 .709.293H10a3 3 0 0 1 3 3v5.949a11.962 11.962 0 0 0 7.483-3.469l-2.751-2.751A2.516 2.516 0 0 1 17 15.962Z"/></svg>
  