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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-window-restore {customClass}"><path d="M13 6H5c-2.76 0-5 2.24-5 5v8c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5v-8c0-2.76-2.24-5-5-5ZM5 8h8c1.65 0 3 1.35 3 3H2c0-1.65 1.35-3 3-3Zm8 14H5c-1.65 0-3-1.35-3-3v-6h14v6c0 1.65-1.35 3-3 3ZM24 5v8.54c0 1.78-.96 3.44-2.5 4.33-.16.09-.33.13-.5.13-.35 0-.68-.18-.87-.5-.28-.48-.11-1.09.36-1.37.93-.54 1.5-1.53 1.5-2.6V5c0-1.65-1.35-3-3-3h-8.53c-1.07 0-2.06.58-2.6 1.5-.28.48-.89.64-1.37.36a.998.998 0 0 1-.36-1.37c.89-1.54 2.55-2.5 4.33-2.5H19c2.76 0 5 2.24 5 5Z"/></svg>
  