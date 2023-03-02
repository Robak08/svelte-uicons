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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.5 1c-1.69 0-3.22.7-4.38 1.83l1.32 1.32c.38.38.59.88.59 1.41s-.21 1.04-.59 1.42l-3.34 3.34c-.12.12-.12.31 0 .43l2.34 2.34c.39.39.6.9.6 1.45s-.21 1.06-.6 1.45l-1.72 1.72c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l1.72-1.72-2.34-2.4c-.9-.9-.9-2.36 0-3.26l3.34-3.34-3.01-3.01c-.93-.93-2.17-1.55-3.49-1.56h-.03C2.92 1 0 4.14 0 8c0 4.61 4.73 9.51 8.7 12.81.96.79 2.13 1.19 3.3 1.19s2.34-.4 3.3-1.19C19.27 17.51 24 12.6 24 8c0-3.86-2.92-7-6.5-7Z"/></svg>
  