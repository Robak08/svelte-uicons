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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m12 4.57 4.93-2.46L13.34.32c-.84-.42-1.84-.42-2.68 0L7.08 2.11l4.93 2.46ZM5 17.12l-5-2.49v4.74c0 1.07.57 2.07 1.51 2.6l3.49 2v-6.86ZM19 23.98l3.49-2c.93-.53 1.51-1.53 1.51-2.6v-4.74l-5 2.49v6.86Z"/><path d="M4.89 10.84.88 12.86 6 15.37 9.89 13.41 4.89 10.84z"/><path d="M11 11.73 11 6.23 6 3.74 6 9.16 11 11.73z"/><path d="M18 9.16 18 3.74 13 6.23 13 11.73 18 9.16z"/><path d="M19.11 10.84 14.11 13.41 18 15.37 23.12 12.86 19.11 10.84z"/><path d="M11 15.12 7 17.07 7 23.93 11 21.68 11 15.12z"/><path d="M13 15.12 13 21.67 17 23.91 17 17.05 13 15.12z"/></svg>
  