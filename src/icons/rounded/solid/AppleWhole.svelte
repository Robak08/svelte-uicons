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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.923 7.284a1.549 1.549 0 0 0-1.949.152 8.172 8.172 0 0 1-4 1.559A1 1 0 0 1 13 8V6.965a5.978 5.978 0 0 0 5.991-5.648A1.173 1.173 0 0 0 17.683.009c-1.855.077-4.583 1.52-5.151 3.7A8.714 8.714 0 0 0 10.711.271a1 1 0 0 0-1.428 1.4A7.542 7.542 0 0 1 10.949 6H8.5A8.771 8.771 0 0 0 0 15c-.161 5.6 5.644 10.773 10.75 8.385a2.4 2.4 0 0 1 2.605.019A4.444 4.444 0 0 0 15.5 24c8.713-.078 11.564-12.126 4.423-16.716Z"/></svg>
  