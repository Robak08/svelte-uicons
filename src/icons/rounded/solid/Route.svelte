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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8.535 14.464C7.591 13.52 6.335 13 5 13s-2.591.52-3.536 1.464c-1.95 1.949-1.95 5.122.026 7.096l1.99 1.849c.428.398.976.596 1.524.596s1.1-.2 1.528-.6l2.001-1.871c.945-.944 1.465-2.2 1.465-3.535s-.52-2.591-1.465-3.536Zm8.945-4.055c.428.397.976.596 1.524.596s1.101-.2 1.529-.6l2.001-1.871a5.005 5.005 0 0 0 0-7.071c-.945-.944-2.2-1.464-3.535-1.464s-2.591.52-3.536 1.464c-1.95 1.949-1.95 5.122.026 7.096l1.99 1.849Zm6.52 9.59c0 2.206-1.794 4-4 4h-9a1 1 0 0 1 0-2h9c1.103 0 2-.897 2-2s-.897-2-2-2h-5c-2.206 0-4-1.794-4-4a4.008 4.008 0 0 1 2.667-3.772 1 1 0 1 1 .666 1.886A2.004 2.004 0 0 0 13 13.999c0 1.103.897 2 2 2h5c2.206 0 4 1.794 4 4Z"/></svg>
  