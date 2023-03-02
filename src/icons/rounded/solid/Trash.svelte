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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M448 85.333h-66.133C371.66 35.703 328.002.064 277.333 0h-42.667c-50.669.064-94.327 35.703-104.533 85.333H64c-11.782 0-21.333 9.551-21.333 21.333S52.218 128 64 128h21.333v277.333C85.404 464.214 133.119 511.93 192 512h128c58.881-.07 106.596-47.786 106.667-106.667V128H448c11.782 0 21.333-9.551 21.333-21.333S459.782 85.333 448 85.333zM234.667 362.667c0 11.782-9.551 21.333-21.333 21.333-11.783 0-21.334-9.551-21.334-21.333v-128c0-11.782 9.551-21.333 21.333-21.333 11.782 0 21.333 9.551 21.333 21.333v128zm85.333 0c0 11.782-9.551 21.333-21.333 21.333-11.782 0-21.333-9.551-21.333-21.333v-128c0-11.782 9.551-21.333 21.333-21.333 11.782 0 21.333 9.551 21.333 21.333v128zM174.315 85.333c9.074-25.551 33.238-42.634 60.352-42.667h42.667c27.114.033 51.278 17.116 60.352 42.667H174.315z"/></svg>
  