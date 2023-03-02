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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 17a7.009 7.009 0 0 1-7 7c-6.077.117-9.335-7.638-5-11.889V5c.211-6.609 9.791-6.6 10 0v7.111A7.007 7.007 0 0 1 24 17Zm-4 0a3 3 0 0 0-2-2.828V8a1 1 0 0 0-2 0v6.172A3 3 0 1 0 20 17ZM10 1a1 1 0 0 0-2 0v2.083a5.879 5.879 0 0 0-1.085.291L5.872 1.512a1 1 0 1 0-1.744.976l1.056 1.885a6.067 6.067 0 0 0-.834.839L2.5 4.136a1 1 0 1 0-1 1.728l1.861 1.087A5.928 5.928 0 0 0 3.084 8H1a1 1 0 0 0 0 2h2.085a5.912 5.912 0 0 0 .291 1.084l-1.864 1.044a1 1 0 1 0 .976 1.744l1.887-1.057a6.06 6.06 0 0 0 .837.835L4.136 15.5a1 1 0 0 0 1.728 1l1.087-1.86.049.018c1.414.657 1.809-1.648 2.475-2.6A3.237 3.237 0 0 0 10 10.282Z"/></svg>
  