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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 18.079a12.978 12.978 0 0 0-.757-4.373l-.853-2.388A5.01 5.01 0 0 0 17.681 8h-4.362a5.01 5.01 0 0 0-4.709 3.318l-.853 2.388C6.9 16.223 6.209 20 9 21.5v.5a2 2 0 0 0 4 0h5a2 2 0 0 0 4 0v-.5a3.923 3.923 0 0 0 2-3.421ZM13.319 10h4.362a3.005 3.005 0 0 1 2.825 1.991L21.224 14H9.776l.718-2.009A3.005 3.005 0 0 1 13.319 10Zm6.76 10h-9.158c-2.172-.051-2.081-2.431-1.721-4H11v1a1 1 0 0 0 2 0v-1h5v1a1 1 0 0 0 2 0v-1h1.8c.36 1.569.45 3.95-1.721 4ZM4 9V8H2.2c-.358 1.569-.448 3.95 1.723 4H5a1 1 0 0 1 1 1v1a2 2 0 0 1-4 0v-.5C-.792 11.994-.1 8.225.757 5.706l.853-2.388A5.01 5.01 0 0 1 6.319 0h4.362a5.01 5.01 0 0 1 4.709 3.318l.481 1.346a1 1 0 1 1-1.884.672l-.481-1.345A3.005 3.005 0 0 0 10.681 2H6.319a3.005 3.005 0 0 0-2.825 1.991L2.776 6H8a1 1 0 0 1 0 2H6v1a1 1 0 0 1-2 0Z"/></svg>
  