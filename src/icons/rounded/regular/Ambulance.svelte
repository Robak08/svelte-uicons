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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.052 11.654-1.819-4.091A6 6 0 0 0 15.75 4H14.4l-.66-2.642a1.794 1.794 0 0 0-3.48 0L9.6 4H5a5.006 5.006 0 0 0-5 5v8a2.994 2.994 0 0 0 2.071 2.838A3.4 3.4 0 0 0 2 20.5a3.5 3.5 0 0 0 7 0 3.465 3.465 0 0 0-.041-.5h6.082a3.465 3.465 0 0 0-.041.5 3.5 3.5 0 0 0 7 0 3.4 3.4 0 0 0-.071-.662A2.994 2.994 0 0 0 24 17v-.878a10.93 10.93 0 0 0-.948-4.468Zm-3.646-3.278L20.573 11H17a1 1 0 0 1-1-1V6.018a4 4 0 0 1 3.406 2.358ZM7 20.5a1.5 1.5 0 0 1-3 0 1.418 1.418 0 0 1 .093-.5h2.814a1.418 1.418 0 0 1 .093.5ZM18.5 22a1.5 1.5 0 0 1-1.5-1.5 1.418 1.418 0 0 1 .093-.5h2.814a1.418 1.418 0 0 1 .093.5 1.5 1.5 0 0 1-1.5 1.5Zm3.5-5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a3 3 0 0 1 3-3h9v4a3 3 0 0 0 3 3h4.429A8.916 8.916 0 0 1 22 16.122Zm-11-5a1 1 0 0 1-1 1H9v1a1 1 0 0 1-2 0v-1H6a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Z"/></svg>
  