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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.99 15H10.01l.6-1.682A5.009 5.009 0 0 1 15.319 10h2.362a5.009 5.009 0 0 1 4.709 3.319ZM24 19.732A10.914 10.914 0 0 0 23.652 17H21v1a1 1 0 0 1-2 0v-1h-5v1a1 1 0 0 1-2 0v-1H9.348c-.5 1.78-.8 4.669 1.652 4.973v.527a1.5 1.5 0 0 0 3 0V22h5v.5a1.5 1.5 0 0 0 3 0v-.527a2.263 2.263 0 0 0 2-2.241ZM15 4v4.025a7 7 0 0 0-6.273 4.621L7.886 15l-.57 2c-.6 2.279-.493 5.187 1.8 6.41a1.914 1.914 0 0 1 .12.59H1a1 1 0 0 1-1-1V4a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4ZM6 19a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm0-5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm0-5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm0-5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm6 0a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Z"/></svg>
  