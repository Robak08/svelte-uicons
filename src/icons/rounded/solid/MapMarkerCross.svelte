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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M422.194 69.944C331.58-22.229 183.401-23.493 91.228 67.121s-93.437 238.793-2.823 330.966a228.137 228.137 0 0 0 3.414 3.402l83.892 77.509c44.849 43.874 116.481 44.054 161.549.404l84.934-78.487c91.392-91.397 91.392-239.575 0-330.971zm-86.615 214.271c8.452 8.163 8.686 21.633.522 30.084s-21.633 8.686-30.084.522a21.41 21.41 0 0 1-.522-.522l-48.786-48.786-48.787 48.787c-8.452 8.163-21.921 7.93-30.084-.522-7.964-8.245-7.964-21.317 0-29.562l48.786-48.786-48.786-48.786c-8.452-8.163-8.686-21.632-.523-30.084s21.632-8.686 30.084-.523c.177.171.352.346.523.523l48.786 48.786 48.786-48.786c8.163-8.452 21.633-8.686 30.084-.522s8.686 21.633.522 30.084a21.41 21.41 0 0 1-.522.522l-48.786 48.786 48.787 48.785z"/></svg>
  