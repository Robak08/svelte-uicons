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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.55 23.02c-1.07 0-2.07-.42-2.83-1.17l-7.17-7.17-1.47 1.47c-.88.87-2.13 1.11-3.27.64-1.14-.48-1.85-1.54-1.84-2.77v-9c0-2.2 1.79-3.99 4-4h8.99c1.23 0 2.29.71 2.77 1.84.48 1.14.23 2.39-.64 3.27L14.61 7.6l7.17 7.17a4.008 4.008 0 0 1 0 5.66l-1.41 1.41c-.76.76-1.76 1.17-2.83 1.17Zm-10-10.76c.26 0 .51.1.71.29l7.88 7.88c.76.76 2.07.76 2.83 0l1.41-1.41c.78-.78.78-2.05 0-2.83L12.5 8.31c-.19-.19-.29-.44-.29-.71s.11-.52.29-.71l2.18-2.18c.43-.44.27-.94.21-1.09s-.3-.61-.92-.61H4.96c-1.1 0-2 .9-2 2v9.01c0 .62.47.86.61.92.14.06.65.22 1.09-.21l2.18-2.18c.2-.2.45-.29.71-.29Z"/></svg>
  