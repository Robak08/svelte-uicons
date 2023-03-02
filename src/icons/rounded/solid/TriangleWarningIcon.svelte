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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.08 15.33 15 2.57C14.32 1.59 13.19 1 12 1s-2.32.58-3.03 1.6L.93 15.31c-1.02 1.46-1.21 3.21-.5 4.56.7 1.35 2.17 2.12 4.01 2.12h15.12c1.85 0 3.31-.77 4.01-2.12.7-1.35.51-3.09-.49-4.54ZM11 7c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V7Zm1 12c-.83 0-1.5-.67-1.5-1.5S11.17 16 12 16s1.5.67 1.5 1.5S12.83 19 12 19Z"/></svg>
  