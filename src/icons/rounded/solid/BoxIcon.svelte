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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512.103 512.103"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M405.333.052H106.667C47.756.052 0 47.808 0 106.718c0 35.346 28.654 64 64 64h384c33.692.411 61.813-25.619 64-59.243C514.568 52.562 468.892 2.721 409.979.153a105.864 105.864 0 0 0-4.646-.101zM469.333 213.385H42.667c-11.782 0-21.333 9.551-21.333 21.333v170.667c.07 58.881 47.785 106.596 106.666 106.667h256c58.881-.071 106.596-47.786 106.667-106.667V234.718c0-11.782-9.552-21.333-21.334-21.333zM320 320.052H192c-11.782 0-21.333-9.551-21.333-21.333s9.551-21.333 21.333-21.333h128c11.782 0 21.333 9.551 21.333 21.333s-9.551 21.333-21.333 21.333z"/></svg>
  