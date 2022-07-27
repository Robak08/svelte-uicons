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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-dice-d4 {customClass}"><path d="M23.287 12.967 15.155 1.543l-.035-.046a4 4 0 0 0-6.275.046L.7 12.98a4 4 0 0 0 1 5.541l7.666 4.733a4.97 4.97 0 0 0 5.254 0l7.73-4.776a3.984 3.984 0 0 0 .937-5.511ZM2.822 16.862a1.987 1.987 0 0 1-.48-2.735l8.1-11.378A2.008 2.008 0 0 1 11 2.268v19.561a2.982 2.982 0 0 1-.576-.276Zm18.42-.043-7.666 4.734a3.01 3.01 0 0 1-.576.276V2.268a1.993 1.993 0 0 1 .544.461l8.1 11.384a1.979 1.979 0 0 1-.402 2.706Z"/></svg>
  