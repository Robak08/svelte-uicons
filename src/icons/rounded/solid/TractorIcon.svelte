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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 20c-.134 5.276-7.867 5.275-8 0 .134-5.276 7.867-5.275 8 0Zm-10-2a1 1 0 0 1-1 1h-.1a4.961 4.961 0 0 1-.732 1.753l.076.076a1 1 0 0 1-1.414 1.414l-.076-.076A4.961 4.961 0 0 1 7 22.9v.1a1 1 0 0 1-2 0v-.1a4.961 4.961 0 0 1-1.753-.732l-.076.076a1 1 0 0 1-1.414-1.414l.076-.076A4.961 4.961 0 0 1 1.1 19H1a1 1 0 0 1 0-2h.1a4.961 4.961 0 0 1 .732-1.753l-.076-.076a1 1 0 0 1 1.414-1.414l.076.076A4.961 4.961 0 0 1 5 13.1V13a1 1 0 0 1 2 0v.1a4.961 4.961 0 0 1 1.753.732l.076-.076a1 1 0 0 1 1.414 1.414l-.076.076A4.961 4.961 0 0 1 10.9 17h.1a1 1 0 0 1 1 1Zm-5 0a1 1 0 0 0-2 0 1 1 0 0 0 2 0Zm5.023-15.65A4.971 4.971 0 0 0 7.783 0H6a3 3 0 0 0-3 3v3h11.3ZM20 8V6a1 1 0 0 0-2 0v2H3a3 3 0 0 0-3 3v1.721C3.978 7.96 12.165 9.85 13.693 15.828a6.057 6.057 0 0 1 8.514-.1L23.2 14.4A4.025 4.025 0 0 0 20 8Z"/></svg>
  