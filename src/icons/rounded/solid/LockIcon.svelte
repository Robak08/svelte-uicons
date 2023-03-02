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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M405.333 179.712v-30.379C405.333 66.859 338.475 0 256 0S106.667 66.859 106.667 149.333v30.379c-38.826 16.945-63.944 55.259-64 97.621v128C42.737 464.214 90.452 511.93 149.333 512h213.333c58.881-.07 106.596-47.786 106.667-106.667v-128c-.055-42.362-25.174-80.676-64-97.621zm-128 182.955c0 11.782-9.551 21.333-21.333 21.333-11.782 0-21.333-9.551-21.333-21.333V320c0-11.782 9.551-21.333 21.333-21.333 11.782 0 21.333 9.551 21.333 21.333v42.667zm85.334-192H149.333v-21.333c0-58.91 47.756-106.667 106.667-106.667s106.667 47.756 106.667 106.667v21.333z"/></svg>
  