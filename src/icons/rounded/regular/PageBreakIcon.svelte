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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 18v1c0 2.757-2.243 5-5 5H7c-2.757 0-5-2.243-5-5v-1a1 1 0 1 1 2 0v1c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-1a1 1 0 1 1 2 0ZM2 10V5c0-2.757 2.243-5 5-5h4.515c1.87 0 3.628.729 4.95 2.051l3.484 3.484A6.955 6.955 0 0 1 22 10.485a1 1 0 1 1-2 0c0-.165-.032-.323-.047-.485H15c-1.654 0-3-1.346-3-3V2.047c-.162-.016-.32-.047-.485-.047H7C5.346 2 4 3.346 4 5v5a1 1 0 1 1-2 0Zm13.051-6.535A4.99 4.99 0 0 0 14 2.684V7a1 1 0 0 0 1 1h4.316a4.99 4.99 0 0 0-.781-1.051l-3.484-3.484ZM6 15a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2h4Zm4-2a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Zm12 0h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2Z"/></svg>
  