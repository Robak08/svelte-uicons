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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6.261 13.751.866 7.28l1.577-2.629L11 6.79v4.592Zm15.286-9.117L13 6.77v4.612l4.737 2.368 5.384-6.492ZM12 13.118 7.246 15.5 10.36 24h3.232l3.158-8.507Zm6.878 2.39-3 8.08a4.848 4.848 0 0 0 .587-.3l3.192-1.915a5.026 5.026 0 0 0 1.715-1.715l1.915-3.192A5 5 0 0 0 24 13.892v-3.784a5 5 0 0 0-.052-.714ZM11.96 4.969l8.146-2.036a4.724 4.724 0 0 0-.449-.3L16.465.713A5 5 0 0 0 13.892 0h-3.784a5 5 0 0 0-2.573.713L4.343 2.628a5.184 5.184 0 0 0-.47.32ZM5.121 15.507.048 9.422a4.912 4.912 0 0 0-.048.686v3.784a5 5 0 0 0 .713 2.573l1.915 3.192a5.026 5.026 0 0 0 1.715 1.715l3.192 1.915a5.025 5.025 0 0 0 .535.278Z"/></svg>
  