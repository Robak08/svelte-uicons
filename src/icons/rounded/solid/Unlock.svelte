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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512.077 512.077"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M362.705 170.744H149.372v-21.333c-.016-58.91 47.727-106.68 106.637-106.696 38.815-.011 74.572 21.064 93.363 55.027 5.72 10.303 18.71 14.019 29.013 8.299 10.303-5.72 14.019-18.71 8.299-29.013-39.949-72.153-130.826-98.26-202.98-58.311-47.529 26.315-77.017 76.367-76.999 130.695v30.379c-38.826 16.945-63.944 55.259-64 97.621v128c.071 58.881 47.786 106.596 106.667 106.667h213.333c58.881-.07 106.596-47.786 106.667-106.667v-128c-.071-58.883-47.786-106.598-106.667-106.668zm-85.333 192c0 11.782-9.551 21.333-21.333 21.333s-21.333-9.551-21.333-21.333v-42.667c0-11.782 9.551-21.333 21.333-21.333s21.333 9.551 21.333 21.333v42.667z"/></svg>
  