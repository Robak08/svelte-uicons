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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 15c0 5.077-7 9-9 9H9c-2 0-9-3.923-9-9a3.032 3.032 0 0 1 3.028-3h17.944A3.034 3.034 0 0 1 24 15ZM19.714 3.02c-.348.048-.727.116-1.115.193.295-.876 1-3.1-.6-3.213a1 1 0 0 0-1 1 3.978 3.978 0 0 1-1.311 3.034 6.983 6.983 0 0 0-2.383 1.355A4.459 4.459 0 0 0 12.244 10h1.342l2.707-2.707a1 1 0 0 1 1.414 1.414L16.414 10h4.251a21.019 21.019 0 0 0 1.316-4.713 2.007 2.007 0 0 0-2.267-2.267ZM10 10c-.134-5.277-7.867-5.273-8 0h8Zm.5-3.932a6.666 6.666 0 0 1 4.055-3.735 1.936 1.936 0 0 0 .432-1.105A4.017 4.017 0 0 0 11.5.034 3.8 3.8 0 0 0 9.5.8 3.938 3.938 0 0 0 7.234.01a3.954 3.954 0 0 0-2.886.877A3.96 3.96 0 0 0 3.1 4.75a6 6 0 0 1 7.4 1.318Z"/></svg>
  