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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 13h-1a7.946 7.946 0 0 1-3.204-.67A9.976 9.976 0 0 0 21 5c0-2.757-2.243-5-5-5s-5 2.243-5 5a9.974 9.974 0 0 0 3.204 7.33A7.946 7.946 0 0 1 11 13c-4.411 0-8-3.589-8-8a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0V10.974c.57.761 1.244 1.437 2.003 2.009L5 13v10a1 1 0 1 0 2 0v-8.841a9.905 9.905 0 0 0 2 .639V23a1 1 0 1 0 2 0v-8c.687 0 1.351-.09 2-.223V23a1 1 0 1 0 2 0v-8.845c.342-.15.679-.311 1-.497.321.186.658.347 1 .497V23a1 1 0 1 0 2 0v-8.223A9.922 9.922 0 0 0 21 15v8a1 1 0 1 0 2 0v-9a1 1 0 0 0-1-1Zm-6-1.759A7.992 7.992 0 0 1 13 5c0-1.654 1.346-3 3-3s3 1.346 3 3a7.99 7.99 0 0 1-3 6.241Z"/></svg>
  