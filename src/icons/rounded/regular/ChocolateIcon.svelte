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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m22.547 5.666-4.192-4.192a4.994 4.994 0 0 0-7.065 0l-9.817 9.817a5.019 5.019 0 0 0 0 7.064l4.192 4.192a5.019 5.019 0 0 0 7.065 0l9.817-9.817a5.018 5.018 0 0 0 0-7.064Zm-7.724-3.657c1.433-.115 2.557 1.33 3.467 2.225l-2.543 2.542-3.467-3.467a3.334 3.334 0 0 1 2.543-1.3Zm2.109 13.51-3.551-3.551L15.747 9.6l3.553 3.553Zm-3.753 3.753-3.551-3.551 2.34-2.34 3.551 3.551ZM7.088 8.5l3.467 3.467-2.34 2.34-3.467-3.465Zm4.88 2.054L8.5 7.088l2.366-2.366 3.467 3.467Zm-9.959 4.269a3.368 3.368 0 0 1 1.326-2.568L6.8 15.721l-2.567 2.568c-.898-.913-2.333-2.029-2.224-3.466Zm5.069 6.311L5.646 19.7l2.569-2.568 3.551 3.551a3.163 3.163 0 0 1-4.688.451Zm14.056-9.817-.423.423-3.551-3.551 2.54-2.542 1.432 1.431a3.011 3.011 0 0 1 .002 4.239Z"/></svg>
  