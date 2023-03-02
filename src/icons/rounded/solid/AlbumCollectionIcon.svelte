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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 7.35c-.28 0-.55-.11-.75-.34A2.992 2.992 0 0 0 20 5.99H4c-.86 0-1.68.37-2.25 1.02-.37.41-1 .45-1.41.09-.41-.37-.45-1-.09-1.41A4.993 4.993 0 0 1 4 4h16c1.43 0 2.8.62 3.75 1.69.37.41.33 1.05-.09 1.41a.99.99 0 0 1-.66.25Zm.66-4.25c.41-.37.45-1 .09-1.41A4.993 4.993 0 0 0 20 0H4C2.57 0 1.2.62.25 1.69A.989.989 0 0 0 .34 3.1c.41.36 1.05.33 1.41-.09.57-.65 1.39-1.02 2.25-1.02h16c.86 0 1.68.37 2.25 1.02.2.22.47.34.75.34.23 0 .47-.08.66-.25ZM19 16c0 1.42-2.99 3-7 3s-7-1.58-7-3 2.99-3 7-3 7 1.58 7 3Zm-4.5 0c0-.55-1.12-1-2.5-1s-2.5.45-2.5 1 1.12 1 2.5 1 2.5-.45 2.5-1Zm9.5-3v6c0 2.76-2.24 5-5 5H5c-2.76 0-5-2.24-5-5v-6c0-2.76 2.24-5 5-5h14c2.76 0 5 2.24 5 5Zm-3 3c0-2.85-3.87-5-9-5s-9 2.15-9 5 3.87 5 9 5 9-2.15 9-5Z"/></svg>
  