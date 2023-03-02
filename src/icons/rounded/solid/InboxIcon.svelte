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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M448 213.333h-64c-23.564 0-42.667 19.103-42.667 42.667s-19.103 42.667-42.667 42.667h-85.333c-23.564 0-42.667-19.103-42.667-42.667S151.564 213.333 128 213.333H64c-35.346 0-64 28.654-64 64v85.333c.071 58.881 47.786 106.596 106.667 106.667h298.667c58.88-.07 106.596-47.785 106.666-106.666v-85.333c0-35.347-28.654-64.001-64-64.001zM64 170.667h384c11.782 0 21.333-9.551 21.333-21.333 0-11.782-9.551-21.333-21.333-21.333H64c-11.782 0-21.333 9.551-21.333 21.333 0 11.781 9.551 21.333 21.333 21.333zM64 85.333h384c11.782 0 21.333-9.551 21.333-21.333S459.782 42.667 448 42.667H64c-11.782 0-21.333 9.551-21.333 21.333S52.218 85.333 64 85.333z"/></svg>
  