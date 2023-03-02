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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5Zm3 19c0 1.65-1.35 3-3 3H5c-1.65 0-3-1.35-3-3V5c0-1.65 1.35-3 3-3h14c1.65 0 3 1.35 3 3v14ZM5 7.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0ZM14 9V6c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1Zm-3.83 6.34c.39.39.39 1.02 0 1.41l-2 2a.996.996 0 0 1-1.41 0l-2-2a.996.996 0 0 1 0-1.41l2-2a.996.996 0 0 1 1.41 0l2 2Zm9.28 2.19a.96.96 0 0 1-.81 1.47h-4.28a.96.96 0 0 1-.81-1.47l2.14-3.42c.38-.6 1.25-.6 1.63 0l2.14 3.42Z"/></svg>
  