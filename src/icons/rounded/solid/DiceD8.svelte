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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M1.1 10.759a4.943 4.943 0 0 1 1-1.975L9.012 1.2A3.985 3.985 0 0 1 11 0v13.662Zm11.9 2.9 9.888-2.9a5.068 5.068 0 0 0-1.016-2l-6.878-7.553A4 4 0 0 0 13 0Zm-2 2.085L1 12.815a5.079 5.079 0 0 0 1.127 2.433l6.9 7.538A3.994 3.994 0 0 0 11 23.987Zm2 0V24a3.97 3.97 0 0 0 2.01-1.209l6.9-7.582A4.966 4.966 0 0 0 23 12.813Z"/></svg>
  