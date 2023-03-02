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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 24a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1Zm-3-3v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0Zm-4 2v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0Zm12-2v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0ZM17.918 5.133a1.033 1.033 0 0 1-.687-.557C13.125-3.731.494.19 2.146 9.528a.985.985 0 0 1-.315.873 5.552 5.552 0 0 0 .218 8.372.593.593 0 0 0 .951-.584 3.056 3.056 0 0 1 4.116-2.969 2.994 2.994 0 0 1 5.768 0 2.972 2.972 0 0 1 2.232 0 3 3 0 0 1 5.884.9v1.215a.521.521 0 0 0 .886.371c3.952-3.875 2.16-11.483-3.968-12.573Z"/></svg>
  