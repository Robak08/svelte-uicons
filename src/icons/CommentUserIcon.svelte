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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-comment-user {customClass}"><path d="M12 10a3 3 0 0 1 0-6 3 3 0 0 1 0 6Zm-3.032 5.249a3.183 3.183 0 0 1 6.063 0 1 1 0 0 0 1.938-.5c-1.311-4.947-8.63-4.945-9.937 0a1 1 0 1 0 1.936.5Zm3.041 8.416a2.01 2.01 0 0 1-1.338-.509L6.923 20H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-2.853L13.3 23.18a1.94 1.94 0 0 1-1.291.485ZM4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3.289a1 1 0 0 1 .644.235l4.046 3.41 4.172-3.416a1 1 0 0 1 .637-.229H20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/></svg>
  