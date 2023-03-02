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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M422.194 69.944C331.58-22.229 183.401-23.493 91.228 67.121s-93.437 238.793-2.823 330.966a228.137 228.137 0 0 0 3.414 3.402l83.892 77.509c44.849 43.874 116.481 44.054 161.549.404l84.934-78.487c91.392-91.397 91.392-239.575 0-330.971zm-80.381 186.761h-63.828v63.828c0 11.75-9.526 21.276-21.276 21.276s-21.276-9.526-21.276-21.276v-63.828h-63.828c-11.75 0-21.276-9.526-21.276-21.276s9.526-21.276 21.276-21.276h63.828v-63.828c0-11.75 9.526-21.276 21.276-21.276s21.276 9.526 21.276 21.276v63.828h63.828c11.75 0 21.276 9.526 21.276 21.276s-9.526 21.276-21.276 21.276z"/></svg>
  