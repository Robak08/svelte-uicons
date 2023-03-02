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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 18h-4c-2.21 0-4-1.79-4-4v-4c0-2.21 1.79-4 4-4h4c2.21 0 4 1.79 4 4v4c0 2.21-1.79 4-4 4ZM10 8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-4Zm-6.06 2.33c.18-.52-.09-1.09-.61-1.28C2.53 8.77 2 8.01 2 7.16V3.99c0-1.1.9-2 2-2h3.17c.85 0 1.6.54 1.89 1.33.18.52.76.8 1.28.61.52-.18.79-.76.61-1.28A4.013 4.013 0 0 0 7.18-.02H4.01C1.79 0 0 1.79 0 4v3.17a4 4 0 0 0 2.67 3.77c.11.04.22.06.33.06.41 0 .8-.26.94-.67ZM24 20v-3.17a4 4 0 0 0-2.67-3.77c-.52-.19-1.09.09-1.28.61-.18.52.09 1.09.61 1.28.8.28 1.33 1.04 1.33 1.89v3.17c0 1.1-.9 2-2 2h-3.17c-.85 0-1.6-.54-1.89-1.33-.18-.52-.76-.79-1.28-.61-.52.18-.79.76-.61 1.28a4.013 4.013 0 0 0 3.77 2.67h3.17c2.21 0 4-1.79 4-4Z"/></svg>
  